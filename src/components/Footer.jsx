import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="footer-brand">
          <img className="logo-mark" src="/assets/clibo-icon.png" alt="" />
          <span>Clibo</span>
        </span>
        <span>© 2026 Clibo · Made with ♥ for Mac users</span>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="mailto:support@clibo.us?subject=Privacy%20question">Privacy</a>
        <a href="mailto:support@clibo.us">Support (support@clibo.us)</a>
        <a href="https://twitter.com/clibo_us">Twitter</a>
      </nav>
    </footer>
  );
}
