import React, { useEffect, useState } from "react";
import { useLang } from "../context/LangContext.jsx";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const HERO_TITLE = {
  en: [
    [{ text: "Your" }, { text: "clipboard," }],
    [{ text: "finally" }, { text: "organized.", emphasis: true }],
  ],
  zh: [
    [{ text: "剪贴板，" }],
    [{ text: "终于" }, { text: "井井有条", emphasis: true }],
  ],
  ja: [
    [{ text: "クリップボードを、" }],
    [{ text: "ついに" }, { text: "整理。", emphasis: true }],
  ],
  ko: [
    [{ text: "클립보드," }],
    [{ text: "드디어" }, { text: "정리되다.", emphasis: true }],
  ],
  fr: [
    [{ text: "Votre" }, { text: "presse-papiers," }],
    [{ text: "enfin" }, { text: "organisé.", emphasis: true }],
  ],
  de: [
    [{ text: "Ihre" }, { text: "Zwischenablage," }],
    [{ text: "endlich" }, { text: "organisiert.", emphasis: true }],
  ],
  it: [
    [{ text: "I tuoi" }, { text: "appunti," }],
    [{ text: "finalmente" }, { text: "in ordine.", emphasis: true }],
  ],
  es: [
    [{ text: "Tu" }, { text: "portapapeles," }],
    [{ text: "por fin" }, { text: "organizado.", emphasis: true }],
  ],
};

