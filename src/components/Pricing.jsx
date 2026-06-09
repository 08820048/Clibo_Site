import React from "react";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const PRICING_FEATURES = [
  {
    en: "Unlimited clipboard history",
    zh: "无限剪贴板历史",
    ja: "無制限のクリップボード履歴",
    ko: "무제한 클립보드 기록",
    fr: "Historique du presse-papiers illimité",
    de: "Unbegrenzter Zwischenablagenverlauf",
    it: "Cronologia clipboard illimitata",
    es: "Historial del portapapeles ilimitado",
  },
  {
    en: "Rich multi-format hover previews",
    zh: "丰富多种格式悬停预览",
    ja: "複数形式のリッチなホバープレビュー",
    ko: "다양한 형식의 풍부한 호버 미리보기",
    fr: "Aperçus riches multi-formats au survol",
    de: "Umfangreiche Hover-Vorschauen für mehrere Formate",
    it: "Anteprime al passaggio ricche e multi-formato",
    es: "Previsualizaciones enriquecidas de varios formatos",
  },
  {
    en: "Translate, rewrite, summarize",
    zh: "翻译、改写、总结",
    ja: "翻訳、書き換え、要約",
    ko: "번역, 재작성, 요약",
    fr: "Traduire, réécrire, résumer",
    de: "Übersetzen, umschreiben, zusammenfassen",
    it: "Traduci, riscrivi, riassumi",
    es: "Traducir, reescribir, resumir",
  },
  {
    en: "Pin snippets forever",
    zh: "永久 Pin 常用片段",
    ja: "スニペットを永久に固定",
    ko: "스니펫 영구 고정",
    fr: "Épingler des extraits pour toujours",
    de: "Snippets dauerhaft anpinnen",
    it: "Fissa snippet per sempre",
    es: "Fija fragmentos para siempre",
  },
  {
    en: "Free updates forever",
    zh: "终身免费更新",
    ja: "永久無料アップデート",
    ko: "평생 무료 업데이트",
    fr: "Mises à jour gratuites à vie",
    de: "Kostenlose Updates auf Dauer",
    it: "Aggiornamenti gratuiti per sempre",
    es: "Actualizaciones gratuitas para siempre",
  },
  {
    en: "2 Mac activations",
    zh: "支持 2 台 Mac 激活",
    ja: "2台のMacで有効化",
    ko: "Mac 2대 활성화",
    fr: "2 activations Mac",
    de: "2 Mac-Aktivierungen",
    it: "2 attivazioni Mac",
    es: "2 activaciones de Mac",
  },
  {
    en: "7-day free trial",
    zh: "7 天免费试用",
    ja: "7日間無料トライアル",
    ko: "7일 무료 체험",
    fr: "Essai gratuit de 7 jours",
    de: "7 Tage kostenlos testen",
    it: "Prova gratuita di 7 giorni",
    es: "Prueba gratuita de 7 días",
  },
];

