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
  {
    q: {
      en: "How is Clibo different from free alternatives like Maccy?",
      zh: "Clibo 和 Maccy 等免费工具有什么区别？",
      ja: "Maccyなど無料ツールとCliboの違いは？",
      ko: "Maccy 같은 무료 도구와 Clibo는 어떻게 다른가요?",
      fr: "En quoi Clibo diffère des alternatives gratuites comme Maccy ?",
      de: "Wie unterscheidet sich Clibo von kostenlosen Alternativen wie Maccy?",
      it: "In cosa Clibo è diverso dalle alternative gratuite come Maccy?",
      es: "¿En qué se diferencia Clibo de alternativas gratuitas como Maccy?",
    },
    a: {
      en: "Maccy is a great lightweight clipboard history. Clibo adds rich multi-format previews (colors, images, files), pinned iCloud sync across Macs, global snippet shortcuts, native macOS Calendar/Contacts/Reminders actions, and optional BYOK AI for translate/rewrite/summarize. If Maccy is a notepad, Clibo is a workflow tool — and both are one-time purchases with no subscription.",
      zh: "Maccy 是个很好的轻量剪贴板历史工具。Clibo 在此基础上增加了多格式丰富预览（颜色、图片、文件）、iCloud 跨设备置顶同步、全局快捷键 Snippets、macOS 原生日历/通讯录/提醒事项联动，以及可选的 BYOK AI 翻译/改写/总结。如果说 Maccy 是便签，Clibo 是工作台——而且都是一次买断无订阅。",
      ja: "Maccyは優れた軽量クリップボード履歴ツールです。Cliboはそれに加えて、複数形式のリッチプレビュー（色、画像、ファイル）、iCloud経由のピン留め同期、グローバルスニペットショートカット、macOSネイティブのカレンダー/連絡先/リマインダー連携、オプションのBYOK AIによる翻訳・書き換え・要約を提供します。Maccyがメモ帳なら、Cliboはワークフローツールです。",
      ko: "Maccy는 훌륭한 경량 클립보드 기록 도구입니다. Clibo는 여기에 다양한 형식의 풍부한 미리보기(색상, 이미지, 파일), iCloud를 통한 고정 항목 동기화, 전역 스니펫 단축키, macOS 네이티브 캘린더/연락처/미리 알림 연동, 선택형 BYOK AI 번역/재작성/요약을 추가합니다. Maccy가 메모장이라면 Clibo는 워크플로우 도구입니다.",
      fr: "Maccy est un excellent historique de presse-papiers léger. Clibo y ajoute des aperçus enrichis multi-formats (couleurs, images, fichiers), la synchronisation iCloud des éléments épinglés entre Macs, des raccourcis globaux de snippets, des actions natives macOS (Calendrier, Contacts, Rappels) et l'IA BYOK optionnelle pour traduire/réécrire/résumer. Si Maccy est un bloc-notes, Clibo est un outil de flux de travail.",
      de: "Maccy ist ein großartiger, leichter Zwischenablageverlauf. Clibo ergänzt dies um umfangreiche Mehrformat-Vorschauen (Farben, Bilder, Dateien), iCloud-Sync für angeheftete Elemente, globale Snippet-Tastenkürzel, native macOS-Aktionen (Kalender, Kontakte, Erinnerungen) und optionale BYOK-KI für Übersetzung, Umschreiben und Zusammenfassung. Wenn Maccy ein Notizblock ist, dann ist Clibo ein Workflow-Werkzeug.",
      it: "Maccy è un ottimo storico appunti leggero. Clibo aggiunge anteprime ricche multi-formato (colori, immagini, file), sincronizzazione iCloud degli elementi fissati tra Mac, scorciatoie globali per snippet, azioni native macOS (Calendario, Contatti, Promemoria) e IA BYOK opzionale per tradurre, riscrivere e riassumere. Se Maccy è un blocco note, Clibo è uno strumento di flusso di lavoro.",
      es: "Maccy es un excelente historial de portapapeles ligero. Clibo añade previsualizaciones enriquecidas de múltiples formatos (colores, imágenes, archivos), sincronización de elementos fijados entre Macs vía iCloud, atajos globales de snippets, acciones nativas de macOS (Calendario, Contactos, Recordatorios) e IA BYOK opcional para traducir, reescribir y resumir. Si Maccy es un bloc de notas, Clibo es una herramienta de flujo de trabajo.",
    },
  },
  {
    q: {
      en: "Does Clibo send my clipboard data anywhere?",
      zh: "Clibo 会把我的剪贴板数据发送到哪里吗？",
      ja: "Cliboはクリップボードデータをどこかに送信しますか？",
      ko: "Clibo가 클립보드 데이터를 어딘가로 보내나요?",
      fr: "Clibo envoie-t-il mes données de presse-papiers quelque part ?",
      de: "Sendet Clibo meine Zwischenablagedaten irgendwohin?",
      it: "Clibo invia i miei dati della clipboard da qualche parte?",
      es: "¿Clibo envía mis datos del portapapeles a algún sitio?",
    },
    a: {
      en: "No. All clipboard data stays in a local SQLite database on your Mac. Clibo has no server, no cloud backend, and no analytics that can see your copied content. The only network request Clibo makes is an optional update check — and you can disable it. If you use BYOK AI actions, only the specific clip you choose to process is sent to your own API provider (OpenAI, Anthropic, or Gemini).",
      zh: "不会。所有剪贴板数据都存储在 Mac 本地的 SQLite 数据库中。Clibo 没有服务器、没有云端后台、没有可以查看你复制内容的数据分析。Clibo 唯一的网络请求是可选的更新检查——你可以在设置中关闭它。如果你使用 BYOK AI 功能，只有你主动选择处理的那一条内容会发送到你自己的 API 服务商（OpenAI、Anthropic 或 Gemini）。",
      ja: "いいえ。すべてのクリップボードデータはMac上のローカルSQLiteデータベースに保存されます。Cliboにはサーバーもクラウドバックエンドも、コピー内容を見ることができる分析機能もありません。Cliboが行う唯一のネットワークリクエストはオプションのアップデート確認で、オフにすることもできます。BYOK AIアクションを使用する場合、処理を選択した特定のクリップだけがあなた自身のAPIプロバイダー（OpenAI、Anthropic、Gemini）に送信されます。",
      ko: "아니요. 모든 클립보드 데이터는 Mac의 로컬 SQLite 데이터베이스에 저장됩니다. Clibo에는 서버, 클라우드 백엔드, 복사한 콘텐츠를 볼 수 있는 분석 기능이 없습니다. Clibo가 하는 유일한 네트워크 요청은 선택적 업데이트 확인이며, 설정에서 끌 수 있습니다. BYOK AI 작업을 사용하는 경우, 처리하기로 선택한 특정 클립만 자신의 API 제공자(OpenAI, Anthropic, Gemini)에게 전송됩니다.",
      fr: "Non. Toutes les données du presse-papiers restent dans une base SQLite locale sur votre Mac. Clibo n'a ni serveur, ni backend cloud, ni analyse pouvant voir votre contenu copié. La seule requête réseau de Clibo est une vérification optionnelle des mises à jour — vous pouvez la désactiver. Si vous utilisez les actions IA BYOK, seul le clip que vous choisissez de traiter est envoyé à votre propre fournisseur d'API (OpenAI, Anthropic ou Gemini).",
      de: "Nein. Alle Zwischenablagedaten bleiben in einer lokalen SQLite-Datenbank auf Ihrem Mac. Clibo hat keinen Server, kein Cloud-Backend und keine Analyse, die Ihre kopierten Inhalte sehen kann. Die einzige Netzwerkanfrage von Clibo ist eine optionale Update-Prüfung — und Sie können sie deaktivieren. Wenn Sie BYOK-KI-Aktionen nutzen, wird nur der von Ihnen ausgewählte Clip an Ihren eigenen API-Anbieter (OpenAI, Anthropic oder Gemini) gesendet.",
      it: "No. Tutti i dati della clipboard rimangono in un database SQLite locale sul tuo Mac. Clibo non ha server, backend cloud o analytics che possano vedere i tuoi contenuti copiati. L'unica richiesta di rete che Clibo effettua è un controllo opzionale degli aggiornamenti, che puoi disattivare. Se usi le azioni AI BYOK, solo lo specifico clip che scegli di elaborare viene inviato al tuo provider API (OpenAI, Anthropic o Gemini).",
      es: "No. Todos los datos del portapapeles permanecen en una base de datos SQLite local en tu Mac. Clibo no tiene servidor, backend en la nube ni análisis que puedan ver tu contenido copiado. La única solicitud de red que hace Clibo es una verificación opcional de actualizaciones, que puedes desactivar. Si usas las acciones de IA BYOK, solo el clip específico que eliges procesar se envía a tu propio proveedor de API (OpenAI, Anthropic o Gemini).",
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
