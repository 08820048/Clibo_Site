export const SITE_URL = "https://clibo.us";
export const SITE_NAME = "Clibo";
export const DEFAULT_IMAGE = `${SITE_URL}/assets/hero-dashboard.png`;
export const DEFAULT_LOCALE = "en_US";
export const TWITTER_HANDLE = "@shizouffa";

export const PUBLIC_ROUTES = ["/", "/privacy", "/terms", "/refund", "/releases", "/docs", "/support"];

export const SEO_ROUTES = {
  "/": {
    title: "Clibo — Private Clipboard Manager with AI Search for Mac",
    description:
      "Clibo is a native macOS clipboard manager with AI semantic search, one-click Maccy import, rich previews, iCloud sync, and BYOK AI actions. All data stays local. $9 one-time, no subscription.",
    path: "/",
    type: "website",
    image: null,
    robots: "index, follow",
    schema: ["website", "software"],
  },
  "/privacy": {
    title: "Privacy Policy - Clibo",
    description:
      "Read Clibo's privacy policy and learn how clipboard history, local SQLite storage, sensitive content, and optional AI features are handled.",
    path: "/privacy",
    type: "article",
    image: `${SITE_URL}/assets/privacy.png`,
    robots: "index, follow",
    schema: ["breadcrumb"],
  },
  "/terms": {
    title: "Terms of Service - Clibo",
    description:
      "Review the terms that apply when downloading, installing, purchasing, or using Clibo for macOS.",
    path: "/terms",
    type: "article",
    image: DEFAULT_IMAGE,
    robots: "index, follow",
    schema: ["breadcrumb"],
  },
  "/refund": {
    title: "Refund Policy - Clibo",
    description:
      "Learn about Clibo's refund policy, trial recommendation, license revocation after refunds, and how to request support.",
    path: "/refund",
    type: "article",
    image: DEFAULT_IMAGE,
    robots: "index, follow",
    schema: ["breadcrumb"],
  },
  "/releases": {
    title: "Release Notes - Clibo",
    description:
      "See the latest Clibo 1.2.1 release notes, product changes, feature updates, fixes, and localization improvements.",
    path: "/releases",
    type: "article",
    image: DEFAULT_IMAGE,
    robots: "index, follow",
    schema: ["breadcrumb"],
  },
  "/support": {
    title: "Support - Clibo",
    description:
      "Get Clibo support for macOS requirements, clipboard permissions, privacy settings, troubleshooting, and contact information.",
    path: "/support",
    type: "article",
    image: DEFAULT_IMAGE,
    robots: "index, follow",
    schema: ["breadcrumb"],
  },
  "/success": {
    title: "Purchase Complete - Clibo",
    description:
      "Clibo purchase success page for license activation and download.",
    path: "/success",
    type: "website",
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow",
    schema: [],
  },
  "/docs": {
    title: "Docs - Clibo",
    description:
      "Learn how to use Clibo for clipboard history, quick panel workflows, snippets, privacy controls, macOS integrations, pinned sync, and Maccy import.",
    path: "/docs",
    type: "article",
    image: DEFAULT_IMAGE,
    robots: "index, follow",
    schema: ["breadcrumb"],
  },
  "/yushenga/privacy.html": {
    title: "余生啊隐私政策",
    description:
      "余生啊不收集任何用户数据。当前年龄、预期寿命、显示单位、通知和短语偏好仅保存在设备本地。",
    path: "/yushenga/privacy.html",
    type: "article",
    image: null,
    robots: "index, follow",
    schema: [],
  },
  "/404": {
    title: "Page Not Found - Clibo",
    description: "The requested Clibo page could not be found.",
    path: "/404",
    type: "website",
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow",
    schema: [],
  },
};

export function getRouteSeo(pathname) {
  const normalized = normalizePath(pathname);
  return SEO_ROUTES[normalized] || SEO_ROUTES["/404"];
}

export function normalizePath(pathname = "/") {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  if (path !== "/" && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function getStructuredData(seo) {
  const graph = [];

  if (seo.schema?.includes("website")) {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "Clibo Mac Clipboard Manager",
      url: `${SITE_URL}/`,
      inLanguage: "en",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    });

    graph.push({
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/clibo-icon.png`,
      sameAs: [
        "https://www.producthunt.com/products/clibo",
      ],
    });
  }

  if (seo.schema?.includes("software")) {
    graph.push({
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Clipboard manager",
      operatingSystem: "macOS 13 or later",
      softwareVersion: "1.1.7",
      description: seo.description,
      url: `${SITE_URL}/`,
      downloadUrl: "https://releases.clibo.us/Clibo-1.1.7-20.dmg",
      image: DEFAULT_IMAGE,
      screenshot: DEFAULT_IMAGE,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      offers: {
        "@type": "Offer",
        price: "9",
        priceCurrency: "USD",
        priceValidUntil: "2026-07-01",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
      },
      featureList: [
        "AI semantic search — find anything you've ever copied, in your own words (BYOK)",
        "One-click Maccy import",
        "Local clipboard history for text, images, links, files, colors, dates, emails, and phone numbers",
        "Rich hover previews",
        "Pinned clipboard sync across Macs with iCloud Drive or synced folders",
        "Pinned snippets and global snippet shortcuts",
        "Quick panel and fast search",
        "Native macOS actions for Calendar, Contacts, Messages, Notes, and Reminders",
        "Optional BYOK AI actions for translate, rewrite, summarize, and more",
        "7-day free trial",
      ],
    });
  }

  if (seo.schema?.includes("breadcrumb") && seo.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: SITE_NAME,
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: seo.title.replace(` - ${SITE_NAME}`, ""),
          item: absoluteUrl(seo.path),
        },
      ],
    });
  }

  return graph.length
    ? {
        "@context": "https://schema.org",
        "@graph": graph,
      }
    : null;
}
