import type { Metadata } from 'next'
import { Check, HelpCircle } from 'lucide-react'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import PricingCard from '@/components/PricingCard'
import { pricingPlans, faqs } from '@/lib/data'

export const metadata: Metadata = {
  title: '定价方案',
  description: '选择适合你的 Mentus 方案。免费版、基础版、高级版，满足不同用户需求。',
}

export default function PricingPage() {
  return (
    <PageShell
      title="定价方案"
      subtitle="先用免费版感受「脑 + 手」，再按需升级。随时可升可降，没有隐藏费用。"
    >
      {/* 定价卡片 */}
      <div className="grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      {/* 对比表格 */}
      <div className="mt-10 overflow-x-auto">
        <h2 className="mb-6 text-lg font-semibold text-white">功能对比</h2>
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 text-left font-medium text-zinc-400">功能</th>
              <th className="py-3 text-center font-medium text-zinc-400">免费版</th>
              <th className="py-3 text-center font-medium text-primary-500">基础版</th>
              <th className="py-3 text-center font-medium text-zinc-400">高级版</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            <tr className="border-b border-white/5">
              <td className="py-3">基础 Skill</td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">本地执行</td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">云端同步</td>
              <td className="py-3 text-center">
                <span className="text-zinc-600">—</span>
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">多端协同</td>
              <td className="py-3 text-center">
                <span className="text-zinc-600">—</span>
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto h-4 w-4 text-emerald-500" />
              </td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">付费 Skill 折扣</td>
              <td className="py-3 text-center">
                <span className="text-zinc-600">—</span>
              </td>
              <td className="py-3 text-center text-primary-500">8 折</td>
              <td className="py-3 text-center text-primary-500">6 折</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">模型额度</td>
              <td className="py-3 text-center">
                <span className="text-zinc-600">—</span>
              </td>
              <td className="py-3 text-center">基础额度</td>
              <td className="py-3 text-center">大额额度</td>
            </tr>
            <tr>
              <td className="py-3">技术支持</td>
              <td className="py-3 text-center">社区</td>
              <td className="py-3 text-center">邮件</td>
              <td className="py-3 text-center">优先</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 常见问题 */}
      <div className="mt-10">
        <div className="flex items-center gap-3">
          <HelpCircle className="h-5 w-5 text-primary-500" />
          <h2 className="text-lg font-semibold text-white">常见问题</h2>
        </div>

        <div className="mt-6 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-zinc-300/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 联系销售 */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary-600/20 to-indigo-600/20 p-6 ring-1 ring-primary-500/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">企业版定制</h3>
            <p className="mt-1 text-sm text-zinc-300/80">
              需要团队协作、定制化 Skill 或专属部署？联系我们获取企业版方案。
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-500"
          >
            联系销售
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
