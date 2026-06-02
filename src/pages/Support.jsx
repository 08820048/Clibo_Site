import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

export default function Support() {
  useNavScroll();

  return (
    <>
      <Header />

      <main className="privacy-main">
        <h1>Clibo Support</h1>
        <p>
          Clibo is a local-first clipboard manager for macOS. It keeps
          clipboard history on your Mac and provides fast search, a menu bar
          quick panel, snippets, optional AI actions, and automation rules.
        </p>

        <section>
          <h2>Requirements</h2>
          <ul>
            <li>macOS 13 Ventura or later</li>
            <li>Mac with Apple Silicon or Intel processor</li>
            <li>
              Internet access for App Store purchases and optional AI provider
              requests
            </li>
          </ul>
        </section>

        <section>
          <h2>Common Questions</h2>

          <h3>Where is my clipboard history stored?</h3>
          <p>
            Clipboard history is stored locally on your Mac under the user's
            Application Support folder. Clibo does not upload clipboard history
            to a Clibo backend.
          </p>

          <h3>Why does Clibo ask for Accessibility access?</h3>
          <p>
            Clibo uses Accessibility APIs to detect secure text fields so
            sensitive entries, such as password fields, are not recorded.
          </p>

          <h3>Does Clibo contact websites for copied links?</h3>
          <p>
            Only if URL title fetching is enabled in Privacy settings. It is off
            by default.
          </p>

          <h3>How do purchases work?</h3>
          <p>
            Clibo includes a 7-day free trial. After the trial, a Mac App Store
            purchase unlocks full access. Purchases and restores are handled by
            the App Store.
          </p>

          <h3>How do AI features work?</h3>
          <p>
            AI features are optional. If configured, Clibo sends the selected
            text and prompt directly to the provider chosen by the user.
          </p>
        </section>

        <section>
          <h2>Troubleshooting</h2>

          <h3>Clipboard history is not updating</h3>
          <p>Check whether Clibo is paused from the menu bar quick panel.</p>

          <h3>Purchase status is not active</h3>
          <p>Open Settings, choose License, and use Restore Purchases.</p>

          <h3>AI actions fail</h3>
          <p>Check the configured provider and API key.</p>

          <h3>Copied URLs do not show page titles</h3>
          <p>Enable URL title fetching in Privacy settings.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For support, email:</p>
          <p>
            <a className="privacy-email" href="mailto:support@clibo.us">
              support@clibo.us
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
