import React from "react";
import { useLang } from "../context/LangContext.jsx";

export default function I18nText({ t, className, as: Tag = "span", html, ...rest }) {
  const { lang } = useLang();
  const text = t[lang] || t.en || "";
  const cls = className ? `${className} ${lang}` : lang;

  if (html) {
    return (
      <Tag
        className={cls}
        {...rest}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
  return (
    <Tag className={cls} {...rest}>
      {text}
    </Tag>
  );
}
