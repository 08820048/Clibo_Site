import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/success.css";

function parseLicenseKeys(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

async function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  return Promise.resolve();
}

export default function Success() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const keys = useMemo(
    () => parseLicenseKeys(searchParams.get("license_key")),
    [searchParams]
  );
  const email = searchParams.get("email") || "";
  const paymentId = searchParams.get("payment_id") || "";

  useEffect(() => {
    if (window.history && window.location.search) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const handleCopy = async (key, index) => {
    await copyToClipboard(key);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 1600);
  };

  return (
    <>
      <header className="success-header">
        <Link className="success-brand" to="/" aria-label="Clibo home">
          <img src="/assets/clibo-icon.png" alt="" />
          <span>Clibo</span>
        </Link>
        <nav className="success-nav" aria-label="Primary navigation">
          <a href="/#features">功能</a>
          <a href="/#privacy">隐私</a>
          <a href="/#pricing">价格</a>
          <a href="/#faq">FAQ</a>
        </nav>
      </header>

      <main className="success-shell">
        <section className="success-panel" aria-labelledby="success-title">
          <div className="success-kicker">purchase complete</div>
          <h1 id="success-title">Clibo 已准备好。</h1>
          <p className="success-copy">
            {keys.length > 0
              ? "复制你的 license key，然后在 Clibo 里完成激活。"
              : "付款已完成。如果这里没有显示 license key，请查看 Dodo 发送到邮箱的收据或授权邮件。"}
          </p>

          {(email || paymentId) && (
            <div className="success-meta">
              {email && (
                <span>
                  Email: <b>{email}</b>
                </span>
              )}
              {paymentId && (
                <span>
                  Payment ID: <b>{paymentId}</b>
                </span>
              )}
            </div>
          )}

          <div className="license-list">
            {keys.length > 0 ? (
              keys.map((key, index) => (
                <div className="license-item" key={index}>
                  <span className="license-label">
                    {keys.length > 1 ? `License key ${index + 1}` : "License key"}
                  </span>
                  <code className="license-value">{key}</code>
                  <button
                    className="copy-button"
                    type="button"
                    onClick={() => handleCopy(key, index)}
                  >
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </button>
                </div>
              ))
            ) : (
              <div className="license-empty">
                <b>License key 暂未出现在回跳链接里。</b>
                <span>
                  你仍然可以先下载 Clibo，稍后从 Dodo 邮件中复制 license key
                  激活。
                </span>
              </div>
            )}
          </div>

          <div className="success-actions">
            <a
              className="success-primary-action"
              href="https://releases.clibo.us/Clibo-1.0.0.dmg"
            >
              Download Clibo
            </a>
            <Link className="success-secondary-action" to="/">
              回到首页
            </Link>
          </div>

          <div className="activation-box">
            <h2>激活步骤</h2>
            <ol>
              <li>打开 Clibo。</li>
              <li>
                进入 <code>Settings -&gt; License</code>。
              </li>
              <li>粘贴 license key。</li>
              <li>
                点击 <code>Activate</code>。
              </li>
            </ol>
          </div>

          <p className="support-note">
            {paymentId
              ? `需要帮助时，请联系支持并附上 payment ID: ${paymentId}。`
              : "如果没有看到 license key，请检查 Dodo 发送的邮件，或联系支持并附上 payment ID。"}
          </p>
        </section>
      </main>
    </>
  );
}
