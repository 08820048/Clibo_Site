const SIGNATURE_TOLERANCE_SECONDS = 5 * 60;
const DEDUPE_TTL_SECONDS = 7 * 24 * 60 * 60;

export async function onRequestPost({ request, env, waitUntil }) {
  const rawBody = await request.text();
  const eventId = request.headers.get("webhook-id") || "";
  const timestamp = request.headers.get("webhook-timestamp") || "";
  const signature = request.headers.get("webhook-signature") || "";
  const secret = env.DODO_WEBHOOK_SECRET || env.DODO_PAYMENTS_WEBHOOK_KEY;

  if (!secret) {
    return jsonResponse({ ok: false, error: "Missing Dodo webhook secret" }, 500);
  }

  if (!eventId || !timestamp || !signature) {
    return jsonResponse({ ok: false, error: "Missing Standard Webhooks headers" }, 400);
  }

  const verified = await verifyStandardWebhook({
    id: eventId,
    timestamp,
    signature,
    body: rawBody,
    secret,
  });

  if (!verified) {
    return jsonResponse({ ok: false, error: "Invalid webhook signature" }, 401);
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload" }, 400);
  }

  const dedupeKey = `dodo:${eventId}`;
  if (env.DODO_WEBHOOK_DEDUPE_KV) {
    const seen = await env.DODO_WEBHOOK_DEDUPE_KV.get(dedupeKey);
    if (seen) {
      return jsonResponse({ ok: true, duplicate: true });
    }
  }

  const feishuUrl = env.FEISHU_BOT_WEBHOOK_URL;
  if (!feishuUrl) {
    return jsonResponse({ ok: false, error: "Missing Feishu bot webhook URL" }, 500);
  }

  const message = await buildFeishuMessage(payload, eventId, env.FEISHU_BOT_SECRET);
  const feishuResponse = await fetch(feishuUrl, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(message),
  });

  if (!feishuResponse.ok) {
    const errorText = await feishuResponse.text();
    return jsonResponse(
      {
        ok: false,
        error: "Feishu webhook failed",
        status: feishuResponse.status,
        detail: errorText.slice(0, 500),
      },
      502
    );
  }

  if (env.DODO_WEBHOOK_DEDUPE_KV) {
    waitUntil(
      env.DODO_WEBHOOK_DEDUPE_KV.put(dedupeKey, new Date().toISOString(), {
        expirationTtl: DEDUPE_TTL_SECONDS,
      })
    );
  }

  return jsonResponse({ ok: true });
}

export function onRequestGet() {
  return methodNotAllowed();
}

export function onRequestPut() {
  return methodNotAllowed();
}

export function onRequestPatch() {
  return methodNotAllowed();
}

export function onRequestDelete() {
  return methodNotAllowed();
}

export function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      allow: "POST",
    },
  });
}

function methodNotAllowed() {
  return jsonResponse({ ok: false, error: "Method not allowed" }, 405, {
    allow: "POST",
  });
}

async function verifyStandardWebhook({ id, timestamp, signature, body, secret }) {
  const timestampNumber = Number(timestamp);
  if (!Number.isFinite(timestampNumber)) return false;

  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestampNumber) > SIGNATURE_TOLERANCE_SECONDS) {
    return false;
  }

  const signedPayload = `${id}.${timestamp}.${body}`;
  const expected = await hmacSha256Base64(secretToBytes(secret), signedPayload);
  const candidates = parseSignatureHeader(signature);

  return candidates.some((candidate) => timingSafeEqual(candidate, expected));
}

function parseSignatureHeader(header) {
  return header
    .split(" ")
    .flatMap((part) => part.split(","))
    .map((part) => part.trim())
    .filter((part) => part && part !== "v1");
}

function secretToBytes(secret) {
  if (secret.startsWith("whsec_")) {
    return base64ToBytes(secret.slice("whsec_".length));
  }
  return new TextEncoder().encode(secret);
}

async function hmacSha256Base64(keyBytes, value) {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(value));
  return bytesToBase64(new Uint8Array(signature));
}

function timingSafeEqual(a, b) {
  const left = new TextEncoder().encode(a);
  const right = new TextEncoder().encode(b);
  if (left.length !== right.length) return false;

  let diff = 0;
  for (let i = 0; i < left.length; i += 1) {
    diff |= left[i] ^ right[i];
  }
  return diff === 0;
}

async function buildFeishuMessage(payload, eventId, secret) {
  const eventType = getEventType(payload);
  const data = payload.data || payload.object || payload;
  const lines = [
    "Clibo Dodo Payments 通知",
    "",
    `事件：${eventType}`,
    `Webhook ID：${eventId}`,
    ...buildSummaryLines(data),
    `时间：${new Date().toISOString()}`,
  ];

  const message = {
    msg_type: "text",
    content: {
      text: lines.filter(Boolean).join("\n"),
    },
  };

  if (secret) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    message.timestamp = timestamp;
    message.sign = await signFeishuMessage(timestamp, secret);
  }

  return message;
}

function getEventType(payload) {
  return payload.type || payload.event_type || payload.event || payload.name || "unknown";
}

function buildSummaryLines(data) {
  const customer = data.customer || data.customer_details || {};
  const product = data.product || data.product_details || {};
  const amount = firstValue(data, ["amount", "total_amount", "price", "total"]);
  const currency = firstValue(data, ["currency", "settlement_currency"]);
  const status = firstValue(data, ["status", "payment_status", "license_key_status"]);
  const paymentId = firstValue(data, ["payment_id", "paymentId", "id"]);
  const email = firstValue(data, ["email", "customer_email"]) || customer.email;
  const productName = firstValue(data, ["product_name"]) || product.name;
  const licenseKeyId = firstValue(data, ["license_key_id", "licenseKeyId"]);
  const subscriptionId = firstValue(data, ["subscription_id", "subscriptionId"]);

  return [
    paymentId && `Payment ID：${paymentId}`,
    status && `状态：${status}`,
    productName && `产品：${productName}`,
    amount && `金额：${formatAmount(amount, currency)}`,
    email && `邮箱：${email}`,
    licenseKeyId && `License Key ID：${licenseKeyId}`,
    subscriptionId && `Subscription ID：${subscriptionId}`,
  ].filter(Boolean);
}

function firstValue(source, keys) {
  for (const key of keys) {
    if (source?.[key] !== undefined && source[key] !== null && source[key] !== "") {
      return source[key];
    }
  }
  return "";
}

function formatAmount(amount, currency) {
  const value = typeof amount === "number" ? String(amount) : amount;
  return currency ? `${value} ${currency}` : value;
}

async function signFeishuMessage(timestamp, secret) {
  const key = new TextEncoder().encode(`${timestamp}\n${secret}`);
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, new Uint8Array());
  return bytesToBase64(new Uint8Array(signature));
}

function base64ToBytes(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}
