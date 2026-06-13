import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_LOCALE,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
  getRouteSeo,
  getStructuredData,
} from "./metadata.js";

function setMeta(selector, createTag, value, attr = "content") {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}

function removeMeta(selector) {
  document.head.querySelector(selector)?.remove();
}

function setJsonLd(data) {
  const id = "structured-data";
  let element = document.getElementById(id);

  if (!data) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(location.pathname);
    const canonical = absoluteUrl(seo.path);
    const image = seo.image;

    document.title = seo.title;

    setMeta('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.name = "description";
      return meta;
    }, seo.description);

    setMeta('meta[name="robots"]', () => {
      const meta = document.createElement("meta");
      meta.name = "robots";
      return meta;
    }, seo.robots);

    setMeta('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    }, canonical, "href");

    setMeta('meta[property="og:site_name"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:site_name");
      return meta;
    }, SITE_NAME);

    setMeta('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    }, seo.title);

    setMeta('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    }, seo.description);

    setMeta('meta[property="og:type"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      return meta;
    }, seo.type);

    setMeta('meta[property="og:url"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    }, canonical);

    if (image) {
      setMeta('meta[property="og:image"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        return meta;
      }, image);

      setMeta('meta[property="og:image:alt"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image:alt");
        return meta;
      }, "Clibo macOS clipboard manager dashboard");
    } else {
      removeMeta('meta[property="og:image"]');
      removeMeta('meta[property="og:image:alt"]');
    }

    setMeta('meta[property="og:locale"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:locale");
      return meta;
    }, DEFAULT_LOCALE);

    setMeta('meta[name="twitter:card"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:card";
      return meta;
    }, image ? "summary_large_image" : "summary");

    setMeta('meta[name="twitter:site"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:site";
      return meta;
    }, TWITTER_HANDLE);

    setMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:title";
      return meta;
    }, seo.title);

    setMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:description";
      return meta;
    }, seo.description);

    if (image) {
      setMeta('meta[name="twitter:image"]', () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:image";
        return meta;
      }, image);
    } else {
      removeMeta('meta[name="twitter:image"]');
    }

    setJsonLd(getStructuredData(seo));
  }, [location.pathname]);

  return null;
}
