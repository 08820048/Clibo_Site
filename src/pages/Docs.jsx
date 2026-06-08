import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

function text(en, zh, ja, ko, fr, de, it, es) {
  return { en, zh, ja, ko, fr, de, it, es };
}

const docNav = [
  { id: "overview", title: text("Overview", "概览", "概要", "개요", "Vue d'ensemble", "Uebersicht", "Panoramica", "Resumen") },
  { id: "install", title: text("Install Clibo", "安装 Clibo", "Clibo をインストール", "Clibo 설치", "Installer Clibo", "Clibo installieren", "Installare Clibo", "Instalar Clibo") },
  { id: "permissions", title: text("Permissions", "权限设置", "権限", "권한", "Autorisations", "Berechtigungen", "Permessi", "Permisos") },
  { id: "history", title: text("Clipboard history", "剪贴板历史", "クリップボード履歴", "클립보드 기록", "Historique", "Zwischenablageverlauf", "Cronologia appunti", "Historial") },
  { id: "quick-panel", title: text("Quick panel", "快捷面板", "クイックパネル", "빠른 패널", "Panneau rapide", "Schnellpanel", "Pannello rapido", "Panel rapido") },
  { id: "actions", title: text("Actions", "右键动作", "アクション", "작업", "Actions", "Aktionen", "Azioni", "Acciones") },
  { id: "snippets", title: text("Snippets", "Snippets", "Snippets", "Snippets", "Snippets", "Snippets", "Snippets", "Snippets") },
  { id: "privacy", title: text("Privacy", "隐私", "プライバシー", "개인정보 보호", "Confidentialite", "Datenschutz", "Privacy", "Privacidad") },
  { id: "sync-import", title: text("Sync and import", "同步与导入", "同期と取り込み", "동기화 및 가져오기", "Sync et import", "Sync und Import", "Sync e importazione", "Sincronizacion e importacion") },
  { id: "ai-statistics", title: text("AI and statistics", "AI 与统计", "AI と統計", "AI 및 통계", "IA et statistiques", "KI und Statistiken", "AI e statistiche", "IA y estadisticas") },
  { id: "troubleshooting", title: text("Troubleshooting", "排障", "トラブルシューティング", "문제 해결", "Depannage", "Fehlerbehebung", "Risoluzione problemi", "Solucion de problemas") },
];

