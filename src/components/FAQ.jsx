import React, { useState } from "react";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const FAQS = [
  {
    q: {
      en: "What is BYOK?",
      zh: "什么是 BYOK？",
      ja: "BYOKとは？",
      ko: "BYOK란 무엇인가요?",
      fr: "Qu'est-ce que BYOK ?",
      de: "Was ist BYOK?",
      it: "Che cos'è BYOK?",
      es: "¿Qué es BYOK?",
    },
    a: {
      en: "You use your own OpenAI/Anthropic/Gemini API key. Clibo never charges extra for AI. Key stored in Mac Keychain.",
      zh: "你使用自己的 API Key 启用 AI 功能。Clibo 不额外收费。Key 安全存储在钥匙串中。",
      ja: "自分のOpenAI/Anthropic/Gemini APIキーを使用。CliboはAI機能で追加料金を請求しません。キーはMacのキーチェーンに保存されます。",
      ko: "자신의 OpenAI/Anthropic/Gemini API 키를 사용합니다. Clibo는 AI 기능에 대해 추가 요금을 부과하지 않습니다. 키는 Mac 키체인에 저장됩니다.",
      fr: "Vous utilisez votre propre clé API OpenAI/Anthropic/Gemini. Clibo ne facture jamais de frais supplémentaires pour l'IA. La clé est stockée dans le trousseau Mac.",
      de: "Sie verwenden Ihren eigenen OpenAI/Anthropic/Gemini API-Schlüssel. Clibo berechnet keine zusätzlichen Kosten für KI. Der Schlüssel wird im Mac-Schlüsselbund gespeichert.",
      it: "Usi la tua chiave API OpenAI/Anthropic/Gemini. Clibo non addebita mai costi extra per l'IA. La chiave è archiviata nel portachiavi Mac.",
      es: "Usas tu propia clave API de OpenAI/Anthropic/Gemini. Clibo nunca cobra extra por IA. La clave se almacena en el Llavero de Mac.",
    },
  },
  {
    q: {
      en: "Is my data sent to the cloud?",
      zh: "我的数据会发送到云端吗？",
      ja: "データはクラウドに送信されますか？",
      ko: "데이터가 클라우드로 전송되나요?",
      fr: "Mes données sont-elles envoyées dans le cloud ?",
      de: "Werden meine Daten in die Cloud gesendet?",
      it: "I miei dati vengono inviati al cloud?",
      es: "¿Mis datos se envían a la nube?",
    },
    a: {
      en: "Never. All stored locally in SQLite on your Mac. AI only sends clips you choose to process.",
      zh: "绝对不会。所有数据存储在本地 SQLite 中。",
      ja: "決してありません。すべてのデータはMac上のSQLiteにローカル保存されます。",
      ko: "절대 아닙니다. 모든 데이터는 Mac의 SQLite에 로컬로 저장됩니다.",
      fr: "Jamais. Toutes les données sont stockées localement dans SQLite sur votre Mac.",
      de: "Niemals. Alle Daten werden lokal in SQLite auf Ihrem Mac gespeichert.",
      it: "Mai. Tutti i dati sono archiviati localmente in SQLite sul tuo Mac.",
      es: "Nunca. Todos los datos se almacenan localmente en SQLite en tu Mac.",
    },
  },
  {
    q: {
      en: "What macOS version is required?",
      zh: "需要哪个 macOS 版本？",
      ja: "必要なmacOSバージョンは？",
      ko: "어떤 macOS 버전이 필요한가요?",
      fr: "Quelle version de macOS est requise ?",
      de: "Welche macOS-Version ist erforderlich?",
      it: "Quale versione di macOS è richiesta?",
      es: "¿Qué versión de macOS se requiere?",
    },
    a: {
      en: "macOS 13 Ventura or later. Native on Apple Silicon and Intel.",
      zh: "需要 macOS 13 Ventura 或更高版本。",
      ja: "macOS 13 Ventura以降が必要です。",
      ko: "macOS 13 Ventura 이상이 필요합니다.",
      fr: "macOS 13 Ventura ou ultérieur.",
      de: "macOS 13 Ventura oder neuer.",
      it: "macOS 13 Ventura o successivo.",
      es: "macOS 13 Ventura o posterior.",
    },
  },
  {
    q: {
      en: "Can I try before buying?",
      zh: "购买前可以试用吗？",
      ja: "購入前に試せますか？",
      ko: "구매 전에 사용해 볼 수 있나요?",
      fr: "Puis-je essayer avant d'acheter ?",
      de: "Kann ich es vor dem Kauf testen?",
      it: "Posso provarlo prima di acquistare?",
      es: "¿Puedo probarlo antes de comprar?",
    },
    a: {
      en: "Yes! 7-day free trial, full features, no credit card.",
      zh: "可以！7 天免费试用，完整功能，无需信用卡。",
      ja: "はい！7日間の無料トライアル、全機能、クレジットカード不要。",
      ko: "네! 7일 무료 체험, 전체 기능, 신용카드 불필요.",
      fr: "Oui ! Essai gratuit de 7 jours, toutes les fonctionnalites, pas de carte de credit.",
      de: "Ja! 7 Tage kostenlos testen, alle Funktionen, keine Kreditkarte.",
      it: "Si! Prova gratuita di 7 giorni, tutte le funzionalita, nessuna carta di credito.",
      es: "Si! Prueba gratuita de 7 dias, todas las funciones, sin tarjeta de credito.",
    },
  },
  {
    q: {
      en: "How many Macs per license?",
      zh: "每个许可证支持几台 Mac？",
      ja: "1ライセンスで何台のMacを使えますか？",
      ko: "라이선스 하나로 Mac 몇 대를 사용할 수 있나요?",
      fr: "Combien de Mac par licence ?",
      de: "Wie viele Macs pro Lizenz?",
      it: "Quanti Mac per licenza?",
      es: "¿Cuántos Mac por licencia?",
    },
    a: {
      en: "2 Mac activations per license.",
      zh: "每个许可证支持 2 台 Mac 激活。",
      ja: "ライセンスあたり2台のMacアクティベーション。",
      ko: "라이선스당 2대의 Mac 활성화.",
      fr: "2 activations Mac par licence.",
      de: "2 Mac-Aktivierungen pro Lizenz.",
      it: "2 attivazioni Mac per licenza.",
      es: "2 activaciones de Mac por licencia.",
    },
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="section-heading reveal">
        <p className="section-kicker section-kicker-animated">
          <AnimatedI18nText t={{ en: "FAQ" }} />
        </p>
        <h2 id="faq-title">
          <AnimatedI18nText
            t={{
              en: "Questions, answered.",
              zh: "常见问题。",
              ja: "よくある質問。",
              ko: "자주 묻는 질문.",
              fr: "Questions, réponses.",
              de: "Fragen, beantwortet.",
              it: "Domande, risposte.",
              es: "Preguntas, respondidas.",
            }}
          />
        </h2>
      </div>

      <div className="faq-list reveal reveal-soft">
        {FAQS.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <article
              key={i}
              className={`faq-item ${isOpen ? "is-open" : ""}`}
              style={{ "--delay": `${Math.min(i * 60, 260)}ms` }}
            >
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
              >
                <span className="faq-question-text">
                  <AnimatedI18nText t={faq.q} delay={0.04} stagger={0.018} />
                </span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div
                className="faq-answer"
                aria-hidden={!isOpen}
              >
                <div className="faq-answer-inner">
                  <I18nText t={faq.a} as="p" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
