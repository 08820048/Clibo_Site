import React, { createContext, useContext, useState, useEffect } from "react";

const LANGS = ["en", "zh", "ja", "ko", "fr", "de", "it", "es"];
const STORAGE_KEY = "clibo-lang";

const LangContext = createContext({
  lang: "en",
  setLang: () => {},
  langs: LANGS,
});

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.includes(stored)) return stored;
    } catch {}
    const browser = navigator.language?.split("-")[0];
    if (LANGS.includes(browser)) return browser;
    return "en";
  });

  const setLang = (next) => {
    if (LANGS.includes(next)) {
      setLangState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-lang", lang);
    document.documentElement.lang =
      { en: "en", zh: "zh-CN", ja: "ja", ko: "ko", fr: "fr", de: "de", it: "it", es: "es" }[lang];
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, langs: LANGS }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