const copy = {
  sidebarBrand: text(
    "Clibo Docs",
    "Clibo 文档",
    "Clibo ドキュメント",
    "Clibo 문서",
    "Docs Clibo",
    "Clibo Docs",
    "Docs Clibo",
    "Docs de Clibo"
  ),
  updated: text(
    "Documentation · Last updated June 2026",
    "文档 · 最后更新于 2026 年 6 月",
    "ドキュメント · 最終更新 2026年6月",
    "문서 · 2026년 6월 마지막 업데이트",
    "Documentation · Derniere mise a jour en juin 2026",
    "Dokumentation · Zuletzt aktualisiert im Juni 2026",
    "Documentazione · Ultimo aggiornamento giugno 2026",
    "Documentacion · Ultima actualizacion en junio de 2026"
  ),
  title: text(
    "Clibo Documentation",
    "Clibo 使用文档",
    "Clibo ドキュメント",
    "Clibo 문서",
    "Documentation Clibo",
    "Clibo Dokumentation",
    "Documentazione Clibo",
    "Documentacion de Clibo"
  ),
  lede: text(
    "A practical guide for setting up Clibo, recording clipboard history, using the quick panel, protecting sensitive content, and connecting copied items with native macOS apps.",
    "这是一份实用手册，帮助你完成 Clibo 设置、记录剪贴板历史、使用快捷面板、保护敏感内容，并把复制内容和 macOS 原生应用联动起来。",
    "Clibo の設定、クリップボード履歴の記録、クイックパネルの利用、機密内容の保護、コピーした項目と macOS 標準アプリの連携を説明する実用ガイドです。",
    "Clibo 설정, 클립보드 기록 저장, 빠른 패널 사용, 민감한 콘텐츠 보호, 복사한 항목과 macOS 기본 앱 연동을 다루는 실용 가이드입니다.",
    "Un guide pratique pour configurer Clibo, enregistrer l'historique du presse-papiers, utiliser le panneau rapide, proteger les contenus sensibles et connecter les elements copies aux apps macOS natives.",
    "Ein praktischer Leitfaden zum Einrichten von Clibo, Speichern des Zwischenablageverlaufs, Nutzen des Schnellpanels, Schuetzen sensibler Inhalte und Verbinden kopierter Inhalte mit nativen macOS-Apps.",
    "Una guida pratica per configurare Clibo, registrare la cronologia degli appunti, usare il pannello rapido, proteggere i contenuti sensibili e collegare gli elementi copiati alle app native di macOS.",
    "Una guia practica para configurar Clibo, registrar el historial del portapapeles, usar el panel rapido, proteger contenido sensible y conectar elementos copiados con apps nativas de macOS."
  ),
  overviewBody1: text(
    "Clibo is a native macOS clipboard manager. It keeps clipboard history on your Mac, recognizes common content types, provides fast search and previews, and lets you reuse copied content from the Dashboard or quick panel.",
    "Clibo 是一款原生 macOS 剪贴板管理器。它会把剪贴板历史保存在你的 Mac 本机，自动识别常见内容类型，提供快速搜索和预览，并允许你从 Dashboard 或快捷面板中再次取用复制内容。",
    "Clibo は macOS ネイティブのクリップボードマネージャーです。履歴を Mac 上に保存し、一般的な内容タイプを認識し、高速検索とプレビューを提供し、Dashboard やクイックパネルから再利用できます。",
    "Clibo는 macOS 네이티브 클립보드 관리자입니다. 기록을 Mac에 저장하고, 일반적인 콘텐츠 유형을 인식하며, 빠른 검색과 미리보기를 제공하고 Dashboard 또는 빠른 패널에서 다시 사용할 수 있게 합니다.",
    "Clibo est un gestionnaire de presse-papiers natif pour macOS. Il conserve l'historique sur votre Mac, reconnait les types de contenu courants, offre recherche et apercus rapides, puis permet de reutiliser les contenus depuis le Dashboard ou le panneau rapide.",
    "Clibo ist ein nativer Zwischenablage-Manager fuer macOS. Er speichert den Verlauf auf Ihrem Mac, erkennt gaengige Inhaltstypen, bietet schnelle Suche und Vorschauen und macht kopierte Inhalte im Dashboard oder Schnellpanel wiederverwendbar.",
    "Clibo e un gestore appunti nativo per macOS. Conserva la cronologia sul Mac, riconosce i tipi di contenuto comuni, offre ricerca e anteprime rapide e permette di riutilizzare i contenuti da Dashboard o pannello rapido.",
    "Clibo es un gestor nativo del portapapeles para macOS. Guarda el historial en tu Mac, reconoce tipos comunes de contenido, ofrece busqueda y vistas rapidas, y permite reutilizar contenido desde el Dashboard o el panel rapido."
  ),
  overviewBody2: text(
    "The main surfaces are the menu bar icon, the Dashboard, the quick panel, preview popovers, Settings, and context menus on each clipboard record.",
    "主要入口包括菜单栏图标、Dashboard、快捷面板、悬停预览、设置页面，以及每条剪贴板记录的右键菜单。",
    "主な操作場所は、メニューバーアイコン、Dashboard、クイックパネル、プレビューポップオーバー、設定、各履歴項目のコンテキストメニューです。",
    "주요 화면은 메뉴 막대 아이콘, Dashboard, 빠른 패널, 미리보기 팝오버, 설정, 각 클립보드 기록의 컨텍스트 메뉴입니다.",
    "Les principales surfaces sont l'icone de barre de menus, le Dashboard, le panneau rapide, les apercus, les reglages et les menus contextuels de chaque entree.",
    "Die wichtigsten Bereiche sind Menueleisten-Symbol, Dashboard, Schnellpanel, Vorschau-Popover, Einstellungen und Kontextmenues der einzelnen Eintraege.",
    "Le aree principali sono l'icona nella barra menu, Dashboard, pannello rapido, popup di anteprima, Impostazioni e menu contestuali di ogni record.",
    "Las superficies principales son el icono de la barra de menus, Dashboard, panel rapido, vistas emergentes, Ajustes y menus contextuales de cada registro."
  ),
  downloadLaunch: text("Download and launch", "下载并启动", "ダウンロードして起動", "다운로드 및 실행", "Telecharger et lancer", "Herunterladen und starten", "Scaricare e avviare", "Descargar e iniciar"),
  installStep1: text("Download the latest Clibo DMG from the website.", "从官网下载最新版本的 Clibo DMG。", "Web サイトから最新の Clibo DMG をダウンロードします。", "웹사이트에서 최신 Clibo DMG를 다운로드합니다.", "Telechargez le dernier DMG Clibo depuis le site.", "Laden Sie die neueste Clibo-DMG von der Website herunter.", "Scarica l'ultimo DMG di Clibo dal sito.", "Descarga el DMG mas reciente de Clibo desde el sitio web."),
  installStep2: text("Open the DMG and drag Clibo into Applications.", "打开 DMG，并将 Clibo 拖入“应用程序”。", "DMG を開き、Clibo をアプリケーションフォルダへドラッグします。", "DMG를 열고 Clibo를 Applications 폴더로 드래그합니다.", "Ouvrez le DMG et faites glisser Clibo dans Applications.", "Oeffnen Sie die DMG und ziehen Sie Clibo in Programme.", "Apri il DMG e trascina Clibo in Applicazioni.", "Abre el DMG y arrastra Clibo a Aplicaciones."),
  installStep3: text("Launch Clibo from Applications, Launchpad, or Spotlight.", "从“应用程序”、Launchpad 或 Spotlight 启动 Clibo。", "アプリケーション、Launchpad、または Spotlight から Clibo を起動します。", "Applications, Launchpad 또는 Spotlight에서 Clibo를 실행합니다.", "Lancez Clibo depuis Applications, Launchpad ou Spotlight.", "Starten Sie Clibo aus Programme, Launchpad oder Spotlight.", "Avvia Clibo da Applicazioni, Launchpad o Spotlight.", "Inicia Clibo desde Aplicaciones, Launchpad o Spotlight."),
  trialLicense: text("Trial and license", "试用与授权", "試用とライセンス", "체험판 및 라이선스", "Essai et licence", "Testversion und Lizenz", "Prova e licenza", "Prueba y licencia"),
  trialBody: text(
    "Clibo includes a 7-day free trial. After the trial, activate a license from Settings. If you purchased from the website, copy the license key from your receipt email and paste it into Settings > License.",
    "Clibo 提供 7 天免费试用。试用结束后，可在设置中激活授权。如果你从官网购买，请从收据邮件中复制 license key，并粘贴到“设置 > License”。",
    "Clibo には 7 日間の無料試用があります。試用後は設定からライセンスを有効化します。Web サイトで購入した場合は、領収書メールの license key をコピーして Settings > License に貼り付けます。",
    "Clibo는 7일 무료 체험을 제공합니다. 체험 후에는 설정에서 라이선스를 활성화하세요. 웹사이트에서 구매했다면 영수증 이메일의 license key를 복사해 Settings > License에 붙여넣습니다.",
    "Clibo inclut un essai gratuit de 7 jours. Apres l'essai, activez une licence dans les Reglages. Si vous avez achete sur le site, copiez la license key depuis l'email de recu et collez-la dans Settings > License.",
    "Clibo enthaelt eine 7-taegige kostenlose Testversion. Danach aktivieren Sie eine Lizenz in den Einstellungen. Bei Kauf ueber die Website kopieren Sie den license key aus der Beleg-E-Mail nach Settings > License.",
    "Clibo include una prova gratuita di 7 giorni. Dopo la prova, attiva una licenza dalle Impostazioni. Se hai acquistato dal sito, copia la license key dall'email di ricevuta e incollala in Settings > License.",
    "Clibo incluye una prueba gratuita de 7 dias. Despues, activa una licencia desde Ajustes. Si compraste en el sitio web, copia la license key del correo de recibo y pegala en Settings > License."
  ),
  permissionsBody: text(
    "The first-run guide walks through permissions Clibo needs for the workflows you enable. You can also revisit permission-related settings later from Settings.",
    "首次使用引导会带你开启 Clibo 所需的权限。之后你也可以在设置中重新查看和调整相关权限。",
    "初回ガイドでは、有効にするワークフローに必要な権限を案内します。後から設定で権限関連の項目を確認できます。",
    "첫 실행 가이드는 활성화한 워크플로에 필요한 권한을 안내합니다. 나중에 설정에서 권한 관련 항목을 다시 확인할 수 있습니다.",
    "Le guide de premiere utilisation presente les autorisations necessaires aux workflows actives. Vous pouvez aussi les revoir plus tard dans les Reglages.",
    "Der Einrichtungsassistent fuehrt durch die Berechtigungen fuer aktivierte Workflows. Spaeter koennen Sie sie in den Einstellungen erneut pruefen.",
    "La guida iniziale mostra i permessi necessari per i workflow abilitati. Puoi rivederli in seguito dalle Impostazioni.",
    "La guia inicial muestra los permisos necesarios para los flujos que actives. Tambien puedes revisarlos despues desde Ajustes."
  ),
  accessibilitySuffix: text(" is used for secure field detection and paste-related workflows.", " 用于安全输入框检测和粘贴相关工作流。", " は安全な入力欄の検出と貼り付け関連のワークフローに使われます。", "은 보안 입력 필드 감지와 붙여넣기 관련 워크플로에 사용됩니다.", " sert a detecter les champs securises et aux workflows de collage.", " wird zur Erkennung sicherer Eingabefelder und fuer Einfuege-Workflows verwendet.", " viene usato per rilevare campi sicuri e per i workflow di incolla.", " se usa para detectar campos seguros y para flujos relacionados con pegar."),
  appPermissionsSuffix: text(" are requested only when you use actions that write to those macOS apps.", " 只会在你使用写入这些 macOS 应用的动作时需要。", " は、それらの macOS アプリへ書き込む操作を使うときだけ要求されます。", "은 해당 macOS 앱에 쓰는 작업을 사용할 때만 요청됩니다.", " ne sont demandees que lorsque vous utilisez des actions qui ecrivent dans ces apps macOS.", " werden nur angefordert, wenn Aktionen in diese macOS-Apps schreiben.", " vengono richiesti solo quando usi azioni che scrivono in quelle app macOS.", " solo se solicitan cuando usas acciones que escriben en esas apps de macOS."),
  keychainSuffix: text(" stores license and provider credentials securely.", " 用于安全保存授权和服务商凭据。", " はライセンスとプロバイダ認証情報を安全に保存します。", "은 라이선스와 제공자 자격 증명을 안전하게 저장합니다.", " stocke les identifiants de licence et de fournisseur en securite.", " speichert Lizenz- und Anbieterzugangsdaten sicher.", " conserva in sicurezza licenza e credenziali dei provider.", " guarda de forma segura la licencia y las credenciales del proveedor."),
  historyBody: text(
    "Copy normally in any app. When the content is allowed by your privacy rules, Clibo saves it into local history. Supported records include text, links, code, images, files, colors, emails, dates, and phone numbers.",
    "在任意应用中像平常一样复制即可。当内容没有被隐私规则排除时，Clibo 会把它保存到本地历史。支持的记录包括文本、链接、代码、图片、文件、颜色、邮箱、日期和电话号码。",
    "どのアプリでも通常通りコピーします。プライバシールールで許可されていれば、Clibo がローカル履歴に保存します。テキスト、リンク、コード、画像、ファイル、色、メール、日付、電話番号に対応します。",
    "어떤 앱에서든 평소처럼 복사하세요. 개인정보 규칙에서 허용되면 Clibo가 로컬 기록에 저장합니다. 텍스트, 링크, 코드, 이미지, 파일, 색상, 이메일, 날짜, 전화번호를 지원합니다.",
    "Copiez normalement dans n'importe quelle app. Si vos regles de confidentialite l'autorisent, Clibo l'enregistre localement. Texte, liens, code, images, fichiers, couleurs, emails, dates et numeros sont pris en charge.",
    "Kopieren Sie wie gewohnt in jeder App. Wenn Ihre Datenschutzregeln es erlauben, speichert Clibo den Inhalt lokal. Unterstuetzt werden Text, Links, Code, Bilder, Dateien, Farben, E-Mails, Daten und Telefonnummern.",
    "Copia normalmente in qualsiasi app. Se le regole privacy lo consentono, Clibo salva il contenuto nella cronologia locale. Supporta testo, link, codice, immagini, file, colori, email, date e numeri di telefono.",
    "Copia normalmente en cualquier app. Si tus reglas de privacidad lo permiten, Clibo lo guarda en el historial local. Soporta texto, enlaces, codigo, imagenes, archivos, colores, emails, fechas y telefonos."
  ),
  dashboardBody: text(
    "Use the Dashboard to browse all history, search, filter by content type, inspect previews, pin useful records, edit non-image records, and delete items you no longer need.",
    "你可以在 Dashboard 中浏览全部历史、搜索、按内容类型筛选、查看预览、置顶常用记录、编辑非图片记录，并删除不再需要的内容。",
    "Dashboard では履歴の閲覧、検索、種類別フィルタ、プレビュー確認、固定、画像以外の編集、不要な項目の削除ができます。",
    "Dashboard에서 전체 기록 탐색, 검색, 유형별 필터, 미리보기 확인, 고정, 이미지가 아닌 기록 편집, 필요 없는 항목 삭제를 할 수 있습니다.",
    "Le Dashboard permet de parcourir l'historique, rechercher, filtrer par type, consulter les apercus, epingler, modifier les entrees non image et supprimer ce qui n'est plus utile.",
    "Im Dashboard koennen Sie Verlauf durchsuchen, suchen, nach Typ filtern, Vorschauen ansehen, Eintraege anheften, Nicht-Bild-Eintraege bearbeiten und nicht mehr benoetigte Elemente loeschen.",
    "Nel Dashboard puoi sfogliare la cronologia, cercare, filtrare per tipo, vedere anteprime, fissare record utili, modificare record non immagine ed eliminare elementi non necessari.",
    "En el Dashboard puedes explorar el historial, buscar, filtrar por tipo, revisar vistas, fijar registros, editar registros que no sean imagen y eliminar lo que ya no necesitas."
  ),
  previewsBody: text(
    "Hover over a record to see richer details. Source information is shown when available, and imported records show their import source.",
    "将鼠标悬停在记录上可以查看更丰富的详情。可用时会显示复制来源；从其他应用导入的记录也会显示导入来源。",
    "項目にカーソルを合わせると詳細を確認できます。利用可能な場合はコピー元が表示され、取り込んだ項目には取り込み元も表示されます。",
    "기록 위에 마우스를 올리면 더 자세한 정보를 볼 수 있습니다. 가능한 경우 복사 출처가 표시되고, 가져온 기록에는 가져오기 출처도 표시됩니다.",
    "Survolez une entree pour voir plus de details. La source de copie s'affiche si disponible, et les entrees importees montrent leur source d'import.",
    "Bewegen Sie den Zeiger ueber einen Eintrag, um mehr Details zu sehen. Wenn vorhanden, wird die Kopierquelle angezeigt; importierte Eintraege zeigen die Importquelle.",
    "Passa sopra un record per vedere piu dettagli. Quando disponibile viene mostrata la sorgente di copia; i record importati mostrano anche la sorgente di importazione.",
    "Pasa el cursor sobre un registro para ver mas detalles. Si esta disponible se muestra el origen de copia; los registros importados tambien muestran su origen."
  ),
  quickPanelBody: text(
    "The quick panel is designed for staying in the current app. Open it with your configured shortcut, search for an item, then copy or paste it back into your workflow.",
    "快捷面板适合在当前应用中快速取用内容。通过你配置的快捷键打开它，搜索目标记录，然后复制或粘贴回当前工作流。",
    "クイックパネルは現在のアプリから離れずに使うためのものです。設定したショートカットで開き、項目を検索してコピーまたは貼り付けます。",
    "빠른 패널은 현재 앱에 머문 채 사용하는 화면입니다. 설정한 단축키로 열고 항목을 검색한 뒤 복사하거나 워크플로에 다시 붙여넣습니다.",
    "Le panneau rapide permet de rester dans l'app courante. Ouvrez-le avec votre raccourci, recherchez un element, puis copiez-le ou collez-le dans votre workflow.",
    "Das Schnellpanel ist fuer die Arbeit in der aktuellen App gedacht. Oeffnen Sie es per Shortcut, suchen Sie ein Element und kopieren oder fuegen Sie es ein.",
    "Il pannello rapido serve per restare nell'app corrente. Aprilo con la scorciatoia configurata, cerca un elemento, poi copialo o incollalo nel workflow.",
    "El panel rapido esta pensado para seguir en la app actual. Abrelo con tu atajo, busca un elemento y copialo o pegalo en tu flujo."
  ),
  quickPanelItem1: text("Search history and snippets without opening the full Dashboard.", "无需打开完整 Dashboard，即可搜索历史和 Snippets。", "Dashboard を開かずに履歴と Snippets を検索できます。", "전체 Dashboard를 열지 않고 기록과 Snippets를 검색합니다.", "Recherchez historique et Snippets sans ouvrir le Dashboard complet.", "Durchsuchen Sie Verlauf und Snippets, ohne das volle Dashboard zu oeffnen.", "Cerca cronologia e Snippets senza aprire l'intero Dashboard.", "Busca historial y Snippets sin abrir todo el Dashboard."),
  quickPanelItem2: text("Use context menus for record actions directly from the panel.", "可以直接在面板中通过右键菜单使用记录动作。", "パネル内でコンテキストメニューから操作できます。", "패널에서 바로 컨텍스트 메뉴로 기록 작업을 사용합니다.", "Utilisez les menus contextuels directement depuis le panneau.", "Nutzen Sie Kontextmenues direkt im Panel.", "Usa i menu contestuali direttamente dal pannello.", "Usa menus contextuales directamente desde el panel."),
  quickPanelItem3: text("Open statistics or temporarily enable sensitive recording from quick controls.", "可以从快捷控制中打开统计，或临时开启敏感内容记录。", "クイック操作から統計を開いたり、一時的に機密記録を有効にできます。", "빠른 제어에서 통계를 열거나 민감한 기록을 임시로 활성화합니다.", "Ouvrez les statistiques ou activez temporairement l'enregistrement sensible.", "Oeffnen Sie Statistiken oder aktivieren Sie sensibles Aufzeichnen temporaer.", "Apri statistiche o abilita temporaneamente la registrazione sensibile.", "Abre estadisticas o activa temporalmente el registro sensible."),
  actionsBody: text("Right-click a clipboard record to open available actions. Actions change based on the record type.", "对剪贴板记录点按右键即可打开可用动作。动作会根据记录类型变化。", "履歴項目を右クリックすると利用可能な操作が開きます。操作は種類によって変わります。", "클립보드 기록을 우클릭하면 사용 가능한 작업이 열립니다. 작업은 기록 유형에 따라 달라집니다.", "Cliquez droit sur une entree pour ouvrir les actions disponibles. Elles changent selon le type.", "Rechtsklicken Sie einen Eintrag, um verfuegbare Aktionen zu oeffnen. Sie haengen vom Typ ab.", "Fai clic destro su un record per aprire le azioni disponibili. Cambiano in base al tipo.", "Haz clic derecho en un registro para abrir acciones disponibles. Cambian segun el tipo."),
  macActions: text("macOS app actions", "macOS 应用联动", "macOS アプリ連携", "macOS 앱 연동", "Actions apps macOS", "macOS-App-Aktionen", "Azioni app macOS", "Acciones de apps macOS"),
  actionItem1: text("Add text or images to Notes.", "将文本或图片添加到备忘录。", "テキストや画像をメモに追加します。", "텍스트 또는 이미지를 Notes에 추가합니다.", "Ajoutez texte ou images a Notes.", "Fuegen Sie Text oder Bilder zu Notes hinzu.", "Aggiungi testo o immagini a Notes.", "Agrega texto o imagenes a Notes."),
  actionItem2: text("Create reminders from non-image content.", "将非图片内容创建为提醒事项。", "画像以外の内容からリマインダーを作成します。", "이미지가 아닌 콘텐츠로 Reminders를 만듭니다.", "Creez des rappels depuis les contenus non image.", "Erstellen Sie Erinnerungen aus Nicht-Bild-Inhalten.", "Crea promemoria da contenuti non immagine.", "Crea recordatorios desde contenido que no sea imagen."),
  actionItem3: text("Add detected dates to Calendar.", "将识别出的日期添加到日历。", "検出した日付をカレンダーに追加します。", "감지된 날짜를 Calendar에 추가합니다.", "Ajoutez les dates detectees au Calendrier.", "Fuegen Sie erkannte Daten zum Kalender hinzu.", "Aggiungi le date rilevate al Calendario.", "Agrega fechas detectadas al Calendario."),
  actionItem4: text("Save phone numbers to Contacts or open Messages to send an SMS.", "将电话号码保存到通讯录，或打开 Messages 发送短信。", "電話番号を連絡先に保存するか、Messages で SMS を送信します。", "전화번호를 Contacts에 저장하거나 Messages를 열어 SMS를 보냅니다.", "Enregistrez des numeros dans Contacts ou ouvrez Messages pour envoyer un SMS.", "Speichern Sie Telefonnummern in Kontakte oder oeffnen Sie Messages fuer SMS.", "Salva numeri in Contatti o apri Messages per inviare SMS.", "Guarda telefonos en Contactos o abre Messages para enviar SMS."),
  localTools: text("Local tools", "本地工具", "ローカルツール", "로컬 도구", "Outils locaux", "Lokale Werkzeuge", "Strumenti locali", "Herramientas locales"),
  localToolsBody: text(
    "Image records can extract text using Apple Vision OCR. Text records can use local tools such as JSON/XML formatting and Base64 encode or decode.",
    "图片记录可以使用 Apple Vision OCR 提取文字。文本记录可以使用 JSON/XML 格式化、Base64 编解码等本地工具。",
    "画像項目は Apple Vision OCR で文字を抽出できます。テキスト項目では JSON/XML 整形や Base64 エンコード/デコードなどのローカルツールを使えます。",
    "이미지 기록은 Apple Vision OCR로 텍스트를 추출할 수 있습니다. 텍스트 기록은 JSON/XML 포맷팅, Base64 인코딩/디코딩 같은 로컬 도구를 사용할 수 있습니다.",
    "Les images peuvent extraire du texte avec Apple Vision OCR. Les textes peuvent utiliser des outils locaux comme le formatage JSON/XML et l'encodage ou decodage Base64.",
    "Bild-Eintraege koennen Text mit Apple Vision OCR extrahieren. Text-Eintraege koennen lokale Werkzeuge wie JSON/XML-Formatierung und Base64-Codierung oder Decodierung nutzen.",
    "I record immagine possono estrarre testo con Apple Vision OCR. I record testo possono usare strumenti locali come formattazione JSON/XML e codifica o decodifica Base64.",
    "Los registros de imagen pueden extraer texto con Apple Vision OCR. Los de texto pueden usar herramientas locales como formato JSON/XML y codificar o decodificar Base64."
  ),
  snippetsBody1: text(
    "Snippets are reusable text templates for content you paste repeatedly, such as email replies, prompts, signatures, addresses, or code fragments.",
    "Snippets 是可复用文本模板，适合保存经常粘贴的内容，比如邮件回复、提示词、签名、地址或代码片段。",
    "Snippets は繰り返し貼り付ける内容の再利用可能なテンプレートです。メール返信、プロンプト、署名、住所、コード片などに使えます。",
    "Snippets는 반복해서 붙여넣는 콘텐츠를 위한 재사용 가능한 텍스트 템플릿입니다. 이메일 답장, 프롬프트, 서명, 주소, 코드 조각 등에 적합합니다.",
    "Les Snippets sont des modeles de texte reutilisables pour les contenus colles souvent, comme reponses email, prompts, signatures, adresses ou fragments de code.",
    "Snippets sind wiederverwendbare Textvorlagen fuer Inhalte, die Sie haeufig einfuegen, etwa E-Mail-Antworten, Prompts, Signaturen, Adressen oder Codefragmente.",
    "Gli Snippets sono modelli di testo riutilizzabili per contenuti incollati spesso, come risposte email, prompt, firme, indirizzi o frammenti di codice.",
    "Los Snippets son plantillas reutilizables para contenido que pegas a menudo, como respuestas de email, prompts, firmas, direcciones o fragmentos de codigo."
  ),
  snippetsBody2: text(
    "You can create, edit, search, copy, paste, and delete snippets from the Dashboard and quick panel. Common snippets can be mapped to global shortcuts from Command + Shift + 1 through Command + Shift + 9.",
    "你可以在 Dashboard 和快捷面板中创建、编辑、搜索、复制、粘贴和删除 Snippets。常用片段可以绑定到 Command + Shift + 1 到 Command + Shift + 9。",
    "Dashboard とクイックパネルから Snippets を作成、編集、検索、コピー、貼り付け、削除できます。よく使うものは Command + Shift + 1 から 9 に割り当てられます。",
    "Dashboard와 빠른 패널에서 Snippets를 생성, 편집, 검색, 복사, 붙여넣기, 삭제할 수 있습니다. 자주 쓰는 항목은 Command + Shift + 1부터 9까지 매핑할 수 있습니다.",
    "Vous pouvez creer, modifier, rechercher, copier, coller et supprimer des Snippets depuis le Dashboard et le panneau rapide. Les plus courants peuvent etre relies a Command + Shift + 1 a 9.",
    "Sie koennen Snippets im Dashboard und Schnellpanel erstellen, bearbeiten, suchen, kopieren, einfuegen und loeschen. Haeufige Snippets lassen sich Command + Shift + 1 bis 9 zuordnen.",
    "Puoi creare, modificare, cercare, copiare, incollare ed eliminare Snippets da Dashboard e pannello rapido. Gli snippet comuni possono essere associati a Command + Shift + 1 fino a 9.",
    "Puedes crear, editar, buscar, copiar, pegar y eliminar Snippets desde Dashboard y el panel rapido. Los comunes pueden asignarse a Command + Shift + 1 hasta 9."
  ),
  shortcutExample: text("Shortcut example:", "快捷键示例：", "ショートカット例:", "단축키 예:", "Exemple de raccourci :", "Shortcut-Beispiel:", "Esempio scorciatoia:", "Ejemplo de atajo:"),
  privacyBody: text(
    "Clibo is local-first. Clipboard history is stored in a local database on your Mac unless you explicitly enable pinned sync for pinned records.",
    "Clibo 以本地优先为核心。剪贴板历史会保存在你 Mac 本机的数据库中；只有当你明确开启置顶同步时，已置顶记录才会写入同步文件。",
    "Clibo はローカルファーストです。固定項目の同期を明示的に有効にしない限り、履歴は Mac 上のローカルデータベースに保存されます。",
    "Clibo는 로컬 우선입니다. 고정 기록 동기화를 명시적으로 켜지 않는 한 클립보드 기록은 Mac의 로컬 데이터베이스에 저장됩니다.",
    "Clibo est local-first. L'historique reste dans une base locale sur votre Mac, sauf si vous activez explicitement la synchronisation des elements epingles.",
    "Clibo ist lokal zuerst. Der Verlauf bleibt in einer lokalen Datenbank auf Ihrem Mac, ausser Sie aktivieren angeheftete Synchronisierung ausdruecklich.",
    "Clibo e local-first. La cronologia resta in un database locale sul Mac, salvo quando abiliti esplicitamente la sincronizzazione dei record fissati.",
    "Clibo es local-first. El historial se guarda en una base local en tu Mac salvo que actives explicitamente la sincronizacion de registros fijados."
  ),
  excludeSources: text("Exclude sources", "排除来源", "ソースを除外", "출처 제외", "Exclure des sources", "Quellen ausschliessen", "Escludere sorgenti", "Excluir origenes"),
  excludeSourcesBody: text(
    "In Privacy settings, exclude apps by choosing them from your installed Applications list or by entering a bundle ID manually. You can also exclude content types that should never be recorded.",
    "在隐私设置中，你可以从已安装应用列表选择要排除的应用，也可以手动输入 Bundle ID。你还可以排除永远不想记录的内容类型。",
    "プライバシー設定では、インストール済みアプリ一覧から選択するか bundle ID を手入力してアプリを除外できます。記録したくない内容タイプも除外できます。",
    "개인정보 설정에서 설치된 Applications 목록에서 앱을 선택하거나 bundle ID를 직접 입력해 제외할 수 있습니다. 기록하지 않을 콘텐츠 유형도 제외할 수 있습니다.",
    "Dans Confidentialite, excluez des apps depuis la liste Applications installees ou en entrant un bundle ID. Vous pouvez aussi exclure les types a ne jamais enregistrer.",
    "In den Datenschutzeinstellungen koennen Sie Apps aus der installierten Programmliste auswaehlen oder eine Bundle-ID manuell eingeben. Inhaltstypen lassen sich ebenfalls ausschliessen.",
    "Nelle impostazioni Privacy puoi escludere app scegliendole dall'elenco Applicazioni installate o inserendo manualmente un bundle ID. Puoi escludere anche tipi di contenuto.",
    "En Privacidad, excluye apps eligiendolas de Aplicaciones instaladas o introduciendo un bundle ID. Tambien puedes excluir tipos de contenido."
  ),
  sensitiveContent: text("Sensitive content", "敏感内容", "機密内容", "민감한 콘텐츠", "Contenu sensible", "Sensible Inhalte", "Contenuti sensibili", "Contenido sensible"),
  sensitiveContentBody: text(
    "Sensitive content is filtered by default. If you temporarily need to record everything, enable sensitive recording from the quick panel. When sensitive records are shown, masking is enabled by default and can be changed in Settings.",
    "敏感内容默认会被过滤。如果你临时需要记录全部内容，可以从快捷面板开启敏感记录。敏感记录在面板中默认脱敏显示，你可以在设置中调整这个行为。",
    "機密内容は標準でフィルタされます。一時的にすべて記録したい場合はクイックパネルから機密記録を有効にします。表示時のマスクは標準で有効で、設定で変更できます。",
    "민감한 콘텐츠는 기본적으로 필터링됩니다. 임시로 모든 내용을 기록해야 한다면 빠른 패널에서 민감한 기록을 켭니다. 민감한 기록은 기본적으로 마스킹되며 설정에서 바꿀 수 있습니다.",
    "Le contenu sensible est filtre par defaut. Pour tout enregistrer temporairement, activez l'enregistrement sensible dans le panneau rapide. Le masquage est actif par defaut et modifiable dans les Reglages.",
    "Sensible Inhalte werden standardmaessig gefiltert. Wenn Sie voruebergehend alles aufzeichnen muessen, aktivieren Sie sensible Aufzeichnung im Schnellpanel. Maskierung ist standardmaessig aktiv und aenderbar.",
    "I contenuti sensibili sono filtrati per impostazione predefinita. Per registrare temporaneamente tutto, abilita la registrazione sensibile dal pannello rapido. Il mascheramento e attivo di default e modificabile.",
    "El contenido sensible se filtra por defecto. Si necesitas registrar todo temporalmente, activa el registro sensible desde el panel rapido. El enmascarado esta activo por defecto y se puede cambiar."
  ),
  pinnedSync: text("Pinned sync", "置顶同步", "固定項目の同期", "고정 동기화", "Sync des epingles", "Angeheftete Sync", "Sync elementi fissati", "Sincronizacion de fijados"),
  pinnedSyncBody: text(
    "Pinned sync stores only pinned records in a separate CliboPinnedClips.json file. Choose an iCloud Drive folder or another synced folder if you want pinned records available across Macs.",
    "置顶同步只会把已置顶记录保存到独立的 CliboPinnedClips.json 文件中。如果你希望置顶记录在多台 Mac 间可用，可以选择 iCloud Drive 或其他同步文件夹。",
    "固定項目の同期は、固定した項目だけを別の CliboPinnedClips.json ファイルに保存します。複数の Mac で使う場合は iCloud Drive などの同期フォルダを選びます。",
    "고정 동기화는 고정된 기록만 별도 CliboPinnedClips.json 파일에 저장합니다. 여러 Mac에서 사용하려면 iCloud Drive 또는 다른 동기화 폴더를 선택합니다.",
    "La synchronisation epinglee stocke seulement les elements epingles dans CliboPinnedClips.json. Choisissez iCloud Drive ou un autre dossier synchronise pour les partager entre Macs.",
    "Angeheftete Sync speichert nur angeheftete Eintraege in CliboPinnedClips.json. Waehlen Sie iCloud Drive oder einen anderen Sync-Ordner fuer mehrere Macs.",
    "La sync degli elementi fissati salva solo i record fissati in CliboPinnedClips.json. Scegli iCloud Drive o un'altra cartella sincronizzata per usarli su piu Mac.",
    "La sincronizacion de fijados guarda solo registros fijados en CliboPinnedClips.json. Elige iCloud Drive u otra carpeta sincronizada para usarlos en varios Mac."
  ),
  importData: text("Import data", "导入数据", "データを取り込む", "데이터 가져오기", "Importer des donnees", "Daten importieren", "Importare dati", "Importar datos"),
  importDataBody: text(
    "Use File Import for JSON, CSV, TXT, or Markdown files. Use App Import for supported clipboard managers. Maccy has a dedicated import entry that can migrate history, images, files, pinned state, and original copy timestamps.",
    "文件导入支持 JSON、CSV、TXT 和 Markdown。应用导入用于支持的剪贴板管理器。Maccy 拥有独立导入入口，可以迁移历史、图片、文件、置顶状态和原始复制时间。",
    "JSON、CSV、TXT、Markdown には File Import を使います。対応するクリップボード管理アプリには App Import を使います。Maccy には履歴、画像、ファイル、固定状態、元のコピー時刻を移行する専用項目があります。",
    "JSON, CSV, TXT, Markdown 파일은 File Import를 사용합니다. 지원되는 클립보드 관리자는 App Import를 사용합니다. Maccy 전용 가져오기는 기록, 이미지, 파일, 고정 상태, 원래 복사 시각을 이전할 수 있습니다.",
    "Utilisez File Import pour JSON, CSV, TXT ou Markdown. Utilisez App Import pour les gestionnaires pris en charge. Maccy dispose d'une entree dediee pour migrer historique, images, fichiers, etat epingle et horodatages.",
    "Nutzen Sie Dateiimport fuer JSON, CSV, TXT oder Markdown. Nutzen Sie App-Import fuer unterstuetzte Zwischenablage-Manager. Maccy hat einen eigenen Import fuer Verlauf, Bilder, Dateien, Pins und Zeitstempel.",
    "Usa File Import per JSON, CSV, TXT o Markdown. Usa App Import per i gestori supportati. Maccy ha un'importazione dedicata per cronologia, immagini, file, stato fissato e timestamp originali.",
    "Usa File Import para JSON, CSV, TXT o Markdown. Usa App Import para gestores compatibles. Maccy tiene una entrada dedicada para migrar historial, imagenes, archivos, estado fijado y horas originales."
  ),
  aiActions: text("AI actions", "AI 动作", "AI アクション", "AI 작업", "Actions IA", "KI-Aktionen", "Azioni AI", "Acciones de IA"),
  aiActionsBody: text(
    "AI features are optional. Configure your own provider and API key before using translation, rewriting, summarization, Explain Code, or other provider-backed actions.",
    "AI 功能是可选的。你需要先配置自己的服务商和 API Key，才能使用翻译、改写、总结、Explain Code 等由服务商支持的动作。",
    "AI 機能は任意です。翻訳、書き換え、要約、Explain Code などを使う前に、プロバイダと API キーを設定します。",
    "AI 기능은 선택 사항입니다. 번역, 재작성, 요약, Explain Code 등 제공자 기반 작업을 사용하기 전에 제공자와 API 키를 설정하세요.",
    "Les fonctions IA sont optionnelles. Configurez votre fournisseur et cle API avant traduction, reecriture, resume, Explain Code ou autres actions.",
    "KI-Funktionen sind optional. Konfigurieren Sie Anbieter und API-Key, bevor Sie Uebersetzen, Umschreiben, Zusammenfassen, Explain Code oder andere Aktionen nutzen.",
    "Le funzioni AI sono opzionali. Configura provider e API key prima di usare traduzione, riscrittura, riassunto, Explain Code o altre azioni.",
    "Las funciones de IA son opcionales. Configura tu proveedor y API key antes de usar traduccion, reescritura, resumen, Explain Code u otras acciones."
  ),
  statistics: text("Statistics", "统计", "統計", "통계", "Statistiques", "Statistiken", "Statistiche", "Estadisticas"),
  statisticsBody: text(
    "Open Statistics from Settings or the quick panel to review copy volume, content type distribution, activity, source statistics, sensitive copy counts, ignored events, pause counts, and real AI token usage.",
    "你可以从设置或快捷面板打开统计，查看复制量、类型分布、活跃度、来源统计、敏感复制次数、忽略次数、暂停次数，以及真实 AI token 用量。",
    "設定またはクイックパネルから統計を開くと、コピー量、種類分布、アクティビティ、コピー元、機密コピー数、無視回数、一時停止回数、実際の AI token 使用量を確認できます。",
    "설정 또는 빠른 패널에서 통계를 열어 복사량, 유형 분포, 활동, 출처 통계, 민감한 복사 횟수, 무시 이벤트, 일시정지 횟수, 실제 AI token 사용량을 확인합니다.",
    "Ouvrez Statistiques depuis les Reglages ou le panneau rapide pour voir volume de copie, types, activite, sources, copies sensibles, evenements ignores, pauses et vrais tokens IA.",
    "Oeffnen Sie Statistiken in Einstellungen oder Schnellpanel fuer Kopiervolumen, Typverteilung, Aktivitaet, Quellen, sensible Kopien, ignorierte Ereignisse, Pausen und echte KI-Token.",
    "Apri Statistiche da Impostazioni o pannello rapido per vedere volume, distribuzione tipi, attivita, sorgenti, copie sensibili, eventi ignorati, pause e token AI reali.",
    "Abre Estadisticas desde Ajustes o el panel rapido para ver volumen, tipos, actividad, origenes, copias sensibles, eventos ignorados, pausas y tokens reales de IA."
  ),
  historyNotUpdating: text("Clipboard history is not updating", "剪贴板历史没有更新", "履歴が更新されない", "클립보드 기록이 업데이트되지 않음", "L'historique ne se met pas a jour", "Verlauf wird nicht aktualisiert", "La cronologia non si aggiorna", "El historial no se actualiza"),
  historyNotUpdatingBody: text(
    "Check whether recording is paused from the menu bar or quick panel. Also review Privacy settings to make sure the source app or content type is not excluded.",
    "先检查菜单栏或快捷面板中是否暂停了记录。然后查看隐私设置，确认来源应用或内容类型没有被排除。",
    "メニューバーまたはクイックパネルで記録が一時停止していないか確認します。プライバシー設定でコピー元アプリや種類が除外されていないかも確認します。",
    "메뉴 막대 또는 빠른 패널에서 기록이 일시정지되어 있는지 확인하세요. 개인정보 설정에서 출처 앱이나 콘텐츠 유형이 제외되지 않았는지도 확인합니다.",
    "Verifiez si l'enregistrement est en pause depuis la barre de menus ou le panneau rapide. Verifiez aussi que l'app source ou le type de contenu n'est pas exclu.",
    "Pruefen Sie, ob Aufzeichnung in Menueleiste oder Schnellpanel pausiert ist. Pruefen Sie auch, ob Quell-App oder Inhaltstyp ausgeschlossen sind.",
    "Controlla se la registrazione e in pausa dalla barra menu o dal pannello rapido. Verifica anche che app sorgente o tipo di contenuto non siano esclusi.",
    "Comprueba si el registro esta pausado desde la barra de menus o el panel rapido. Revisa tambien que la app origen o tipo de contenido no esten excluidos."
  ),
  macActionsNotWork: text("macOS app actions do not work", "macOS 应用联动没有生效", "macOS アプリ操作が動作しない", "macOS 앱 작업이 작동하지 않음", "Les actions macOS ne fonctionnent pas", "macOS-App-Aktionen funktionieren nicht", "Le azioni macOS non funzionano", "Las acciones de macOS no funcionan"),
  macActionsNotWorkBody: text(
    "Make sure the target app permission has been granted. Some permissions appear only after the first time Clibo tries to write to that app.",
    "确认目标应用权限已经授权。有些权限会在 Clibo 第一次尝试写入对应应用时才出现。",
    "対象アプリの権限が許可されているか確認します。一部の権限は Clibo が初めてそのアプリへ書き込むときに表示されます。",
    "대상 앱 권한이 허용되었는지 확인하세요. 일부 권한은 Clibo가 해당 앱에 처음 쓰려고 할 때 나타납니다.",
    "Assurez-vous que l'autorisation de l'app cible est accordee. Certaines autorisations apparaissent seulement quand Clibo tente d'ecrire dans l'app pour la premiere fois.",
    "Stellen Sie sicher, dass die Ziel-App berechtigt ist. Manche Berechtigungen erscheinen erst, wenn Clibo erstmals in diese App schreibt.",
    "Assicurati che il permesso dell'app di destinazione sia concesso. Alcuni permessi compaiono solo quando Clibo prova a scrivere nell'app per la prima volta.",
    "Asegurate de que el permiso de la app destino este concedido. Algunos permisos aparecen solo cuando Clibo intenta escribir en esa app por primera vez."
  ),
  aiActionsFail: text("AI actions fail", "AI 动作失败", "AI アクションが失敗する", "AI 작업 실패", "Les actions IA echouent", "KI-Aktionen schlagen fehl", "Le azioni AI falliscono", "Las acciones de IA fallan"),
  aiActionsFailBody: text(
    "Check the provider, API key, model name, and network connection. Token usage appears in Statistics after providers return usage data.",
    "检查服务商、API Key、模型名称和网络连接。服务商返回用量数据后，token 用量会显示在统计面板中。",
    "プロバイダ、API キー、モデル名、ネットワーク接続を確認します。プロバイダが使用量を返すと、token 使用量が統計に表示されます。",
    "제공자, API 키, 모델 이름, 네트워크 연결을 확인하세요. 제공자가 사용량 데이터를 반환하면 token 사용량이 통계에 표시됩니다.",
    "Verifiez le fournisseur, la cle API, le modele et la connexion. Les tokens apparaissent dans Statistiques apres le retour des donnees d'usage.",
    "Pruefen Sie Anbieter, API-Key, Modellname und Netzwerk. Token-Nutzung erscheint in Statistiken, nachdem Anbieter Nutzungsdaten liefern.",
    "Controlla provider, API key, nome modello e connessione. L'uso token appare in Statistiche dopo che il provider restituisce i dati.",
    "Comprueba proveedor, API key, modelo y red. El uso de tokens aparece en Estadisticas cuando el proveedor devuelve datos de uso."
  ),
  stillNeedHelp: text(
    "Still need help? Email support with your macOS version, Clibo version, and a short description of the issue.",
    "仍然需要帮助？请通过邮件发送你的 macOS 版本、Clibo 版本和问题简述。",
    "まだ問題がありますか? macOS バージョン、Clibo バージョン、問題の簡単な説明をメールしてください。",
    "계속 도움이 필요하신가요? macOS 버전, Clibo 버전, 문제 요약을 이메일로 보내주세요.",
    "Encore besoin d'aide ? Envoyez votre version macOS, version Clibo et une breve description du probleme.",
    "Brauchen Sie weiter Hilfe? Senden Sie macOS-Version, Clibo-Version und eine kurze Problembeschreibung per E-Mail.",
    "Serve ancora aiuto? Invia via email versione macOS, versione Clibo e una breve descrizione del problema.",
    "¿Necesitas mas ayuda? Envia por email tu version de macOS, version de Clibo y una breve descripcion del problema."
  ),
};

