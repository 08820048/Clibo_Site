import React from "react";
import I18nText from "./I18nText.jsx";

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust signals">
      <div className="trust-strip-inner">
        <I18nText
          t={{
            en: "Private by design · All data stays on your Mac · No account required · Apple-notarized",
            zh: "隐私优先 · 数据不出设备 · 无需注册账号 · Apple 公证",
            ja: "プライバシー設計 · データはMac内に保存 · アカウント不要 · Apple公証済み",
            ko: "개인정보 우선 · 데이터는 Mac에 저장 · 계정 불필요 · Apple 공증 완료",
            fr: "Confidentialité par conception · Données sur votre Mac · Aucun compte · Notarié Apple",
            de: "Datenschutz by Design · Daten bleiben auf Ihrem Mac · Kein Account · Apple-notarisiert",
            it: "Privacy by design · Dati sul tuo Mac · Nessun account · Autenticato Apple",
            es: "Privacidad por diseño · Datos en tu Mac · Sin cuenta · Notarizado por Apple",
          }}
        />
      </div>
    </section>
  );
}
