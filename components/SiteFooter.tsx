import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/60">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="text-lg font-semibold tracking-wide">Mentus</div>
            <div className="muted text-sm">让 AI 真正为你所用，把时间还给你。</div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-zinc-200/90 md:flex md:items-center md:gap-8">
            <Link href="/privacy" className="transition hover:text-white">
              隐私政策
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              服务条款
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              联系我们
            </Link>
            <a
              href="mailto:contact@mentus.ai"
              className="transition hover:text-white"
            >
              邮件
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Mentus. All rights reserved.</div>
          <div className="muted">Built with a calm, human-first default.</div>
        </div>
      </div>
    </footer>
  )
}

