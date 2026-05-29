import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

export default function Refund() {
  useNavScroll();

  return (
    <>
      <Header />

      <main className="privacy-main">
        <h1>
          <I18nText t={{ en: "Refund Policy", zh: "退款政策" }} />
        </h1>
        <p className="updated">
          <I18nText
            t={{
              en: "Last updated: May 29, 2026",
              zh: "最后更新：2026年5月29日",
            }}
          />
        </p>

        <section>
          <h2>
            <I18nText t={{ en: "1. Try Before Buying", zh: "1. 购买前试用" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo offers a free trial so you can test the app before purchasing. We recommend confirming that Clibo works for your workflow, macOS version, and security settings before buying a license.",
              zh: "Clibo 提供免费试用，你可以在购买前测试应用。我们建议你在购买授权前确认 Clibo 适合你的工作流、macOS 版本和安全设置。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "2. Refund Eligibility", zh: "2. 退款条件" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Because Clibo is delivered digitally with an issued license key, paid purchases are generally final after the license is delivered. We will still review refund requests in good faith for duplicate purchases, accidental purchases, or technical problems that prevent Clibo from working and cannot be resolved.",
              zh: "由于 Clibo 是以数字方式交付并发放 License Key，授权交付后付费购买通常视为最终购买。但对于重复购买、误购，或导致 Clibo 无法使用且无法解决的技术问题，我们仍会善意审核退款请求。",
            }}
          />
          <ul>
            <li>
              <I18nText
                t={{
                  en: "Refund requests should be made within 14 days of purchase.",
                  zh: "退款请求应在购买后 14 天内提出。",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Approved refunds revoke or disable the related license key.",
                  zh: "退款获批后，相关 License Key 会被撤销或禁用。",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "This policy does not limit any mandatory consumer rights that apply in your country or region.",
                  zh: "本政策不限制你所在国家或地区适用的强制性消费者权利。",
                }}
              />
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "3. How to Request a Refund", zh: "3. 如何申请退款" }} />
          </h2>
          <p>
            <I18nText
              t={{
                en: "Email ",
                zh: "请发送邮件至 ",
              }}
            />
            <a className="privacy-email" href="mailto:ilikexff@gmail.com">
              ilikexff@gmail.com
            </a>
            <I18nText
              t={{
                en: " with your payment ID, purchase email, and a short explanation of the issue.",
                zh: "，并附上 payment ID、购买邮箱和问题简述。",
              }}
            />
          </p>
          <I18nText
            as="p"
            t={{
              en: "Payment ID is shown on the purchase success page when Dodo Payments includes it in the return link. You can also find purchase details in your Dodo Payments receipt email.",
              zh: "当 Dodo Payments 在回跳链接中包含 payment ID 时，购买成功页会显示该 ID。你也可以在 Dodo Payments 的收据邮件中找到购买信息。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "4. Payment Processor", zh: "4. 支付处理方" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Purchases are processed by Dodo Payments as Merchant of Record. Dodo Payments may handle refund processing, receipts, tax adjustments, and payment disputes according to its buyer terms and applicable law.",
              zh: "购买由 Dodo Payments 作为 Merchant of Record 处理。Dodo Payments 可能会根据其买家条款和适用法律处理退款、收据、税费调整和支付争议。",
            }}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
