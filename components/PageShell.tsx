import type { ReactNode } from 'react'

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="container py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-sm leading-relaxed text-zinc-300/80 sm:text-base">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  )
}

