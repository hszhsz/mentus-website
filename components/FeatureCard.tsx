import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div className={`glass group rounded-2xl p-6 transition hover:bg-white/8 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
          {icon}
        </div>
        <div className="text-sm font-semibold text-white">{title}</div>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-zinc-300/80">{description}</div>
    </div>
  )
}
