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
      en: "Find anything you copied",
      zh: "找回任何复制过的内容",
      ja: "コピーしたすべてを即検索",
      ko: "복사한 모든 것을 찾기",
      fr: "Retrouvez tout ce que vous avez copié",
      de: "Finden Sie alles, was Sie kopiert haben",
      it: "Trova tutto ciò che hai copiato",
      es: "Encuentra todo lo que copiaste",
    },
    desc: {
      en: "Every text, link, image, color, file, email, and phone number you copy is stored locally and instantly searchable. Scroll through hours or days of history in seconds.",
      zh: "你复制的每一个文本、链接、图片、颜色、文件、邮箱和电话号码都存储在本地，可即时搜索。几秒内回溯数小时甚至数天的复制记录。",
      ja: "コピーしたテキスト、リンク、画像、色、ファイル、メール、電話番号をすべてローカルに保存し、即座に検索。数時間前、数日前の履歴も数秒で遡れます。",
      ko: "복사한 모든 텍스트, 링크, 이미지, 색상, 파일, 이메일, 전화번호를 로컬에 저장하고 즉시 검색. 몇 시간, 며칠 전의 기록도 몇 초 만에 찾을 수 있습니다.",
      fr: "Chaque texte, lien, image, couleur, fichier, email et numéro de téléphone copié est stocké localement et instantanément consultable. Parcourez des heures ou des jours d'historique en quelques secondes.",
      de: "Jeder kopierte Text, Link, jedes Bild, jede Farbe, Datei, E-Mail und Telefonnummer wird lokal gespeichert und ist sofort durchsuchbar. Durchsuchen Sie Stunden oder Tage an Verlauf in Sekunden.",
      it: "Ogni testo, link, immagine, colore, file, email e numero di telefono copiato viene archiviato localmente ed è immediatamente cercabile. Scorri ore o giorni di cronologia in pochi secondi.",
      es: "Cada texto, enlace, imagen, color, archivo, email y número de teléfono que copias se almacena localmente y se puede buscar al instante. Recorre horas o días de historial en segundos.",
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
      en: "See before you paste",
      zh: "粘贴之前先看清楚",
      ja: "貼り付ける前に確認",
      ko: "붙여넣기 전에 미리 보기",
      fr: "Voyez avant de coller",
      de: "Sehen Sie vor dem Einfügen",
      it: "Guarda prima di incollare",
      es: "Ve antes de pegar",
    },
    desc: {
      en: "Hover any clip to preview it in full — hex colors, markdown, code, long text, images. No more pasting the wrong thing into the wrong place.",
      zh: "悬停任意剪贴条目即可完整预览——颜色值、Markdown、代码、长文本、图片。再也不怕粘贴错内容到错位置。",
      ja: "任意のクリップにホバーするだけで、色コード、Markdown、コード、長文、画像をフルプレビュー。間違った内容を間違った場所に貼り付ける心配がなくなります。",
      ko: "모든 클립에 마우스를 올려 전체 미리보기 — 색상 코드, 마크다운, 코드, 긴 텍스트, 이미지. 잘못된 내용을 잘못된 곳에 붙여넣는 일이 없어집니다.",
      fr: "Survolez n'importe quel élément pour le prévisualiser en entier — couleurs hex, markdown, code, texte long, images. Ne collez plus jamais la mauvaise chose au mauvais endroit.",
      de: "Fahren Sie über einen beliebigen Clip, um ihn vollständig vor dem Einfügen zu sehen — Hex-Farben, Markdown, Code, lange Texte, Bilder. Kein versehentliches Einfügen mehr.",
      it: "Passa il mouse su qualsiasi clip per visualizzarla in anteprima — colori hex, markdown, codice, testo lungo, immagini. Mai più incollare la cosa sbagliata nel posto sbagliato.",
      es: "Pasa el cursor sobre cualquier clip para previsualizarlo completo — colores hex, markdown, código, texto largo, imágenes. No más pegar lo incorrecto en el lugar equivocado.",
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
      en: "Copy → act, instantly",
      zh: "复制 → 行动，一步到位",
      ja: "コピー → 即アクション",
      ko: "복사 → 즉시 실행",
      fr: "Copier → Agir, instantanément",
      de: "Kopieren → Handeln, sofort",
      it: "Copia → Agisci, all'istante",
      es: "Copiar → Actuar, al instante",
    },
    desc: {
      en: "Copy an address? One-click to Maps. A date? Add to Calendar. A phone number? Call or Message. No switching apps, no manual typing.",
      zh: "复制了一个地址？一键打开地图。复制了一个日期？一键加入日历。复制了一个电话号码？一键拨打或发信息。不用切换应用，不用手动输入。",
      ja: "住所をコピー？ワンクリックでマップに。日付？カレンダーに追加。電話番号？通話かメッセージ。アプリを切り替える必要なし、手入力も不要。",
      ko: "주소를 복사했나요? 한 번 클릭으로 지도에. 날짜? 캘린더에 추가. 전화번호? 통화 또는 메시지. 앱 전환도, 수동 입력도 필요 없습니다.",
      fr: "Vous avez copié une adresse ? Un clic vers Plans. Une date ? Ajoutez au Calendrier. Un numéro ? Appelez ou envoyez un Message. Pas de changement d'app, pas de saisie manuelle.",
      de: "Eine Adresse kopiert? Ein Klick zu Karten. Ein Datum? Zum Kalender hinzufügen. Eine Telefonnummer? Anrufen oder Nachricht senden. Kein App-Wechsel, keine manuelle Eingabe.",
      it: "Hai copiato un indirizzo? Un clic per Mappe. Una data? Aggiungi a Calendario. Un numero di telefono? Chiama o Messaggio. Nessun cambio di app, nessuna digitazione manuale.",
      es: "¿Copiaste una dirección? Un clic a Mapas. ¿Una fecha? Añadir al Calendario. ¿Un número de teléfono? Llamar o Mensaje. Sin cambiar de app, sin escribir manualmente.",
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
      en: "Type less with snippets",
      zh: "少打字，多用 Snippet",
      ja: "スニペットで入力を削減",
      ko: "스니펫으로 덜 타이핑하기",
      fr: "Tapez moins avec les snippets",
      de: "Weniger tippen mit Snippets",
      it: "Digita meno con gli snippet",
      es: "Escribe menos con snippets",
    },
    desc: {
      en: "Pin frequently used text, code templates, or links and assign global keyboard shortcuts. Paste your email, address, or boilerplate without opening anything.",
      zh: "将常用文本、代码模板或链接置顶，并绑定全局快捷键。不用打开任何界面，一键粘贴邮箱、地址或重复内容。",
      ja: "よく使うテキスト、コードテンプレート、リンクをピン留めしてグローバルショートカットを割り当て。メールアドレスや住所、定型文を何も開かずに貼り付け。",
      ko: "자주 사용하는 텍스트, 코드 템플릿, 링크를 고정하고 전역 단축키를 할당. 이메일, 주소, 보일러플레이트를 아무것도 열지 않고 붙여넣기.",
      fr: "Épinglez textes, modèles de code ou liens fréquents et attribuez-leur des raccourcis clavier globaux. Collez votre email, adresse ou texte standard sans rien ouvrir.",
      de: "Häufig genutzte Texte, Code-Vorlagen oder Links anpinnen und globale Tastenkürzel zuweisen. E-Mail, Adresse oder Boilerplate einfügen, ohne etwas zu öffnen.",
      it: "Fissa testi, template di codice o link usati di frequente e assegna scorciatoie globali. Incolla la tua email, indirizzo o boilerplate senza aprire nulla.",
      es: "Fija textos, plantillas de código o enlaces frecuentes y asígnales atajos de teclado globales. Pega tu email, dirección o texto repetitivo sin abrir nada.",
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
      en: "Your pins, everywhere",
      zh: "置顶内容，跨设备同步",
      ja: "ピン留めはすべてのMacで",
      ko: "고정 항목, 어디서나",
      fr: "Vos épingles, partout",
      de: "Ihre Pins, überall",
      it: "I tuoi elementi fissati, ovunque",
      es: "Tus fijados, en todas partes",
    },
    desc: {
      en: "Sync just your pinned items across Macs via iCloud Drive. What you pin on one Mac appears on the other — your private clipboard history stays local on each device.",
      zh: "通过 iCloud Drive 仅同步你置顶的内容到多台 Mac。一台置顶，另一台立即可用——你的私人剪贴板历史仍保留在各设备本地。",
      ja: "iCloud Driveでピン留めした項目だけをMac間で同期。1台でピン留めすればもう1台にも表示——プライベートな履歴は各デバイスにローカル保存されたまま。",
      ko: "iCloud Drive로 고정한 항목만 Mac 간에 동기화. 한 Mac에서 고정하면 다른 Mac에도 표시 — 개인 클립보드 기록은 각 기기에 로컬로 유지됩니다.",
      fr: "Synchronisez uniquement vos éléments épinglés entre Macs via iCloud Drive. Ce que vous épinglez sur un Mac apparaît sur l'autre — votre historique privé reste local sur chaque appareil.",
      de: "Nur Ihre angehefteten Elemente per iCloud Drive zwischen Macs synchronisieren. Was Sie auf einem Mac anpinnen, erscheint auf dem anderen — Ihr privater Verlauf bleibt lokal.",
      it: "Sincronizza solo gli elementi fissati tra Mac tramite iCloud Drive. Ciò che fissi su un Mac appare sull'altro — la cronologia privata rimane locale su ogni dispositivo.",
      es: "Sincroniza solo tus elementos fijados entre Macs vía iCloud Drive. Lo que fijas en un Mac aparece en el otro — tu historial privado permanece local en cada dispositivo.",
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
      en: "AI that respects your data",
      zh: "懂隐私的 AI",
      ja: "データを尊重するAI",
      ko: "데이터를 존중하는 AI",
      fr: "Une IA qui respecte vos données",
      de: "KI, die Ihre Daten respektiert",
      it: "Un'IA che rispetta i tuoi dati",
      es: "IA que respeta tus datos",
    },
    desc: {
      en: "Translate, rewrite, summarize any clip with your own OpenAI, Anthropic, or Gemini API key. Zero data leaves your Mac unless you choose to send it — and your key stays in your Keychain.",
      zh: "使用你自己的 OpenAI、Anthropic 或 Gemini API Key，对任意剪贴内容进行翻译、改写、总结。除非你主动发送，否则零数据离开 Mac——Key 安全存储在钥匙串中。",
      ja: "自分のOpenAI、Anthropic、Gemini APIキーで、任意のクリップを翻訳、書き換え、要約。あなたが選択しない限りデータはMacから出ません——キーはキーチェーンに保存。",
      ko: "자신의 OpenAI, Anthropic, Gemini API 키로 모든 클립을 번역, 재작성, 요약. 직접 선택하지 않으면 데이터가 Mac을 떠나지 않습니다 — 키는 키체인에 안전하게 보관.",
      fr: "Traduisez, réécrivez, résumez n'importe quel élément avec votre propre clé API OpenAI, Anthropic ou Gemini. Aucune donnée ne quitte votre Mac sans votre choix — et votre clé reste dans votre Trousseau.",
      de: "Übersetzen, umschreiben, zusammenfassen mit Ihrem eigenen OpenAI-, Anthropic- oder Gemini-API-Schlüssel. Keine Daten verlassen Ihren Mac ohne Ihre Entscheidung — Ihr Schlüssel bleibt im Schlüsselbund.",
      it: "Traduci, riscrivi, riassumi qualsiasi clip con la tua chiave API OpenAI, Anthropic o Gemini. Nessun dato lascia il tuo Mac a meno che tu non scelga di inviarlo — e la tua chiave resta nel Portachiavi.",
      es: "Traduce, reescribe, resume cualquier clip con tu propia clave API de OpenAI, Anthropic o Gemini. Ningún dato sale de tu Mac a menos que elijas enviarlo — y tu clave permanece en tu Llavero.",
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z"></path>
      </svg>
    ),
    title: {
      en: "One keystroke away",
      zh: "一键唤起，随时取用",
      ja: "ワンキーでいつでも呼び出し",
      ko: "한 번의 키로 언제든지",
      fr: "À une touche de distance",
      de: "Einen Tastendruck entfernt",
      it: "A un tasto di distanza",
      es: "A una tecla de distancia",
    },
    desc: {
      en: "Bring up the Quick Panel from anywhere with a global shortcut. Search, browse, and paste without touching your mouse. Works in every app.",
      zh: "在任意应用中用全局快捷键呼出 Quick Panel。搜索、浏览、粘贴——全程不用碰鼠标，所有应用通用。",
      ja: "グローバルショートカットでどこからでもクイックパネルを呼び出し。検索、閲覧、貼り付けをマウスなしで。すべてのアプリで動作します。",
      ko: "어디서든 전역 단축키로 빠른 패널을 호출. 마우스 없이 검색, 탐색, 붙여넣기. 모든 앱에서 작동합니다.",
      fr: "Ouvrez le Panneau rapide depuis n'importe où avec un raccourci global. Cherchez, parcourez et collez sans toucher votre souris. Fonctionne dans toutes les apps.",
      de: "Rufen Sie das Schnellpanel von überall mit einem globalen Tastenkürzel auf. Suchen, durchsuchen und einfügen, ohne die Maus zu berühren. Funktioniert in jeder App.",
      it: "Apri il Pannello rapido da qualsiasi punto con una scorciatoia globale. Cerca, sfoglia e incolla senza toccare il mouse. Funziona in ogni app.",
      es: "Abre el Panel rápido desde cualquier lugar con un atajo global. Busca, navega y pega sin tocar el ratón. Funciona en todas las apps.",
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
