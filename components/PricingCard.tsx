import Link from 'next/link'
import type { PricingPlan } from '@/types'

interface PricingCardProps {
  plan: PricingPlan
  className?: string
}

export default function PricingCard({ plan, className = '' }: PricingCardProps) {
  const Icon = plan.icon

  return (
    <div
      className={`rounded-2xl p-6 ring-1 transition ${
        plan.highlighted
          ? 'bg-primary-600/20 ring-primary-500/40 shadow-[0_0_0_1px_rgba(14,165,233,0.18),0_18px_80px_rgba(2,132,199,0.12)]'
          : 'glass hover:bg-white/8'
      } ${className}`}
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
