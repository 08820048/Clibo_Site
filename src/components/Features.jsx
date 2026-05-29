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
      en: "Automatically saves everything you copy. Never lose anything again.",
      zh: "自动保存你复制的一切。再也不会丢失任何内容。",
      ja: "コピーしたすべてを自動保存。二度と失くさない。",
      ko: "복사한 모든 것을 자동 저장. 다시 잃지 마세요.",
      fr: "Sauvegarde automatique de tout ce que vous copiez. Ne perdez plus jamais rien.",
      de: "Speichert automatisch alles, was Sie kopieren. Nichts mehr verlieren.",
      it: "Salva automaticamente tutto ciò che copi. Non perdere mai più nulla.",
      es: "Guarda automáticamente todo lo que copias. Nunca pierdas nada más.",
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
      en: "AI Content Actions",
      zh: "AI 内容动作",
      ja: "AIコンテンツアクション",
      ko: "AI 콘텐츠 작업",
      fr: "Actions IA sur le contenu",
      de: "KI-Inhaltsaktionen",
      it: "Azioni AI sui contenuti",
      es: "Acciones de contenido con IA",
    },
    desc: {
      en: "Translate, rewrite, summarize. Bring your own API key - your data stays private.",
      zh: "翻译、改写、总结。自带 API Key，数据完全本地。",
      ja: "翻訳、書き換え、要約。自分のAPIキーを持ち込み — データはプライベート。",
      ko: "번역, 재작성, 요약. 자신의 API 키 사용 — 데이터는 프라이빗.",
      fr: "Traduisez, réécrivez, résumez. Apportez votre propre clé API — vos données restent privées.",
      de: "Übersetzen, umschreiben, zusammenfassen. Eigenen API-Key mitbringen — Ihre Daten bleiben privat.",
      it: "Traduci, riscrivi, riassumi. Porta la tua API key — i tuoi dati rimangono privati.",
      es: "Traduce, reescribe, resume. Trae tu propia clave API — tus datos permanecen privados.",
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
        <rect x="5" y="10" width="14" height="10" rx="2"></rect>
        <path d="M8 10V7.8a4 4 0 0 1 8 0V10"></path>
        <path d="M12 14v2"></path>
      </svg>
    ),
    title: {
      en: "Privacy First",
      zh: "隐私优先",
      ja: "プライバシー第一",
      ko: "프라이버시 우선",
      fr: "Confidentialité avant tout",
      de: "Datenschutz first",
      it: "Privacy prima di tutto",
      es: "Privacidad primero",
    },
    desc: {
      en: "All data stored locally. Password manager content auto-excluded.",
      zh: "所有数据本地存储。密码管理器内容自动排除。",
      ja: "すべてのデータをローカル保存。パスワードマネージャーは自動除外。",
      ko: "모든 데이터 로컬 저장. 비밀번호 관리자 콘텐츠 자동 제외.",
      fr: "Toutes les données stockées localement. Contenu du gestionnaire de mots de passe auto-exclu.",
      de: "Alle Daten lokal gespeichert. Passwort-Manager-Inhalte automatisch ausgeschlossen.",
      it: "Tutti i dati salvati in locale. Contenuto del password manager auto-escluso.",
      es: "Todos los datos almacenados localmente. Contenido del gestor de contraseñas excluido automáticamente.",
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
      en: "⌘ + Shift + V from anywhere. Search, select, paste in under a second.",
      zh: "任意位置按 ⌘+Shift+V 唤起。一秒完成。",
      ja: "どこからでも ⌘ + Shift + V。検索、選択、貼り付けを1秒以内に。",
      ko: "어디서든 ⌘ + Shift + V. 검색, 선택, 붙여넣기를 1초 이내에.",
      fr: "⌘ + Shift + V de n'importe où. Recherchez, sélectionnez, collez en moins d'une seconde.",
      de: "⌘ + Shift + V von überall. Suchen, auswählen, einfügen in unter einer Sekunde.",
      it: "⌘ + Shift + V da qualsiasi punto. Cerca, seleziona, incolla in meno di un secondo.",
      es: "⌘ + Shift + V desde cualquier lugar. Busca, selecciona, pega en menos de un segundo.",
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
