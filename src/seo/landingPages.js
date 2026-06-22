export const SEO_LANDING_PAGES = [
  {
    path: "/mac-clipboard-history",
    title: "Mac Clipboard History",
    seoTitle: "Mac Clipboard History - Save, Search, and Reuse Copies",
    seoDescription:
      "Learn how Clibo gives Mac users a private clipboard history with local storage, fast search, rich previews, snippets, and a quick panel.",
    eyebrow: "Mac clipboard history",
    lede:
      "macOS keeps only the latest copied item by default. Clibo adds a searchable local clipboard history so text, links, images, files, colors, emails, dates, and phone numbers are ready when you need them again.",
    sections: [
      {
        heading: "Why Mac users look for clipboard history",
        body:
          "If you copy a code snippet, a client email, a color, and then a link, the built-in clipboard normally only remembers the last one. Clibo keeps allowed clipboard items in a local history database on your Mac, so useful copies do not disappear when you copy the next thing.",
        bullets: [
          "Browse history by date and content type.",
          "Search text, links, code, images, files, colors, emails, dates, and phone numbers.",
          "Preview records before reusing them.",
          "Pin records you want to keep handy.",
        ],
      },
      {
        heading: "Search without leaving your current app",
        body:
          "Clibo includes a menu bar quick panel for finding recent items without opening a full window. Use your configured shortcut, search for the record, then copy or paste it back into your current workflow.",
      },
      {
        heading: "Local-first by design",
        body:
          "Clipboard history can contain sensitive work. Clibo stores clipboard history locally on your Mac and does not upload your whole history to a Clibo backend. Privacy rules let you exclude apps and content types that should never be recorded.",
      },
    ],
    ctaHeading: "Add searchable clipboard history to your Mac",
    ctaBody:
      "Download Clibo, try it for 7 days, and keep the clipboard history you actually need.",
    related: ["/local-clipboard-manager-mac", "/clipboard-manager-privacy", "/clipboard-snippets-mac"],
  },
  {
    path: "/maccy-alternative",
    title: "Maccy Alternative for Mac",
    seoTitle: "Maccy Alternative for Mac - Clibo Clipboard Manager",
    seoDescription:
      "Looking for a Maccy alternative? Clibo adds local clipboard history, rich previews, snippets, Maccy import, pinned sync, and optional BYOK AI actions.",
    eyebrow: "Maccy alternative",
    lede:
      "Maccy is a lightweight clipboard manager. Clibo is built for Mac users who want a more complete clipboard workspace with local history, rich previews, snippets, pinned records, privacy rules, and optional AI actions.",
    sections: [
      {
        heading: "When Clibo is a better fit",
        body:
          "Choose Clibo if you want more than a simple clipboard list. Clibo combines a Dashboard, quick panel, hover previews, source-aware records, snippets, import tools, pinned sync, and native macOS actions.",
        bullets: [
          "One-click Maccy import for existing history.",
          "Rich previews for links, images, files, colors, emails, dates, and phone numbers.",
          "Pinned snippets and global snippet shortcuts.",
          "Privacy controls for excluded apps, content types, and sensitive records.",
        ],
      },
      {
        heading: "Keep your Maccy history",
        body:
          "Switching does not have to mean starting from an empty history. Clibo includes a Maccy import flow so you can bring over past clips, images, files, pinned content, and original copy timestamps where available.",
      },
      {
        heading: "A native Mac workflow",
        body:
          "Clibo is a native macOS app for macOS 14 or later. It includes actions for Notes, Reminders, Calendar, Contacts, and Messages, plus local tools such as OCR and formatting helpers.",
      },
    ],
    ctaHeading: "Try Clibo as your Maccy alternative",
    ctaBody:
      "Import from Maccy, test Clibo with a 7-day trial, and decide with your real clipboard history.",
    related: ["/maccy-import", "/mac-clipboard-history", "/local-clipboard-manager-mac"],
  },
  {
    path: "/maccy-import",
    title: "Import Maccy History into Clibo",
    seoTitle: "Import Maccy Clipboard History into Clibo",
    seoDescription:
      "Move from Maccy to Clibo with a one-click import flow for clipboard history, images, files, pinned content, and original copy timestamps.",
    eyebrow: "Maccy import",
    lede:
      "Clibo includes a Maccy import workflow so Mac users can migrate existing clipboard history instead of starting over.",
    sections: [
      {
        heading: "What Clibo can import",
        body:
          "The Maccy import flow is designed to preserve the useful context of your existing clipboard history. Imported records can include text history, images, files, pinned content, and original copy timestamps when available.",
        bullets: [
          "Bring over past clipboard records from Maccy.",
          "Keep pinned content available in Clibo.",
          "Preserve source context where the imported data includes it.",
          "Review imported records inside Clibo's Dashboard.",
        ],
      },
      {
        heading: "Why import before evaluating",
        body:
          "A clipboard manager is easiest to judge with your real history. Importing from Maccy lets you test Clibo search, previews, snippets, and privacy controls against the content you already use every day.",
      },
      {
        heading: "Use Clibo after the migration",
        body:
          "After import, use the Dashboard for deeper browsing and the quick panel for fast retrieval from your current app. You can pin important records, create snippets, and configure privacy rules as you go.",
      },
    ],
    ctaHeading: "Move your Maccy history to Clibo",
    ctaBody:
      "Download Clibo and use the import flow during your trial.",
    related: ["/maccy-alternative", "/mac-clipboard-history", "/clipboard-snippets-mac"],
  },
  {
    path: "/local-clipboard-manager-mac",
    title: "Local Clipboard Manager for Mac",
    seoTitle: "Local Clipboard Manager for Mac - Clibo",
    seoDescription:
      "Clibo is a local-first clipboard manager for Mac with private history, fast search, previews, pinned sync, snippets, and optional BYOK AI actions.",
    eyebrow: "Local clipboard manager",
    lede:
      "A clipboard manager should make copied content easier to reuse without turning your clipboard into someone else's database. Clibo keeps clipboard history local on your Mac and gives you practical tools for finding it again.",
    sections: [
      {
        heading: "Local history, practical retrieval",
        body:
          "Clibo stores clipboard history in a local database on your Mac. You can search, filter, preview, pin, edit non-image records, delete old items, and use a quick panel when you do not want to leave the app you are working in.",
      },
      {
        heading: "Sync only what you choose",
        body:
          "If you work across Macs, Clibo can sync pinned records through iCloud Drive or another synced folder. The design is explicit: normal history stays local, and only pinned records are written to your chosen sync location.",
      },
      {
        heading: "Optional AI, your provider key",
        body:
          "AI actions are optional and BYOK. When configured, Clibo sends only the selected text and prompt directly to the provider you choose. It does not require sending your entire clipboard history to a hosted Clibo service.",
      },
    ],
    ctaHeading: "Use a clipboard manager that starts local",
    ctaBody:
      "Try Clibo on macOS 14 or later with a 7-day free trial.",
    related: ["/clipboard-manager-privacy", "/mac-clipboard-history", "/maccy-alternative"],
  },
  {
    path: "/clipboard-manager-privacy",
    title: "Private Clipboard Manager for Mac",
    seoTitle: "Private Clipboard Manager for Mac - Local Clipboard History",
    seoDescription:
      "Clibo helps Mac users keep clipboard history private with local storage, excluded apps, content type filters, sensitive record handling, and optional BYOK AI.",
    eyebrow: "Clipboard privacy",
    lede:
      "Clipboard history can include passwords, client notes, links, images, emails, and code. Clibo is designed around local storage and privacy controls so you decide what gets recorded.",
    sections: [
      {
        heading: "History stays on your Mac",
        body:
          "Clibo stores clipboard history locally. It does not operate a backend that collects your full clipboard history, and it does not require an account for core clipboard workflows.",
      },
      {
        heading: "Exclude sources and content types",
        body:
          "Use Privacy settings to exclude apps from recording, enter bundle IDs manually, and disable content types you never want saved. This is useful for password managers, finance apps, private browsers, and other sensitive sources.",
      },
      {
        heading: "Sensitive records and AI boundaries",
        body:
          "Sensitive content is filtered by default. Optional AI actions use your configured provider and only the selected text and prompt are sent for that action. You can use Clibo without enabling AI at all.",
      },
    ],
    ctaHeading: "Keep clipboard history useful and private",
    ctaBody:
      "Download Clibo and configure privacy rules around your real Mac workflow.",
    related: ["/local-clipboard-manager-mac", "/mac-clipboard-history", "/clipboard-snippets-mac"],
  },
  {
    path: "/clipboard-snippets-mac",
    title: "Clipboard Snippets for Mac",
    seoTitle: "Clipboard Snippets for Mac - Reusable Text Templates",
    seoDescription:
      "Use Clibo snippets to save reusable text templates, prompts, replies, signatures, addresses, and code fragments with fast search and global shortcuts.",
    eyebrow: "Clipboard snippets",
    lede:
      "Some things are not just copied once. Clibo snippets let you save reusable text templates for replies, prompts, signatures, addresses, support messages, and code fragments.",
    sections: [
      {
        heading: "Save text you paste repeatedly",
        body:
          "Create snippets for content that should be deliberate and reusable, not buried inside general clipboard history. Snippets are searchable from the Dashboard and quick panel.",
        bullets: [
          "Email replies and support answers.",
          "AI prompts and rewrite instructions.",
          "Signatures, addresses, and contact details.",
          "Code fragments and command templates.",
        ],
      },
      {
        heading: "Use shortcuts for frequent snippets",
        body:
          "Common snippets can be mapped to global shortcuts from Command + Shift + 1 through Command + Shift + 9, so high-frequency text is always one shortcut away.",
      },
      {
        heading: "History and snippets together",
        body:
          "Clibo keeps recent clipboard history and permanent snippets in the same workflow. Search recent copies when you need something temporary, and use snippets when a piece of text deserves a stable home.",
      },
    ],
    ctaHeading: "Turn repeated paste work into snippets",
    ctaBody:
      "Try Clibo and build a reusable snippet library for your Mac.",
    related: ["/mac-clipboard-history", "/local-clipboard-manager-mac", "/maccy-alternative"],
  },
];

export function getLandingPage(pathname) {
  const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return SEO_LANDING_PAGES.find((page) => page.path === path) || null;
}
