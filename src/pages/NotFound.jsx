import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

export default function NotFound() {
  useNavScroll();

  return (
    <>
      <Header />
      <main className="privacy-main">
        <h1>
          <I18nText
            t={{
              en: "Page Not Found",
              zh: "页面未找到",
              ja: "ページが見つかりません",
              ko: "페이지를 찾을 수 없습니다",
              fr: "Page introuvable",
              de: "Seite nicht gefunden",
              it: "Pagina non trovata",
              es: "Pagina no encontrada",
            }}
          />
        </h1>
        <I18nText
          as="p"
          t={{
            en: "The page you requested does not exist.",
            zh: "你访问的页面不存在。",
            ja: "リクエストされたページは存在しません。",
            ko: "요청한 페이지가 존재하지 않습니다.",
            fr: "La page demandee n'existe pas.",
            de: "Die angeforderte Seite existiert nicht.",
            it: "La pagina richiesta non esiste.",
            es: "La pagina solicitada no existe.",
          }}
        />
        <p>
          <Link className="privacy-email" to="/">
            <I18nText
              t={{
                en: "Go to Clibo home",
                zh: "返回 Clibo 首页",
                ja: "Clibo ホームへ移動",
                ko: "Clibo 홈으로 이동",
                fr: "Aller a l'accueil de Clibo",
                de: "Zur Clibo-Startseite",
                it: "Vai alla home di Clibo",
                es: "Ir al inicio de Clibo",
              }}
            />
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
