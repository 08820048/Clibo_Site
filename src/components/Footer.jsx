import React from "react";
import { Link } from "react-router-dom";
import I18nText from "./I18nText.jsx";
import Signature from "./Signature.jsx";

const DOWNLOAD_URL = "https://releases.clibo.us/Clibo-1.2.11-35.dmg";
const FOOTER_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" focusable="false">
      <path d="M11.52 8.43c-.02-1.84 1.5-2.72 1.57-2.77-.86-1.25-2.18-1.42-2.65-1.44-1.12-.11-2.2.66-2.77.66-.58 0-1.45-.64-2.39-.62-1.22.02-2.35.72-2.98 1.82-1.29 2.24-.33 5.54.91 7.35.62.88 1.34 1.86 2.28 1.82.91-.04 1.25-.58 2.36-.58 1.1 0 1.41.58 2.37.56.98-.02 1.6-.89 2.19-1.78.71-1.01.99-2.01 1-2.06-.02-.01-1.87-.72-1.89-2.96ZM9.71 3.03c.5-.62.84-1.45.75-2.29-.72.03-1.62.49-2.13 1.09-.46.53-.87 1.4-.77 2.22.82.06 1.65-.41 2.15-1.02Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <video className="footer-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={FOOTER_VIDEO_URL} type="video/mp4" />
      </video>
      <div className="footer-video-overlay" />

      <div className="footer-content">
        <div className="footer-intro">
          <div className="footer-brand">
            <img className="footer-logo" src="/assets/clibo-icon-64.webp" alt="" width="40" height="40" />
            <strong>Clibo</strong>
          </div>
          <h2>
            <I18nText
              t={{
                en: "Leave every copy within reach.",
                zh: "让每一次复制都触手可及。",
                ja: "すべてのコピーを、すぐ届く場所に。",
                ko: "모든 복사를 바로 꺼낼 수 있게.",
                fr: "Gardez chaque copie à portée de main.",
                de: "Jede Kopie bleibt griffbereit.",
                it: "Tieni ogni copia a portata di mano.",
                es: "Mantén cada copia siempre a mano.",
              }}
            />
          </h2>
          <p>
            <I18nText
              t={{
                en: "A private Mac clipboard workspace for history, previews, snippets, and fast search.",
                zh: "面向 Mac 的私密剪贴板工作台，管理历史、预览、片段和快速搜索。",
                ja: "履歴、プレビュー、スニペット、高速検索のためのプライベートなMacクリップボードワークスペース。",
                ko: "기록, 미리보기, 스니펫, 빠른 검색을 위한 개인 Mac 클립보드 워크스페이스.",
                fr: "Un espace presse-papiers Mac privé pour l'historique, les aperçus, les extraits et la recherche rapide.",
                de: "Ein privater Mac-Zwischenablagenarbeitsplatz für Verlauf, Vorschau, Snippets und schnelle Suche.",
                it: "Uno spazio clipboard Mac privato per cronologia, anteprime, snippet e ricerca veloce.",
                es: "Un espacio privado de portapapeles para Mac con historial, vistas previas, fragmentos y búsqueda rápida.",
              }}
            />
          </p>
          <a className="footer-download" href={DOWNLOAD_URL}>
            <AppleIcon />
            <span>
              <I18nText
                t={{
                  en: "Download for Mac",
                  zh: "下载 Mac 版",
                  ja: "Mac版をダウンロード",
                  ko: "Mac용 다운로드",
                  fr: "Télécharger pour Mac",
                  de: "Für Mac laden",
                  it: "Scarica per Mac",
                  es: "Descargar para Mac",
                }}
              />
            </span>
          </a>
          <div className="footer-credit">
            <span className="footer-copyright">
              <I18nText
                t={{
                  en: "© 2026 Clibo - All rights reserved",
                  zh: "© 2026 Clibo - 保留所有权利",
                  ja: "© 2026 Clibo - All rights reserved",
                  ko: "© 2026 Clibo - All rights reserved",
                  fr: "© 2026 Clibo - Tous droits réservés",
                  de: "© 2026 Clibo - Alle Rechte vorbehalten",
                  it: "© 2026 Clibo - Tutti i diritti riservati",
                  es: "© 2026 Clibo - Todos los derechos reservados",
                }}
              />
            </span>
            <span className="footer-author">
              <I18nText
                t={{
                  en: "Built with",
                  zh: "Built with",
                  ja: "Built with",
                  ko: "Built with",
                  fr: "Built with",
                  de: "Built with",
                  it: "Built with",
                  es: "Built with",
                }}
              />
              <span className="footer-heart" aria-hidden="true">💙</span>
              <I18nText
                t={{
                  en: "by",
                  zh: "by",
                  ja: "by",
                  ko: "by",
                  fr: "by",
                  de: "by",
                  it: "by",
                  es: "by",
                }}
              />
              <a href="https://xuyi.dev" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Cerebellum</span>
                <Signature text="Cerebellum" fontSize={27} duration={1.15} delay={0.08} />
              </a>
            </span>
          </div>
          <a
            className="product-hunt-badge"
            href="https://www.producthunt.com/products/clibo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-clibo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Clibo makes your clipboard finally smart. | Product Hunt"
              width="250"
              height="54"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1159074&theme=light&t=1780319420417"
            />
          </a>
        </div>

        <nav className="footer-group" aria-label="Footer menu">
          <strong>
            <I18nText
              t={{
                en: "Menu",
                zh: "菜单",
                ja: "メニュー",
                ko: "메뉴",
                fr: "Menu",
                de: "Menü",
                it: "Menu",
                es: "Menú",
              }}
            />
          </strong>
          <Link to="/#pricing">
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
          </Link>
          <Link to="/docs">
            <I18nText
              t={{
                en: "Docs",
                zh: "Docs",
                ja: "Docs",
                ko: "Docs",
                fr: "Docs",
                de: "Docs",
                it: "Docs",
                es: "Docs",
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
          <Link to="/support">
            <I18nText
              t={{
                en: "Support",
                zh: "支持",
                ja: "サポート",
                ko: "지원",
                fr: "Support",
                de: "Support",
                it: "Supporto",
                es: "Soporte",
              }}
            />
          </Link>
        </nav>

        <nav className="footer-group" aria-label="Footer legal">
          <strong>
            <I18nText
              t={{
                en: "Legal",
                zh: "法律",
                ja: "法務",
                ko: "법률",
                fr: "Légal",
                de: "Rechtliches",
                it: "Legale",
                es: "Legal",
              }}
            />
          </strong>
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
          <a href="mailto:ilikexff@gmail.com">
            <I18nText
              t={{
                en: "Email support",
                zh: "邮件支持",
                ja: "メールサポート",
                ko: "이메일 지원",
                fr: "Support par e-mail",
                de: "E-Mail-Support",
                it: "Supporto email",
                es: "Soporte por email",
              }}
            />
          </a>
        </nav>

        <nav className="footer-group" aria-label="More products">
          <strong>
            <I18nText
              t={{
                en: "More",
                zh: "更多",
                ja: "その他",
                ko: "더보기",
                fr: "Plus",
                de: "Mehr",
                it: "Altro",
                es: "Más",
              }}
            />
          </strong>
          <a href="https://clibo.us">clibo.us</a>
          <a href="https://clibo.userjot.com" target="_blank" rel="noopener noreferrer">
            <I18nText
              t={{
                en: "Feedback",
                zh: "反馈",
                ja: "フィードバック",
                ko: "피드백",
                fr: "Retour",
                de: "Feedback",
                it: "Feedback",
                es: "Comentarios",
              }}
            />
          </a>
          <a href="https://91wink.com/" target="_blank" rel="noopener noreferrer">
            <I18nText
              t={{
                en: "Indie Dev Frontline",
                zh: "独立开发前线",
                ja: "Indie Dev Frontline",
                ko: "Indie Dev Frontline",
                fr: "Indie Dev Frontline",
                de: "Indie Dev Frontline",
                it: "Indie Dev Frontline",
                es: "Indie Dev Frontline",
              }}
            />
          </a>
          <a href="https://x.com/shizouffa" target="_blank" rel="noopener noreferrer">
            X / Twitter
          </a>
        </nav>
      </div>

      <span className="footer-wordmark" aria-hidden="true">Clibo</span>
    </footer>
  );
}
