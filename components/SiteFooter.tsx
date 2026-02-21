import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'
import { footerLinks } from '@/lib/data'

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/60">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.7),transparent_55%)] ring-1 ring-white/10" />
              <span className="text-lg font-semibold tracking-wide">Mentus</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              让 AI 真正为你所用，把时间还给你。本地执行，云端同步，多端协同。
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/mentus"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-zinc-400 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/mentusai"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-zinc-400 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@mentus.ai"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-zinc-400 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-zinc-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 lg:flex-row lg:items-center lg:justify-between">
          <div>
            © {new Date().getFullYear()} Mentus. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-zinc-300">
              隐私
            </Link>
            <Link href="/terms" className="transition hover:text-zinc-300">
              条款
            </Link>
            <span>Built with a calm, human-first default.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

