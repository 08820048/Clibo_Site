import React from "react";
import I18nText from "./I18nText.jsx";

export default function Pricing() {
  return (
    <section
      className="pricing-band"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="section-heading reveal">
        <p className="section-kicker">Pricing</p>
        <h2 id="pricing-title">
          <I18nText
            t={{
              en: "One fair price. No subscription.",
              zh: "一个清晰价格，无订阅。",
              ja: "わかりやすい価格。サブスクリプションなし。",
              ko: "한 번의 공정한 가격. 구독 없음.",
              fr: "Un prix juste. Pas d'abonnement.",
              de: "Ein fairer Preis. Kein Abo.",
              it: "Un prezzo giusto. Nessun abbonamento.",
              es: "Un precio justo. Sin suscripción.",
            }}
          />
        </h2>
        <p className="section-lede">
          <I18nText
            t={{
              en: "Buy once and keep your clipboard workspace forever.",
              zh: "一次买断，永久拥有你的剪贴板工作台。",
              ja: "一度購入して、クリップボードワークスペースを永久に保持。",
              ko: "한 번 구매하면 클립보드 워크스페이스를 영원히 소유.",
              fr: "Achetez une fois et gardez votre espace de travail presse-papiers pour toujours.",
              de: "Einmal kaufen, Zwischenablagen-Arbeitsplatz für immer behalten.",
              it: "Acquista una volta e conserva il tuo spazio di lavoro clipboard per sempre.",
              es: "Compra una vez y mantén tu espacio de trabajo del portapapeles para siempre.",
            }}
          />
        </p>
      </div>

      <article className="pricing-card reveal">
        <p className="offer-badge">🎉 Early Bird Offer / 早鸟优惠</p>
        <p className="price">$9</p>
        <p className="pricing-subtitle">
          One-time purchase · Yours forever / 一次买断 · 永久使用
        </p>
        <p className="original-price">
          <s>$15</s> <span className="save">Save $6</span>
        </p>

        <ul className="pricing-list">
          <li>
            <span className="check">✓</span>
            <span>Unlimited clipboard history / 无限剪贴板历史</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Rich hover previews / 丰富悬停预览</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Translate, rewrite, summarize / 翻译、改写、总结</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Pin snippets forever / 永久 Pin 常用片段</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Privacy-first, local storage / 本地存储，隐私优先</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Free updates forever / 终身免费更新</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>2 Mac activations / 支持 2 台 Mac 激活</span>
          </li>
        </ul>

        <a
          className="button button-primary button-teal"
          href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAalLXA11xz0qCX"
        >
          Buy Clibo for $9 →
        </a>
        <p className="trial-note">
          14-day free trial · No credit card required to try
        </p>
      </article>
    </section>
  );
}
