import React from "react";
import I18nText from "./I18nText.jsx";
import AnimatedI18nText from "./AnimatedI18nText.jsx";

const COMPARISON = [
  {
    label: { en: "Price", zh: "价格", ja: "価格", ko: "가격", fr: "Prix", de: "Preis", it: "Prezzo", es: "Precio" },
    maccy: { en: "Free / $9.99 App Store", zh: "免费 / App Store $9.99", ja: "無料 / App Store $9.99", ko: "무료 / App Store $9.99", fr: "Gratuit / App Store 9,99 $", de: "Kostenlos / App Store 9,99 $", it: "Gratis / App Store 9,99 $", es: "Gratis / App Store 9,99 $" },
    copyclip: { en: "$7.99", zh: "$7.99", ja: "$7.99", ko: "$7.99", fr: "7,99 $", de: "7,99 $", it: "7,99 $", es: "7,99 $" },
    clibo: { en: "$14.99", zh: "$14.99", ja: "$14.99", ko: "$14.99", fr: "14,99 $", de: "14,99 $", it: "14,99 $", es: "14,99 $" },
    paste: { en: "$29.99/yr", zh: "$29.99/年", ja: "$29.99/年", ko: "$29.99/년", fr: "29,99 $/an", de: "29,99 $/Jahr", it: "29,99 $/anno", es: "29,99 $/año" },
  },
  {
    label: { en: "Payment model", zh: "付费模式", ja: "課金モデル", ko: "결제 모델", fr: "Modèle de paiement", de: "Zahlungsmodell", it: "Modello di pagamento", es: "Modelo de pago" },
    maccy: { en: "Donation", zh: "捐赠", ja: "寄付", ko: "기부", fr: "Don", de: "Spende", it: "Donazione", es: "Donación" },
    copyclip: { en: "One-time", zh: "买断", ja: "買い切り", ko: "일회 결제", fr: "Achat unique", de: "Einmalkauf", it: "Una tantum", es: "Pago único" },
    clibo: { en: "One-time", zh: "买断", ja: "買い切り", ko: "일회 결제", fr: "Achat unique", de: "Einmalkauf", it: "Una tantum", es: "Pago único" },
    paste: { en: "Subscription", zh: "订阅", ja: "サブスク", ko: "구독", fr: "Abonnement", de: "Abo", it: "Abbonamento", es: "Suscripción" },
  },
  {
    label: { en: "Open source", zh: "开源", ja: "オープンソース", ko: "오픈 소스", fr: "Open source", de: "Open Source", it: "Open source", es: "Código abierto" },
    maccy: { en: "Yes", zh: "是", ja: "はい", ko: "예", fr: "Oui", de: "Ja", it: "Si", es: "Si" },
    copyclip: { en: "No", zh: "否", ja: "いいえ", ko: "아니요", fr: "Non", de: "Nein", it: "No", es: "No" },
    clibo: { en: "No", zh: "否", ja: "いいえ", ko: "아니요", fr: "Non", de: "Nein", it: "No", es: "No" },
    paste: { en: "No", zh: "否", ja: "いいえ", ko: "아니요", fr: "Non", de: "Nein", it: "No", es: "No" },
  },
  {
    label: { en: "Quick search", zh: "快捷搜索", ja: "クイック検索", ko: "빠른 검색", fr: "Recherche rapide", de: "Schnellsuche", it: "Ricerca rapida", es: "Busqueda rapida" },
    maccy: { en: "Global hotkey", zh: "全局快捷键", ja: "グローバルショートカット", ko: "전역 단축키", fr: "Raccourci global", de: "Globaler Kurzbefehl", it: "Scorciatoia globale", es: "Atajo global" },
    copyclip: { en: "Menu bar search", zh: "菜单栏搜索", ja: "メニューバー検索", ko: "메뉴 막대 검색", fr: "Recherche menu", de: "Menueleisten-Suche", it: "Ricerca menu", es: "Busqueda en menu" },
    clibo: { en: "Global quick panel", zh: "全局快捷面板", ja: "グローバルクイックパネル", ko: "전역 퀵 패널", fr: "Panneau rapide global", de: "Globales Schnellpanel", it: "Pannello rapido globale", es: "Panel rapido global" },
    paste: { en: "Visual search", zh: "可视化搜索", ja: "ビジュアル検索", ko: "비주얼 검색", fr: "Recherche visuelle", de: "Visuelle Suche", it: "Ricerca visiva", es: "Busqueda visual" },
  },
  {
    label: { en: "Paste directly into active app", zh: "直接粘贴回当前 App", ja: "アクティブAppへ直接ペースト", ko: "활성 앱에 바로 붙여넣기", fr: "Coller dans l'app active", de: "Direkt in aktive App einfügen", it: "Incolla nell'app attiva", es: "Pegar en la app activa" },
    maccy: { en: "Return paste", zh: "Return 粘贴", ja: "Returnでペースト", ko: "Return 붙여넣기", fr: "Coller avec Retour", de: "Return fügt ein", it: "Incolla con Return", es: "Pegar con Return" },
    copyclip: { en: "Menu selection", zh: "菜单选择", ja: "メニュー選択", ko: "메뉴 선택", fr: "Selection menu", de: "Menüauswahl", it: "Selezione menu", es: "Seleccion de menu" },
    clibo: { en: "Click copy + Return paste", zh: "单击复制 + Return 粘贴", ja: "クリックでコピー + Returnでペースト", ko: "클릭 복사 + Return 붙여넣기", fr: "Clic copier + Retour coller", de: "Klick kopieren + Return einfügen", it: "Clic copia + Return incolla", es: "Clic copia + Return pegar" },
    paste: { en: "Keyboard paste", zh: "键盘粘贴", ja: "キーボードペースト", ko: "키보드 붙여넣기", fr: "Collage clavier", de: "Tastatur-Einfügen", it: "Incolla da tastiera", es: "Pegado con teclado" },
  },
  {
    label: { en: "Images / files support", zh: "图片 / 文件支持", ja: "画像 / ファイル対応", ko: "이미지 / 파일 지원", fr: "Images / fichiers", de: "Bilder / Dateien", it: "Immagini / file", es: "Imagenes / archivos" },
    maccy: { en: "Text + images", zh: "文本 + 图片", ja: "テキスト + 画像", ko: "텍스트 + 이미지", fr: "Texte + images", de: "Text + Bilder", it: "Testo + immagini", es: "Texto + imagenes" },
    copyclip: { en: "Text", zh: "文本", ja: "テキスト", ko: "텍스트", fr: "Texte", de: "Text", it: "Testo", es: "Texto" },
    clibo: { en: "Text, images, files, paths", zh: "文本、图片、文件、路径", ja: "テキスト、画像、ファイル、パス", ko: "텍스트, 이미지, 파일, 경로", fr: "Texte, images, fichiers, chemins", de: "Text, Bilder, Dateien, Pfade", it: "Testo, immagini, file, percorsi", es: "Texto, imagenes, archivos, rutas" },
    paste: { en: "Rich history", zh: "富媒体历史", ja: "リッチ履歴", ko: "리치 기록", fr: "Historique riche", de: "Umfangreicher Verlauf", it: "Cronologia ricca", es: "Historial enriquecido" },
  },
  {
    label: { en: "Snippets", zh: "Snippets 模板", ja: "スニペット", ko: "스니펫", fr: "Snippets", de: "Snippets", it: "Snippet", es: "Snippets" },
    maccy: { en: "Pinned items", zh: "置顶项目", ja: "ピン留め項目", ko: "고정 항목", fr: "Elements epingles", de: "Angeheftete Einträge", it: "Elementi fissati", es: "Elementos fijados" },
    copyclip: { en: "Favorites", zh: "收藏", ja: "お気に入り", ko: "즐겨찾기", fr: "Favoris", de: "Favoriten", it: "Preferiti", es: "Favoritos" },
    clibo: { en: "Templates + shortcuts", zh: "模板 + 快捷键", ja: "テンプレート + ショートカット", ko: "템플릿 + 단축키", fr: "Modeles + raccourcis", de: "Vorlagen + Kurzbefehle", it: "Template + scorciatoie", es: "Plantillas + atajos" },
    paste: { en: "Pinboards", zh: "Pinboards", ja: "Pinboards", ko: "Pinboards", fr: "Pinboards", de: "Pinboards", it: "Pinboards", es: "Pinboards" },
  },
  {
    label: { en: "OCR / image text extraction", zh: "OCR / 图片文字提取", ja: "OCR / 画像テキスト抽出", ko: "OCR / 이미지 텍스트 추출", fr: "OCR / texte d'image", de: "OCR / Bildtext", it: "OCR / testo immagine", es: "OCR / texto de imagen" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "Built in", zh: "内置", ja: "内蔵", ko: "내장", fr: "Integre", de: "Integriert", it: "Integrato", es: "Integrado" },
    paste: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
  },
  {
    label: { en: "AI Actions", zh: "AI Actions", ja: "AI Actions", ko: "AI Actions", fr: "AI Actions", de: "AI Actions", it: "AI Actions", es: "AI Actions" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "BYOK", zh: "BYOK", ja: "BYOK", ko: "BYOK", fr: "BYOK", de: "BYOK", it: "BYOK", es: "BYOK" },
    paste: { en: "MCP workflow", zh: "MCP 工作流", ja: "MCPワークフロー", ko: "MCP 워크플로우", fr: "Workflow MCP", de: "MCP-Workflow", it: "Workflow MCP", es: "Flujo MCP" },
  },
  {
    label: { en: "Automation / macOS Actions", zh: "自动化 / macOS Actions", ja: "自動化 / macOS Actions", ko: "자동화 / macOS Actions", fr: "Automatisation / Actions macOS", de: "Automation / macOS Actions", it: "Automazione / Azioni macOS", es: "Automatizacion / Actions macOS" },
    maccy: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "Rules + native actions", zh: "规则 + 原生动作", ja: "ルール + ネイティブ操作", ko: "규칙 + 네이티브 작업", fr: "Regles + actions natives", de: "Regeln + native Aktionen", it: "Regole + azioni native", es: "Reglas + acciones nativas" },
    paste: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
  },
  {
    label: { en: "Migration from Maccy", zh: "从 Maccy 迁移", ja: "Maccyから移行", ko: "Maccy에서 이전", fr: "Migration depuis Maccy", de: "Migration von Maccy", it: "Migrazione da Maccy", es: "Migracion desde Maccy" },
    maccy: { en: "Source app", zh: "源 App", ja: "移行元", ko: "원본 앱", fr: "App source", de: "Quell-App", it: "App sorgente", es: "App origen" },
    copyclip: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
    clibo: { en: "History, images, files, pins", zh: "历史、图片、文件、置顶", ja: "履歴、画像、ファイル、ピン", ko: "기록, 이미지, 파일, 고정", fr: "Historique, images, fichiers, epingles", de: "Verlauf, Bilder, Dateien, Pins", it: "Cronologia, immagini, file, pin", es: "Historial, imagenes, archivos, fijados" },
    paste: { en: "—", zh: "—", ja: "—", ko: "—", fr: "—", de: "—", it: "—", es: "—" },
  },
  {
    label: { en: "Privacy controls", zh: "隐私控制", ja: "プライバシー制御", ko: "개인정보 제어", fr: "Controles de confidentialite", de: "Datenschutz-Kontrollen", it: "Controlli privacy", es: "Controles de privacidad" },
    maccy: { en: "Ignore apps, clear history", zh: "忽略 App、清空历史", ja: "App除外、履歴削除", ko: "앱 제외, 기록 삭제", fr: "Ignorer apps, effacer", de: "Apps ignorieren, Verlauf löschen", it: "Ignora app, cancella", es: "Ignorar apps, borrar" },
    copyclip: { en: "Exclude apps", zh: "排除 App", ja: "App除外", ko: "앱 제외", fr: "Exclure apps", de: "Apps ausschließen", it: "Escludi app", es: "Excluir apps" },
    clibo: { en: "Local-first, sensitive handling, exclude apps", zh: "本地优先、敏感内容处理、排除 App", ja: "ローカル優先、機密処理、App除外", ko: "로컬 우선, 민감 항목 처리, 앱 제외", fr: "Local-first, contenu sensible, apps exclues", de: "Local-first, sensible Inhalte, Apps ausschließen", it: "Local-first, dati sensibili, app escluse", es: "Local-first, datos sensibles, apps excluidas" },
    paste: { en: "Private spaces, sync controls", zh: "私密空间、同步控制", ja: "プライベート領域、同期制御", ko: "비공개 공간, 동기화 제어", fr: "Espaces prives, controles sync", de: "Private Bereiche, Sync-Kontrollen", it: "Spazi privati, controlli sync", es: "Espacios privados, controles sync" },
  },
  {
    label: { en: "Sync", zh: "同步", ja: "同期", ko: "동기화", fr: "Synchronisation", de: "Sync", it: "Sync", es: "Sync" },
    maccy: { en: "No built-in sync", zh: "无内置同步", ja: "内蔵同期なし", ko: "내장 동기화 없음", fr: "Pas de sync integree", de: "Kein integrierter Sync", it: "Nessuna sync integrata", es: "Sin sync integrada" },
    copyclip: { en: "No built-in sync", zh: "无内置同步", ja: "内蔵同期なし", ko: "내장 동기화 없음", fr: "Pas de sync integree", de: "Kein integrierter Sync", it: "Nessuna sync integrata", es: "Sin sync integrada" },
    clibo: { en: "iCloud", zh: "iCloud", ja: "iCloud", ko: "iCloud", fr: "iCloud", de: "iCloud", it: "iCloud", es: "iCloud" },
    paste: { en: "Cloud sync", zh: "云同步", ja: "クラウド同期", ko: "클라우드 동기화", fr: "Sync cloud", de: "Cloud-Sync", it: "Sync cloud", es: "Sync cloud" },
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
        <p className="section-lede comparison-lede">
          <I18nText
            t={{
              en: "A local-first clipboard manager with power features, without another subscription.",
              zh: "一款本地优先、功能完整的剪贴板管理器，不再增加一个订阅。",
              ja: "ローカル優先で高機能。もう一つのサブスクは不要です。",
              ko: "로컬 우선의 강력한 클립보드 관리자, 또 다른 구독 없이.",
              fr: "Un gestionnaire local-first puissant, sans nouvel abonnement.",
              de: "Ein local-first Clipboard-Manager mit Profi-Funktionen, ohne weiteres Abo.",
              it: "Un clipboard manager local-first con funzioni avanzate, senza un altro abbonamento.",
              es: "Un gestor local-first con funciones potentes, sin otra suscripcion.",
            }}
          />
        </p>
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
                  <span className="comparison-product-name">{col.name}</span>
                  {col.highlight ? (
                    <span className="comparison-badge">
                      <I18nText
                        t={{
                          en: "Best value",
                          zh: "高性价比",
                          ja: "Best value",
                          ko: "Best value",
                          fr: "Best value",
                          de: "Best value",
                          it: "Best value",
                          es: "Best value",
                        }}
                      />
                    </span>
                  ) : null}
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

      <div className="comparison-footer reveal reveal-soft">
        <a
          className="button button-primary comparison-cta"
          href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess"
        >
          <I18nText
            t={{
              en: "Get Clibo for $14.99",
              zh: "以 $14.99 获取 Clibo",
              ja: "$14.99でCliboを入手",
              ko: "$14.99에 Clibo 받기",
              fr: "Obtenir Clibo pour 7,66 $",
              de: "Clibo für 7,66 $ holen",
              it: "Ottieni Clibo per 7,66 $",
              es: "Obtener Clibo por 7,66 $",
            }}
          />
        </a>
      </div>
    </section>
  );
}
