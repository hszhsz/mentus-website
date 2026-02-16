import Link from 'next/link'

const navItems = [
  { href: '/#features', label: '功能' },
  { href: '/#pricing', label: '定价' },
  { href: '/#download', label: '下载' },
  { href: '/#trust', label: '信任' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.7),transparent_55%)] ring-1 ring-white/10" />
          <span className="text-sm font-semibold tracking-wide">Mentus</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-zinc-200/90 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/10 transition hover:bg-white/15"
          >
            登录
          </Link>
        </nav>

        <details className="group md:hidden">
          <summary className="list-none rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10">
            菜单
          </summary>
          <div className="absolute left-0 right-0 top-[64px] border-b border-white/10 bg-zinc-950/95 backdrop-blur">
            <div className="container flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-200/90 ring-1 ring-transparent transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="mt-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/10"
              >
                登录
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  )
}

