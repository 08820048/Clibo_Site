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
import { getLandingPage } from "../src/seo/landingPages.js";

const DIST_DIR = "dist";
const LAST_MODIFIED = "2026-06-23";

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
  const landingPage = getLandingPage(seo.path);

  if (landingPage) {
    return buildLandingSnapshot(landingPage);
  }

  if (seo.robots.startsWith("noindex")) {
    return `<main data-seo-snapshot><h1>${escapeHtml(seo.title)}</h1><p>${escapeHtml(seo.description)}</p></main>`;
  }

  if (seo.path === "/") {
    return `<main data-seo-snapshot>
      <h1>Clibo - Private Clipboard Manager for Mac</h1>
      <p>Clibo is a native macOS clipboard manager with AI semantic search, local clipboard history, rich previews, pinned sync, one-click Maccy import, snippets, and optional BYOK AI actions. Clipboard data stays local on your Mac.</p>
      <section>
        <h2>Features</h2>
        <ul>
          <li>AI semantic search helps you find copied text, links, code, images, files, colors, emails, dates, and phone numbers using natural-language queries.</li>
          <li>Local clipboard history for text, images, links, files, colors, dates, emails, and phone numbers.</li>
          <li>Maccy import plus JSON, CSV, TXT, and Markdown import.</li>
          <li>Pinned clipboard sync across Macs with iCloud Drive or synced folders.</li>
          <li>Quick panel, pinned snippets, global snippet shortcuts, and fast search.</li>
          <li>Native macOS actions for Calendar, Contacts, Messages, Notes, and Reminders.</li>
          <li>Optional BYOK AI actions for translate, rewrite, summarize, and more.</li>
        </ul>
      </section>
      <section>
        <h2>Why Clibo</h2>
        <p>Clibo is built for Mac users who want a private clipboard manager with modern search and automation. It combines a native menu bar quick panel, a full Dashboard, hover previews, privacy rules, and Bring Your Own Key AI actions without sending your whole clipboard history to a hosted backend.</p>
      </section>
      <section>
        <h2>Pricing</h2>
        <p>Early Bird: $7.66 one-time purchase, valid until July 1, 2026. Includes a 7-day free trial and 2 Mac activations.</p>
        <p><a href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess">Buy Clibo for $7.66</a></p>
        <p><a href="https://releases.clibo.us/Clibo-1.2.11-35.dmg">or download free trial</a></p>
      </section>
    </main>`;
  }

  if (seo.path === "/docs") {
    return `<main data-seo-snapshot>
      <h1>Clibo Documentation</h1>
      <p>A practical guide for setting up Clibo, recording clipboard history, using the quick panel, protecting sensitive content, and connecting copied items with native macOS apps.</p>
      <section>
        <h2>Overview</h2>
        <p>Clibo is a native macOS clipboard manager. It keeps clipboard history on your Mac, recognizes common content types, provides fast search and previews, and lets you reuse copied content from the Dashboard or quick panel.</p>
        <p>The main surfaces are the menu bar icon, the Dashboard, the quick panel, preview popovers, Settings, and context menus on each clipboard record.</p>
      </section>
      <section>
        <h2>Install Clibo</h2>
        <ol>
          <li>Download the latest Clibo DMG from the website.</li>
          <li>Open the DMG and drag Clibo into Applications.</li>
          <li>Launch Clibo from Applications, Launchpad, or Spotlight.</li>
        </ol>
        <p>Clibo includes a 7-day free trial. After the trial, activate a license from Settings. If you purchased from the website, copy the license key from your receipt email and paste it into Settings > License.</p>
      </section>
      <section>
        <h2>Permissions</h2>
        <p>The first-run guide walks through permissions Clibo needs for the workflows you enable. Accessibility is used for secure field detection and paste-related workflows. Calendar, Contacts, Notes, and Reminders permissions are requested only when you use actions that write to those macOS apps. Keychain stores license and provider credentials securely.</p>
      </section>
      <section>
        <h2>Clipboard history</h2>
        <p>Copy normally in any app. When the content is allowed by your privacy rules, Clibo saves it into local history. Supported records include text, links, code, images, files, colors, emails, dates, and phone numbers.</p>
        <p>Use the Dashboard to browse all history, search, filter by content type, inspect previews, pin useful records, edit non-image records, and delete items you no longer need.</p>
      </section>
      <section>
        <h2>Quick panel</h2>
        <p>The quick panel is designed for staying in the current app. Open it with your configured shortcut, search for an item, then copy or paste it back into your workflow. You can search history and snippets, use context menus for record actions, open statistics, or temporarily enable sensitive recording from quick controls.</p>
      </section>
      <section>
        <h2>Actions and snippets</h2>
        <p>Right-click a clipboard record to open available actions. Text and image records can be sent to Notes, non-image content can become reminders, detected dates can be added to Calendar, and phone numbers can be saved to Contacts or opened in Messages.</p>
        <p>Snippets are reusable text templates for content you paste repeatedly, such as email replies, prompts, signatures, addresses, or code fragments. Common snippets can be mapped to global shortcuts from Command + Shift + 1 through Command + Shift + 9.</p>
      </section>
      <section>
        <h2>Privacy, sync, import, and AI</h2>
        <p>Clibo is local-first. Clipboard history is stored in a local database on your Mac unless you explicitly enable pinned sync for pinned records. Pinned sync stores only pinned records in a separate CliboPinnedClips.json file. File Import supports JSON, CSV, TXT, and Markdown. App Import includes a dedicated Maccy import path.</p>
        <p>AI features are optional. Configure your own provider and API key before using translation, rewriting, summarization, Explain Code, or other provider-backed actions.</p>
      </section>
      <section>
        <h2>Troubleshooting</h2>
        <p>If clipboard history is not updating, check whether Clibo is paused and confirm required permissions. If macOS actions do not work, check Calendar, Contacts, Notes, or Reminders permissions. If AI actions fail, check the provider, API key, model name, and network connection.</p>
      </section>
    </main>`;
  }

  if (seo.path === "/support") {
    return `<main data-seo-snapshot>
      <h1>Clibo Support</h1>
      <p>Clibo is a local-first clipboard manager for macOS. It keeps clipboard history on your Mac and provides fast search, a menu bar quick panel, snippets, optional AI actions, and automation rules.</p>
      <section>
        <h2>Requirements</h2>
        <ul>
          <li>macOS 14 Sonoma or later.</li>
          <li>Mac with Apple Silicon or Intel processor.</li>
          <li>Internet access for purchases and optional AI provider requests.</li>
        </ul>
      </section>
      <section>
        <h2>Common Questions</h2>
        <h3>Where is my clipboard history stored?</h3>
        <p>Clipboard history is stored locally on your Mac under the user's Application Support folder. Clibo does not upload clipboard history to a Clibo backend.</p>
        <h3>Why does Clibo ask for Accessibility access?</h3>
        <p>Clibo uses Accessibility APIs to detect secure text fields so sensitive entries, such as password fields, are not recorded.</p>
        <h3>Does Clibo contact websites for copied links?</h3>
        <p>Only if URL title fetching is enabled in Privacy settings. It is off by default.</p>
        <h3>How do AI features work?</h3>
        <p>AI features are optional. If configured, Clibo sends the selected text and prompt directly to the provider chosen by the user.</p>
      </section>
      <section>
        <h2>Troubleshooting</h2>
        <p>If clipboard history is not updating, check whether Clibo is paused from the menu bar quick panel. If purchase status is not active, open Settings, choose License, and restore or enter your license. If AI actions fail, check the configured provider and API key.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>For support, email <a href="mailto:support@clibo.us">support@clibo.us</a>.</p>
      </section>
    </main>`;
  }

  if (seo.path === "/privacy") {
    return `<main data-seo-snapshot>
      <h1>Privacy Policy</h1>
      <p>Last updated: May 28, 2026</p>
      <section>
        <h2>Overview</h2>
        <p>Clibo is a macOS clipboard manager built with privacy as a core principle. Your clipboard data never leaves your Mac. We do not operate servers that collect, store, or transmit your clipboard content.</p>
      </section>
      <section>
        <h2>Data Stored Locally</h2>
        <p>All clipboard history is stored in a local SQLite database on your Mac. This includes text, links, code, images, timestamps, content type metadata, and pinned snippets you choose to save permanently.</p>
        <p>This data never leaves your device. We have no access to it, and no third party receives it through Clibo.</p>
      </section>
      <section>
        <h2>Password and Sensitive Content</h2>
        <p>Clibo automatically detects and excludes content copied from password managers such as 1Password, Bitwarden, and Apple Passwords. Clipboard entries marked as concealed or coming from known password manager bundle IDs are never saved to history.</p>
      </section>
      <section>
        <h2>AI Features</h2>
        <p>Clibo offers optional AI-powered actions such as translate, rewrite, and summarize. You provide your own API key. Your API key is stored securely in the macOS Keychain. Only the specific clip you choose to process is sent to the AI provider's API.</p>
      </section>
      <section>
        <h2>Payments, Licensing, and Diagnostics</h2>
        <p>Clibo uses Dodo Payments as our payment processor. License activation validates your license key against Dodo Payments' public API and does not include clipboard data. Clibo does not automatically send crash reports or usage analytics.</p>
      </section>
      <section>
        <h2>Website and Contact</h2>
        <p>The Clibo website is a static site hosted on Cloudflare Pages. If you have questions about this privacy policy or Clibo's data practices, contact <a href="mailto:ilikexff@gmail.com">ilikexff@gmail.com</a>.</p>
      </section>
    </main>`;
  }

  if (seo.path === "/terms") {
    return `<main data-seo-snapshot>
      <h1>Terms of Service</h1>
      <p>Last updated: May 29, 2026</p>
      <section>
        <h2>Agreement</h2>
        <p>These terms govern your use of Clibo, a macOS clipboard manager. By downloading, installing, purchasing, or using Clibo, you agree to these terms.</p>
      </section>
      <section>
        <h2>License</h2>
        <p>A paid Clibo license grants you a personal, non-transferable right to use the Pro features of Clibo on the number of Macs shown at purchase and enforced by the license system. You may not resell, share, sublicense, or publicly distribute your license key.</p>
      </section>
      <section>
        <h2>Payments and Updates</h2>
        <p>Payments are processed by Dodo Payments as Merchant of Record. Clibo is downloadable desktop software and may receive updates, fixes, and compatibility improvements over time.</p>
      </section>
      <section>
        <h2>Acceptable Use and AI Features</h2>
        <p>You are responsible for how you use Clibo and for the content you copy, store, preview, transform, or paste. AI features are optional and use a Bring Your Own Key model. Clips you choose to process are sent to your selected provider under that provider's terms and privacy policy.</p>
      </section>
      <section>
        <h2>Warranty, Liability, and Contact</h2>
        <p>Clibo is provided as is and as available. Questions about these terms can be sent to <a href="mailto:ilikexff@gmail.com">ilikexff@gmail.com</a>.</p>
      </section>
    </main>`;
  }

  if (seo.path === "/refund") {
    return `<main data-seo-snapshot>
      <h1>Refund Policy</h1>
      <p>Last updated: May 29, 2026</p>
      <section>
        <h2>Try Before Buying</h2>
        <p>Clibo offers a free trial so you can test the app before purchasing. We recommend confirming that Clibo works for your workflow, macOS version, and security settings before buying a license.</p>
      </section>
      <section>
        <h2>Refund Eligibility</h2>
        <p>Because Clibo is delivered digitally with an issued license key, paid purchases are generally final after the license is delivered. We will still review refund requests in good faith for duplicate purchases, accidental purchases, or technical problems that prevent Clibo from working and cannot be resolved.</p>
        <ul>
          <li>Refund requests should be made within 14 days of purchase.</li>
          <li>Approved refunds revoke or disable the related license key.</li>
          <li>This policy does not limit any mandatory consumer rights that apply in your country or region.</li>
        </ul>
      </section>
      <section>
        <h2>How to Request a Refund</h2>
        <p>Email <a href="mailto:ilikexff@gmail.com">ilikexff@gmail.com</a> with your payment ID, purchase email, and a short explanation of the issue. Payment details can be found on the purchase success page when available or in your Dodo Payments receipt email.</p>
      </section>
      <section>
        <h2>Payment Processor</h2>
        <p>Purchases are processed by Dodo Payments as Merchant of Record. Dodo Payments may handle refund processing, receipts, tax adjustments, and payment disputes according to its buyer terms and applicable law.</p>
      </section>
    </main>`;
  }

  if (seo.path === "/releases") {
    return `<main data-seo-snapshot>
      <h1>Release Notes - Clibo</h1>
      <p>Latest Clibo releases and product changes.</p>
      <section>
        <h2>v1.2.11</h2>
        <ul>
          <li>Image Hosting now configures Cloudflare R2 with a full Endpoint URL, and existing Account ID settings migrate automatically.</li>
          <li>R2 Endpoint URL validation now requires an HTTPS upload endpoint without bucket or object paths.</li>
          <li>The quick panel global shortcut now closes the panel when it is already open instead of selecting the next record.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.10</h2>
        <ul>
          <li>Image Hosting now blocks Cloudflare R2 S3 API endpoints from being used as Public Base URLs.</li>
          <li>Public Base URL examples now point users toward custom public domains or R2 public bucket URLs.</li>
          <li>Uploaded image links can now be written back as plain URLs or Markdown image syntax, with clearer success notifications and improved localization.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.9</h2>
        <ul>
          <li>The Dashboard archive view now includes a right-side calendar overview for collapsed timelines.</li>
          <li>Image Hosting now supports automatic uploads for copied image files including PNG, JPG, GIF, WebP, HEIC, HEIF, TIFF, SVG, and BMP.</li>
          <li>Dashboard and quick panel context menus now include Upload Image for image-type files while preserving original file data, extension, and MIME type.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.8</h2>
        <ul>
          <li>Added an Image Hosting settings page; the first image hosting provider supports Cloudflare R2, with the R2 Access Key ID and Secret Access Key stored in Keychain.</li>
          <li>Configure the R2 Account ID, Bucket, public Base URL, and object prefix, with a test upload entry available.</li>
          <li>Support automatically uploading images copied to the clipboard: the image history is retained as usual, and after a successful upload the public image URL is written back to the clipboard as plain text.</li>
          <li>The image right-click menu in the Dashboard and quick panel now includes Upload Image, letting you manually upload historical images and copy the returned URL.</li>
          <li>Fixed an issue where the hover preview popover could block the drag release when dragging content from the quick panel to other apps; previews are temporarily disabled during a drag and resume normal hover selection and preview after release.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.7</h2>
        <ul>
          <li>Fixed the secondary menu in the Dashboard record right-click menu flickering and failing to stay open; the Dashboard right-click menu now uses a native AppKit menu to avoid SwiftUI rebuilding the submenu repeatedly within the current view structure.</li>
          <li>Fixed a rectangular white background box appearing over the Dashboard right-side scrollbar area, and narrowed the scope affected by the scrollbar transparency setting.</li>
          <li>Added a dedicated Appearance page in Settings that centralizes tinted theme packs, the current theme preview, and unlock progress; the General page returns to holding general settings.</li>
          <li>Added three tinted theme packs: Lagoon Glow, Berry Slate, and Ember Moss.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.6</h2>
        <ul>
          <li>Optimized Dashboard category switching to avoid repeated full-list rebuilds from category animation transactions.</li>
          <li>Reduced initial Code category cost by removing syntax highlighting from list rows while keeping monospace text, language labels, and full highlighting in hover previews.</li>
          <li>Cached code language detection and syntax highlighting results, reused regexes and date formatters, and reduced repeated sensitive-content and color checks.</li>
          <li>Dashboard now shows the 30 most recent records by default instead of 100; the full history remains available in the archive.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.5</h2>
        <ul>
          <li>Dashboard and the quick panel now use a fixed Clibo icon themed tinted background with a lighter, more unified glass feel.</li>
          <li>Dashboard’s top menu and content area share one background layer, and the top eight type filters now center within the available width.</li>
          <li>The quick panel statistics popover and Snippet creation/editing panels were updated to match the new themed tinted surfaces.</li>
          <li>Settings now include unlockable tinted theme packs based on copies, Snippets, and pinned items.</li>
          <li>Settings statistics chart hover tips now use floating overlays that do not resize the charts.</li>
          <li>Improved broad-keyword quick panel search with bounded recent-record matching for single-character searches and light input debounce.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.4</h2>
        <ul>
          <li>Fixed Return from the shortcut-opened quick panel pasting into Clibo’s search field instead of the original app.</li>
          <li>Mouse clicks still copy to the clipboard, and Option + Return still pastes as plain text into the original app.</li>
          <li>Dashboard and quick panel lists now load original image data on demand for previews, copy, and OCR instead of by default.</li>
          <li>Archive data loads only when switching to the archive view, lowering the default Dashboard refresh cost.</li>
          <li>Statistics refreshes are merged and debounced to reduce repeated calculation during rapid copy or delete operations.</li>
          <li>The quick panel now shows the current version between Settings and Quit, and no longer includes the About menu entry.</li>
          <li>Reduced short-term retention of original image data by the internal image paste signature.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.3</h2>
        <ul>
          <li>The global Quick Search shortcut now opens the menu bar quick panel directly and focuses the search field; the separate Quick Search panel was removed.</li>
          <li>Pressing the Quick Search shortcut again cycles to the next record after the quick panel is opened.</li>
          <li>Dashboard now shows the 100 most recent copied records when no search term is entered, supports type filters, and still searches the full history.</li>
          <li>A message at the bottom of the Dashboard list explains that the complete history is available in the archive.</li>
          <li>Added missing localizations for the recent-records message and image watermark settings.</li>
          <li>Image watermarks automatically switch between black and white text based on the brightness of the underlying image area.</li>
          <li>Dashboard now uses the same custom scrolling list as the quick panel, retains slide-out deletion animations, and removes system separators.</li>
          <li>Deleting clipboard records or templates now plays a dedicated deletion sound controlled by the existing sound effects setting.</li>
          <li>Pressing Return can paste the selected quick-panel content directly into the original app, while clicking continues to copy it.</li>
          <li>Fixed incorrect cursor placement and text input direction under some system languages and localization scenarios.</li>
          <li>The minimum system requirement is now macOS 14 for native Swift Charts selection interactions.</li>
          <li>Settings statistics charts now provide native hover and selection interactions with live inline values and highlighting.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.2</h2>
        <ul>
          <li>Statistics values now combine count-up interpolation, SwiftUI numericText transitions, and snappy animation for a rolling counter effect.</li>
          <li>Dashboard lists no longer show horizontal group headers for templates; template content appears directly in the list.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.1</h2>
        <ul>
          <li>Dashboard and Settings now open at 860x733 by default, and Settings uses a more transparent glass-style host.</li>
          <li>Settings dropdowns moved to native NSPopUpButton controls, and input background transitions were fixed.</li>
          <li>Quick panel statistics now include matching data appearance animations.</li>
          <li>Dashboard removed the Pinned group title, fixed first right-click behavior with open previews, and added hover/press feedback to the top-right menu icon.</li>
        </ul>
      </section>
      <section>
        <h2>v1.2.0</h2>
        <ul>
          <li>Adjusted quick panel Settings and Quit actions to icon-only buttons fixed to the bottom corners.</li>
          <li>Added clipboard text diff from the quick panel or Dashboard context menu.</li>
          <li>Added image copy watermark settings with timestamp/device defaults or custom text.</li>
          <li>Updated About links and removed license status and Forget Local License from the bottom of License settings.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.9</h2>
        <ul>
          <li>The quick panel now uses the system NSPopover with callout arrow and open/close animations.</li>
          <li>The Statistics command now opens a compact statistics panel directly on click or hover.</li>
          <li>Removed menu bar icon hover as the automatic statistics trigger to avoid unreliable tracking events.</li>
          <li>The compact statistics panel stays open while hovered and closes after a delay when the mouse leaves.</li>
        </ul>
      </section>
      <section>
        <h2>v1.1.8</h2>
        <ul>
          <li>Improved phone number classification with number-shape validation to reduce false positives for order numbers, date-like numbers, and segmented IDs.</li>
          <li>Added a Fable 5 Verified badge to About, added About inside Settings, and fixed fallback version display in local or non-release builds.</li>
          <li>Fixed the quick panel Ignore Next Copy button state so it follows the real consumed ignore state.</li>
          <li>Fixed Dashboard large-image hover preview loops when the preview covered the mouse position.</li>
        </ul>
      </section>
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

  if (seo.path === "/yushenga/privacy/") {
    return `<main data-seo-snapshot>
      <h1>余生啊隐私政策</h1>
      <p>更新日期：2026-06-16</p>
      <section>
        <p>余生啊尊重并保护用户隐私。本隐私政策说明余生啊如何处理你的信息。</p>
      </section>
      <section>
        <h2>数据收集</h2>
        <p>余生啊不收集任何用户数据。</p>
        <p>你在 App 中设置的当前年龄、预期寿命、默认显示单位、通知开关和短语显示偏好，只保存在你的设备本地，用于 App 和 Widget 正常显示。</p>
        <p>这些数据不会上传到服务器，不会用于分析，不会用于广告，也不会分享给第三方。</p>
      </section>
      <section>
        <h2>账号</h2>
        <p>余生啊不提供账号系统，也不要求注册或登录。</p>
      </section>
      <section>
        <h2>网络</h2>
        <p>余生啊的核心功能不依赖网络服务。App 不会将你的设置或使用情况发送到开发者服务器。</p>
      </section>
      <section>
        <h2>通知</h2>
        <p>余生啊提供可选的每周通知功能，默认关闭。只有在你主动开启并授权通知后，系统才会发送本地通知。</p>
        <p>你可以随时在 App 设置或 iOS 系统设置中关闭通知。</p>
      </section>
      <section>
        <h2>Widget</h2>
        <p>余生啊使用 App Group 在主 App 和 Widget 之间共享本地设置，以便 Widget 能显示与你在 App 中一致的数字。共享范围仅限你的设备本地。</p>
      </section>
      <section>
        <h2>付费</h2>
        <p>余生啊为付费买断 App，不包含广告、订阅或内购。</p>
      </section>
      <section>
        <h2>联系</h2>
        <p>如有问题，可以通过以下网站联系开发者：</p>
        <p><a href="https://xuyi.dev">https://xuyi.dev</a></p>
      </section>
    </main>`;
  }

  return `<main data-seo-snapshot>
    <h1>${escapeHtml(seo.title)}</h1>
    <p>${escapeHtml(seo.description)}</p>
    <p><a href="https://clibo.us/">Clibo home</a></p>
  </main>`;
}

function buildLandingSnapshot(page) {
  const sections = page.sections.map((section) => {
    const bullets = section.bullets
      ? `
      <ul>
        ${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("\n        ")}
      </ul>`
      : "";

    return `
      <section>
        <h2>${escapeHtml(section.heading)}</h2>
        <p>${escapeHtml(section.body)}</p>${bullets}
      </section>`;
  }).join("");

  const related = page.related.map((path) => {
    const relatedSeo = SEO_ROUTES[path];
    return `<li><a href="${escapeAttr(path)}">${escapeHtml(relatedSeo?.title || path)}</a></li>`;
  }).join("\n          ");

  return `<main data-seo-snapshot>
      <p>${escapeHtml(page.eyebrow)}</p>
      <h1>${escapeHtml(page.title)}</h1>
      <p>${escapeHtml(page.lede)}</p>
      ${sections}
      <section>
        <h2>${escapeHtml(page.ctaHeading)}</h2>
        <p>${escapeHtml(page.ctaBody)}</p>
        <p><a href="https://releases.clibo.us/Clibo-1.2.11-35.dmg">Download Free Trial</a></p>
        <p><a href="https://clibo.us/docs">Read Clibo documentation</a></p>
      </section>
      <nav aria-label="Related Clibo guides">
        <h2>Related guides</h2>
        <ul>
          ${related}
          <li><a href="/docs">Clibo Documentation</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>
    </main>`;
}

async function writeRouteHtml(route, html) {
  const output =
    route === "/"
      ? join(DIST_DIR, "index.html")
      : route.endsWith("/")
        ? join(DIST_DIR, route.slice(1), "index.html")
        : join(DIST_DIR, route.slice(1));

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

for (const seo of Object.values(SEO_ROUTES)) {
  await writeRouteHtml(seo.path, injectSeo(template, seo));
}

await writeFile(join(DIST_DIR, "404.html"), buildNotFoundHtml(template));
await writeFile(join(DIST_DIR, "robots.txt"), buildRobots());
await writeFile(join(DIST_DIR, "sitemap.xml"), buildSitemap());
