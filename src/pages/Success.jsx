import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useLang } from "../context/LangContext.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/success.css";

const SUCCESS_TEXT = {
  purchaseComplete: {
    en: "purchase complete",
    zh: "购买完成",
    ja: "購入完了",
    ko: "구매 완료",
    fr: "achat terminé",
    de: "Kauf abgeschlossen",
    it: "acquisto completato",
    es: "compra completada",
  },
  title: {
    en: "Clibo is ready.",
    zh: "Clibo 已准备好。",
    ja: "Cliboの準備ができました。",
    ko: "Clibo가 준비되었습니다.",
    fr: "Clibo est prêt.",
    de: "Clibo ist bereit.",
    it: "Clibo è pronto.",
    es: "Clibo está listo.",
  },
  copyWithKeys: {
    en: "Copy your license key, then activate it in Clibo.",
    zh: "复制你的 license key，然后在 Clibo 里完成激活。",
    ja: "ライセンスキーをコピーして、Cliboで有効化してください。",
    ko: "라이선스 키를 복사한 다음 Clibo에서 활성화하세요.",
    fr: "Copiez votre clé de licence, puis activez-la dans Clibo.",
    de: "Kopieren Sie Ihren Lizenzschlüssel und aktivieren Sie ihn in Clibo.",
    it: "Copia la chiave di licenza, poi attivala in Clibo.",
    es: "Copia tu clave de licencia y actívala en Clibo.",
  },
  copyWithoutKeys: {
    en: "Payment is complete. If the license key is not shown here, check the receipt or license email from Dodo.",
    zh: "付款已完成。如果这里没有显示 license key，请查看 Dodo 发送到邮箱的收据或授权邮件。",
    ja: "支払いは完了しました。ライセンスキーが表示されない場合は、Dodoからの領収書またはライセンスメールを確認してください。",
    ko: "결제가 완료되었습니다. 라이선스 키가 표시되지 않으면 Dodo에서 보낸 영수증 또는 라이선스 이메일을 확인하세요.",
    fr: "Le paiement est terminé. Si la clé de licence n'apparaît pas ici, vérifiez le reçu ou l'e-mail de licence envoyé par Dodo.",
    de: "Die Zahlung ist abgeschlossen. Wenn der Lizenzschlüssel hier nicht angezeigt wird, prüfen Sie die Rechnung oder Lizenz-E-Mail von Dodo.",
    it: "Il pagamento è completato. Se la chiave di licenza non appare qui, controlla la ricevuta o l'email di licenza inviata da Dodo.",
    es: "El pago se ha completado. Si la clave de licencia no aparece aquí, revisa el recibo o el correo de licencia enviado por Dodo.",
  },
  licenseKey: {
    en: "License key",
    zh: "License key",
    ja: "ライセンスキー",
    ko: "라이선스 키",
    fr: "Clé de licence",
    de: "Lizenzschlüssel",
    it: "Chiave di licenza",
    es: "Clave de licencia",
  },
  copy: {
    en: "Copy",
    zh: "复制",
    ja: "コピー",
    ko: "복사",
    fr: "Copier",
    de: "Kopieren",
    it: "Copia",
    es: "Copiar",
  },
  copied: {
    en: "Copied",
    zh: "已复制",
    ja: "コピー済み",
    ko: "복사됨",
    fr: "Copié",
    de: "Kopiert",
    it: "Copiato",
    es: "Copiado",
  },
  emptyTitle: {
    en: "License key is not included in this return link yet.",
    zh: "License key 暂未出现在回跳链接里。",
    ja: "この戻りリンクにはまだライセンスキーが含まれていません。",
    ko: "이 반환 링크에는 아직 라이선스 키가 포함되어 있지 않습니다.",
    fr: "La clé de licence n'est pas encore incluse dans ce lien de retour.",
    de: "Der Lizenzschlüssel ist in diesem Rücklink noch nicht enthalten.",
    it: "La chiave di licenza non è ancora inclusa in questo link di ritorno.",
    es: "La clave de licencia aún no está incluida en este enlace de retorno.",
  },
  emptyCopy: {
    en: "You can download Clibo now and activate it later with the license key from the Dodo email.",
    zh: "你仍然可以先下载 Clibo，稍后从 Dodo 邮件中复制 license key 激活。",
    ja: "今すぐCliboをダウンロードし、後でDodoのメールにあるライセンスキーで有効化できます。",
    ko: "지금 Clibo를 다운로드하고 나중에 Dodo 이메일의 라이선스 키로 활성화할 수 있습니다.",
    fr: "Vous pouvez télécharger Clibo maintenant et l'activer plus tard avec la clé de licence reçue par e-mail de Dodo.",
    de: "Sie können Clibo jetzt herunterladen und später mit dem Lizenzschlüssel aus der Dodo-E-Mail aktivieren.",
    it: "Puoi scaricare Clibo ora e attivarlo più tardi con la chiave di licenza ricevuta via email da Dodo.",
    es: "Puedes descargar Clibo ahora y activarlo más tarde con la clave de licencia del correo de Dodo.",
  },
  download: {
    en: "Download Clibo",
    zh: "下载 Clibo",
    ja: "Cliboをダウンロード",
    ko: "Clibo 다운로드",
    fr: "Télécharger Clibo",
    de: "Clibo herunterladen",
    it: "Scarica Clibo",
    es: "Descargar Clibo",
  },
  backHome: {
    en: "Back to home",
    zh: "回到首页",
    ja: "ホームに戻る",
    ko: "홈으로 돌아가기",
    fr: "Retour à l'accueil",
    de: "Zur Startseite",
    it: "Torna alla home",
    es: "Volver al inicio",
  },
  activationTitle: {
    en: "Activation steps",
    zh: "激活步骤",
    ja: "有効化手順",
    ko: "활성화 단계",
    fr: "Étapes d'activation",
    de: "Aktivierungsschritte",
    it: "Passaggi di attivazione",
    es: "Pasos de activación",
  },
  openClibo: {
    en: "Open Clibo.",
    zh: "打开 Clibo。",
    ja: "Cliboを開きます。",
    ko: "Clibo를 엽니다.",
    fr: "Ouvrez Clibo.",
    de: "Öffnen Sie Clibo.",
    it: "Apri Clibo.",
    es: "Abre Clibo.",
  },
  goSettings: {
    en: "Go to",
    zh: "进入",
    ja: "移動先",
    ko: "이동",
    fr: "Allez dans",
    de: "Gehen Sie zu",
    it: "Vai a",
    es: "Ve a",
  },
  pasteKey: {
    en: "Paste your license key.",
    zh: "粘贴 license key。",
    ja: "ライセンスキーを貼り付けます。",
    ko: "라이선스 키를 붙여넣습니다.",
    fr: "Collez votre clé de licence.",
    de: "Fügen Sie Ihren Lizenzschlüssel ein.",
    it: "Incolla la chiave di licenza.",
    es: "Pega tu clave de licencia.",
  },
  clickActivate: {
    en: "Click",
    zh: "点击",
    ja: "クリック",
    ko: "클릭",
    fr: "Cliquez sur",
    de: "Klicken Sie auf",
    it: "Fai clic su",
    es: "Haz clic en",
  },
  supportWithPayment: {
    en: "Need help? Contact support and include payment ID: {paymentId}.",
    zh: "需要帮助时，请联系支持并附上 payment ID: {paymentId}。",
    ja: "サポートが必要な場合は、payment ID: {paymentId} を添えてお問い合わせください。",
    ko: "도움이 필요하면 payment ID: {paymentId} 를 포함해 지원팀에 문의하세요.",
    fr: "Besoin d'aide ? Contactez le support avec le payment ID : {paymentId}.",
    de: "Benötigen Sie Hilfe? Kontaktieren Sie den Support mit der payment ID: {paymentId}.",
    it: "Hai bisogno di aiuto? Contatta il supporto includendo il payment ID: {paymentId}.",
    es: "¿Necesitas ayuda? Contacta con soporte e incluye el payment ID: {paymentId}.",
  },
  supportWithoutPayment: {
    en: "If you do not see a license key, check the email from Dodo or contact support with your payment ID.",
    zh: "如果没有看到 license key，请检查 Dodo 发送的邮件，或联系支持并附上 payment ID。",
    ja: "ライセンスキーが見つからない場合は、Dodoからのメールを確認するか、payment IDを添えてサポートにお問い合わせください。",
    ko: "라이선스 키가 보이지 않으면 Dodo 이메일을 확인하거나 payment ID를 포함해 지원팀에 문의하세요.",
    fr: "Si vous ne voyez pas de clé de licence, vérifiez l'e-mail de Dodo ou contactez le support avec votre payment ID.",
    de: "Wenn kein Lizenzschlüssel angezeigt wird, prüfen Sie die E-Mail von Dodo oder kontaktieren Sie den Support mit Ihrer payment ID.",
    it: "Se non vedi una chiave di licenza, controlla l'email di Dodo o contatta il supporto con il payment ID.",
    es: "Si no ves una clave de licencia, revisa el correo de Dodo o contacta con soporte con tu payment ID.",
  },
};

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
  const [searchParams] = useSearchParams();
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const { lang } = useLang();
  useNavScroll();

  const keys = useMemo(
    () => parseLicenseKeys(searchParams.get("license_key")),
    [searchParams]
  );
  const email = searchParams.get("email") || "";
  const paymentId = searchParams.get("payment_id") || "";
  const t = (key) => SUCCESS_TEXT[key]?.[lang] || SUCCESS_TEXT[key]?.en || "";

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
      <Header />

      <main className="success-shell">
        <section className="success-panel" aria-labelledby="success-title">
          <div className="success-kicker">{t("purchaseComplete")}</div>
          <h1 id="success-title">{t("title")}</h1>
          <p className="success-copy">
            {keys.length > 0 ? t("copyWithKeys") : t("copyWithoutKeys")}
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
                    {keys.length > 1
                      ? `${t("licenseKey")} ${index + 1}`
                      : t("licenseKey")}
                  </span>
                  <code className="license-value">{key}</code>
                  <button
                    className="copy-button"
                    type="button"
                    onClick={() => handleCopy(key, index)}
                  >
                    {copiedIndex === index ? t("copied") : t("copy")}
                  </button>
                </div>
              ))
            ) : (
              <div className="license-empty">
                <b>{t("emptyTitle")}</b>
                <span>{t("emptyCopy")}</span>
              </div>
            )}
          </div>

          <div className="success-actions">
            <a
              className="success-primary-action"
              href="https://releases.clibo.us/Clibo-1.0.5-8.dmg"
            >
              {t("download")}
            </a>
            <Link className="success-secondary-action" to="/">
              {t("backHome")}
            </Link>
          </div>

          <div className="activation-box">
            <h2>{t("activationTitle")}</h2>
            <ol>
              <li>{t("openClibo")}</li>
              <li>
                {t("goSettings")} <code>Settings -&gt; License</code>.
              </li>
              <li>{t("pasteKey")}</li>
              <li>
                {t("clickActivate")} <code>Activate</code>.
              </li>
            </ol>
          </div>

          <p className="support-note">
            {paymentId
              ? t("supportWithPayment").replace("{paymentId}", paymentId)
              : t("supportWithoutPayment")}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
