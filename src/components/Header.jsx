import React, { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext.jsx";
import I18nText from "./I18nText.jsx";

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

export default function Header() {
  const { lang, setLang, langs } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

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
      <a className="brand" href="#top" aria-label="Clibo home">
        <img className="logo-mark" src="/assets/clibo-icon.png" alt="" />
        <span>Clibo</span>
      </a>

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
      </div>
    </header>
  );
}
