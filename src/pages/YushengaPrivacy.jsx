import React from "react";
import "../styles/home.css";
import "../styles/privacy.css";

export default function YushengaPrivacy() {
  return (
    <main className="privacy-main">
      <h1>余生啊隐私政策</h1>
      <p className="updated">更新日期：2026-06-16</p>

      <section>
        <p>
          余生啊尊重并保护用户隐私。本隐私政策说明余生啊如何处理你的信息。
        </p>
      </section>

      <section>
        <h2>数据收集</h2>
        <p>余生啊不收集任何用户数据。</p>
        <p>
          你在 App 中设置的当前年龄、预期寿命、默认显示单位、通知开关和短语显示偏好，只保存在你的设备本地，用于 App 和 Widget 正常显示。
        </p>
        <p>
          这些数据不会上传到服务器，不会用于分析，不会用于广告，也不会分享给第三方。
        </p>
      </section>

      <section>
        <h2>账号</h2>
        <p>余生啊不提供账号系统，也不要求注册或登录。</p>
      </section>

      <section>
        <h2>网络</h2>
        <p>
          余生啊的核心功能不依赖网络服务。App 不会将你的设置或使用情况发送到开发者服务器。
        </p>
      </section>

      <section>
        <h2>通知</h2>
        <p>
          余生啊提供可选的每周通知功能，默认关闭。只有在你主动开启并授权通知后，系统才会发送本地通知。
        </p>
        <p>你可以随时在 App 设置或 iOS 系统设置中关闭通知。</p>
      </section>

      <section>
        <h2>Widget</h2>
        <p>
          余生啊使用 App Group 在主 App 和 Widget 之间共享本地设置，以便 Widget 能显示与你在 App 中一致的数字。共享范围仅限你的设备本地。
        </p>
      </section>

      <section>
        <h2>付费</h2>
        <p>余生啊为付费买断 App，不包含广告、订阅或内购。</p>
      </section>

      <section>
        <h2>联系</h2>
        <p>如有问题，可以通过以下网站联系开发者：</p>
        <p>
          <a className="privacy-email" href="https://xuyi.dev">
            https://xuyi.dev
          </a>
        </p>
      </section>
    </main>
  );
}
