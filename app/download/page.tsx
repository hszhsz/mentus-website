import type { Metadata } from 'next'
import { Apple, Check, Download, Monitor, Terminal } from 'lucide-react'

import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: '下载 Mentus',
  description: '下载 Mentus 桌面端，支持 Windows、macOS 和 Linux。3 分钟完成安装，开始体验 AI 助理。',
}

const downloadOptions = [
  {
    platform: 'Windows',
    icon: Monitor,
    version: 'v0.1.0',
    size: '85 MB',
    requirements: 'Windows 10 及以上',
    architectures: [
      { name: 'x64', url: '#' },
      { name: 'ARM64', url: '#' },
    ],
    primary: true,
  },
  {
    platform: 'macOS',
    icon: Apple,
    version: 'v0.1.0',
    size: '92 MB',
    requirements: 'macOS 12 及以上',
    architectures: [
      { name: 'Intel', url: '#' },
      { name: 'Apple Silicon', url: '#' },
    ],
    primary: true,
  },
  {
    platform: 'Linux',
    icon: Terminal,
    version: 'v0.1.0',
    size: '78 MB',
    requirements: 'Ubuntu 20.04 及以上',
    architectures: [
      { name: 'AppImage', url: '#' },
      { name: 'deb', url: '#' },
    ],
    primary: false,
  },
]

const installSteps = [
  {
    step: 1,
    title: '下载安装包',
    desc: '选择适合你系统的版本下载',
  },
  {
    step: 2,
    title: '运行安装程序',
    desc: '按照安装向导完成初始化',
  },
  {
    step: 3,
    title: '登录账号',
    desc: '使用已有账号或创建新账号',
  },
]

const features = [
  '本地执行，隐私可控',
  '云端同步（可选）',
  '10+ 免费 Skill',
  '自动更新',
  '多端协同支持',
  '社区支持',
]

export default function DownloadPage() {
  return (
    <PageShell
      title="下载 Mentus"
      subtitle="桌面端优先，支持 Windows、macOS 和 Linux。安装向导 ≤ 3 步完成。"
    >
      {/* 下载选项 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {downloadOptions.map((option) => (
          <DownloadCard key={option.platform} option={option} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* 安装步骤 */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500/20 ring-1 ring-primary-500/30">
              <Download className="h-5 w-5 text-primary-500" />
            </div>
            <h2 className="text-lg font-semibold text-white">安装步骤</h2>
          </div>

          <div className="mt-6 space-y-4">
            {installSteps.map((item, index) => (
              <div
                key={item.step}
                className="flex items-start gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 功能清单 */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30">
              <Check className="h-5 w-5 text-emerald-500" />
            </div>
            <h2 className="text-lg font-semibold text-white">包含功能</h2>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-zinc-300/90"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <span className="text-xs text-emerald-500">✓</span>
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-sm text-zinc-300/80">
              <Monitor className="h-4 w-4 text-primary-500" />
              <span>系统要求：4GB 内存，500MB 可用磁盘空间</span>
            </div>
          </div>
        </div>
      </div>

      {/* CLI 安装 */}
      <div className="mt-6 glass rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-500/20 ring-1 ring-zinc-500/30">
            <Terminal className="h-5 w-5 text-zinc-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">命令行安装</h2>
            <p className="text-sm text-zinc-400">开发者推荐使用命令行安装</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-lg bg-zinc-900 p-4">
            <code className="text-sm text-zinc-300">
              <span className="text-zinc-500"># macOS / Linux</span>
              <br />
              <span className="text-emerald-400">curl</span> -fsSL
              https://mentus.ai/install.sh | <span className="text-emerald-400">bash</span>
            </code>
          </div>
          <div className="rounded-lg bg-zinc-900 p-4">
            <code className="text-sm text-zinc-300">
              <span className="text-zinc-500"># Windows (PowerShell)</span>
              <br />
              <span className="text-emerald-400">irm</span>{' '}
              https://mentus.ai/install.ps1 | <span className="text-emerald-400">iex</span>
            </code>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

function DownloadCard({
  option,
}: {
  option: {
    platform: string
    icon: React.ComponentType<{ className?: string }>
    version: string
    size: string
    requirements: string
    architectures: { name: string; url: string }[]
    primary: boolean
  }
}) {
  const Icon = option.icon

  return (
    <div
      className={`rounded-2xl p-6 ring-1 ${
        option.primary
          ? 'bg-primary-600/10 ring-primary-500/30'
          : 'glass ring-white/10'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl ring-1 ${
              option.primary
                ? 'bg-primary-500/20 ring-primary-500/30'
                : 'bg-white/5 ring-white/10'
            }`}
          >
            <Icon
              className={`h-6 w-6 ${option.primary ? 'text-primary-500' : 'text-zinc-400'}`}
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">{option.platform}</h3>
            <p className="text-xs text-zinc-400">
              {option.version} · {option.size}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-400">{option.requirements}</p>

      <div className="mt-4 space-y-2">
        {option.architectures.map((arch) => (
          <a
            key={arch.name}
            href={arch.url}
            className={`flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium transition ${
              option.primary
                ? 'bg-primary-600 text-white hover:bg-primary-500'
                : 'bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10'
            }`}
          >
            下载 {arch.name} 版本
            <Download className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  )
}
