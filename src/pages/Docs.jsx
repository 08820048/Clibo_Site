import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

const docNav = [
  { id: "overview", title: { en: "Overview", zh: "概览" } },
  { id: "install", title: { en: "Install Clibo", zh: "安装 Clibo" } },
  { id: "permissions", title: { en: "Permissions", zh: "权限设置" } },
  { id: "history", title: { en: "Clipboard history", zh: "剪贴板历史" } },
  { id: "quick-panel", title: { en: "Quick panel", zh: "快捷面板" } },
  { id: "actions", title: { en: "Actions", zh: "右键动作" } },
  { id: "snippets", title: { en: "Snippets", zh: "Snippets" } },
  { id: "privacy", title: { en: "Privacy", zh: "隐私" } },
  { id: "sync-import", title: { en: "Sync and import", zh: "同步与导入" } },
  { id: "ai-statistics", title: { en: "AI and statistics", zh: "AI 与统计" } },
  { id: "troubleshooting", title: { en: "Troubleshooting", zh: "排障" } },
];

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
            Clibo Docs
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
              <I18nText
                t={{
                  en: "Documentation · Last updated June 2026",
                  zh: "文档 · 最后更新于 2026 年 6 月",
                }}
              />
            </p>
            <h1>
              <I18nText
                t={{
                  en: "Clibo Documentation",
                  zh: "Clibo 使用文档",
                }}
              />
            </h1>
            <p className="docs-lede">
              <I18nText
                t={{
                  en: "A practical guide for setting up Clibo, recording clipboard history, using the quick panel, protecting sensitive content, and connecting copied items with native macOS apps.",
                  zh: "这是一份实用手册，帮助你完成 Clibo 设置、记录剪贴板历史、使用快捷面板、保护敏感内容，并把复制内容和 macOS 原生应用联动起来。",
                }}
              />
            </p>
          </header>

          <section id="overview">
            <h2>
              <I18nText t={{ en: "Overview", zh: "概览" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "Clibo is a native macOS clipboard manager. It keeps clipboard history on your Mac, recognizes common content types, provides fast search and previews, and lets you reuse copied content from the Dashboard or quick panel.",
                  zh: "Clibo 是一款原生 macOS 剪贴板管理器。它会把剪贴板历史保存在你的 Mac 本机，自动识别常见内容类型，提供快速搜索和预览，并允许你从 Dashboard 或快捷面板中再次取用复制内容。",
                }}
              />
            </p>
            <p>
              <I18nText
                t={{
                  en: "The main surfaces are the menu bar icon, the Dashboard, the quick panel, preview popovers, Settings, and context menus on each clipboard record.",
                  zh: "主要入口包括菜单栏图标、Dashboard、快捷面板、悬停预览、设置页面，以及每条剪贴板记录的右键菜单。",
                }}
              />
            </p>
          </section>

          <section id="install">
            <h2>
              <I18nText t={{ en: "Install Clibo", zh: "安装 Clibo" }} />
            </h2>
            <h3>
              <I18nText t={{ en: "Download and launch", zh: "下载并启动" }} />
            </h3>
            <ol>
              <li>
                <I18nText
                  t={{
                    en: "Download the latest Clibo DMG from the website.",
                    zh: "从官网下载最新版本的 Clibo DMG。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Open the DMG and drag Clibo into Applications.",
                    zh: "打开 DMG，并将 Clibo 拖入“应用程序”。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Launch Clibo from Applications, Launchpad, or Spotlight.",
                    zh: "从“应用程序”、Launchpad 或 Spotlight 启动 Clibo。",
                  }}
                />
              </li>
            </ol>
            <h3>
              <I18nText t={{ en: "Trial and license", zh: "试用与授权" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Clibo includes a 7-day free trial. After the trial, activate a license from Settings. If you purchased from the website, copy the license key from your receipt email and paste it into Settings > License.",
                  zh: "Clibo 提供 7 天免费试用。试用结束后，可在设置中激活授权。如果你从官网购买，请从收据邮件中复制 license key，并粘贴到“设置 > License”。",
                }}
              />
            </p>
          </section>

          <section id="permissions">
            <h2>
              <I18nText t={{ en: "Permissions", zh: "权限设置" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "The first-run guide walks through permissions Clibo needs for the workflows you enable. You can also revisit permission-related settings later from Settings.",
                  zh: "首次使用引导会带你开启 Clibo 所需的权限。之后你也可以在设置中重新查看和调整相关权限。",
                }}
              />
            </p>
            <ul>
              <li>
                <strong>Accessibility</strong>
                <I18nText
                  t={{
                    en: " is used for secure field detection and paste-related workflows.",
                    zh: " 用于安全输入框检测和粘贴相关工作流。",
                  }}
                />
              </li>
              <li>
                <strong>Calendar, Contacts, Notes, and Reminders</strong>
                <I18nText
                  t={{
                    en: " are requested only when you use actions that write to those macOS apps.",
                    zh: " 只会在你使用写入这些 macOS 应用的动作时需要。",
                  }}
                />
              </li>
              <li>
                <strong>Keychain</strong>
                <I18nText
                  t={{
                    en: " stores license and provider credentials securely.",
                    zh: " 用于安全保存授权和服务商凭据。",
                  }}
                />
              </li>
            </ul>
          </section>

          <section id="history">
            <h2>
              <I18nText t={{ en: "Clipboard history", zh: "剪贴板历史" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "Copy normally in any app. When the content is allowed by your privacy rules, Clibo saves it into local history. Supported records include text, links, code, images, files, colors, emails, dates, and phone numbers.",
                  zh: "在任意应用中像平常一样复制即可。当内容没有被隐私规则排除时，Clibo 会把它保存到本地历史。支持的记录包括文本、链接、代码、图片、文件、颜色、邮箱、日期和电话号码。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "Dashboard", zh: "Dashboard" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Use the Dashboard to browse all history, search, filter by content type, inspect previews, pin useful records, edit non-image records, and delete items you no longer need.",
                  zh: "你可以在 Dashboard 中浏览全部历史、搜索、按内容类型筛选、查看预览、置顶常用记录、编辑非图片记录，并删除不再需要的内容。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "Previews", zh: "预览" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Hover over a record to see richer details. Source information is shown when available, and imported records show their import source.",
                  zh: "将鼠标悬停在记录上可以查看更丰富的详情。可用时会显示复制来源；从其他应用导入的记录也会显示导入来源。",
                }}
              />
            </p>
          </section>

          <section id="quick-panel">
            <h2>
              <I18nText t={{ en: "Quick panel", zh: "快捷面板" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "The quick panel is designed for staying in the current app. Open it with your configured shortcut, search for an item, then copy or paste it back into your workflow.",
                  zh: "快捷面板适合在当前应用中快速取用内容。通过你配置的快捷键打开它，搜索目标记录，然后复制或粘贴回当前工作流。",
                }}
              />
            </p>
            <ul>
              <li>
                <I18nText
                  t={{
                    en: "Search history and snippets without opening the full Dashboard.",
                    zh: "无需打开完整 Dashboard，即可搜索历史和 Snippets。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Use context menus for record actions directly from the panel.",
                    zh: "可以直接在面板中通过右键菜单使用记录动作。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Open statistics or temporarily enable sensitive recording from quick controls.",
                    zh: "可以从快捷控制中打开统计，或临时开启敏感内容记录。",
                  }}
                />
              </li>
            </ul>
          </section>

          <section id="actions">
            <h2>
              <I18nText t={{ en: "Actions", zh: "右键动作" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "Right-click a clipboard record to open available actions. Actions change based on the record type.",
                  zh: "对剪贴板记录点按右键即可打开可用动作。动作会根据记录类型变化。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "macOS app actions", zh: "macOS 应用联动" }} />
            </h3>
            <ul>
              <li>
                <I18nText
                  t={{
                    en: "Add text or images to Notes.",
                    zh: "将文本或图片添加到备忘录。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Create reminders from non-image content.",
                    zh: "将非图片内容创建为提醒事项。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Add detected dates to Calendar.",
                    zh: "将识别出的日期添加到日历。",
                  }}
                />
              </li>
              <li>
                <I18nText
                  t={{
                    en: "Save phone numbers to Contacts or open Messages to send an SMS.",
                    zh: "将电话号码保存到通讯录，或打开 Messages 发送短信。",
                  }}
                />
              </li>
            </ul>
            <h3>
              <I18nText t={{ en: "Local tools", zh: "本地工具" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Image records can extract text using Apple Vision OCR. Text records can use local tools such as JSON/XML formatting and Base64 encode or decode.",
                  zh: "图片记录可以使用 Apple Vision OCR 提取文字。文本记录可以使用 JSON/XML 格式化、Base64 编解码等本地工具。",
                }}
              />
            </p>
          </section>

          <section id="snippets">
            <h2>
              <I18nText t={{ en: "Snippets", zh: "Snippets" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "Snippets are reusable text templates for content you paste repeatedly, such as email replies, prompts, signatures, addresses, or code fragments.",
                  zh: "Snippets 是可复用文本模板，适合保存经常粘贴的内容，比如邮件回复、提示词、签名、地址或代码片段。",
                }}
              />
            </p>
            <p>
              <I18nText
                t={{
                  en: "You can create, edit, search, copy, paste, and delete snippets from the Dashboard and quick panel. Common snippets can be mapped to global shortcuts from Command + Shift + 1 through Command + Shift + 9.",
                  zh: "你可以在 Dashboard 和快捷面板中创建、编辑、搜索、复制、粘贴和删除 Snippets。常用片段可以绑定到 Command + Shift + 1 到 Command + Shift + 9。",
                }}
              />
            </p>
            <p className="docs-note">
              <I18nText
                t={{
                  en: "Shortcut example:",
                  zh: "快捷键示例：",
                }}
              />{" "}
              <Kbd>Command</Kbd> + <Kbd>Shift</Kbd> + <Kbd>1</Kbd>
            </p>
          </section>

          <section id="privacy">
            <h2>
              <I18nText t={{ en: "Privacy", zh: "隐私" }} />
            </h2>
            <p>
              <I18nText
                t={{
                  en: "Clibo is local-first. Clipboard history is stored in a local database on your Mac unless you explicitly enable pinned sync for pinned records.",
                  zh: "Clibo 以本地优先为核心。剪贴板历史会保存在你 Mac 本机的数据库中；只有当你明确开启置顶同步时，已置顶记录才会写入同步文件。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "Exclude sources", zh: "排除来源" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "In Privacy settings, exclude apps by choosing them from your installed Applications list or by entering a bundle ID manually. You can also exclude content types that should never be recorded.",
                  zh: "在隐私设置中，你可以从已安装应用列表选择要排除的应用，也可以手动输入 Bundle ID。你还可以排除永远不想记录的内容类型。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "Sensitive content", zh: "敏感内容" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Sensitive content is filtered by default. If you temporarily need to record everything, enable sensitive recording from the quick panel. When sensitive records are shown, masking is enabled by default and can be changed in Settings.",
                  zh: "敏感内容默认会被过滤。如果你临时需要记录全部内容，可以从快捷面板开启敏感记录。敏感记录在面板中默认脱敏显示，你可以在设置中调整这个行为。",
                }}
              />
            </p>
          </section>

          <section id="sync-import">
            <h2>
              <I18nText t={{ en: "Sync and import", zh: "同步与导入" }} />
            </h2>
            <h3>
              <I18nText t={{ en: "Pinned sync", zh: "置顶同步" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Pinned sync stores only pinned records in a separate CliboPinnedClips.json file. Choose an iCloud Drive folder or another synced folder if you want pinned records available across Macs.",
                  zh: "置顶同步只会把已置顶记录保存到独立的 CliboPinnedClips.json 文件中。如果你希望置顶记录在多台 Mac 间可用，可以选择 iCloud Drive 或其他同步文件夹。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "Import data", zh: "导入数据" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Use File Import for JSON, CSV, TXT, or Markdown files. Use App Import for supported clipboard managers. Maccy has a dedicated import entry that can migrate history, images, files, pinned state, and original copy timestamps.",
                  zh: "文件导入支持 JSON、CSV、TXT 和 Markdown。应用导入用于支持的剪贴板管理器。Maccy 拥有独立导入入口，可以迁移历史、图片、文件、置顶状态和原始复制时间。",
                }}
              />
            </p>
          </section>

          <section id="ai-statistics">
            <h2>
              <I18nText t={{ en: "AI and statistics", zh: "AI 与统计" }} />
            </h2>
            <h3>
              <I18nText t={{ en: "AI actions", zh: "AI 动作" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "AI features are optional. Configure your own provider and API key before using translation, rewriting, summarization, Explain Code, or other provider-backed actions.",
                  zh: "AI 功能是可选的。你需要先配置自己的服务商和 API Key，才能使用翻译、改写、总结、Explain Code 等由服务商支持的动作。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "Statistics", zh: "统计" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Open Statistics from Settings or the quick panel to review copy volume, content type distribution, activity, source statistics, sensitive copy counts, ignored events, pause counts, and real AI token usage.",
                  zh: "你可以从设置或快捷面板打开统计，查看复制量、类型分布、活跃度、来源统计、敏感复制次数、忽略次数、暂停次数，以及真实 AI token 用量。",
                }}
              />
            </p>
          </section>

          <section id="troubleshooting">
            <h2>
              <I18nText t={{ en: "Troubleshooting", zh: "排障" }} />
            </h2>
            <h3>
              <I18nText t={{ en: "Clipboard history is not updating", zh: "剪贴板历史没有更新" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Check whether recording is paused from the menu bar or quick panel. Also review Privacy settings to make sure the source app or content type is not excluded.",
                  zh: "先检查菜单栏或快捷面板中是否暂停了记录。然后查看隐私设置，确认来源应用或内容类型没有被排除。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "macOS app actions do not work", zh: "macOS 应用联动没有生效" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Make sure the target app permission has been granted. Some permissions appear only after the first time Clibo tries to write to that app.",
                  zh: "确认目标应用权限已经授权。有些权限会在 Clibo 第一次尝试写入对应应用时才出现。",
                }}
              />
            </p>
            <h3>
              <I18nText t={{ en: "AI actions fail", zh: "AI 动作失败" }} />
            </h3>
            <p>
              <I18nText
                t={{
                  en: "Check the provider, API key, model name, and network connection. Token usage appears in Statistics after providers return usage data.",
                  zh: "检查服务商、API Key、模型名称和网络连接。服务商返回用量数据后，token 用量会显示在统计面板中。",
                }}
              />
            </p>
            <p>
              <I18nText
                t={{
                  en: "Still need help? Email support with your macOS version, Clibo version, and a short description of the issue.",
                  zh: "仍然需要帮助？请通过邮件发送你的 macOS 版本、Clibo 版本和问题简述。",
                }}
              />{" "}
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
