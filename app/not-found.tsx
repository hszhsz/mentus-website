import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md text-center">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <div className="text-8xl font-bold text-zinc-800">404</div>

          <h1 className="mt-6 text-2xl font-semibold text-white">
            页面未找到
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            抱歉，你访问的页面不存在或已被移除。
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </Link>
            <Link
              href="/skills"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
              浏览 Skill
            </Link>
          </div>

          <div className="mt-8 text-xs text-zinc-500">
            如果你认为这是一个错误，请
            <a
              href="mailto:contact@mentus.ai"
              className="text-primary-500 hover:text-primary-400"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
