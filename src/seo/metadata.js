export const SITE_URL = "https://clibo.us";
export const SITE_NAME = "Clibo";
export const DEFAULT_IMAGE = `${SITE_URL}/assets/hero-dashboard.png`;
export const DEFAULT_LOCALE = "en_US";
export const TWITTER_HANDLE = "@shizouffa";

export const PUBLIC_ROUTES = ["/", "/privacy", "/terms", "/refund", "/releases"];

export const SEO_ROUTES = {
  "/": {
    title: "Clibo - Smart Clipboard Manager for macOS",
    description:
      "Clibo is a privacy-first macOS clipboard manager with local history, rich previews, pinned snippets, AI search, and a 7-day free trial.",
    path: "/",
    type: "website",
    image: DEFAULT_IMAGE,
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
      "See the latest Clibo releases, product changes, feature updates, fixes, and localization improvements.",
    path: "/releases",
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
    title: "Clibo - Smart Clipboard Manager for macOS",
    description:
      "Clibo is a privacy-first macOS clipboard manager with local history, rich previews, pinned snippets, AI search, and a 7-day free trial.",
    path: "/",
    type: "website",
    image: DEFAULT_IMAGE,
    robots: "noindex, follow",
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
      url: `${SITE_URL}/`,
      inLanguage: "en",
    });
  }

  if (seo.schema?.includes("software")) {
    graph.push({
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS 13 or later",
      description: seo.description,
      url: `${SITE_URL}/`,
      downloadUrl: "https://releases.clibo.us/Clibo-1.0.3-6.dmg",
      image: DEFAULT_IMAGE,
      offers: {
        "@type": "Offer",
        price: "9",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
      },
      featureList: [
        "Local clipboard history",
        "Rich previews for text, images, code, links, colors, and files",
        "Pinned snippets",
        "Quick panel",
        "Optional BYOK AI actions",
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
