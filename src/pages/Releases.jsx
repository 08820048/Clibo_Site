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
    },
    notes: [
      {
        en: "Clipboard history with local SQLite storage.",
        zh: "基于本地 SQLite 存储的剪贴板历史。",
      },
      {
        en: "Rich previews for text, images, code, links, colors, and files.",
        zh: "支持文本、图片、代码、链接、颜色和文件的丰富预览。",
      },
      {
        en: "Pinned snippets, quick panel, and search.",
        zh: "支持 Pin 片段、快捷面板和搜索。",
      },
      {
        en: "Optional BYOK AI actions for translate, rewrite, and summarize.",
        zh: "可选的 BYOK AI 操作，支持翻译、改写和总结。",
      },
      {
        en: "Dodo Payments license activation, validation, and deactivation.",
        zh: "支持 Dodo Payments 授权激活、验证和停用。",
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
          <I18nText t={{ en: "Release Notes", zh: "更新日志" }} />
        </h1>
        <p className="updated">
          <I18nText
            t={{
              en: "Latest Clibo releases and product changes.",
              zh: "Clibo 最新版本和产品变更。",
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
