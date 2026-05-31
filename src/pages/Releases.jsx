import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

const RELEASES = [
  {
    version: "1.0.2",
    date: "2026-05-31",
    title: {
      en: "Documentation, tests, trial updates, and internal refactors",
      zh: "文档、测试、试用期更新与内部重构",
      ja: "ドキュメント、テスト、トライアル更新、内部リファクタリング",
      ko: "문서, 테스트, 체험 기간 업데이트 및 내부 리팩터링",
      fr: "Documentation, tests, essai et refactorisations internes",
      de: "Dokumentation, Tests, Testzeitraum und interne Refactorings",
      it: "Documentazione, test, prova e refactoring interni",
      es: "Documentacion, pruebas, periodo de prueba y refactorizaciones internas",
    },
    notes: [
      {
        en: "Added a README with product overview, installation, system requirements, privacy notes, trial, and license information.",
        zh: "新增 README，补充产品介绍、安装方式、系统要求、隐私说明、试用和许可证信息。",
        ja: "README を追加し、製品紹介、インストール方法、システム要件、プライバシー説明、トライアル、ライセンス情報を補足しました。",
        ko: "제품 소개, 설치 방법, 시스템 요구 사항, 개인정보 안내, 체험판 및 라이선스 정보를 담은 README를 추가했습니다.",
        fr: "Ajout d'un README avec la presentation du produit, l'installation, les prerequis systeme, la confidentialite, l'essai et les informations de licence.",
        de: "README mit Produktuberblick, Installation, Systemanforderungen, Datenschutzhinweisen, Testversion und Lizenzinformationen hinzugefugt.",
        it: "Aggiunto un README con panoramica del prodotto, installazione, requisiti di sistema, privacy, prova e informazioni sulla licenza.",
        es: "Se agrego un README con descripcion del producto, instalacion, requisitos del sistema, privacidad, prueba e informacion de licencia.",
      },
      {
        en: "Added a SwiftPM test target covering color parsing, automation rule matching, clipboard database migrations, and basic search flows.",
        zh: "新增 SwiftPM 测试 target，覆盖颜色解析、自动化规则匹配、剪贴板数据库迁移与基础搜索流程。",
        ja: "色解析、自動化ルール照合、クリップボードデータベース移行、基本検索フローを対象にした SwiftPM テスト target を追加しました。",
        ko: "색상 파싱, 자동화 규칙 매칭, 클립보드 데이터베이스 마이그레이션, 기본 검색 흐름을 다루는 SwiftPM 테스트 target을 추가했습니다.",
        fr: "Ajout d'une cible de test SwiftPM couvrant l'analyse des couleurs, les regles d'automatisation, les migrations de base de donnees du presse-papiers et les flux de recherche de base.",
        de: "SwiftPM-Testtarget fur Farbparsing, Automatisierungsregel-Abgleich, Migrationen der Zwischenablage-Datenbank und grundlegende Suchablaufe hinzugefugt.",
        it: "Aggiunto un target di test SwiftPM per parsing dei colori, corrispondenza delle regole di automazione, migrazioni del database degli appunti e flussi di ricerca di base.",
        es: "Se agrego un target de pruebas SwiftPM para analisis de colores, coincidencia de reglas de automatizacion, migraciones de la base de datos del portapapeles y flujos basicos de busqueda.",
      },
      {
        en: "Added a SQLite `user_version` migration mechanism as the foundation for future database schema iterations.",
        zh: "新增 SQLite `user_version` 迁移机制，为后续数据库 schema 迭代提供基础。",
        ja: "今後のデータベース schema 反復の基盤として、SQLite `user_version` 移行メカニズムを追加しました。",
        ko: "향후 데이터베이스 schema 변경을 위한 기반으로 SQLite `user_version` 마이그레이션 메커니즘을 추가했습니다.",
        fr: "Ajout d'un mecanisme de migration SQLite `user_version` comme base pour les futures evolutions du schema de base de donnees.",
        de: "SQLite-`user_version`-Migrationsmechanismus als Grundlage fur kunftige Datenbankschema-Iterationen hinzugefugt.",
        it: "Aggiunto un meccanismo di migrazione SQLite `user_version` come base per future iterazioni dello schema del database.",
        es: "Se agrego un mecanismo de migracion SQLite `user_version` como base para futuras iteraciones del schema de la base de datos.",
      },
      {
        en: "Sparkle appcast generation now supports injecting localized release notes and uploading them.",
        zh: "Sparkle appcast 生成流程新增本地化 release notes 注入与上传支持。",
        ja: "Sparkle appcast 生成フローで、ローカライズされた release notes の注入とアップロードをサポートしました。",
        ko: "Sparkle appcast 생성 흐름에 현지화된 release notes 주입 및 업로드 지원을 추가했습니다.",
        fr: "La generation d'appcast Sparkle prend desormais en charge l'injection et l'envoi des release notes localisees.",
        de: "Die Sparkle-Appcast-Erzeugung unterstutzt jetzt das Einfugen und Hochladen lokalisierter Release Notes.",
        it: "La generazione degli appcast Sparkle ora supporta l'inserimento e il caricamento delle release notes localizzate.",
        es: "La generacion de appcast de Sparkle ahora admite insertar y subir release notes localizadas.",
      },
      {
        en: "Standardized the free trial period to 7 days and synced onboarding and license expiration copy.",
        zh: "免费试用期统一为 7 天，并同步 onboarding 与许可证过期文案。",
        ja: "無料トライアル期間を 7 日間に統一し、onboarding とライセンス期限切れ文言を同期しました。",
        ko: "무료 체험 기간을 7일로 통일하고 onboarding 및 라이선스 만료 문구를 동기화했습니다.",
        fr: "La periode d'essai gratuite est unifiee a 7 jours, avec synchronisation des textes d'onboarding et d'expiration de licence.",
        de: "Der kostenlose Testzeitraum wurde auf 7 Tage vereinheitlicht; Onboarding- und Lizenzablauftexte wurden synchronisiert.",
        it: "Il periodo di prova gratuito e stato uniformato a 7 giorni, con testi di onboarding e scadenza licenza sincronizzati.",
        es: "El periodo de prueba gratuito se unifico en 7 dias y se sincronizaron los textos de onboarding y vencimiento de licencia.",
      },
      {
        en: "Added an onboarding screen for core value and local privacy messaging.",
        zh: "Onboarding 新增一屏核心价值与本地隐私提示。",
        ja: "onboarding に、主要価値とローカルプライバシーを伝える画面を追加しました。",
        ko: "onboarding에 핵심 가치와 로컬 개인정보 보호 안내 화면을 추가했습니다.",
        fr: "Ajout d'un ecran d'onboarding pour la valeur principale et le message de confidentialite locale.",
        de: "Onboarding um einen Bildschirm fur Kernnutzen und lokale Datenschutzhinweise erweitert.",
        it: "Aggiunta una schermata di onboarding per valore principale e messaggio sulla privacy locale.",
        es: "Se agrego una pantalla de onboarding para el valor principal y el mensaje de privacidad local.",
      },
      {
        en: "Moved Keychain management into the shared App layer instead of keeping it under the AI module.",
        zh: "将 Keychain 管理移动到 App 共享层，避免继续挂在 AI 模块下。",
        ja: "Keychain 管理を AI モジュール配下から App 共有レイヤーへ移動しました。",
        ko: "Keychain 관리를 AI 모듈 아래가 아닌 App 공유 계층으로 이동했습니다.",
        fr: "Deplacement de la gestion Keychain vers la couche partagee App, au lieu du module AI.",
        de: "Keychain-Verwaltung aus dem AI-Modul in die gemeinsame App-Schicht verschoben.",
        it: "Spostata la gestione Keychain nel livello condiviso App, invece che nel modulo AI.",
        es: "La gestion de Keychain se movio a la capa compartida App en lugar de permanecer bajo el modulo AI.",
      },
      {
        en: "Organized the Search module into Core, Dashboard, QuickPanel, and Preview subdirectories.",
        zh: "将 Search 模块按 Core、Dashboard、QuickPanel、Preview 子目录整理。",
        ja: "Search モジュールを Core、Dashboard、QuickPanel、Preview のサブディレクトリに整理しました。",
        ko: "Search 모듈을 Core, Dashboard, QuickPanel, Preview 하위 디렉터리로 정리했습니다.",
        fr: "Organisation du module Search en sous-dossiers Core, Dashboard, QuickPanel et Preview.",
        de: "Search-Modul in die Unterverzeichnisse Core, Dashboard, QuickPanel und Preview gegliedert.",
        it: "Organizzato il modulo Search nelle sottocartelle Core, Dashboard, QuickPanel e Preview.",
        es: "Se organizo el modulo Search en los subdirectorios Core, Dashboard, QuickPanel y Preview.",
      },
      {
        en: "Added a conservative SwiftLint configuration.",
        zh: "新增保守 SwiftLint 配置。",
        ja: "保守的な SwiftLint 設定を追加しました。",
        ko: "보수적인 SwiftLint 구성을 추가했습니다.",
        fr: "Ajout d'une configuration SwiftLint conservatrice.",
        de: "Konservative SwiftLint-Konfiguration hinzugefugt.",
        it: "Aggiunta una configurazione SwiftLint conservativa.",
        es: "Se agrego una configuracion conservadora de SwiftLint.",
      },
    ],
  },
  {
    version: "1.0.1",
    date: "2026-05-31",
    title: {
      en: "Quick panel improvements, path handling, and localization updates",
      zh: "快捷面板改进、路径处理与本地化更新",
      ja: "クイックパネルの改善、パス処理、ローカライズ更新",
      ko: "빠른 패널 개선, 경로 처리 및 현지화 업데이트",
      fr: "Ameliorations du panneau rapide, gestion des chemins et mises a jour de localisation",
      de: "Verbesserungen am Schnellpanel, Pfadverarbeitung und Lokalisierungsupdates",
      it: "Miglioramenti al pannello rapido, gestione dei percorsi e aggiornamenti di localizzazione",
      es: "Mejoras del panel rapido, gestion de rutas y actualizaciones de localizacion",
    },
    notes: [
      {
        en: "Color items in the quick panel now use smaller square swatches.",
        zh: "快捷面板颜色类型的列表色块改为更小的方块显示。",
        ja: "クイックパネルのカラー項目は、より小さい正方形のスウォッチで表示されるようになりました。",
        ko: "빠른 패널의 색상 항목이 더 작은 정사각형 색상 견본으로 표시됩니다.",
        fr: "Les elements de couleur du panneau rapide utilisent desormais de plus petits echantillons carres.",
        de: "Farbeintrage im Schnellpanel verwenden jetzt kleinere quadratische Farbfelder.",
        it: "Gli elementi colore nel pannello rapido ora usano campioni quadrati piu piccoli.",
        es: "Los elementos de color del panel rapido ahora usan muestras cuadradas mas pequenas.",
      },
      {
        en: "Quick panel lists now support the same context menu capabilities as Dashboard lists.",
        zh: "快捷面板列表新增与 Dashboard 列表一致的右键菜单能力。",
        ja: "クイックパネルのリストで、Dashboard リストと同じコンテキストメニュー機能を利用できるようになりました。",
        ko: "빠른 패널 목록에 Dashboard 목록과 동일한 컨텍스트 메뉴 기능이 추가되었습니다.",
        fr: "Les listes du panneau rapide prennent desormais en charge les memes menus contextuels que les listes du Dashboard.",
        de: "Listen im Schnellpanel unterstutzen jetzt dieselben Kontextmenufunktionen wie Dashboard-Listen.",
        it: "Gli elenchi del pannello rapido ora supportano le stesse funzioni del menu contestuale degli elenchi Dashboard.",
        es: "Las listas del panel rapido ahora admiten las mismas funciones de menu contextual que las listas del Dashboard.",
      },
      {
        en: "Added file copy detection fixes to avoid mistaking copied files for images.",
        zh: "新增文件复制识别修正，避免复制文件时被误识别为图片。",
        ja: "ファイルコピー検出を修正し、コピーしたファイルが画像として誤認識されないようにしました。",
        ko: "파일 복사 감지 수정으로 복사한 파일이 이미지로 잘못 인식되지 않도록 했습니다.",
        fr: "Correction de la detection de copie de fichiers afin d'eviter que les fichiers copies soient identifies a tort comme des images.",
        de: "Korrekturen bei der Erkennung kopierter Dateien verhindern, dass kopierte Dateien falsch als Bilder erkannt werden.",
        it: "Corretta l'identificazione della copia dei file per evitare che i file copiati vengano riconosciuti erroneamente come immagini.",
        es: "Se corrigio la deteccion de copia de archivos para evitar que los archivos copiados se identifiquen por error como imagenes.",
      },
      {
        en: "Added system path recognition, a dedicated icon for path items, and support for opening the location from the context menu.",
        zh: "新增系统路径识别，路径类型使用独立图标，并支持在右键菜单中打开位置。",
        ja: "システムパス認識を追加し、パス項目に専用アイコンを使用し、コンテキストメニューから場所を開けるようにしました。",
        ko: "시스템 경로 인식, 경로 유형 전용 아이콘, 컨텍스트 메뉴에서 위치 열기를 추가했습니다.",
        fr: "Ajout de la reconnaissance des chemins systeme, d'une icone dediee pour les chemins et de l'ouverture de l'emplacement depuis le menu contextuel.",
        de: "Systempfaderkennung, ein eigenes Symbol fur Pfade und das Offnen des Speicherorts uber das Kontextmenu wurden hinzugefugt.",
        it: "Aggiunti il riconoscimento dei percorsi di sistema, un'icona dedicata per i percorsi e l'apertura della posizione dal menu contestuale.",
        es: "Se agrego reconocimiento de rutas del sistema, un icono dedicado para las rutas y la opcion de abrir la ubicacion desde el menu contextual.",
      },
      {
        en: "Added automatic cleanup settings for expired history, with options for 3 days, one week, 15 days, one month, 3 months, and one year.",
        zh: "新增历史记录过期自动清理设置，支持 3 天、一周、15 天、一个月、3 个月和一年。",
        ja: "期限切れ履歴の自動クリーンアップ設定を追加し、3 日、1 週間、15 日、1 か月、3 か月、1 年を選択できるようにしました。",
        ko: "만료된 기록 자동 정리 설정을 추가했으며 3일, 1주, 15일, 1개월, 3개월, 1년 옵션을 지원합니다.",
        fr: "Ajout de parametres de nettoyage automatique de l'historique expire : 3 jours, une semaine, 15 jours, un mois, 3 mois et un an.",
        de: "Automatische Bereinigung abgelaufener Verlaufseintrage hinzugefugt, mit Optionen fur 3 Tage, eine Woche, 15 Tage, einen Monat, 3 Monate und ein Jahr.",
        it: "Aggiunte impostazioni di pulizia automatica della cronologia scaduta, con opzioni per 3 giorni, una settimana, 15 giorni, un mese, 3 mesi e un anno.",
        es: "Se agregaron ajustes de limpieza automatica del historial vencido, con opciones de 3 dias, una semana, 15 dias, un mes, 3 meses y un ano.",
      },
      {
        en: "Changed the menu bar icon to `sparkle.text.clipboard.fill` while keeping automatic light and dark mode adaptation.",
        zh: "菜单栏图标切换为 `sparkle.text.clipboard.fill`，并保持深浅色模式自适应。",
        ja: "メニューバーアイコンを `sparkle.text.clipboard.fill` に変更し、ライト/ダークモードへの自動対応を維持しました。",
        ko: "메뉴 막대 아이콘을 `sparkle.text.clipboard.fill`로 변경하고 라이트/다크 모드 자동 적응을 유지했습니다.",
        fr: "L'icone de la barre de menus devient `sparkle.text.clipboard.fill` tout en conservant l'adaptation automatique aux modes clair et sombre.",
        de: "Das Menuleistensymbol wurde auf `sparkle.text.clipboard.fill` umgestellt und passt sich weiterhin automatisch an Hell- und Dunkelmodus an.",
        it: "L'icona della barra dei menu e stata cambiata in `sparkle.text.clipboard.fill`, mantenendo l'adattamento automatico alle modalita chiara e scura.",
        es: "El icono de la barra de menus cambio a `sparkle.text.clipboard.fill` y mantiene la adaptacion automatica a los modos claro y oscuro.",
      },
      {
        en: "Segmented controls now include Spring animation feedback.",
        zh: "分段控制器增加 Spring 动画反馈。",
        ja: "セグメントコントロールに Spring アニメーションのフィードバックを追加しました。",
        ko: "세그먼트 컨트롤에 Spring 애니메이션 피드백을 추가했습니다.",
        fr: "Les controles segmentes incluent desormais un retour d'animation Spring.",
        de: "Segmentierte Steuerelemente bieten jetzt Spring-Animationsfeedback.",
        it: "I controlli segmentati ora includono un feedback con animazione Spring.",
        es: "Los controles segmentados ahora incluyen respuesta con animacion Spring.",
      },
      {
        en: "Expanded Japanese, Korean, French, German, Italian, and Spanish language packs, including key interface and system permission copy.",
        zh: "扩展日语、韩语、法语、德语、意大利语和西班牙语语言包，并补充主要界面与系统权限文案。",
        ja: "日本語、韓国語、フランス語、ドイツ語、イタリア語、スペイン語の言語パックを拡充し、主要画面とシステム権限の文言を追加しました。",
        ko: "일본어, 한국어, 프랑스어, 독일어, 이탈리아어, 스페인어 언어 팩을 확장하고 주요 화면과 시스템 권한 문구를 보완했습니다.",
        fr: "Extension des packs japonais, coreen, francais, allemand, italien et espagnol, avec les principaux textes d'interface et d'autorisations systeme.",
        de: "Japanische, koreanische, franzosische, deutsche, italienische und spanische Sprachpakete wurden erweitert, einschliesslich zentraler Oberflachen- und Systemberechtigungstexte.",
        it: "Estesi i pacchetti lingua giapponese, coreano, francese, tedesco, italiano e spagnolo, con i principali testi dell'interfaccia e dei permessi di sistema.",
        es: "Se ampliaron los paquetes de japones, coreano, frances, aleman, italiano y espanol, incluyendo textos clave de la interfaz y permisos del sistema.",
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-05-28",
    title: {
      en: "Initial public release",
      zh: "首个公开版本",
      ja: "初回公開リリース",
      ko: "첫 공개 릴리스",
      fr: "Premiere version publique",
      de: "Erste offentliche Version",
      it: "Prima versione pubblica",
      es: "Primera version publica",
    },
    notes: [
      {
        en: "Clipboard history with local SQLite storage.",
        zh: "基于本地 SQLite 存储的剪贴板历史。",
        ja: "ローカル SQLite ストレージによるクリップボード履歴。",
        ko: "로컬 SQLite 저장소 기반 클립보드 기록.",
        fr: "Historique du presse-papiers avec stockage SQLite local.",
        de: "Zwischenablageverlauf mit lokaler SQLite-Speicherung.",
        it: "Cronologia degli appunti con archiviazione SQLite locale.",
        es: "Historial del portapapeles con almacenamiento SQLite local.",
      },
      {
        en: "Rich previews for text, images, code, links, colors, and files.",
        zh: "支持文本、图片、代码、链接、颜色和文件的丰富预览。",
        ja: "テキスト、画像、コード、リンク、色、ファイルのリッチプレビュー。",
        ko: "텍스트, 이미지, 코드, 링크, 색상, 파일의 풍부한 미리보기.",
        fr: "Apercus enrichis pour le texte, les images, le code, les liens, les couleurs et les fichiers.",
        de: "Umfangreiche Vorschauen fur Text, Bilder, Code, Links, Farben und Dateien.",
        it: "Anteprime avanzate per testo, immagini, codice, link, colori e file.",
        es: "Vistas previas enriquecidas para texto, imagenes, codigo, enlaces, colores y archivos.",
      },
      {
        en: "Pinned snippets, quick panel, and search.",
        zh: "支持 Pin 片段、快捷面板和搜索。",
        ja: "ピン留めスニペット、クイックパネル、検索。",
        ko: "고정 스니펫, 빠른 패널, 검색.",
        fr: "Extraits epingles, panneau rapide et recherche.",
        de: "Angeheftete Snippets, Schnellpanel und Suche.",
        it: "Snippet fissati, pannello rapido e ricerca.",
        es: "Fragmentos fijados, panel rapido y busqueda.",
      },
      {
        en: "Optional BYOK AI actions for translate, rewrite, and summarize.",
        zh: "可选的 BYOK AI 操作，支持翻译、改写和总结。",
        ja: "翻訳、書き換え、要約に対応する任意の BYOK AI アクション。",
        ko: "번역, 재작성, 요약을 위한 선택형 BYOK AI 작업.",
        fr: "Actions IA BYOK optionnelles pour traduire, reformuler et resumer.",
        de: "Optionale BYOK-KI-Aktionen zum Ubersetzen, Umschreiben und Zusammenfassen.",
        it: "Azioni AI BYOK opzionali per tradurre, riscrivere e riassumere.",
        es: "Acciones de IA BYOK opcionales para traducir, reescribir y resumir.",
      },
      {
        en: "Dodo Payments license activation, validation, and deactivation.",
        zh: "支持 Dodo Payments 授权激活、验证和停用。",
        ja: "Dodo Payments ライセンスの有効化、検証、無効化。",
        ko: "Dodo Payments 라이선스 활성화, 검증, 비활성화.",
        fr: "Activation, validation et desactivation des licences Dodo Payments.",
        de: "Aktivierung, Validierung und Deaktivierung von Dodo Payments-Lizenzen.",
        it: "Attivazione, convalida e disattivazione delle licenze Dodo Payments.",
        es: "Activacion, validacion y desactivacion de licencias de Dodo Payments.",
      },
    ],
  },
];

export default function Releases() {
  useNavScroll();

  return (
    <>
      <Header />

      <main className="privacy-main">
        <h1>
          <I18nText
            t={{
              en: "Release Notes",
              zh: "更新日志",
              ja: "リリースノート",
              ko: "릴리스 노트",
              fr: "Notes de version",
              de: "Versionshinweise",
              it: "Note di rilascio",
              es: "Notas de version",
            }}
          />
        </h1>
        <p className="updated">
          <I18nText
            t={{
              en: "Latest Clibo releases and product changes.",
              zh: "Clibo 最新版本和产品变更。",
              ja: "Clibo の最新リリースと製品変更。",
              ko: "최신 Clibo 릴리스와 제품 변경 사항.",
              fr: "Dernieres versions de Clibo et changements du produit.",
              de: "Neueste Clibo-Versionen und Produktanderungen.",
              it: "Ultime versioni di Clibo e modifiche al prodotto.",
              es: "Ultimas versiones de Clibo y cambios del producto.",
            }}
          />
        </p>

        {RELEASES.map((release) => (
          <section className="release-entry" key={release.version}>
            <h2>
              Clibo {release.version}
            </h2>
            <p className="updated">{release.date}</p>
            <I18nText as="p" t={release.title} />
            <ul>
              {release.notes.map((note, index) => (
                <li key={index}>
                  <I18nText t={note} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
