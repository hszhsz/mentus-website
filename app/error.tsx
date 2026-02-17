'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md">
        <div className="glass rounded-2xl p-6 sm:p-8 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-500/20 ring-1 ring-red-500/30">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>

          <h1 className="mt-6 text-xl font-semibold text-white">
            出错了
          </h1>
          <p className="mt-2 text-sm text-zinc-300/80">
            抱歉，页面加载时出现问题。请尝试刷新页面或返回首页。
          </p>

          {error.digest && (
            <p className="mt-4 text-xs text-zinc-500">
              错误代码: {error.digest}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              <RefreshCcw className="h-4 w-4" />
              重试
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Home className="h-4 w-4" />
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
