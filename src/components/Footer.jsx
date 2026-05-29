import React from "react";
import { Link } from "react-router-dom";
import I18nText from "./I18nText.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="footer-brand">
          <img className="logo-mark" src="/assets/clibo-icon.png" alt="" />
          <span>Clibo</span>
        </span>
        <span>
          <I18nText
            t={{
              en: "© 2026 Clibo · Made with ♥ for Mac users",
              zh: "© 2026 Clibo · 为 Mac 用户用心打造",
              ja: "© 2026 Clibo · Macユーザーのために作りました",
              ko: "© 2026 Clibo · Mac 사용자를 위해 만들었습니다",
              fr: "© 2026 Clibo · Conçu avec ♥ pour les utilisateurs Mac",
              de: "© 2026 Clibo · Mit ♥ für Mac-Nutzer gemacht",
              it: "© 2026 Clibo · Creato con ♥ per utenti Mac",
              es: "© 2026 Clibo · Hecho con ♥ para usuarios de Mac",
            }}
          />
        </span>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/privacy">
          <I18nText
            t={{
              en: "Privacy",
              zh: "隐私",
              ja: "プライバシー",
              ko: "개인정보",
              fr: "Confidentialité",
              de: "Datenschutz",
              it: "Privacy",
              es: "Privacidad",
            }}
          />
        </Link>
        <Link to="/terms">
          <I18nText
            t={{
              en: "Terms",
              zh: "条款",
              ja: "利用規約",
              ko: "약관",
              fr: "Conditions",
              de: "Bedingungen",
              it: "Termini",
              es: "Términos",
            }}
          />
        </Link>
        <Link to="/refund">
          <I18nText
            t={{
              en: "Refunds",
              zh: "退款",
              ja: "返金",
              ko: "환불",
              fr: "Remboursements",
              de: "Rückerstattungen",
              it: "Rimborsi",
              es: "Reembolsos",
            }}
          />
        </Link>
        <Link to="/releases">
          <I18nText
            t={{
              en: "Releases",
              zh: "更新",
              ja: "リリース",
              ko: "릴리스",
              fr: "Versions",
              de: "Versionen",
              it: "Release",
              es: "Versiones",
            }}
          />
        </Link>
        <a href="mailto:ilikexff@gmail.com" aria-label="Email support">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 4-10 7.85L2 4" />
          </svg>
        </a>
        <a href="https://x.com/shizouffa" aria-label="X / Twitter">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
}
