import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import I18nText from "../components/I18nText.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";
import "../styles/privacy.css";

export default function Terms() {
  useNavScroll();

  return (
    <>
      <Header />

      <main className="privacy-main">
        <h1>
          <I18nText t={{ en: "Terms of Service", zh: "服务条款" }} />
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
            <I18nText t={{ en: "1. Agreement", zh: "1. 协议" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "These terms govern your use of Clibo, a macOS clipboard manager. By downloading, installing, purchasing, or using Clibo, you agree to these terms.",
              zh: "这些条款适用于你对 Clibo 这款 macOS 剪贴板管理器的使用。下载、安装、购买或使用 Clibo，即表示你同意这些条款。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "2. License", zh: "2. 授权" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "A paid Clibo license grants you a personal, non-transferable right to use the Pro features of Clibo on the number of Macs shown at purchase and enforced by the license system.",
              zh: "购买 Clibo 授权后，你将获得个人、不可转让的使用权，可在购买时显示并由授权系统限制的 Mac 数量内使用 Clibo Pro 功能。",
            }}
          />
          <ul>
            <li>
              <I18nText
                t={{
                  en: "You may not resell, share, sublicense, or publicly distribute your license key.",
                  zh: "你不得转售、共享、再授权或公开分发你的 License Key。",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "You may deactivate a Mac to free an activation slot when supported by the app.",
                  zh: "当应用支持时，你可以停用某台 Mac 以释放激活名额。",
                }}
              />
            </li>
            <li>
              <I18nText
                t={{
                  en: "Refunded, revoked, disabled, or fraudulent licenses may stop working immediately.",
                  zh: "已退款、撤销、禁用或存在欺诈风险的授权可能会立即停止工作。",
                }}
              />
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "3. Payments", zh: "3. 支付" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Payments are processed by Dodo Payments as Merchant of Record. Dodo Payments handles checkout, tax calculation, receipts, payment disputes, and billing-related compliance. Your purchase may also be subject to Dodo Payments' buyer terms and privacy policy shown during checkout.",
              zh: "支付由 Dodo Payments 作为 Merchant of Record 处理。Dodo Payments 负责结账、税费计算、收据、支付争议和账单相关合规。你的购买也可能受结账过程中展示的 Dodo Payments 买家条款和隐私政策约束。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "4. Updates and Availability", zh: "4. 更新与可用性" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo is provided as downloadable desktop software. We may release updates, fixes, and compatibility improvements from time to time. We may change, suspend, or discontinue features when necessary for security, compatibility, product quality, or legal reasons.",
              zh: "Clibo 是可下载的桌面软件。我们可能不定期发布更新、修复和兼容性改进。出于安全、兼容性、产品质量或法律原因，我们可能更改、暂停或停止部分功能。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "5. Acceptable Use", zh: "5. 可接受使用" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "You are responsible for how you use Clibo and for the content you copy, store, preview, transform, or paste. You may not use Clibo to violate laws, infringe intellectual property rights, bypass platform restrictions, or process data you are not authorized to handle.",
              zh: "你应对自己使用 Clibo 的方式，以及你复制、存储、预览、处理或粘贴的内容负责。你不得使用 Clibo 违反法律、侵犯知识产权、绕过平台限制，或处理你无权处理的数据。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "6. AI Features", zh: "6. AI 功能" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "AI features are optional and use a Bring Your Own Key model. If you connect an AI provider, the clips you choose to process are sent to that provider under its own terms and privacy policy. You are responsible for your provider account, usage, and costs.",
              zh: "AI 功能是可选功能，并采用自带 API Key 模式。如果你连接 AI 服务商，你选择处理的剪贴内容会根据该服务商自己的条款和隐私政策发送给该服务商。你需要对自己的服务商账号、用量和费用负责。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "7. Warranty Disclaimer", zh: "7. 免责声明" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "Clibo is provided as is and as available. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement. Clibo is not a backup system, password manager, legal compliance tool, or security product.",
              zh: "Clibo 按现状和可用状态提供。在法律允许的最大范围内，我们不作关于适销性、特定用途适用性或不侵权的保证。Clibo 不是备份系统、密码管理器、法律合规工具或安全产品。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "8. Liability", zh: "8. 责任限制" }} />
          </h2>
          <I18nText
            as="p"
            t={{
              en: "To the fullest extent permitted by law, Clibo and its creator will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, revenue, or business opportunities.",
              zh: "在法律允许的最大范围内，Clibo 及其创建者不对间接、附带、特殊、后果性或惩罚性损害负责，也不对数据、利润、收入或商业机会损失负责。",
            }}
          />
        </section>

        <section>
          <h2>
            <I18nText t={{ en: "9. Contact", zh: "9. 联系方式" }} />
          </h2>
          <p>
            <I18nText
              t={{
                en: "Questions about these terms can be sent to ",
                zh: "如对这些条款有疑问，请发送邮件至 ",
              }}
            />
            <a className="privacy-email" href="mailto:ilikexff@gmail.com">
              ilikexff@gmail.com
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
