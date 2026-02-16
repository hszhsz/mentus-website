import type { Metadata } from 'next'

import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: '隐私政策',
}

export default function PrivacyPage() {
  return (
    <PageShell
      title="隐私政策"
      subtitle="我们把隐私当作默认配置：本地执行优先，云端只做你选择的同步。"
    >
      <div className="glass space-y-8 rounded-2xl p-6 text-sm leading-relaxed text-zinc-200/90 sm:p-8">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">1. 我们收集什么</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300/80">
            <li>账号基础信息：用于登录与账号安全（邮箱/手机号等）。</li>
            <li>结构化同步数据：例如你的偏好设置、已安装 Skill 列表、任务状态等。</li>
            <li>必要的服务日志：用于安全审计与故障排查（尽量最小化）。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">2. 我们不会同步什么</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300/80">
            <li>本地文件内容、文档原文等。</li>
            <li>屏幕内容（截图/录屏）。</li>
            <li>敏感数据：密码、密钥、API Token、银行卡/身份证等。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">3. 同步范围由你决定</h2>
          <p className="text-zinc-300/80">
            你可以在设置中选择同步范围：仅同步配置 / 同步配置+可选记忆索引 / 纯本地模式。
            关闭云协同后，所有数据仅存本地。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">4. 安全措施</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300/80">
            <li>传输加密：HTTPS/WSS。</li>
            <li>云端加密存储：对核心数据进行加密保护。</li>
            <li>账号安全：密码采用安全哈希策略存储（如 bcrypt）。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">5. 数据删除</h2>
          <p className="text-zinc-300/80">
            你可以申请注销账号。注销后云端数据将按规则清除，端侧数据保留在你的设备上。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">6. 联系我们</h2>
          <p className="text-zinc-300/80">
            如你对隐私政策有任何疑问，请通过{' '}
            <a className="text-primary-500 hover:text-primary-400" href="mailto:contact@mentus.ai">
              contact@mentus.ai
            </a>{' '}
            联系我们。
          </p>
          <p className="text-xs text-zinc-400">生效日期：2026-02-16</p>
        </section>
      </div>
    </PageShell>
  )
}

