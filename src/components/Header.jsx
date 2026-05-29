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

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#features">
          <I18nText
            t={{
              en: "Features",
              zh: "功能",
              ja: "機能",
              ko: "기능",
              fr: "Fonctionnalités",
              de: "Funktionen",
              it: "Funzionalità",
              es: "Funciones",
            }}
          />
        </a>
        <a href="#pricing">
          <I18nText
            t={{
              en: "Pricing",
              zh: "价格",
              ja: "価格",
              ko: "가격",
              fr: "Tarifs",
              de: "Preise",
              it: "Prezzi",
              es: "Precios",
            }}
          />
        </a>
        <a href="#faq">FAQ</a>
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
          className="button button-primary"
          href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAalLXA11xz0qCX"
        >
          <I18nText
            t={{
              en: "Buy - $9",
              zh: "购买 - $9",
              ja: "購入 - $9",
              ko: "구매 - $9",
              fr: "Acheter - $9",
              de: "Kaufen - $9",
              it: "Acquista - $9",
              es: "Comprar - $9",
            }}
          />
        </a>
      </div>
    </header>
  );
}
