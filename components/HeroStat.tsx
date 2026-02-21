interface HeroStatProps {
  title: string
  desc: string
  className?: string
}

export default function HeroStat({ title, desc, className = '' }: HeroStatProps) {
  return (
    <div className={`glass rounded-2xl p-6 ${className}`}>
      <div className="text-sm font-medium text-white">{title}</div>
      <div className="mt-2 text-sm text-zinc-300/80">{desc}</div>
    </div>
  )
}