function Kbd({ children }) {
  return <kbd className="docs-kbd">{children}</kbd>;
}

export default function Docs() {
  useNavScroll();

  return (
    <>
      <Header />

      <main className="docs-manual">
        <aside className="docs-sidebar" aria-label="Documentation navigation">
          <a className="docs-sidebar-brand" href="#top">
            <I18nText t={copy.sidebarBrand} />
          </a>
          <nav>
            {docNav.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                <I18nText t={item.title} />
              </a>
            ))}
          </nav>
        </aside>

        <article className="docs-article" id="top">
          <header className="docs-header">
            <p className="updated">
              <I18nText t={copy.updated} />
            </p>
            <h1>
              <I18nText t={copy.title} />
            </h1>
            <p className="docs-lede">
              <I18nText t={copy.lede} />
            </p>
          </header>

          <section id="overview">
            <h2>
              <I18nText t={docNav[0].title} />
            </h2>
            <p>
              <I18nText t={copy.overviewBody1} />
            </p>
            <p>
              <I18nText t={copy.overviewBody2} />
            </p>
          </section>

          <section id="install">
            <h2>
              <I18nText t={docNav[1].title} />
            </h2>
            <h3>
              <I18nText t={copy.downloadLaunch} />
            </h3>
            <ol>
              <li>
                <I18nText t={copy.installStep1} />
              </li>
              <li>
                <I18nText t={copy.installStep2} />
              </li>
              <li>
                <I18nText t={copy.installStep3} />
              </li>
            </ol>
            <h3>
              <I18nText t={copy.trialLicense} />
            </h3>
            <p>
              <I18nText t={copy.trialBody} />
            </p>
          </section>

          <section id="permissions">
            <h2>
              <I18nText t={docNav[2].title} />
            </h2>
            <p>
              <I18nText t={copy.permissionsBody} />
            </p>
            <ul>
              <li>
                <strong>Accessibility</strong>
                <I18nText t={copy.accessibilitySuffix} />
              </li>
              <li>
                <strong>Calendar, Contacts, Notes, and Reminders</strong>
                <I18nText t={copy.appPermissionsSuffix} />
              </li>
              <li>
                <strong>Keychain</strong>
                <I18nText t={copy.keychainSuffix} />
              </li>
            </ul>
          </section>

          <section id="history">
            <h2>
              <I18nText t={docNav[3].title} />
            </h2>
            <p>
              <I18nText t={copy.historyBody} />
            </p>
            <h3>Dashboard</h3>
            <p>
              <I18nText t={copy.dashboardBody} />
            </p>
            <h3>
              <I18nText t={text("Previews", "预览", "プレビュー", "미리보기", "Apercus", "Vorschauen", "Anteprime", "Vistas previas")} />
            </h3>
            <p>
              <I18nText t={copy.previewsBody} />
            </p>
          </section>

          <section id="quick-panel">
            <h2>
              <I18nText t={docNav[4].title} />
            </h2>
            <p>
              <I18nText t={copy.quickPanelBody} />
            </p>
            <ul>
              <li>
                <I18nText t={copy.quickPanelItem1} />
              </li>
              <li>
                <I18nText t={copy.quickPanelItem2} />
              </li>
              <li>
                <I18nText t={copy.quickPanelItem3} />
              </li>
            </ul>
          </section>

          <section id="actions">
            <h2>
              <I18nText t={docNav[5].title} />
            </h2>
            <p>
              <I18nText t={copy.actionsBody} />
            </p>
            <h3>
              <I18nText t={copy.macActions} />
            </h3>
            <ul>
              <li>
                <I18nText t={copy.actionItem1} />
              </li>
              <li>
                <I18nText t={copy.actionItem2} />
              </li>
              <li>
                <I18nText t={copy.actionItem3} />
              </li>
              <li>
                <I18nText t={copy.actionItem4} />
              </li>
            </ul>
            <h3>
              <I18nText t={copy.localTools} />
            </h3>
            <p>
              <I18nText t={copy.localToolsBody} />
            </p>
          </section>

          <section id="snippets">
            <h2>
              <I18nText t={docNav[6].title} />
            </h2>
            <p>
              <I18nText t={copy.snippetsBody1} />
            </p>
            <p>
              <I18nText t={copy.snippetsBody2} />
            </p>
            <p className="docs-note">
              <I18nText t={copy.shortcutExample} />{" "}
              <Kbd>Command</Kbd> + <Kbd>Shift</Kbd> + <Kbd>1</Kbd>
            </p>
          </section>

          <section id="privacy">
            <h2>
              <I18nText t={docNav[7].title} />
            </h2>
            <p>
              <I18nText t={copy.privacyBody} />
            </p>
            <h3>
              <I18nText t={copy.excludeSources} />
            </h3>
            <p>
              <I18nText t={copy.excludeSourcesBody} />
            </p>
            <h3>
              <I18nText t={copy.sensitiveContent} />
            </h3>
            <p>
              <I18nText t={copy.sensitiveContentBody} />
            </p>
          </section>

          <section id="sync-import">
            <h2>
              <I18nText t={docNav[8].title} />
            </h2>
            <h3>
              <I18nText t={copy.pinnedSync} />
            </h3>
            <p>
              <I18nText t={copy.pinnedSyncBody} />
            </p>
            <h3>
              <I18nText t={copy.importData} />
            </h3>
            <p>
              <I18nText t={copy.importDataBody} />
            </p>
          </section>

          <section id="ai-statistics">
            <h2>
              <I18nText t={docNav[9].title} />
            </h2>
            <h3>
              <I18nText t={copy.aiActions} />
            </h3>
            <p>
              <I18nText t={copy.aiActionsBody} />
            </p>
            <h3>
              <I18nText t={copy.statistics} />
            </h3>
            <p>
              <I18nText t={copy.statisticsBody} />
            </p>
          </section>

          <section id="troubleshooting">
            <h2>
              <I18nText t={docNav[10].title} />
            </h2>
            <h3>
              <I18nText t={copy.historyNotUpdating} />
            </h3>
            <p>
              <I18nText t={copy.historyNotUpdatingBody} />
            </p>
            <h3>
              <I18nText t={copy.macActionsNotWork} />
            </h3>
            <p>
              <I18nText t={copy.macActionsNotWorkBody} />
            </p>
            <h3>
              <I18nText t={copy.aiActionsFail} />
            </h3>
            <p>
              <I18nText t={copy.aiActionsFailBody} />
            </p>
            <p>
              <I18nText t={copy.stillNeedHelp} />{" "}
              <a className="privacy-email" href="mailto:support@clibo.us">
                support@clibo.us
              </a>
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