const HERO_SHOTS = [
  {
    src: "/assets/快捷面板.png",
    rounded: true,
    label: {
      en: "Quick Panel",
      zh: "快捷面板",
      ja: "クイックパネル",
      ko: "빠른 패널",
      fr: "Panneau rapide",
      de: "Schnellpanel",
      it: "Pannello rapido",
      es: "Panel rápido",
    },
    description: {
      en: "Quickly review recent items, then click, drag, or use shortcuts to retrieve them. Common actions stay one step away.",
      zh: "快速查看最近记录，鼠标单击、拖拽、快捷键便捷取用，常用功能一键直达。",
      ja: "最近の履歴をすばやく確認し、クリック、ドラッグ、ショートカットで即座に取り出せます。よく使う操作にもすぐ届きます。",
      ko: "최근 기록을 빠르게 확인하고 클릭, 드래그, 단축키로 바로 가져옵니다. 자주 쓰는 기능도 한 번에 실행할 수 있습니다.",
      fr: "Consultez vite les elements recents, puis recuperez-les par clic, glisser-deposer ou raccourci. Les actions frequentes restent a portee.",
      de: "Pruefen Sie aktuelle Eintraege schnell und nutzen Sie sie per Klick, Drag-and-drop oder Tastaturkuerzel. Wichtige Aktionen sind sofort erreichbar.",
      it: "Controlla rapidamente gli elementi recenti e recuperali con clic, trascinamento o scorciatoie. Le azioni frequenti restano a portata.",
      es: "Revisa rapidamente los elementos recientes y usalos con clic, arrastre o atajos. Las acciones habituales quedan a un paso.",
    },
  },
  {
    src: "/assets/归档.png",
    label: {
      en: "Archive",
      zh: "归档",
      ja: "アーカイブ",
      ko: "아카이브",
      fr: "Archives",
      de: "Archiv",
      it: "Archivio",
      es: "Archivo",
    },
    description: {
      en: "Your copies are not lost. They stay in Archive as a date timeline, ready whenever you need to look back.",
      zh: "你的复制不会丢失，它会以日期时间线的形式待在归档页面，你可以随时查阅。",
      ja: "コピーした内容は失われません。日付タイムラインとしてアーカイブに残り、いつでも見返せます。",
      ko: "복사한 내용은 사라지지 않습니다. 날짜 타임라인 형태로 아카이브에 남아 언제든 다시 확인할 수 있습니다.",
      fr: "Vos copies ne disparaissent pas. Elles restent dans les archives sous forme de chronologie par date, consultables a tout moment.",
      de: "Ihre Kopien gehen nicht verloren. Sie bleiben als Datums-Zeitleiste im Archiv und sind jederzeit nachschlagbar.",
      it: "Le tue copie non vanno perse. Restano nell'archivio come timeline per data, sempre consultabili.",
      es: "Tus copias no se pierden. Permanecen en el archivo como una linea temporal por fecha, listas para consultarse.",
    },
  },
  {
    src: "/assets/统计面板.png",
    label: {
      en: "Stats",
      zh: "统计面板",
      ja: "統計",
      ko: "통계",
      fr: "Statistiques",
      de: "Statistik",
      it: "Statistiche",
      es: "Estadísticas",
    },
    description: {
      en: "Every copy is worth tracking. The statistics panel turns your clipboard activity into rich, polished charts.",
      zh: "每一次复制都值得被记录，统计面板以精美丰富的统计图表给你完备的视觉体验。",
      ja: "すべてのコピーには記録する価値があります。統計パネルがクリップボードの動きを豊かなグラフで見せます。",
      ko: "모든 복사는 기록할 가치가 있습니다. 통계 패널은 클립보드 활동을 풍부하고 세련된 차트로 보여줍니다.",
      fr: "Chaque copie merite d'etre suivie. Le panneau de statistiques transforme votre activite en graphiques riches et soignes.",
      de: "Jeder Kopiervorgang ist es wert, erfasst zu werden. Das Statistikpanel zeigt Ihre Nutzung in detailreichen, klaren Diagrammen.",
      it: "Ogni copia merita di essere registrata. Il pannello statistiche trasforma l'attivita in grafici ricchi e curati.",
      es: "Cada copia merece registrarse. El panel de estadisticas convierte tu actividad en graficos completos y cuidados.",
    },
  },
  {
    src: "/assets/隐私设置.png",
    label: {
      en: "Privacy",
      zh: "隐私设置",
      ja: "プライバシー",
      ko: "개인정보",
      fr: "Confidentialité",
      de: "Datenschutz",
      it: "Privacy",
      es: "Privacidad",
    },
    description: {
      en: "Permanently ignore apps and define advanced privacy filters, so sensitive clipboard data stays under your control.",
      zh: "直接添加需要永久忽略的 App，以及更多复杂的高级隐私过滤规则，真正实现隐私至上。",
      ja: "常に無視するアプリや高度なプライバシーフィルターを設定し、機密性の高いコピー内容を自分で管理できます。",
      ko: "영구적으로 무시할 앱과 고급 개인정보 필터 규칙을 추가해 민감한 클립보드 데이터를 직접 통제합니다.",
      fr: "Ajoutez des apps a ignorer durablement et des filtres avances pour garder les donnees sensibles sous controle.",
      de: "Fuegen Sie dauerhaft zu ignorierende Apps und erweiterte Datenschutzfilter hinzu, damit sensible Inhalte kontrolliert bleiben.",
      it: "Aggiungi app da ignorare sempre e filtri privacy avanzati, mantenendo sotto controllo i dati sensibili copiati.",
      es: "Agrega apps para ignorar permanentemente y filtros avanzados de privacidad para controlar los datos sensibles.",
    },
  },
  {
    src: "/assets/偏好设置.png",
    label: {
      en: "Preferences",
      zh: "偏好设置",
      ja: "環境設定",
      ko: "환경설정",
      fr: "Préférences",
      de: "Einstellungen",
      it: "Preferenze",
      es: "Preferencias",
    },
    description: {
      en: "Language, shortcuts, sound cues, image watermarking, iCloud sync, and retention rules all live in one settings surface.",
      zh: "语言、快捷键、提示音、图片水印、iCloud 同步、数据留存规则等尽在其中。",
      ja: "言語、ショートカット、通知音、画像ウォーターマーク、iCloud 同期、データ保持ルールをまとめて管理できます。",
      ko: "언어, 단축키, 알림음, 이미지 워터마크, iCloud 동기화, 데이터 보관 규칙을 한곳에서 관리합니다.",
      fr: "Langue, raccourcis, sons, filigrane d'image, synchronisation iCloud et regles de conservation sont reunis ici.",
      de: "Sprache, Kurzbefehle, Sounds, Bild-Wasserzeichen, iCloud-Sync und Aufbewahrungsregeln liegen an einem Ort.",
      it: "Lingua, scorciatoie, suoni, watermark immagini, sincronizzazione iCloud e regole di conservazione sono tutti qui.",
      es: "Idioma, atajos, sonidos, marca de agua, sincronizacion iCloud y reglas de conservacion viven en un solo lugar.",
    },
  },
];

