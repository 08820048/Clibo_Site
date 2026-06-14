import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  DEFAULT_LOCALE,
  PUBLIC_ROUTES,
  SEO_ROUTES,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  absoluteUrl,
  getStructuredData,
} from "../src/seo/metadata.js";

const DIST_DIR = "dist";
const LAST_MODIFIED = "2026-06-14";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function removeGeneratedSeo(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']robots["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']application-name["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']apple-mobile-web-app-title["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']theme-color["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/gi, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
}

function buildMetaBlock(seo) {
  const canonical = absoluteUrl(seo.path);
  const image = seo.image;
  const imageMeta = image
    ? `
    <meta property="og:image" content="${escapeAttr(image)}" />
    <meta property="og:image:alt" content="Clibo macOS clipboard manager dashboard" />`
    : "";
  const twitterImageMeta = image
    ? `
    <meta name="twitter:image" content="${escapeAttr(image)}" />`
    : "";
  const structuredData = getStructuredData(seo);
  const jsonLd = structuredData
    ? `\n    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
    : "";

  return `    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeAttr(seo.description)}" />
    <meta name="robots" content="${escapeAttr(seo.robots)}" />
    <meta name="application-name" content="${SITE_NAME}" />
    <meta name="apple-mobile-web-app-title" content="${SITE_NAME}" />
    <meta name="theme-color" content="#1d9e75" />
    <link rel="canonical" href="${escapeAttr(canonical)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeAttr(canonical)}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${escapeAttr(seo.title)}" />
    <meta property="og:description" content="${escapeAttr(seo.description)}" />
    <meta property="og:type" content="${escapeAttr(seo.type)}" />
    <meta property="og:url" content="${escapeAttr(canonical)}" />
    ${imageMeta}
    <meta property="og:locale" content="${DEFAULT_LOCALE}" />
    <meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}" />
    <meta name="twitter:site" content="${TWITTER_HANDLE}" />
    <meta name="twitter:title" content="${escapeAttr(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttr(seo.description)}" />${twitterImageMeta}${jsonLd}`;
}

function injectSeo(html, seo) {
  const clean = removeGeneratedSeo(html);
  const block = buildMetaBlock(seo);
  const marker = /(\s*<meta\s+name=["']viewport["'][^>]*>\s*)/i;
  const withSnapshot = clean.replace(
    /<div id=["']root["']><\/div>/i,
    `<div id="root">${buildSnapshot(seo)}</div>`
  );

  if (marker.test(withSnapshot)) {
    return withSnapshot.replace(marker, `$1\n${block}\n`);
  }

  return withSnapshot.replace(/<head>/i, `<head>\n${block}`);
}

function buildSnapshot(seo) {
  if (seo.robots.startsWith("noindex")) {
    return `<main data-seo-snapshot><h1>${escapeHtml(seo.title)}</h1><p>${escapeHtml(seo.description)}</p></main>`;
  }

  if (seo.path === "/") {
    return `<main data-seo-snapshot>
      <h1>Clibo - Private Clipboard Manager for Mac</h1>
      <p>Clibo is a native macOS clipboard manager with local history, rich previews, pinned sync, Maccy import, snippets, and BYOK AI actions.</p>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Local clipboard history for text, images, links, files, colors, dates, emails, and phone numbers.</li>
          <li>Maccy import plus JSON, CSV, TXT, and Markdown import.</li>
          <li>Pinned clipboard sync across Macs with iCloud Drive or synced folders.</li>
          <li>Quick panel, pinned snippets, global snippet shortcuts, and fast search.</li>
          <li>Native macOS actions for Calendar, Contacts, Messages, Notes, and Reminders.</li>
          <li>Optional BYOK AI actions for translate, rewrite, summarize, and more.</li>
        </ul>
      </section>
      <section>
        <h2>Pricing</h2>
        <p>Early Bird: $9 one-time purchase, valid until July 1, 2026. Includes a 7-day free trial and 2 Mac activations.</p>
        <p><a href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess">Buy Clibo for $9</a></p>
        <p><a href="https://releases.clibo.us/Clibo-1.1.7-20.dmg">or download free trial</a></p>
      </section>
    </main>`;
  }

  if (seo.path === "/releases") {
    return `<main data-seo-snapshot>
      <h1>Release Notes - Clibo</h1>
      <p>Latest Clibo releases and product changes.</p>
      <section>
        <h2>v1.1.7</h2>
        <ul>
          <li>Fixed Dashboard menu icon clicks being intercepted by hover-preview outside-click handling.</li>
          <li>Dashboard records now copy on single click and play the successful-copy sound, matching the quick panel.</li>
          <li>Fixed hover previews not closing after leaving the preview panel or leaving the source record without entering the preview.</li>
          <li>Quick Search now supports custom global shortcuts, and Dashboard search expands when opened from the global shortcut.</li>
          <li>Fixed type-filter preview popups and inconsistent sensitive filtering for standard UUIDs and record IDs.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.6</h2>
        <ul>
          <li>Fixed sensitive-content redaction so email records show full email content in Dashboard, the quick panel, and previews.</li>
          <li>Added right-click support for closing the currently hovered preview panel.</li>
          <li>Fixed hover preview task cancellation when quickly switching between hovered items.</li>
          <li>Improved successful copy sound feedback in Dashboard and the quick panel with a new confirmation sound.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.5</h2>
        <ul>
          <li>Fixed Dashboard archive date nodes reopening after collapse because the first visible record was auto-selected.</li>
          <li>Removed reverse expansion and async scroll triggers from archive record selection to avoid node bounce-back during collapse animations.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.4</h2>
        <ul>
          <li>Fixed Dashboard archive timeline generation so it uses the full retained history instead of only the latest 20 records.</li>
          <li>Archive date nodes now start collapsed and can be expanded or collapsed per date.</li>
          <li>Changed expanded archive nodes and selected record highlights to RGB(244, 73, 157).</li>
          <li>Fixed quick panel menu bar hover stats panel clipping by making its height adapt to content and screen space.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.3</h2>
        <ul>
          <li>Improved global accent colors and selected-row readability in light and dark appearances.</li>
          <li>Improved contrast for secondary selected-row text in Dashboard, archive timeline, quick panel, and Snippets lists.</li>
          <li>Code records now use solid-color text while selected for better contrast.</li>
          <li>Updated Context Rules and Automation inline action button colors.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.2</h2>
        <ul>
          <li>Added an Archive view in Dashboard for browsing history by date timeline.</li>
          <li>Improved quick panel dragging for images, files, paths, and text.</li>
          <li>Fixed Markdown image syntax being classified as sensitive content, and added direct Markdown image hover previews.</li>
          <li>Added live screen OCR selection dimensions and writes successful OCR results into Clibo history.</li>
          <li>Fixed a quick panel focus issue where bottom commands could show a blue focus ring on open.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.1</h2>
        <ul>
          <li>Added Extract Text (OCR) in the quick panel for selecting any screen area and copying recognized text.</li>
          <li>Added shortcut hints for quick panel bottom commands.</li>
          <li>Added richer menu bar hover statistics, drag support, copy feedback, and Notifications & Sounds settings.</li>
          <li>Redacts sensitive clipboard content in system notifications.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.0</h2>
        <ul>
          <li>Added Send Email actions for email records and Remind Me actions for any clipboard record.</li>
          <li>Clibo reminders use local macOS notifications that can open Dashboard and locate the related record.</li>
          <li>Restored up/down keyboard selection in Dashboard and the quick panel.</li>
          <li>Fixed onboarding localization and dark mode permission state display.</li>
        </ul>
      </section>
      <section>
        <h2>v1.0.9</h2>
        <ul>
          <li>Added launch at login, enabled by default and configurable in General settings.</li>
          <li>Added a menu bar hover stats panel for recent copies, pinned items, AI requests, sensitive copies, and ignored items.</li>
          <li>Fixed system paste in Snippet title and content fields.</li>
          <li>Added a Feedback entry to the About panel.</li>
        </ul>
      </section>
      <section>
        <h2>v1.0.8</h2>
        <ul>
          <li>Added Maccy import for history, images, files, pinned content, and original copy timestamps.</li>
          <li>Added date and phone number recognition plus native macOS actions for Calendar, Contacts, Messages, Notes, and Reminders.</li>
          <li>Added onboarding guidance for permissions and updated Simplified Chinese, German, Spanish, French, Italian, Japanese, and Korean localization.</li>
        </ul>
      </section>
      <section>
        <h2>v1.0.7</h2>
        <ul>
          <li>Added a Data settings panel and generic import flow for JSON, CSV, TXT, and Markdown files.</li>
          <li>Added preview before import, import destinations for history, pinned records, or Snippets, and duplicate filtering options.</li>
          <li>Added Email classification and edit actions for clipboard records.</li>
        </ul>
      </section>
      <section>
        <h2>v1.0.6</h2>
        <ul>
          <li>Added pinned clipboard sync through iCloud Drive or other synced folders.</li>
          <li>Added global Snippet shortcuts from Command + Shift + 1 through Command + Shift + 9.</li>
          <li>Added app selection for excluded privacy sources with Bundle ID detection.</li>
        </ul>
      </section>
      <section>
        <h2>v1.0.5</h2>
        <ul>
          <li>Improved image OCR for Chinese and other languages using Apple Vision.</li>
          <li>Added sensitive copy statistics, source statistics, and AI usage statistics.</li>
        </ul>
      </section>
    </main>`;
  }

  return `<main data-seo-snapshot>
    <h1>${escapeHtml(seo.title)}</h1>
    <p>${escapeHtml(seo.description)}</p>
    <p><a href="https://clibo.us/">Clibo home</a></p>
  </main>`;
}

async function writeRouteHtml(route, html) {
  const output = route === "/" ? join(DIST_DIR, "index.html") : join(DIST_DIR, route.slice(1));

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

function buildRobots() {
  return `User-agent: *
Allow: /
Disallow: /success

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function buildSitemap() {
  const urls = PUBLIC_ROUTES.map((route) => {
    const seo = SEO_ROUTES[route];
    return `  <url>
    <loc>${absoluteUrl(seo.path)}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.6"}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildNotFoundHtml(template) {
  const seo = SEO_ROUTES["/404"];

  return injectSeo(template, seo).replace(
    /<div id=["']root["']>[\s\S]*?<\/div>/i,
    `<div id="root"><main data-seo-snapshot><h1>Page Not Found</h1><p>The requested page could not be found.</p><p><a href="/">Go to Clibo home</a></p></main></div>`
  );
}

const template = await readFile(join(DIST_DIR, "index.html"), "utf8");

for (const [route, seo] of Object.entries(SEO_ROUTES)) {
  await writeRouteHtml(route, injectSeo(template, seo));
}

await writeFile(join(DIST_DIR, "404.html"), buildNotFoundHtml(template));
await writeFile(join(DIST_DIR, "robots.txt"), buildRobots());
await writeFile(join(DIST_DIR, "sitemap.xml"), buildSitemap());