export default function Pricing() {
  return (
    <section
      className="pricing-band"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="section-heading reveal">
        <p className="section-kicker section-kicker-animated">
          <AnimatedI18nText
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
        </p>
        <h2 id="pricing-title">
          <AnimatedI18nText
            t={{
              en: "One fair price. No subscription.",
              zh: "一次买断 无订阅",
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
          <AnimatedI18nText
            delay={0.18}
            stagger={0.018}
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

      <article className="pricing-card reveal reveal-soft">
        <span className="pricing-shine-badge">
          <I18nText
            t={{
              en: "Launch price · One-time · No subscription",
              zh: "首发价 · 一次买断 · 无订阅",
              ja: "ローンチ価格 · 買い切り · サブスクなし",
              ko: "런칭 가격 · 일회성 · 구독 없음",
              fr: "Prix de lancement · Unique · Sans abonnement",
              de: "Einführungspreis · Einmalig · Kein Abo",
              it: "Prezzo di lancio · Una tantum · Nessun abbonamento",
              es: "Precio de lanzamiento · Pago único · Sin suscripción",
            }}
          />
        </span>
        <p className="price" aria-label="$9">
          <span aria-hidden="true" style={{ "--digit-delay": "80ms" }}>$</span>
          <span aria-hidden="true" style={{ "--digit-delay": "160ms" }}>9</span>
        </p>
        <a
          className="button button-primary pricing-buy"
          href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess"
        >
          <I18nText
            t={{
              en: "Buy Clibo for $9",
              zh: "以 $9 购买 Clibo",
              ja: "Cliboを$9で購入",
              ko: "$9에 Clibo 구매",
              fr: "Acheter Clibo pour 9 $",
              de: "Clibo für 9 $ kaufen",
              it: "Acquista Clibo per 9 $",
              es: "Comprar Clibo por 9 $",
            }}
          />
        </a>
        <p className="pricing-subtitle">
          <AnimatedI18nText
            delay={0.1}
            stagger={0.016}
            t={{
              en: "Early Bird: $9 one-time · Regular price $15 · Valid until July 1, 2026",
              zh: "早鸟价：$9 一次买断 · 正价 $15 · 2026年7月1日前有效",
              ja: "早期価格：$9買い切り · 通常価格$15 · 2026年7月1日まで有効",
              ko: "얼리버드: $9 일회 결제 · 정상가 $15 · 2026년 7월 1일까지 유효",
              fr: "Early Bird : 9 $ en une fois · Prix normal 15 $ · Valable jusqu'au 1 juillet 2026",
              de: "Early Bird: 9 $ einmalig · Regulärer Preis 15 $ · Gültig bis 1. Juli 2026",
              it: "Early Bird: 9 $ una tantum · Prezzo regolare 15 $ · Valido fino al 1 luglio 2026",
              es: "Early Bird: 9 $ pago único · Precio regular 15 $ · Válido hasta el 1 de julio de 2026",
            }}
          />
        </p>
        <p className="original-price">
          <AnimatedI18nText
            delay={0.16}
            stagger={0.018}
            t={{
              en: "One-time purchase · Yours forever",
              zh: "一次买断 · 永久使用",
              ja: "買い切り · ずっと使える",
              ko: "일회 구매 · 영구 사용",
              fr: "Achat unique · À vous pour toujours",
              de: "Einmalkauf · Für immer Ihnen",
              it: "Acquisto una tantum · Tuo per sempre",
              es: "Compra única · Tuyo para siempre",
            }}
          />
        </p>
        <p className="trial-note">
          <AnimatedI18nText
            delay={0.2}
            stagger={0.012}
            t={{
              en: "Lifetime updates · 2 Macs / license · 14-day refund · Cards, Apple Pay, WeChat, and more",
              zh: "终身更新 · 2 台 Mac / 许可证 · 14 天退款 · 支持银行卡、Apple Pay、微信等",
              ja: "永久アップデート · 1ライセンス2台のMac · 14日間返金 · カード、Apple Pay、WeChatなどに対応",
              ko: "평생 업데이트 · 라이선스당 Mac 2대 · 14일 환불 · 카드, Apple Pay, WeChat 등 지원",
              fr: "Mises a jour a vie · 2 Mac / licence · Remboursement 14 jours · Cartes, Apple Pay, WeChat, etc.",
              de: "Lebenslange Updates · 2 Macs / Lizenz · 14 Tage Ruckerstattung · Karten, Apple Pay, WeChat und mehr",
              it: "Aggiornamenti a vita · 2 Mac / licenza · Rimborso di 14 giorni · Carte, Apple Pay, WeChat e altro",
              es: "Actualizaciones de por vida · 2 Mac / licencia · Reembolso de 14 dias · Tarjetas, Apple Pay, WeChat y mas",
            }}
          />
        </p>
        <p className="pricing-free-link">
          <I18nText
            t={{
              en: "or",
              zh: "或",
              ja: "または",
              ko: "또는",
              fr: "ou",
              de: "oder",
              it: "oppure",
              es: "o",
            }}
          />{" "}
          <a href="https://releases.clibo.us/Clibo-1.0.8-11.dmg">
            <I18nText
              t={{
                en: "try it free",
                zh: "免费试用",
                ja: "無料で試す",
                ko: "무료로 사용해 보기",
                fr: "essayer gratuitement",
                de: "kostenlos testen",
                it: "provalo gratis",
                es: "probar gratis",
              }}
            />
          </a>
        </p>

        <ul className="pricing-list" aria-label="Included features">
          {PRICING_FEATURES.map((feature, index) => (
            <li key={index} style={{ "--item-delay": `${index * 45}ms` }}>
              <I18nText t={feature} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
