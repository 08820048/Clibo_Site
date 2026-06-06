import React from "react";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="6" y="5" width="12" height="15" rx="2"></rect>
        <path d="M9 5.5V4h6v1.5"></path>
        <path d="M9.5 10h5"></path>
        <path d="M9.5 14h4"></path>
      </svg>
    ),
    title: {
      en: "Clipboard History",
      zh: "剪贴板历史",
      ja: "クリップボード履歴",
      ko: "클립보드 기록",
      fr: "Historique du presse-papiers",
      de: "Zwischenablagen-Verlauf",
      it: "Cronologia degli appunti",
      es: "Historial del portapapeles",
    },
    desc: {
      en: "Local clipboard history with rich previews for text, images, links, files, colors, dates, emails, and phone numbers. Import from other clipboard managers or JSON, CSV, TXT, and Markdown files.",
      zh: "本地剪贴板历史支持文本、图片、链接、文件、颜色、日期、邮箱和电话号码的丰富预览，也可从其他剪贴板软件或 JSON、CSV、TXT、Markdown 文件导入数据。",
      ja: "テキスト、画像、リンク、ファイル、色、日付、メール、電話番号をリッチにプレビューできるローカル履歴。他のクリップボードマネージャーや JSON、CSV、TXT、Markdown ファイルからも取り込めます。",
      ko: "텍스트, 이미지, 링크, 파일, 색상, 날짜, 이메일, 전화번호를 풍부하게 미리 볼 수 있는 로컬 기록입니다. 다른 클립보드 관리자나 JSON, CSV, TXT, Markdown 파일에서도 가져올 수 있습니다.",
      fr: "Historique local avec apercus enrichis pour texte, images, liens, fichiers, couleurs, dates, emails et numeros de telephone. Import depuis d'autres gestionnaires de presse-papiers ou fichiers JSON, CSV, TXT et Markdown.",
      de: "Lokaler Verlauf mit umfangreichen Vorschauen fuer Text, Bilder, Links, Dateien, Farben, Daten, E-Mails und Telefonnummern. Import aus anderen Zwischenablage-Managern oder JSON-, CSV-, TXT- und Markdown-Dateien.",
      it: "Cronologia locale con anteprime ricche per testo, immagini, link, file, colori, date, email e numeri di telefono. Importa da altri gestori degli appunti o da file JSON, CSV, TXT e Markdown.",
      es: "Historial local con vistas enriquecidas para texto, imagenes, enlaces, archivos, colores, fechas, emails y numeros de telefono. Importa desde otros gestores del portapapeles o archivos JSON, CSV, TXT y Markdown.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="12" rx="3"></rect>
        <path d="M8 21l3-4h5"></path>
        <path d="M8.5 11.5c1.8-2.4 5.2-2.4 7 0-1.8 2.4-5.2 2.4-7 0Z"></path>
        <circle cx="12" cy="11.5" r="1.4"></circle>
      </svg>
    ),
    title: {
      en: "Hover Previews",
      zh: "悬停预览",
      ja: "ホバープレビュー",
      ko: "호버 미리보기",
      fr: "Aperçus au survol",
      de: "Hover-Vorschauen",
      it: "Anteprime al passaggio",
      es: "Previsualizaciones al pasar",
    },
    desc: {
      en: "Hover any clipboard item to inspect it before pasting. Preview text, images, links, code, files, and colors without opening another app.",
      zh: "鼠标悬停在剪贴板条目上即可先看内容。文本、图片、链接、代码、文件、颜色都能在粘贴前快速确认。",
      ja: "クリップボード項目をホバーして貼り付け前に確認。テキスト、画像、リンク、コード、ファイル、カラーを別アプリを開かずにプレビュー。",
      ko: "클립보드 항목에 마우스를 올려 붙여넣기 전에 확인. 텍스트, 이미지, 링크, 코드, 파일, 색상을 다른 앱을 열지 않고 미리보기.",
      fr: "Survolez tout élément du presse-papiers pour l'inspecter avant de coller. Aperçu du texte, images, liens, code, fichiers et couleurs sans ouvrir une autre app.",
      de: "Fahren Sie über Zwischenablagen-Einträge, um sie vor dem Einfügen zu prüfen. Text, Bilder, Links, Code, Dateien und Farben ohne extra App ansehen.",
      it: "Passa il mouse sugli elementi della clipboard per ispezionarli prima di incollare. Anteprima di testo, immagini, link, codice, file e colori senza aprire altre app.",
      es: "Pasa el cursor sobre cualquier elemento del portapapeles para inspeccionarlo antes de pegar. Previsualiza texto, imágenes, enlaces, código, archivos y colores sin abrir otra app.",
    },
    previews: [
      { en: "color", zh: "颜色值", ja: "カラー", ko: "색상", fr: "couleur", de: "Farbe", it: "colore", es: "color" },
      { en: "Image", zh: "图片", ja: "画像", ko: "이미지", fr: "Image", de: "Bild", it: "Immagine", es: "Imagen" },
      { en: "Links", zh: "链接", ja: "リンク", ko: "링크", fr: "Liens", de: "Links", it: "Link", es: "Enlaces" },
      { en: "Code", zh: "代码", ja: "コード", ko: "코드", fr: "Code", de: "Code", it: "Codice", es: "Código" },
      { en: "Email", zh: "邮箱", ja: "メール", ko: "이메일", fr: "Email", de: "E-Mail", it: "Email", es: "Email" },
      { en: "Date", zh: "日期", ja: "日付", ko: "날짜", fr: "Date", de: "Datum", it: "Data", es: "Fecha" },
      { en: "File", zh: "文件", ja: "ファイル", ko: "파일", fr: "Fichier", de: "Datei", it: "File", es: "Archivo" },
      { en: "markdown", zh: "markdown", ja: "markdown", ko: "markdown", fr: "markdown", de: "markdown", it: "markdown", es: "markdown" },
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3.5 13.7 8l4.5 1.7-4.5 1.7L12 16l-1.7-4.6-4.5-1.7L10.3 8 12 3.5Z"></path>
        <path d="m6 15 .8 2.1L9 18l-2.2.9L6 21l-.8-2.1L3 18l2.2-.9L6 15Z"></path>
        <path d="M18 4v3"></path>
        <path d="M19.5 5.5h-3"></path>
      </svg>
    ),
    title: {
      en: "macOS Integrations",
      zh: "macOS 原生集成",
      ja: "macOS ネイティブ連携",
      ko: "macOS 네이티브 통합",
      fr: "Integrations macOS natives",
      de: "Native macOS-Integrationen",
      it: "Integrazioni macOS native",
      es: "Integraciones nativas de macOS",
    },
    desc: {
      en: "Native macOS integrations: add dates to Calendar, save numbers to Contacts, send messages, and create Notes or Reminders.",
      zh: "macOS 原生集成：将日期加入日历、把号码保存到通讯录、发送消息，并创建备忘录或提醒事项。",
      ja: "macOS ネイティブ連携: 日付をカレンダーに追加、番号を連絡先に保存、メッセージ送信、メモやリマインダー作成。",
      ko: "macOS 네이티브 통합: 날짜를 캘린더에 추가하고, 번호를 연락처에 저장하고, 메시지를 보내고, 메모나 미리 알림을 만듭니다.",
      fr: "Integrations macOS natives : ajoutez des dates au Calendrier, enregistrez des numeros dans Contacts, envoyez des messages et creez des Notes ou Rappels.",
      de: "Native macOS-Integrationen: Daten zum Kalender hinzufuegen, Nummern in Kontakte speichern, Nachrichten senden sowie Notizen oder Erinnerungen erstellen.",
      it: "Integrazioni macOS native: aggiungi date al Calendario, salva numeri in Contatti, invia messaggi e crea Note o Promemoria.",
      es: "Integraciones nativas de macOS: agrega fechas al Calendario, guarda numeros en Contactos, envia mensajes y crea Notas o Recordatorios.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="m9 4 7 7"></path>
        <path d="m14.5 5.5 4 4-3 3 .7 3.8-1.1 1.1-4.5-4.5L7 16.5 5.5 15l3.6-3.6-4.5-4.5 1.1-1.1 3.8.7 3-3Z"></path>
        <path d="m8.5 15.5-3 3"></path>
      </svg>
    ),
    title: {
      en: "Pin Snippets",
      zh: "Pin 常用片段",
      ja: "スニペットを固定",
      ko: "스니펫 고정",
      fr: "Épingler des extraits",
      de: "Snippets anpinnen",
      it: "Fissa snippet",
      es: "Fijar fragmentos",
    },
    desc: {
      en: "Pin frequently used text, code templates, or links. They stay at the top, forever.",
      zh: "将常用内容置顶。永久保留，随时取用。",
      ja: "よく使うテキスト、コードテンプレート、リンクを固定。常に上部に表示。",
      ko: "자주 사용하는 텍스트, 코드 템플릿, 링크를 고정. 항상 상단에 유지.",
      fr: "Épinglez textes, modèles de code ou liens fréquemment utilisés. Ils restent en haut, pour toujours.",
      de: "Häufig verwendeten Text, Code-Vorlagen oder Links anpinnen. Bleiben immer oben.",
      it: "Fissa testi, template di codice o link usati frequentemente. Restano in cima, per sempre.",
      es: "Fija textos, plantillas de código o enlaces de uso frecuente. Permanecen arriba, para siempre.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M8 17.5H7a4 4 0 0 1-.9-7.9 5.5 5.5 0 0 1 10.7-1.5A4.5 4.5 0 0 1 17.5 17.5H16"></path>
        <path d="M12 12v8"></path>
        <path d="m8.5 16.5 3.5 3.5 3.5-3.5"></path>
        <path d="M9.5 7.5h3.8"></path>
        <path d="M9.5 10.5h5"></path>
      </svg>
    ),
    title: {
      en: "Pinned Sync",
      zh: "置顶同步",
      ja: "ピン留め同期",
      ko: "고정 항목 동기화",
      fr: "Sync des epingles",
      de: "Pin-Synchronisierung",
      it: "Sync elementi fissati",
      es: "Sincronizacion de fijados",
    },
    desc: {
      en: "Share pinned clipboard items across your Macs with iCloud Drive or any synced folder, while local history stays on each device.",
      zh: "通过 iCloud Drive 或其他同步文件夹，在多台 Mac 间共享置顶的复制内容；本地剪贴板历史仍保留在各自设备上。",
      ja: "iCloud Drive または任意の同期フォルダで、ピン留めしたクリップボード項目を複数の Mac 間で共有。ローカル履歴は各デバイスに残ります。",
      ko: "iCloud Drive 또는 동기화 폴더로 고정한 클립보드 항목을 여러 Mac에서 공유합니다. 로컬 기록은 각 기기에 그대로 남습니다.",
      fr: "Partagez les elements epingles du presse-papiers entre vos Macs via iCloud Drive ou tout dossier synchronise, tout en gardant l'historique local sur chaque appareil.",
      de: "Teilen Sie angeheftete Zwischenablageeintraege per iCloud Drive oder einem Sync-Ordner zwischen Ihren Macs, waehrend der lokale Verlauf auf jedem Geraet bleibt.",
      it: "Condividi gli elementi fissati degli appunti tra i tuoi Mac con iCloud Drive o una cartella sincronizzata, mantenendo la cronologia locale su ogni dispositivo.",
      es: "Comparte elementos fijados del portapapeles entre tus Mac con iCloud Drive o cualquier carpeta sincronizada, manteniendo el historial local en cada dispositivo.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="10" width="14" height="10" rx="2"></rect>
        <path d="M8 10V7.8a4 4 0 0 1 8 0V10"></path>
        <path d="M12 14v2"></path>
        <path d="M18.5 4.5 20 6l-1.5 1.5"></path>
      </svg>
    ),
    title: {
      en: "Privacy & BYOK AI",
      zh: "隐私优先与 BYOK AI",
      ja: "プライバシーと BYOK AI",
      ko: "개인정보 보호와 BYOK AI",
      fr: "Confidentialite et IA BYOK",
      de: "Datenschutz und BYOK-KI",
      it: "Privacy e AI BYOK",
      es: "Privacidad e IA BYOK",
    },
    desc: {
      en: "Privacy-first storage with optional BYOK AI actions for translate, rewrite, summarize, and more.",
      zh: "隐私优先的本地存储，并提供可选 BYOK AI 动作，用于翻译、改写、总结等场景。",
      ja: "プライバシー優先の保存に加え、翻訳、書き換え、要約などに使える任意の BYOK AI アクションを提供します。",
      ko: "개인정보 보호를 우선하는 저장 방식과 번역, 재작성, 요약 등에 사용할 수 있는 선택형 BYOK AI 작업을 제공합니다.",
      fr: "Stockage concu pour la confidentialite, avec actions IA BYOK optionnelles pour traduire, reecrire, resumer et plus encore.",
      de: "Datenschutzorientierte Speicherung mit optionalen BYOK-KI-Aktionen zum Uebersetzen, Umschreiben, Zusammenfassen und mehr.",
      it: "Archiviazione pensata per la privacy con azioni AI BYOK opzionali per tradurre, riscrivere, riassumere e altro.",
      es: "Almacenamiento centrado en la privacidad con acciones opcionales de IA BYOK para traducir, reescribir, resumir y mas.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z"></path>
      </svg>
    ),
    title: {
      en: "Instant Access",
      zh: "即时唤起",
      ja: "即時アクセス",
      ko: "즉시 접근",
      fr: "Accès instantané",
      de: "Sofortiger Zugriff",
      it: "Accesso istantaneo",
      es: "Acceso instantáneo",
    },
    desc: {
      en: "Quick panel, pinned snippets, and fast search for using copied content anywhere.",
      zh: "通过快捷面板、置顶 Snippets 和快速搜索，在任意位置取用已复制内容。",
      ja: "クイックパネル、ピン留め Snippets、高速検索で、コピーした内容をどこでも利用できます。",
      ko: "빠른 패널, 고정 Snippets, 빠른 검색으로 복사한 콘텐츠를 어디서나 사용할 수 있습니다.",
      fr: "Panneau rapide, Snippets epingles et recherche rapide pour utiliser le contenu copie partout.",
      de: "Schnellpanel, angeheftete Snippets und schnelle Suche, um kopierte Inhalte ueberall zu verwenden.",
      it: "Pannello rapido, Snippets fissati e ricerca veloce per usare ovunque i contenuti copiati.",
      es: "Panel rapido, Snippets fijados y busqueda rapida para usar contenido copiado en cualquier lugar.",
    },
  },
];

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="section-heading reveal">
        <p className="section-kicker section-kicker-animated">
          <AnimatedI18nText
            t={{
              en: "Features",
              zh: "功能",
              ja: "機能",
              ko: "기능",
              fr: "Fonctionnalités",
              de: "Funktionen",
              it: "Funzionalità",
              es: "Funciones",
            }}
          />
        </p>
        <h2 id="features-title">
          <AnimatedI18nText
            t={{
              en: "Built for the clipboard work you repeat every day.",
              zh: "为每天重复发生的剪贴板工作而生。",
              ja: "毎日繰り返すクリップボード作業のために設計。",
              ko: "매일 반복하는 클립보드 작업을 위해 설계.",
              fr: "Conçu pour le travail quotidien du presse-papiers.",
              de: "Entwickelt für die tägliche Zwischenablagen-Arbeit.",
              it: "Progettato per il lavoro quotidiano con la clipboard.",
              es: "Diseñado para el trabajo diario con el portapapeles.",
            }}
          />
        </h2>
        <p className="section-lede">
          <AnimatedI18nText
            delay={0.18}
            stagger={0.018}
            t={{
              en: "Search, pin, transform, and paste without breaking flow.",
              zh: "搜索、置顶、处理、粘贴，不打断当前工作流。",
              ja: "フローを崩さずに検索、固定、変換、貼り付け。",
              ko: "흐름을 끊지 않고 검색, 고정, 변환, 붙여넣기.",
              fr: "Recherchez, épinglez, transformez et collez sans interrompre votre flux.",
              de: "Suchen, anpinnen, transformieren und einfügen — ohne den Flow zu unterbrechen.",
              it: "Cerca, fissa, trasforma e incolla senza interrompere il flusso.",
              es: "Busca, fija, transforma y pega sin interrumpir tu flujo.",
            }}
          />
        </p>
      </div>

      <div className="feature-grid">
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className="feature-card reveal reveal-soft"
            style={{ "--delay": `${Math.min(i * 70, 320)}ms` }}
          >
            <span className="feature-icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3>
              <AnimatedI18nText t={f.title} delay={0.06} stagger={0.025} />
            </h3>
            <p>
              <AnimatedI18nText t={f.desc} delay={0.12} stagger={0.012} />
            </p>
            {f.previews && (
              <ul className="preview-type-list" aria-label="Preview types">
                {f.previews.map((p, j) => (
                  <li key={j} style={{ "--chip-delay": `${190 + j * 55}ms` }}>
                    <span className="preview-swatch"></span>
                    <I18nText t={p} />
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
