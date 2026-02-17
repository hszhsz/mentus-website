import type { Metadata } from 'next'
import { Check, HelpCircle, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'

import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: '定价方案',
  description: '选择适合你的 Mentus 方案。免费版、基础版、高级版，满足不同用户需求。',
}

const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '',
    description: '基础功能体验',
    icon: Zap,
    features: [
      '基础免费 Skill（10个）',
      '本地执行能力',
      '纯本地模式',
      '社区支持',
    ],
    limitations: ['无云端同步', '无多端协同', '无付费 Skill 使用'],
    cta: '免费开始',
    href: '/download',
    highlighted: false,
  },
  {
    name: '基础版',
    price: '¥29',
    period: '/月',
    description: '适合个人用户',
    icon: Sparkles,
    features: [
      '多端协同',
      '云端同步',
      '所有免费 Skill',
      '付费 Skill 8 折',
      '基础模型额度',
      '邮件支持',
    ],
    limitations: [],
    cta: '升级基础版',
    href: '/contact',
    highlighted: true,
    badge: '推荐',
  },
  {
    name: '高级版',
    price: '¥99',
    period: '/月',
    description: '适合专业用户',
    icon: Zap,
    features: [
      '基础版所有权益',
      '更高模型额度',
      '每月解锁部分付费 Skill',
      '付费 Skill 6 折',
      '优先技术支持',
      '定制化 Skill 预约',
    ],
    limitations: [],
    cta: '联系购买',
    href: '/contact',
    highlighted: false,
  },
]

const faqs = [
  {
    question: '免费版和付费版有什么区别？',
    answer:
      '免费版仅支持本地执行和基础 Skill，不包含云端同步和多端协同功能。付费版支持云端同步、多端协同，并包含模型额度和 Skill 折扣。',
  },
  {
    question: '可以随时取消订阅吗？',
    answer:
      '是的，你可以随时取消订阅。取消后，你的账号将在当前计费周期结束后降级为免费版，已购买的付费 Skill 仍可继续使用。',
  },
  {
    question: 'Skill 是如何收费的？',
    answer:
      'Skill 分为免费和付费两种。付费 Skill 支持单次付费永久使用、按调用次数付费和按月订阅付费三种模式，价格从 10-200 元不等。付费会员可享受折扣。',
  },
  {
    question: '模型额度用完了怎么办？',
    answer:
      '你可以单独购买模型额度包，或升级到更高级别的会员计划。模型额度用完后，你仍可使用本地执行功能。',
  },
  {
    question: '支持哪些支付方式？',
    answer:
      '我们支持微信支付、支付宝和银行卡支付。所有支付均通过安全的第三方支付渠道完成。',
  },
]

export default function PricingPage() {
  return (
    <PageShell
      title="定价方案"
      subtitle="先用免费版感受「脑 + 手」，再按需升级。随时可升可降，没有隐藏费用。"
    >
      {/* 定价卡片 */}
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
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

function PricingCard({
  plan,
}: {
  plan: {
    name: string
    price: string
    period: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    features: string[]
    limitations: string[]
    cta: string
    href: string
    highlighted: boolean
    badge?: string
  }
}) {
  const Icon = plan.icon

  return (
    <div
      className={`rounded-2xl p-6 ring-1 transition ${
        plan.highlighted
          ? 'bg-primary-600/20 ring-primary-500/40 shadow-[0_0_0_1px_rgba(14,165,233,0.18),0_18px_80px_rgba(2,132,199,0.12)]'
          : 'glass hover:bg-white/8'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ${
              plan.highlighted
                ? 'bg-primary-500/20 ring-primary-500/30'
                : 'bg-white/5 ring-white/10'
            }`}
          >
            <Icon
              className={`h-5 w-5 ${
                plan.highlighted ? 'text-primary-500' : 'text-zinc-400'
              }`}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">
                {plan.name}
              </span>
              {plan.badge && (
                <span className="rounded-full bg-primary-500/20 px-2 py-0.5 text-xs text-primary-400 ring-1 ring-primary-500/30">
                  {plan.badge}
                </span>
              )}
            </div>
            <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
              {plan.price}
              <span className="ml-1 text-base font-normal text-zinc-200/80">
                {plan.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-300/80">{plan.description}</p>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-zinc-200/90"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <span className="text-xs text-emerald-500">✓</span>
            </span>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
        {plan.limitations.map((limitation) => (
          <li
            key={limitation}
            className="flex items-start gap-2 text-sm text-zinc-500"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <span className="text-xs text-zinc-600">—</span>
            </span>
            <span className="leading-relaxed">{limitation}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.href}
        className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium ring-1 transition ${
          plan.highlighted
            ? 'bg-primary-600 text-white ring-primary-500/50 hover:bg-primary-500'
            : 'bg-white/5 text-white ring-white/10 hover:bg-white/10'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  )
}
