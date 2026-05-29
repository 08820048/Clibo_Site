import React from "react";
import I18nText from "./I18nText.jsx";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="badge reveal" style={{ "--delay": "40ms" }}>
            <I18nText
              t={{
                en: "Now available · macOS 13+",
                zh: "现已推出 · macOS 13+",
                ja: "利用可能 · macOS 13+",
                ko: "사용 가능 · macOS 13+",
                fr: "Disponible · macOS 13+",
                de: "Jetzt verfügbar · macOS 13+",
                it: "Disponibile · macOS 13+",
                es: "Disponible · macOS 13+",
              }}
            />
          </div>
          <h1 id="hero-title" className="reveal" style={{ "--delay": "130ms" }}>
            <I18nText
              t={{
                en: 'Your<br />clipboard,<br />finally<br /><em>smart.</em>',
                zh: '剪贴板，终于变<em>聪明了。</em>',
                ja: 'あなたの<br />クリップボード、<br />ついに<em>賢く。</em>',
                ko: '당신의<br />클립보드,<br />드디어<em>똑똑해지다.</em>',
                fr: 'Votre<br />presse-papiers,<br />enfin<em>intelligent.</em>',
                de: 'Ihre<br />Zwischenablage,<br />endlich<em>schlau.</em>',
                it: 'La tua<br />clipboard,<br />finalmente<em>intelligente.</em>',
                es: 'Tu<br />portapapeles,<br />por fin<em>inteligente.</em>',
              }}
              html
            />
          </h1>
          <p className="subtitle reveal" style={{ "--delay": "220ms" }}>
            <I18nText
              t={{
                en: "Clibo remembers everything you copy — color, code, images, links. Rich previews for every format. AI-powered search that just works. Yours forever for $9.",
                zh: "Clibo 记住你复制的一切。多种格式一键预览，快捷高效。 AI 语义搜索秒速召回。一次买断，永久使用。",
                ja: "Cliboはコピーしたすべてを記憶 — 色、コード、画像、リンク。あらゆる形式のリッチプレビュー。AI検索が自然に機能。$9で永久に。",
                ko: "Clibo가 복사한 모든 것을 기억합니다 — 색상, 코드, 이미지, 링크. 모든 형식의 리치 미리보기. AI 검색이 자연스럽게 작동. $9로 영구 사용.",
                fr: "Clibo mémorise tout ce que vous copiez — couleurs, code, images, liens. Aperçus riches pour chaque format. Recherche IA qui fonctionne. À vous pour $9.",
                de: "Clibo merkt sich alles, was Sie kopieren — Farben, Code, Bilder, Links. Rich-Previews für jedes Format. KI-Suche, die einfach funktioniert. Für $9 für immer Ihre.",
                it: "Clibo ricorda tutto ciò che copi — colori, codice, immagini, link. Anteprime ricche per ogni formato. Ricerca AI che funziona. Tua per sempre a $9.",
                es: "Clibo recuerda todo lo que copias — colores, código, imágenes, enlaces. Previsualizaciones enriquecidas para cada formato. Búsqueda con IA que funciona. Tuyo para siempre por $9.",
              }}
            />
          </p>
          <div className="hero-actions reveal" style={{ "--delay": "310ms" }}>
            <a
              className="button button-primary button-teal"
              href="https://releases.clibo.us/Clibo-1.0.0.dmg"
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
            <a className="text-link" href="#features">
              <I18nText
                t={{
                  en: "See features →",
                  zh: "查看功能 →",
                  ja: "機能を見る →",
                  ko: "기능 보기 →",
                  fr: "Voir les fonctionnalités →",
                  de: "Funktionen ansehen →",
                  it: "Vedi le funzionalità →",
                  es: "Ver funciones →",
                }}
              />
            </a>
          </div>
          <p className="price-note reveal" style={{ "--delay": "400ms" }}>
            <I18nText
              t={{
                en: "Early Bird: $9 one-time · Regular price $15",
                zh: "早鸟价：$9 一次买断 · 原价 $15",
                ja: "早期購入: $9 一回払い · 通常価格 $15",
                ko: "얼리버드: $9 일회결제 · 정가 $15",
                fr: "Early Bird : $9 unique · Prix normal $15",
                de: "Frühbucher: $9 einmalig · Regulärer Preis $15",
                it: "Early Bird: $9 una tantum · Prezzo regolare $15",
                es: "Early Bird: $9 único · Precio regular $15",
              }}
            />
          </p>
        </div>

        <figure className="hero-screenshot-frame reveal" style={{ "--delay": "490ms" }}>
          <img
            src="/assets/hero-dashboard.png"
            alt="Clibo clipboard history dashboard"
          />
        </figure>
      </div>
    </section>
  );
}