function AnimatedHeroTitle() {
  const { lang } = useLang();
  const lines = HERO_TITLE[lang] || HERO_TITLE.en;
  let step = 0;

  return (
    <span className={`hero-title-lines ${lang}`}>
      {lines.map((line, lineIndex) => (
        <span className="hero-title-line" key={lineIndex}>
          {line.map((part, partIndex) => {
            const Tag = part.emphasis ? "em" : "span";
            const style = { "--word-delay": `${0.08 + step * 0.075}s` };
            step += 1;
            return (
              <Tag
                className="hero-title-word"
                style={style}
                key={`${part.text}-${partIndex}`}
              >
                {part.text}
              </Tag>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const [activeShot, setActiveShot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentShot = HERO_SHOTS[activeShot] || HERO_SHOTS[0];
  const currentDescription =
    currentShot.description[lang] || currentShot.description.en;

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveShot((current) => (current + 1) % HERO_SHOTS.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="badge reveal" style={{ "--delay": "40ms" }}>
            <I18nText
              t={{
                en: "Native Mac app · macOS 14+ · No account required",
                zh: "原生 Mac 应用 · macOS 14+ · 无需账号",
                ja: "ネイティブ Mac アプリ · macOS 14+ · アカウント不要",
                ko: "네이티브 Mac 앱 · macOS 14+ · 계정 불필요",
                fr: "App Mac native · macOS 14+ · Aucun compte requis",
                de: "Native Mac-App · macOS 14+ · Kein Account nötig",
                it: "App Mac nativa · macOS 14+ · Nessun account richiesto",
                es: "App Mac nativa · macOS 14+ · Sin cuenta requerida",
              }}
            />
          </div>
          <h1 id="hero-title" className="hero-title reveal" style={{ "--delay": "130ms" }}>
            <AnimatedHeroTitle />
          </h1>
          <p className="subtitle reveal" style={{ "--delay": "220ms" }}>
            <AnimatedI18nText
              t={{
                en: "Everything you copy — text, images, links, colors — stored locally, always searchable, and one keystroke away. Import from Maccy and be up in seconds.",
                zh: "你复制的一切——文字、图片、链接、颜色——都保存在本地，随时搜索，一键调取。支持从 Maccy 导入，几秒上手。",
                ja: "コピーしたすべてのテキスト、画像、リンク、カラーをローカルに保存し、いつでも検索、ワンキーで呼び出し。Maccyからのインポートも数秒。",
                ko: "복사한 모든 것——텍스트, 이미지, 링크, 색상——을 로컬에 저장하고, 언제든 검색, 한 번의 키로 불러오기. Maccy에서 가져오기도 몇 초면 됩니다.",
                fr: "Tout ce que vous copiez — texte, images, liens, couleurs — stocké localement, toujours consultable, à une touche. Importez depuis Maccy en quelques secondes.",
                de: "Alles Kopierte — Text, Bilder, Links, Farben — lokal gespeichert, jederzeit durchsuchbar, einen Tastendruck entfernt. Import aus Maccy in Sekunden.",
                it: "Tutto ciò che copi — testo, immagini, link, colori — archiviato localmente, sempre cercabile, a un tasto di distanza. Importa da Maccy in pochi secondi.",
                es: "Todo lo que copias — texto, imágenes, enlaces, colores — almacenado localmente, siempre consultable, a una tecla. Importa desde Maccy en segundos.",
              }}
            />
          </p>
          <div className="hero-actions reveal" style={{ "--delay": "310ms" }}>
            <a
              className="button button-primary"
              href="https://releases.clibo.us/Clibo-1.2.11-35.dmg"
            >
              <I18nText
                t={{
                  en: "Download Free Trial",
                  zh: "下载试用",
                  ja: "無料トライアルをダウンロード",
                  ko: "묣료 체험판 다운로드",
                  fr: "Télécharger l'essai gratuit",
                  de: "Kostenlose Testversion herunterladen",
                  it: "Scarica la prova gratuita",
                  es: "Descargar prueba gratuita",
                }}
              />
            </a>
            <a
              className="button button-primary button-teal"
              href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess"
            >
              <I18nText
                t={{
                  en: "Buy - $7.66",
                  zh: "购买 - $7.66",
                  ja: "購入 - $7.66",
                  ko: "구매 - $7.66",
                  fr: "Acheter - 7,66 $",
                  de: "Kaufen - 7,66 $",
                  it: "Acquista - 7,66 $",
                  es: "Comprar - 7,66 $",
                }}
              />
            </a>
          </div>
          <p className="price-note reveal" style={{ "--delay": "400ms" }}>
            <I18nText
              t={{
                en: "Early Bird: $7.66 one-time · Regular price $14 · Valid until July 1, 2026",
                zh: "早鸟价：$7.66 一次买断 · 原价 $14 · 2026年7月1日前有效",
                ja: "早期購入: $7.66 一回払い · 通常価格 $14 · 2026年7月1日まで有効",
                ko: "얼리버드: $7.66 일회결제 · 정가 $14 · 2026년 7월 1일까지 유효",
                fr: "Early Bird : 7,66 $ unique · Prix normal $14 · Valable jusqu'au 1 juillet 2026",
                de: "Frühbucher: 7,66 $ einmalig · Regulärer Preis $14 · Gültig bis 1. Juli 2026",
                it: "Early Bird: 7,66 $ una tantum · Prezzo regolare $14 · Valido fino al 1 luglio 2026",
                es: "Early Bird: 7,66 $ único · Precio regular $14 · Válido hasta el 1 de julio de 2026",
              }}
            />
          </p>
        </div>

        <figure
          className="hero-screenshot-frame hero-carousel reveal reveal-right"
          style={{ "--delay": "490ms" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hero-carousel-stage" aria-live="polite">
            {HERO_SHOTS.map((shot, index) => {
              const label = shot.label[lang] || shot.label.en;

              return (
                <div
                  key={shot.src}
                  className={`hero-carousel-slide ${
                    index === activeShot ? "is-active" : ""
                  } ${shot.rounded ? "has-rounded-frame" : ""}`}
                  aria-hidden={index === activeShot ? "false" : "true"}
                >
                  <img
                    className="hero-carousel-image"
                    src={shot.src}
                    alt={`Clibo ${label}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="hero-carousel-controls" aria-label="Hero screenshots">
            <div className="hero-carousel-tabs">
              {HERO_SHOTS.map((shot, index) => {
                const label = shot.label[lang] || shot.label.en;

                return (
                  <button
                    key={shot.src}
                    className={`hero-carousel-tab ${
                      index === activeShot ? "is-active" : ""
                    }`}
                    type="button"
                    onClick={() => setActiveShot(index)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    aria-label={label}
                    aria-pressed={index === activeShot}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <p className="hero-carousel-description" key={activeShot}>
              {currentDescription}
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
