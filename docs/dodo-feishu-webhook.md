# Dodo Payments to Feishu Webhook

This site includes a Cloudflare Pages Function that receives Dodo Payments webhooks and forwards important events to a Feishu custom bot.

Endpoint:

```text
https://clibo.us/api/webhooks/dodo
```

## Cloudflare Environment Variables

Set these in Cloudflare Pages for the `clibo-site` project:

```text
DODO_WEBHOOK_SECRET
FEISHU_BOT_WEBHOOK_URL
FEISHU_BOT_SECRET
```

`DODO_WEBHOOK_SECRET` is the webhook signing secret from Dodo Payments. The function also accepts the legacy name `DODO_PAYMENTS_WEBHOOK_KEY`.

`FEISHU_BOT_WEBHOOK_URL` is the Feishu custom bot webhook URL.

`FEISHU_BOT_SECRET` is optional. Set it only if Feishu bot signature verification is enabled.

Optional dedupe binding:

```text
DODO_WEBHOOK_DEDUPE_KV
```

If a KV namespace is bound with this name, webhook IDs are stored for 7 days after successful Feishu delivery to reduce duplicate notifications from webhook retries.

## Dodo Payments Setup

1. Open Dodo Payments Dashboard.
2. Go to `Developer > Webhooks`.
3. Add endpoint:

   ```text
   https://clibo.us/api/webhooks/dodo
   ```

4. Copy the generated webhook signing secret into `DODO_WEBHOOK_SECRET`.
5. Subscribe to the events you want to receive.

Recommended events:

- `payment.succeeded`
- `payment.failed`
- `refund.succeeded`
- `refund.failed`
- `license_key.created`
- `entitlement_grant.delivered`
- `entitlement_grant.revoked`
- `dispute.opened`
- `dispute.won`
- `dispute.lost`

## Feishu Setup

1. Add a custom bot to the target Feishu group.
2. Copy the bot webhook URL into `FEISHU_BOT_WEBHOOK_URL`.
3. If you enable signature verification, copy the bot secret into `FEISHU_BOT_SECRET`.

The function sends text messages with:

- Dodo event type
- Webhook ID
- Payment ID when present
- Status when present
- Product name when present
- Amount and currency when present
- Customer email when present
- License key ID or subscription ID when present

## Behavior

- Only `POST` is accepted.
- Dodo Standard Webhooks headers are verified before parsing the payload.
- Invalid signatures return `401`.
- Missing configuration returns `500`.
- Feishu delivery failures return `502`, so Dodo can retry the webhook.
- Successful delivery returns `200`.
