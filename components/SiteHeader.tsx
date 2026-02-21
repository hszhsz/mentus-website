'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { navItems } from '@/lib/data'

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.7),transparent_55%)] ring-1 ring-white/10" />
          <span className="text-sm font-semibold tracking-wide">Mentus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm text-zinc-200/90 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-500"
            >
              <Download className="h-4 w-4" />
              下载
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/10 transition hover:bg-white/15"
            >
              登录
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 lg:hidden"
          aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">
            {mobileMenuOpen ? '关闭' : '菜单'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-[65px] border-b border-white/10 bg-zinc-950/95 backdrop-blur lg:hidden">
          <div className="container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-200/90 ring-1 ring-transparent transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Link
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-3 py-2.5 text-sm text-white transition hover:bg-primary-500"
              >
                <Download className="h-4 w-4" />
                下载
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg bg-white/10 px-3 py-2.5 text-center text-sm text-white ring-1 ring-white/10 transition hover:bg-white/15"
              >
                登录
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

