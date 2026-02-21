import type { Metadata } from 'next'

import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: '联系我们',
}

export default function ContactPage() {
  return (
    <PageShell
      title="联系我们"
      subtitle="如果你愿意把真实场景告诉我们，我们会把它做成真正好用的能力。"
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="text-sm font-semibold text-white">联系渠道</div>
          <div className="mt-4 space-y-4 text-sm text-zinc-300/80">
            <div>
              <div className="text-xs text-zinc-400">邮箱</div>
              <a
                className="mt-1 inline-flex items-center gap-2 text-primary-500 hover:text-primary-400"
                href="mailto:contact@mentus.ai"
              >
                contact@mentus.ai
              </a>
            </div>
            <div>
              <div className="text-xs text-zinc-400">反馈期望</div>
              <div className="mt-1">
                我们通常会在 24 小时内回复你的邮件（工作日优先）。
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-400">建议包含的信息</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>你的使用场景与目标</li>
                <li>希望自动化的步骤</li>
                <li>你愿意接受的权限边界</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 lg:col-span-3">
          <div className="text-sm font-semibold text-white">快速留言</div>
          <p className="mt-2 text-sm text-zinc-300/80">
            该表单会打开你的邮件客户端发送，不会在网页端保存。
          </p>
          <form
            className="mt-6 space-y-4"
            action="mailto:contact@mentus.ai"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="text-xs text-zinc-400">你的称呼</label>
              <input
                name="name"
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-primary-500/40"
                placeholder="例如：Shaozhong"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-400">主题</label>
              <input
                name="subject"
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-primary-500/40"
                placeholder="例如：桌面端下载与安装体验建议"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-400">内容</label>
              <textarea
                name="message"
                rows={6}
                className="mt-2 w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-primary-500/40"
                placeholder="请描述你的场景、目标、以及你期待 Mentus 做到的事情。"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              打开邮件发送
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  )
}

