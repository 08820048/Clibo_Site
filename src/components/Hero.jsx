import React from "react";
import { useLang } from "../context/LangContext.jsx";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const HERO_TITLE = {
  en: [
    [{ text: "Your" }, { text: "clipboard," }],
    [{ text: "finally" }, { text: "organized.", emphasis: true }],
  ],
  zh: [
    [{ text: "剪贴板，" }],
    [{ text: "终于" }, { text: "井井有条", emphasis: true }],
  ],
  ja: [
    [{ text: "クリップボードを、" }],
    [{ text: "ついに" }, { text: "整理。", emphasis: true }],
  ],
  ko: [
    [{ text: "클립보드," }],
    [{ text: "드디어" }, { text: "정리되다.", emphasis: true }],
  ],
  fr: [
    [{ text: "Votre" }, { text: "presse-papiers," }],
    [{ text: "enfin" }, { text: "organisé.", emphasis: true }],
  ],
  de: [
    [{ text: "Ihre" }, { text: "Zwischenablage," }],
    [{ text: "endlich" }, { text: "organisiert.", emphasis: true }],
  ],
  it: [
    [{ text: "I tuoi" }, { text: "appunti," }],
    [{ text: "finalmente" }, { text: "in ordine.", emphasis: true }],
  ],
  es: [
    [{ text: "Tu" }, { text: "portapapeles," }],
    [{ text: "por fin" }, { text: "organizado.", emphasis: true }],
  ],
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
                en: "Native Mac app · macOS 13+ · No account required",
                zh: "原生 Mac 应用 · macOS 13+ · 无需账号",
                ja: "ネイティブ Mac アプリ · macOS 13+ · アカウント不要",
                ko: "네이티브 Mac 앱 · macOS 13+ · 계정 불필요",
                fr: "App Mac native · macOS 13+ · Aucun compte requis",
                de: "Native Mac-App · macOS 13+ · Kein Account nötig",
                it: "App Mac nativa · macOS 13+ · Nessun account richiesto",
                es: "App Mac nativa · macOS 13+ · Sin cuenta requerida",
              }}
            />
          </div>
          <h1 id="hero-title" className="hero-title reveal" style={{ "--delay": "130ms" }}>
            <AnimatedHeroTitle />
          </h1>
          <p className="subtitle reveal" style={{ "--delay": "220ms" }}>
            <AnimatedI18nText
              t={{
                en: "Everything you copy — text, images, links, colors — stored locally, always searchable, and one keystroke away. Import from Maccy and be up in seconds.",
                zh: "你复制的一切——文字、图片、链接、颜色——都保存在本地，随时搜索，一键调取。支持从 Maccy 导入，几秒上手。",
                ja: "コピーしたすべてのテキスト、画像、リンク、カラーをローカルに保存し、いつでも検索、ワンキーで呼び出し。Maccyからのインポートも数秒。",
                ko: "복사한 모든 것——텍스트, 이미지, 링크, 색상——을 로컬에 저장하고, 언제든 검색, 한 번의 키로 불러오기. Maccy에서 가져오기도 몇 초면 됩니다.",
                fr: "Tout ce que vous copiez — texte, images, liens, couleurs — stocké localement, toujours consultable, à une touche. Importez depuis Maccy en quelques secondes.",
                de: "Alles Kopierte — Text, Bilder, Links, Farben — lokal gespeichert, jederzeit durchsuchbar, einen Tastendruck entfernt. Import aus Maccy in Sekunden.",
                it: "Tutto ciò che copi — testo, immagini, link, colori — archiviato localmente, sempre cercabile, a un tasto di distanza. Importa da Maccy in pochi secondi.",
                es: "Todo lo que copias — texto, imágenes, enlaces, colores — almacenado localmente, siempre consultable, a una tecla. Importa desde Maccy en segundos.",
              }}
            />
          </p>
          <div className="hero-actions reveal" style={{ "--delay": "310ms" }}>
            <a
              className="button button-primary"
              href="https://releases.clibo.us/Clibo-1.1.7-20.dmg"
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
              className="button button-primary button-teal"
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
      </div>
    </section>
  );
}
