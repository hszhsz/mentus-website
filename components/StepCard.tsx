interface StepCardProps {
  index: string
  title: string
  desc: string
  className?: string
}

export default function StepCard({ index, title, desc, className = '' }: StepCardProps) {
  return (
    <div className={`flex items-start gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 ${className}`}>
      <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10">
        {index}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-zinc-300/80">{desc}</div>
      </div>
    </div>
  )
}
