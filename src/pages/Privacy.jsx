import React from "react";
import { Link } from "react-router-dom";
import I18nText from "../components/I18nText.jsx";
import "../styles/privacy.css";

export default function Privacy() {
  return (
    <>
      <header className="privacy-header">
        <Link className="privacy-brand" to="/" aria-label="Clibo home">
          <img className="privacy-logo" src="/assets/clibo-icon.png" alt="" />
          <span>Clibo</span>
        </Link>
      </header>

      <main className="privacy-main">
        <h1>
          <I18nText
            t={{
              en: "Privacy Policy",
              zh: "隐私政策",
              ja: "プライバシーポリシー",
              ko: "개인정보 처리방침",
              fr: "Politique de confidentialité",
              de: "Datenschutzrichtlinie",
              it: "Informativa sulla privacy",
              es: "Política de privacidad",
            }}
          />
        </h1>
        <p className="updated">
          <I18nText
            t={{
              en: "Last updated: May 28, 2026",
              zh: "最后更新：2026年5月28日",
              ja: "最終更新日：2026年5月28日",
              ko: "마지막 업데이트: 2026년 5월 28일",
              fr: "Dernière mise à jour : 28 mai 2026",
              de: "Zuletzt aktualisiert: 28. Mai 2026",
              it: "Ultimo aggiornamento: 28 maggio 2026",
              es: "Última actualización: 28 de mayo de 2026",
            }}
          />
        </p>

        <section>
          <h2>
            <I18nText
              t={{
                en: "1. Overview",
                zh: "1. 概述",
                ja: "1. 概要",
                ko: "1. 개요",
                fr: "1. Vue d'ensemble",
                de: "1. Übersicht",
                it: "1. Panoramica",
                es: "1. Descripción general",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo is a macOS clipboard manager built with privacy as a core principle. Your clipboard data never leaves your Mac. We do not operate servers that collect, store, or transmit your clipboard content.",
              zh: "Clibo 是一款以隐私为核心原则的 macOS 剪贴板管理器。你的剪贴板数据永远不会离开你的 Mac。我们不运营任何收集、存储或传输你剪贴板内容的服务器。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "2. Data Stored Locally",
                zh: "2. 本地存储的数据",
                ja: "2. ローカルに保存されるデータ",
                ko: "2. 로컬에 저장되는 데이터",
                fr: "2. Données stockées localement",
                de: "2. Lokal gespeicherte Daten",
                it: "2. Dati archiviati localmente",
                es: "2. Datos almacenados localmente",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "All clipboard history is stored in a local SQLite database on your Mac. This includes:",
              zh: "所有剪贴板历史都存储在你 Mac 上的本地 SQLite 数据库中。包括：",
            }}
          />
          <ul>
            <li>
              <I18nText
                t={{
                  en: "Text, links, code, and images you copy",
                  zh: "你复制的文本、链接、代码和图片",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Timestamps and content type metadata",
                  zh: "时间戳和内容类型元数据",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Pinned snippets you choose to save permanently",
                  zh: "你选择永久保存的 Pin 片段",
                }}
              />
            </li>
          </ul>
          <I18nText
            as="p"
            t={{
              en: "This data never leaves your device. We have no access to it, and no third party receives it through Clibo.",
              zh: "这些数据永远不会离开你的设备。我们无法访问它，也没有第三方通过 Clibo 获取它。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "3. Password & Sensitive Content",
                zh: "3. 密码和敏感内容",
                ja: "3. パスワードと機密コンテンツ",
                ko: "3. 비밀번호 및 민감한 콘텐츠",
                fr: "3. Mots de passe et contenu sensible",
                de: "3. Passwörter und sensible Inhalte",
                it: "3. Password e contenuti sensibili",
                es: "3. Contraseñas y contenido sensible",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo automatically detects and excludes content copied from password managers (such as 1Password, Bitwarden, and Apple Passwords). Clipboard entries marked as concealed or coming from known password manager bundle IDs are never saved to history.",
              zh: "Clibo 会自动检测并排除从密码管理器（如 1Password、Bitwarden、Apple 密码）复制的内容。标记为隐藏或来自已知密码管理器 Bundle ID 的剪贴板条目不会被保存到历史记录中。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "4. AI Features (BYOK)",
                zh: "4. AI 功能（自带 API Key）",
                ja: "4. AI機能（BYOK）",
                ko: "4. AI 기능 (BYOK)",
                fr: "4. Fonctionnalités IA (BYOK)",
                de: "4. KI-Funktionen (BYOK)",
                it: "4. Funzionalità AI (BYOK)",
                es: "4. Funciones de IA (BYOK)",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo offers optional AI-powered actions such as translate, rewrite, and summarize. These features follow a Bring Your Own Key (BYOK) model:",
              zh: "Clibo 提供可选的 AI 驱动操作，如翻译、改写和总结。这些功能遵循自带 API Key 模式：",
            }}
          />
          <ul>
            <li>
              <I18nText
                t={{
                  en: "You provide your own API key (OpenAI, Anthropic, or Gemini)",
                  zh: "你提供自己的 API Key（OpenAI、Anthropic 或 Gemini）",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Your API key is stored securely in the macOS Keychain",
                  zh: "你的 API Key 安全存储在 macOS 钥匙串中",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Only the specific clip you choose to process is sent to the AI provider's API",
                  zh: "只有你选择处理的特定剪贴内容会被发送到 AI 提供商的 API",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Clibo never sends clipboard data to our own servers",
                  zh: "Clibo 永远不会将剪贴板数据发送到我们自己的服务器",
                }}
              />
            </li>
          </ul>
          <I18nText
            as="p"
            t={{
              en: "When you use AI features, data transmission is governed by the AI provider's own privacy policy. We recommend reviewing their policies before use.",
              zh: "使用 AI 功能时，数据传输受 AI 提供商自身的隐私政策约束。我们建议在使用前查阅相关供应商的隐私政策。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "5. Payments & Licensing",
                zh: "5. 支付和授权",
                ja: "5. 支払いとライセンス",
                ko: "5. 결제 및 라이선스",
                fr: "5. Paiements et licences",
                de: "5. Zahlungen und Lizenzen",
                it: "5. Pagamenti e licenze",
                es: "5. Pagos y licencias",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo uses Dodo Payments as our payment processor. When you purchase a license, Dodo Payments collects billing information (email, payment method, and transaction details) necessary to complete your purchase. This data is processed under Dodo Payments' privacy policy and is not shared with Clibo beyond what is needed for license delivery and support.",
              zh: "Clibo 使用 Dodo Payments 作为支付处理商。购买许可证时，Dodo Payments 会收集完成购买所需的账单信息（邮箱、支付方式和交易详情）。这些数据根据 Dodo Payments 的隐私政策处理，除许可证交付和支持所需的必要信息外，不会与 Clibo 共享。",
            }}
          />
          <I18nText
            as="p"
            t={{
              en: "License activation validates your license key against Dodo Payments' public API. The activation transmits your license key and a device identifier (your Mac's name) to Dodo Payments. No clipboard data is included.",
              zh: "许可证激活会通过 Dodo Payments 的公共 API 验证你的 License Key。激活过程仅向 Dodo Payments 传输你的 License Key 和设备标识符（你的 Mac 名称）。不包含任何剪贴板数据。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "6. Crash Reports & Diagnostics",
                zh: "6. 崩溃报告和诊断",
                ja: "6. クラッシュレポートと診断",
                ko: "6. 충돌 보고서 및 진단",
                fr: "6. Rapports de plantage et diagnostics",
                de: "6. Absturzberichte und Diagnose",
                it: "6. Segnalazioni di arresto anomalo e diagnostica",
                es: "6. Informes de errores y diagnósticos",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo does not automatically send crash reports or usage analytics. If you contact support with a crash log, you choose what information to share. We may ask for diagnostic information to help troubleshoot issues — sharing this is always voluntary.",
              zh: "Clibo 不会自动发送崩溃报告或使用分析数据。如果你联系支持并附上崩溃日志，你自行选择要分享的信息。我们可能会请求诊断信息以帮助排除问题——分享这些信息始终是你自愿的行为。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "7. Website",
                zh: "7. 网站",
                ja: "7. ウェブサイト",
                ko: "7. 웹사이트",
                fr: "7. Site web",
                de: "7. Website",
                it: "7. Sito web",
                es: "7. Sitio web",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Our website (clibo.us) is a static site hosted on Cloudflare Pages. We do not use analytics scripts, tracking cookies, or any form of user tracking on our website. Cloudflare may process access logs as part of its infrastructure, subject to Cloudflare's privacy policy.",
              zh: "我们的网站（clibo.us）是托管在 Cloudflare Pages 上的静态网站。我们不在网站上使用分析脚本、跟踪 Cookie 或任何形式的用户跟踪。Cloudflare 作为基础设施的一部分可能会处理访问日志，这受 Cloudflare 隐私政策的约束。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "8. Children's Privacy",
                zh: "8. 儿童隐私",
                ja: "8. 子どものプライバシー",
                ko: "8. 어린이 개인정보 보호",
                fr: "8. Confidentialité des enfants",
                de: "8. Datenschutz für Kinder",
                it: "8. Privacy dei bambini",
                es: "8. Privacidad de los niños",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo is not directed to children under the age of 13, and we do not knowingly collect personal information from children.",
              zh: "Clibo 不面向 13 岁以下的儿童，我们不会有意收集儿童的个人信息。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "9. Changes to This Policy",
                zh: "9. 政策变更",
                ja: "9. 本ポリシーの変更",
                ko: "9. 본 정책 변경",
                fr: "9. Modifications de cette politique",
                de: "9. Änderungen dieser Richtlinie",
                it: "9. Modifiche alla presente informativa",
                es: "9. Cambios a esta política",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "We may update this privacy policy from time to time. The latest version will always be available at this page. Significant changes will be noted in the app's release notes.",
              zh: "我们可能会不时更新本隐私政策。最新版本将始终在此页面提供。重大变更将在应用的发行说明中注明。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText
              t={{
                en: "10. Contact",
                zh: "10. 联系方式",
                ja: "10. お問い合わせ",
                ko: "10. 문의",
                fr: "10. Contact",
                de: "10. Kontakt",
                it: "10. Contatto",
                es: "10. Contacto",
              }}
            />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "If you have questions about this privacy policy or Clibo's data practices, please contact us at ",
              zh: "如果你对本隐私政策或 Clibo 的数据处理方式有任何疑问，请联系 ",
            }}
          />
          <a className="privacy-email" href="mailto:ilikexff@gmail.com">
            ilikexff@gmail.com
          </a>
          <span>.</span>
        </section>
      </main>

      <footer className="privacy-footer">
        <div className="privacy-footer-left">
          <span className="privacy-footer-brand">
            <img className="privacy-logo" src="/assets/clibo-icon.png" alt="" />
            <span>Clibo</span>
          </span>
          <span>© 2026 Clibo</span>
        </div>
        <nav className="privacy-footer-links" aria-label="Footer navigation">
          <Link to="/privacy">Privacy</Link>
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
    </>
  );
}
