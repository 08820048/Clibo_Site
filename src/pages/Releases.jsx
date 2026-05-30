import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

const RELEASES = [
  {
    version: "1.0.0",
    date: "2026-05-28",
    title: {
      en: "Initial public release",
      zh: "首个公开版本",
      ja: "初回公開リリース",
      ko: "첫 공개 릴리스",
      fr: "Premiere version publique",
      de: "Erste offentliche Version",
      it: "Prima versione pubblica",
      es: "Primera version publica",
    },
    notes: [
      {
        en: "Clipboard history with local SQLite storage.",
        zh: "基于本地 SQLite 存储的剪贴板历史。",
        ja: "ローカル SQLite ストレージによるクリップボード履歴。",
        ko: "로컬 SQLite 저장소 기반 클립보드 기록.",
        fr: "Historique du presse-papiers avec stockage SQLite local.",
        de: "Zwischenablageverlauf mit lokaler SQLite-Speicherung.",
        it: "Cronologia degli appunti con archiviazione SQLite locale.",
        es: "Historial del portapapeles con almacenamiento SQLite local.",
      },
      {
        en: "Rich previews for text, images, code, links, colors, and files.",
        zh: "支持文本、图片、代码、链接、颜色和文件的丰富预览。",
        ja: "テキスト、画像、コード、リンク、色、ファイルのリッチプレビュー。",
        ko: "텍스트, 이미지, 코드, 링크, 색상, 파일의 풍부한 미리보기.",
        fr: "Apercus enrichis pour le texte, les images, le code, les liens, les couleurs et les fichiers.",
        de: "Umfangreiche Vorschauen fur Text, Bilder, Code, Links, Farben und Dateien.",
        it: "Anteprime avanzate per testo, immagini, codice, link, colori e file.",
        es: "Vistas previas enriquecidas para texto, imagenes, codigo, enlaces, colores y archivos.",
      },
      {
        en: "Pinned snippets, quick panel, and search.",
        zh: "支持 Pin 片段、快捷面板和搜索。",
        ja: "ピン留めスニペット、クイックパネル、検索。",
        ko: "고정 스니펫, 빠른 패널, 검색.",
        fr: "Extraits epingles, panneau rapide et recherche.",
        de: "Angeheftete Snippets, Schnellpanel und Suche.",
        it: "Snippet fissati, pannello rapido e ricerca.",
        es: "Fragmentos fijados, panel rapido y busqueda.",
      },
      {
        en: "Optional BYOK AI actions for translate, rewrite, and summarize.",
        zh: "可选的 BYOK AI 操作，支持翻译、改写和总结。",
        ja: "翻訳、書き換え、要約に対応する任意の BYOK AI アクション。",
        ko: "번역, 재작성, 요약을 위한 선택형 BYOK AI 작업.",
        fr: "Actions IA BYOK optionnelles pour traduire, reformuler et resumer.",
        de: "Optionale BYOK-KI-Aktionen zum Ubersetzen, Umschreiben und Zusammenfassen.",
        it: "Azioni AI BYOK opzionali per tradurre, riscrivere e riassumere.",
        es: "Acciones de IA BYOK opcionales para traducir, reescribir y resumir.",
      },
      {
        en: "Dodo Payments license activation, validation, and deactivation.",
        zh: "支持 Dodo Payments 授权激活、验证和停用。",
        ja: "Dodo Payments ライセンスの有効化、検証、無効化。",
        ko: "Dodo Payments 라이선스 활성화, 검증, 비활성화.",
        fr: "Activation, validation et desactivation des licences Dodo Payments.",
        de: "Aktivierung, Validierung und Deaktivierung von Dodo Payments-Lizenzen.",
        it: "Attivazione, convalida e disattivazione delle licenze Dodo Payments.",
        es: "Activacion, validacion y desactivacion de licencias de Dodo Payments.",
      },
    ],
  },
];

export default function Releases() {
  useNavScroll();

  return (
    <>
      <Header />

      <main className="privacy-main">
        <h1>
          <I18nText
            t={{
              en: "Release Notes",
              zh: "更新日志",
              ja: "リリースノート",
              ko: "릴리스 노트",
              fr: "Notes de version",
              de: "Versionshinweise",
              it: "Note di rilascio",
              es: "Notas de version",
            }}
          />
        </h1>
        <p className="updated">
          <I18nText
            t={{
              en: "Latest Clibo releases and product changes.",
              zh: "Clibo 最新版本和产品变更。",
              ja: "Clibo の最新リリースと製品変更。",
              ko: "최신 Clibo 릴리스와 제품 변경 사항.",
              fr: "Dernieres versions de Clibo et changements du produit.",
              de: "Neueste Clibo-Versionen und Produktanderungen.",
              it: "Ultime versioni di Clibo e modifiche al prodotto.",
              es: "Ultimas versiones de Clibo y cambios del producto.",
            }}
          />
        </p>

        {RELEASES.map((release) => (
          <section className="release-entry" key={release.version}>
            <h2>
              Clibo {release.version}
            </h2>
            <p className="updated">{release.date}</p>
            <I18nText as="p" t={release.title} />
            <ul>
              {release.notes.map((note, index) => (
                <li key={index}>
                  <I18nText t={note} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
