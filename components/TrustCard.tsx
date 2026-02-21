interface TrustCardProps {
  title: string
  desc: string
  className?: string
}

export default function TrustCard({ title, desc, className = '' }: TrustCardProps) {
  return (
    <div className={`glass rounded-2xl p-6 ${className}`}>
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-zinc-300/80">{desc}</div>
    </div>
  )
}
