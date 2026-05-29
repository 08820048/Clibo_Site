import React from "react";
import { useLang } from "../context/LangContext.jsx";

function splitText(text) {
  const parts = text.split(/(\s+)/);
  return parts.flatMap((part) => {
    if (/^\s+$/.test(part)) return part;
    if (/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/.test(part)) {
      return Array.from(part);
    }
    return part;
  });
}

export default function AnimatedI18nText({
  t,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.035,
  ...rest
}) {
  const { lang } = useLang();
  const text = t[lang] || t.en || "";
  let step = 0;

  return (
    <Tag className={`animated-i18n ${className} ${lang}`.trim()} {...rest}>
      {splitText(text).map((part, index) => {
        if (/^\s+$/.test(part)) {
          return part;
        }

        const style = {
          "--word-delay": `${delay + step * stagger}s`,
        };
        step += 1;

        return (
          <span className="animated-i18n-word" style={style} key={`${part}-${index}`}>
            {part}
          </span>
        );
      })}
    </Tag>
  );
}
