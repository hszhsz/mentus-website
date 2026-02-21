import type { Metadata } from 'next'

import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: '服务条款',
}

export default function TermsPage() {
  return (
    <PageShell
      title="服务条款"
      subtitle="以清晰与克制为前提：我们定义边界，也尊重你的选择。"
    >
      <div className="glass space-y-8 rounded-2xl p-6 text-sm leading-relaxed text-zinc-200/90 sm:p-8">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">1. 服务范围</h2>
          <p className="text-zinc-300/80">
            Mentus 提供官网信息展示、软件下载入口与账号登录引导。产品能力以你实际使用的客户端与云端服务为准。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">2. 账号与安全</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300/80">
            <li>你应妥善保管账号凭证，避免泄露。</li>
            <li>如发现异常登录或安全风险，请及时联系我们。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">3. 付费与订阅</h2>
          <p className="text-zinc-300/80">
            付费会员与付费 Skill 的具体价格、权益与计费规则，将在产品内与相关页面清晰展示。你购买前可查看完整说明。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">4. 免责声明</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300/80">
            <li>Mentus 输出与执行结果仅供参考，你应基于自身判断承担最终决策责任。</li>
            <li>由于网络、系统环境、第三方服务等不可控因素造成的中断或延迟，我们将尽力恢复但不承担不可抗力责任。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">5. 条款更新</h2>
          <p className="text-zinc-300/80">
            我们可能会更新条款以反映产品变化与合规要求。更新后我们会在页面公布最新版本，并标注生效日期。
          </p>
          <p className="text-xs text-zinc-400">生效日期：2026-02-16</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-white">6. 联系我们</h2>
          <p className="text-zinc-300/80">
            如你对条款有疑问，请通过{' '}
            <a className="text-primary-500 hover:text-primary-400" href="mailto:contact@mentus.ai">
              contact@mentus.ai
            </a>{' '}
            联系我们。
          </p>
        </section>
      </div>
    </PageShell>
  )
}

