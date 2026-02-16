'use client'

import Link from 'next/link'
import { useState, type ChangeEvent, type FormEvent } from 'react'

export default function RegisterPage() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
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
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white">创建账号</h1>
            <p className="mt-2 text-sm text-zinc-300/80">
              一个账号，打通桌面端与云端协同。
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

            <div>
              <label className="text-xs text-zinc-400">设置密码</label>
              <input
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-primary-500/40"
                placeholder="请输入密码"
                autoComplete="new-password"
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-zinc-300/80">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-white/10 bg-white/5" />
              <span>
                我已阅读并同意{' '}
                <Link href="/terms" className="text-primary-500 hover:text-primary-400">
                  服务条款
                </Link>{' '}
                与{' '}
                <Link href="/privacy" className="text-primary-500 hover:text-primary-400">
                  隐私政策
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              注册
            </button>
          </form>

          {status === 'submitted' ? (
            <div className="mt-4 rounded-xl bg-white/5 p-4 text-xs text-zinc-300/80 ring-1 ring-white/10">
              当前为官网演示：注册将对接云端账号系统。你可以先体验本地执行与下载流程。
            </div>
          ) : null}

          <div className="mt-6 text-center text-xs text-zinc-300/80">
            已有账号？{' '}
            <Link href="/login" className="text-primary-500 hover:text-primary-400">
              去登录
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

