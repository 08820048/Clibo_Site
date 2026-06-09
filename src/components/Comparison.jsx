import React from "react";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const COMPARISON = [
  {
    label: { en: "Price", zh: "价格", ja: "価格", ko: "가격", fr: "Prix", de: "Preis", it: "Prezzo", es: "Precio" },
    maccy: { en: "Free (OSS)", zh: "免费 开源", ja: "無料 OSS", ko: "무료 OSS", fr: "Gratuit (OSS)", de: "Kostenlos (OSS)", it: "Gratuito (OSS)", es: "Gratis (OSS)" },
    copyclip: { en: "$7.99", zh: "$7.99", ja: "$7.99", ko: "$7.99", fr: "7,99 $", de: "7,99 $", it: "7,99 $", es: "7,99 $" },
    clibo: { en: "$9", zh: "$9", ja: "$9", ko: "$9", fr: "9 $", de: "9 $", it: "9 $", es: "9 $" },
    paste: { en: "$29.99/yr", zh: "$29.99/年", ja: "$29.99/年", ko: "$29.99/년", fr: "29,99 $/an", de: "29,99 $/Jahr", it: "29,99 $/anno", es: "29,99 $/año" },
  },
  {
    label: { en: "Model", zh: "付费模式", ja: "課金モデル", ko: "과금 모델", fr: "Modèle", de: "Modell", it: "Modello", es: "Modelo" },
    maccy: { en: "Donation", zh: "捐赠", ja: "寄付", ko: "기부", fr: "Don", de: "Spende", it: "Donazione", es: "Donación" },
    copyclip: { en: "One-time", zh: "买断", ja: "買い切り", ko: "일회 결제", fr: "Achat unique", de: "Einmalkauf", it: "Una tantum", es: "Pago único" },
    clibo: { en: "One-time", zh: "买断", ja: "買い切り", ko: "일회 결제", fr: "Achat unique", de: "Einmalkauf", it: "Una tantum", es: "Pago único" },
    paste: { en: "Subscription", zh: "订阅", ja: "サブスク", ko: "구독", fr: "Abonnement", de: "Abo", it: "Abbonamento", es: "Suscripción" },
  },
  {
    label: { en: "AI Search", zh: "AI 搜索", ja: "AI検索", ko: "AI 검색", fr: "Recherche IA", de: "KI-Suche", it: "Ricerca AI", es: "Búsqueda IA" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "BYOK", zh: "BYOK", ja: "BYOK", ko: "BYOK", fr: "BYOK", de: "BYOK", it: "BYOK", es: "BYOK" },
    paste: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
  },
  {
    label: { en: "iCloud Sync", zh: "iCloud 同步", ja: "iCloud同期", ko: "iCloud 동기화", fr: "Sync iCloud", de: "iCloud-Sync", it: "Sync iCloud", es: "Sync iCloud" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "✓", zh: "✓", ja: "✓", ko: "✓", fr: "✓", de: "✓", it: "✓", es: "✓" },
    paste: { en: "✓", zh: "✓", ja: "✓", ko: "✓", fr: "✓", de: "✓", it: "✓", es: "✓" },
  },
  {
    label: { en: "Maccy Import", zh: "Maccy 导入", ja: "Maccy取込", ko: "Maccy 가져오기", fr: "Import Maccy", de: "Maccy-Import", it: "Import Maccy", es: "Importar Maccy" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "✓", zh: "✓", ja: "✓", ko: "✓", fr: "✓", de: "✓", it: "✓", es: "✓" },
    paste: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
  },
  {
    label: { en: "Rich Previews", zh: "富媒体预览", ja: "リッチプレビュー", ko: "풍부한 미리보기", fr: "Aperçus riches", de: "Umfangreiche Vorschau", it: "Anteprime ricche", es: "Previsualizaciones" },
    maccy: { en: "Basic", zh: "基础", ja: "基本", ko: "기본", fr: "Basique", de: "Einfach", it: "Base", es: "Básico" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "✓ Hover", zh: "✓ 悬浮", ja: "✓ ホバー", ko: "✓ 호버", fr: "✓ Survol", de: "✓ Hover", it: "✓ Hover", es: "✓ Hover" },
    paste: { en: "✓", zh: "✓", ja: "✓", ko: "✓", fr: "✓", de: "✓", it: "✓", es: "✓" },
  },
  {
    label: { en: "macOS Actions", zh: "macOS 原生动作", ja: "macOS連携", ko: "macOS 통합", fr: "Actions macOS", de: "macOS-Aktionen", it: "Azioni macOS", es: "Acciones macOS" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "✓", zh: "✓", ja: "✓", ko: "✓", fr: "✓", de: "✓", it: "✓", es: "✓" },
    paste: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
  },
  {
    label: { en: "Privacy", zh: "隐私保护", ja: "プライバシー", ko: "개인정보", fr: "Confidentialité", de: "Datenschutz", it: "Privacy", es: "Privacidad" },
    maccy: { en: "★★★★★", zh: "★★★★★", ja: "★★★★★", ko: "★★★★★", fr: "★★★★★", de: "★★★★★", it: "★★★★★", es: "★★★★★" },
    copyclip: { en: "★★★★☆", zh: "★★★★☆", ja: "★★★★☆", ko: "★★★★☆", fr: "★★★★☆", de: "★★★★☆", it: "★★★★☆", es: "★★★★☆" },
    clibo: { en: "★★★★★", zh: "★★★★★", ja: "★★★★★", ko: "★★★★★", fr: "★★★★★", de: "★★★★★", it: "★★★★★", es: "★★★★★" },
    paste: { en: "★★★☆☆", zh: "★★★☆☆", ja: "★★★☆☆", ko: "★★★☆☆", fr: "★★★☆☆", de: "★★★☆☆", it: "★★★☆☆", es: "★★★☆☆" },
  },
];

const COLUMNS = [
  { key: "maccy", name: "Maccy" },
  { key: "copyclip", name: "CopyClip" },
  { key: "clibo", name: "Clibo", highlight: true },
  { key: "paste", name: "Paste" },
];

export default function Comparison() {
  return (
    <section className="section" id="compare" aria-labelledby="compare-title">
      <div className="section-heading reveal">
        <p className="section-kicker section-kicker-animated">
          <AnimatedI18nText
            t={{
              en: "Compare",
              zh: "对比",
              ja: "比較",
              ko: "비교",
              fr: "Comparer",
              de: "Vergleich",
              it: "Confronta",
              es: "Comparar",
            }}
          />
        </p>
        <h2 id="compare-title">
          <AnimatedI18nText
            t={{
              en: "How Clibo stacks up.",
              zh: "Clibo 与竞品对比。",
              ja: "Cliboと他製品の比較。",
              ko: "Clibo와 경쟁 제품 비교.",
              fr: "Comparaison de Clibo.",
              de: "Clibo im Vergleich.",
              it: "Clibo a confronto.",
              es: "Comparativa de Clibo.",
            }}
          />
        </h2>
      </div>

      <div className="comparison-wrap reveal reveal-soft">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">
                <I18nText t={{ en: "Feature", zh: "功能", ja: "機能", ko: "기능", fr: "Fonction", de: "Funktion", it: "Funzione", es: "Función" }} />
              </th>
              {COLUMNS.map((col) => (
                <th key={col.key} scope="col" className={col.highlight ? "col-clibo" : ""}>
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr key={i}>
                <th scope="row">
                  <I18nText t={row.label} />
                </th>
                {COLUMNS.map((col) => (
                  <td key={col.key} className={col.highlight ? "col-clibo" : ""}>
                    <I18nText t={row[col.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
