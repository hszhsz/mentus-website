'use client'

import Link from 'next/link'
import { useState, type ChangeEvent, type FormEvent } from 'react'

export default function ForgotPasswordPage() {
  const [account, setAccount] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitted')
  }

  return (
    <div className="container py-12 sm:py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <Link href="/" className="text-sm font-semibold tracking-wide text-white">
              Mentus
            </Link>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white">找回密码</h1>
            <p className="mt-2 text-sm text-zinc-300/80">
              输入邮箱或手机号，我们会引导你完成重置。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="text-xs text-zinc-400">邮箱 / 手机号</label>
              <input
                value={account}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAccount(e.target.value)}
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-primary-500/40"
                placeholder="请输入邮箱或手机号"
                autoComplete="username"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              继续
            </button>
          </form>

          {status === 'submitted' ? (
            <div className="mt-4 rounded-xl bg-white/5 p-4 text-xs text-zinc-300/80 ring-1 ring-white/10">
              当前为官网演示：找回密码将对接云端账号系统。你也可以直接{' '}
              <a
                className="text-primary-500 hover:text-primary-400"
                href="mailto:contact@mentus.ai"
              >
                联系我们
              </a>
              。
            </div>
          ) : null}

          <div className="mt-6 text-center text-xs text-zinc-300/80">
            <Link href="/login" className="text-primary-500 hover:text-primary-400">
              返回登录
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

