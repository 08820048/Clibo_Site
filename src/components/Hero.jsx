import React from "react";
import { useLang } from "../context/LangContext.jsx";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const HERO_TITLE = {
  en: [[{ text: "Clibo" }]],
  zh: [[{ text: "Clibo" }]],
  ja: [[{ text: "Clibo" }]],
  ko: [[{ text: "Clibo" }]],
  fr: [[{ text: "Clibo" }]],
  de: [[{ text: "Clibo" }]],
  it: [[{ text: "Clibo" }]],
  es: [[{ text: "Clibo" }]],
};

function AnimatedHeroTitle() {
  const { lang } = useLang();
  const lines = HERO_TITLE[lang] || HERO_TITLE.en;
  let step = 0;

  return (
    <span className={`hero-title-lines ${lang}`}>
      {lines.map((line, lineIndex) => (
        <span className="hero-title-line" key={lineIndex}>
          {line.map((part, partIndex) => {
            const Tag = part.emphasis ? "em" : "span";
            const style = { "--word-delay": `${0.08 + step * 0.075}s` };
            step += 1;
            return (
              <Tag
                className="hero-title-word"
                style={style}
                key={`${part.text}-${partIndex}`}
              >
                {part.text}
              </Tag>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="badge reveal" style={{ "--delay": "40ms" }}>
            <I18nText
              t={{
                en: "Native Mac clipboard utility · v1.0.8 · macOS 13+",
                zh: "原生 Mac 剪贴板工具 · v1.0.8 · macOS 13+",
                ja: "ネイティブ Mac クリップボードツール · v1.0.8 · macOS 13+",
                ko: "네이티브 Mac 클립보드 도구 · v1.0.8 · macOS 13+",
                fr: "Utilitaire presse-papiers Mac natif · v1.0.8 · macOS 13+",
                de: "Native Mac-Zwischenablage · v1.0.8 · macOS 13+",
                it: "Utility clipboard Mac nativa · v1.0.8 · macOS 13+",
                es: "Utilidad nativa de portapapeles para Mac · v1.0.8 · macOS 13+",
              }}
            />
          </div>
          <h1 id="hero-title" className="hero-title reveal" style={{ "--delay": "130ms" }}>
            <AnimatedHeroTitle />
          </h1>
          <p className="subtitle reveal" style={{ "--delay": "220ms" }}>
            <AnimatedI18nText
              t={{
                en: "Keep every copy close, search it instantly, and turn useful clips into action.",
                zh: "保存每一次复制，快速找回，并把有用内容直接变成行动。",
                ja: "コピーした内容を手元に残し、すばやく検索して、そのまま次の作業へ。",
                ko: "복사한 내용을 가까이에 두고, 즉시 찾아서 바로 다음 작업으로 이어가세요.",
                fr: "Gardez chaque copie a portee, retrouvez-la vite et transformez-la en action.",
                de: "Alles Kopierte griffbereit behalten, sofort finden und direkt weiterverwenden.",
                it: "Tieni ogni copia a portata, trovala subito e trasformala in azione.",
                es: "Guarda cada copia cerca, encuentrala al instante y conviertela en accion.",
              }}
            />
          </p>
          <div className="hero-actions reveal" style={{ "--delay": "310ms" }}>
            <a
              className="button button-primary button-teal"
              href="https://releases.clibo.us/Clibo-1.0.8-11.dmg"
            >
              <I18nText
                t={{
                  en: "Download Free Trial",
                  zh: "下载试用",
                  ja: "無料トライアルをダウンロード",
                  ko: "묣료 체험판 다운로드",
                  fr: "Télécharger l'essai gratuit",
                  de: "Kostenlose Testversion herunterladen",
                  it: "Scarica la prova gratuita",
                  es: "Descargar prueba gratuita",
                }}
              />
            </a>
            <a
              className="button button-primary"
              href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess"
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
          <p className="price-note reveal" style={{ "--delay": "400ms" }}>
            <I18nText
              t={{
                en: "Early Bird: $9 one-time · Regular price $15 · Valid until July 1, 2026",
                zh: "早鸟价：$9 一次买断 · 原价 $15 · 2026年7月1日前有效",
                ja: "早期購入: $9 一回払い · 通常価格 $15 · 2026年7月1日まで有効",
                ko: "얼리버드: $9 일회결제 · 정가 $15 · 2026년 7월 1일까지 유효",
                fr: "Early Bird : $9 unique · Prix normal $15 · Valable jusqu'au 1 juillet 2026",
                de: "Frühbucher: $9 einmalig · Regulärer Preis $15 · Gültig bis 1. Juli 2026",
                it: "Early Bird: $9 una tantum · Prezzo regolare $15 · Valido fino al 1 luglio 2026",
                es: "Early Bird: $9 único · Precio regular $15 · Válido hasta el 1 de julio de 2026",
              }}
            />
          </p>
        </div>

        <figure
          className="hero-screenshot-frame reveal reveal-right"
          style={{ "--delay": "490ms" }}
        >
          <span className="hero-live-dot" aria-hidden="true"></span>
          <img
            src="/assets/hero-dashboard.png"
            alt="Clibo clipboard history dashboard"
          />
        </figure>
      </div>
    </section>
  );
}
