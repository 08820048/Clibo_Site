import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";

const LANG_NAMES = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  es: "Español",
};

const NAV_LABELS = {
  en: {
    updates: "Updates",
    feedback: "Feedback",
    docs: "Docs",
    pricing: "Pricing",
  },
  zh: {
    updates: "更新",
    feedback: "反馈",
    docs: "Docs",
    pricing: "价格",
  },
};

export default function Header() {
  const { lang, setLang, langs } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const navLabels = NAV_LABELS[lang] || NAV_LABELS.en;

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="site-nav" data-nav>
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="Clibo home">
          <img className="logo-mark" src="/assets/clibo-icon-64.webp" alt="" width="32" height="32" />
          <span>Clibo</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/releases">{navLabels.updates}</Link>
          <a href="https://clibo.userjot.com" target="_blank" rel="noopener noreferrer">
            {navLabels.feedback}
          </a>
          <Link to="/docs">{navLabels.docs}</Link>
          <a href="/#pricing">{navLabels.pricing}</a>
        </nav>

        <div className="nav-actions">
          <div className={`lang-switcher ${isOpen ? "is-open" : ""}`} ref={ref}>
            <button
              className="lang-switcher-trigger"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Select language"
            >
              <span>{LANG_NAMES[lang]}</span>
              <svg
                className="arrow"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <path d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div className="lang-dropdown">
              {langs.map((l) => (
                <button
                  key={l}
                  className={`lang-option ${l === lang ? "is-active" : ""}`}
                  onClick={() => {
                    setLang(l);
                    setIsOpen(false);
                  }}
                >
                  {LANG_NAMES[l]}
                </button>
              ))}
            </div>
          </div>

          <a
            className="nav-download"
            href="https://releases.clibo.us/Clibo-1.2.11-35.dmg"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
              focusable="false"
            >
              <path d="M11.52 8.43c-.02-1.84 1.5-2.72 1.57-2.77-.86-1.25-2.18-1.42-2.65-1.44-1.12-.11-2.2.66-2.77.66-.58 0-1.45-.64-2.39-.62-1.22.02-2.35.72-2.98 1.82-1.29 2.24-.33 5.54.91 7.35.62.88 1.34 1.86 2.28 1.82.91-.04 1.25-.58 2.36-.58 1.1 0 1.41.58 2.37.56.98-.02 1.6-.89 2.19-1.78.71-1.01.99-2.01 1-2.06-.02-.01-1.87-.72-1.89-2.96ZM9.71 3.03c.5-.62.84-1.45.75-2.29-.72.03-1.62.49-2.13 1.09-.46.53-.87 1.4-.77 2.22.82.06 1.65-.41 2.15-1.02Z" />
            </svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    </header>
  );
}
