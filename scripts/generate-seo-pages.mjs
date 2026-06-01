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
const LAST_MODIFIED = "2026-05-31";

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
    <meta property="og:image" content="${escapeAttr(image)}" />
    <meta property="og:image:alt" content="Clibo macOS clipboard manager dashboard" />
    <meta property="og:locale" content="${DEFAULT_LOCALE}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="${TWITTER_HANDLE}" />
    <meta name="twitter:title" content="${escapeAttr(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttr(seo.description)}" />
    <meta name="twitter:image" content="${escapeAttr(image)}" />${jsonLd}`;
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
    return `<main><h1>${escapeHtml(seo.title)}</h1><p>${escapeHtml(seo.description)}</p></main>`;
  }

  if (seo.path === "/") {
    return `<main>
      <h1>Clibo - Smart Clipboard Manager for macOS</h1>
      <p>Clibo is a privacy-first macOS clipboard manager with local history, rich previews, pinned snippets, AI search, and a 7-day free trial.</p>
      <img src="/assets/hero-dashboard.png" alt="Clibo clipboard history dashboard" />
      <section>
        <h2>Features</h2>
        <ul>
          <li>Local clipboard history stored on your Mac.</li>
          <li>Rich previews for text, images, code, links, colors, and files.</li>
          <li>Pinned snippets, quick panel, and fast search.</li>
          <li>Optional BYOK AI actions for translate, rewrite, and summarize.</li>
        </ul>
      </section>
      <section>
        <h2>Pricing</h2>
        <p>Early Bird: $9 one-time purchase. Includes a 7-day free trial and 2 Mac activations.</p>
        <p><a href="https://releases.clibo.us/Clibo-1.0.3-6.dmg">Download Clibo free trial</a></p>
      </section>
    </main>`;
  }

  if (seo.path === "/releases") {
    return `<main>
      <h1>Release Notes - Clibo</h1>
      <p>Latest Clibo releases and product changes.</p>
      <section>
        <h2>Clibo 1.0.3</h2>
        <ul>
          <li>Added Snippets templates, statistics, local formatting actions, Explain Code, stronger automations, new automation actions, and type-colored content icons.</li>
        </ul>
      </section>
      <section>
        <h2>Clibo 1.0.2</h2>
        <ul>
          <li>Added README documentation, SwiftPM tests, SQLite migration support, Sparkle appcast improvements, 7-day trial copy updates, onboarding improvements, internal module cleanup, and SwiftLint configuration.</li>
        </ul>
      </section>
      <section>
        <h2>Clibo 1.0.1</h2>
        <ul>
          <li>Improved quick panel color swatches, context menus, file and path recognition, history cleanup settings, menu bar icon, animations, and localization.</li>
        </ul>
      </section>
    </main>`;
  }

  return `<main>
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
Disallow: /docs

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
    `<div id="root"><main><h1>Page Not Found</h1><p>The requested page could not be found.</p><p><a href="/">Go to Clibo home</a></p></main></div>`
  );
}

const template = await readFile(join(DIST_DIR, "index.html"), "utf8");

for (const [route, seo] of Object.entries(SEO_ROUTES)) {
  await writeRouteHtml(route, injectSeo(template, seo));
}

await writeFile(join(DIST_DIR, "404.html"), buildNotFoundHtml(template));
await writeFile(join(DIST_DIR, "robots.txt"), buildRobots());
await writeFile(join(DIST_DIR, "sitemap.xml"), buildSitemap());
