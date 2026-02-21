import type { Metadata } from 'next'
import {
  Brain,
  Cloud,
  Hand,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'

import PageShell from '@/components/PageShell'
import { values, milestones } from '@/lib/data'

export const metadata: Metadata = {
  title: '关于 Mentus',
  description: '了解 Mentus 的故事、使命和团队。我们相信 AI 应该让每个人都能轻松使用。',
}

export default function AboutPage() {
  return (
    <PageShell
      title="关于 Mentus"
      subtitle="从开源到产品，我们想让每个人都能拥有一个真正好用的 AI 助理。"
    >
      {/* 品牌故事 */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-500/20 ring-1 ring-primary-500/30">
            <Sparkles className="h-6 w-6 text-primary-500" />
          </div>
          <h2 className="text-xl font-semibold text-white">品牌故事</h2>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300/90">
          <p>
            Mentus 源自「Ment（心智、大脑）」与「Manus（手）」的融合，
            精准传递产品「脑 + 手」的核心定位——不仅能像人类大脑一样思考、
            分析、决策，还能像人类双手一样落地执行、处理事务。
          </p>
          <p>
            我们基于 OpenClaw 开源内核进行产品化改造，弥补开源项目的产品短板，
            打造「普通人能用、职场人好用」的个人 AI 助理。
            在 Mentus，我们相信 AI 不应该只是回答问题，更应该帮你把事情做完。
          </p>
        </div>
      </div>

      {/* 核心价值 */}
      <div className="mt-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30">
            <Target className="h-5 w-5 text-emerald-500" />
          </div>
          <h2 className="text-lg font-semibold text-white">我们的价值观</h2>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="glass rounded-2xl p-5 transition hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <value.icon className="h-5 w-5 text-primary-500" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {value.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 核心能力 */}
      <div className="mt-8 glass rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-500/30">
            <Zap className="h-5 w-5 text-indigo-500" />
          </div>
          <h2 className="text-lg font-semibold text-white">核心能力</h2>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500/20 ring-1 ring-primary-500/30">
              <Brain className="h-5 w-5 text-primary-500" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">智慧大脑</h3>
            <p className="mt-2 text-xs text-zinc-400">
              理解目标、拆解任务、规划步骤，持续自检优化
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30">
              <Hand className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">动手执行</h3>
            <p className="mt-2 text-xs text-zinc-400">
              不止给建议，真正把事情做完，把结果交给你
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-500/30">
              <Cloud className="h-5 w-5 text-indigo-500" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">端云协同</h3>
            <p className="mt-2 text-xs text-zinc-400">
              本地执行保护隐私，云端只做同步，多端一致
            </p>
          </div>
        </div>
      </div>

      {/* 发展路线图 */}
      <div className="mt-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/20 ring-1 ring-amber-500/30">
            <Target className="h-5 w-5 text-amber-500" />
          </div>
          <h2 className="text-lg font-semibold text-white">发展路线图</h2>
        </div>

        <div className="mt-6 space-y-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.date}
              className="flex flex-col gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3 sm:w-32">
                <div
                  className={`h-3 w-3 rounded-full ${
                    milestone.status === '进行中'
                      ? 'bg-emerald-500'
                      : 'bg-zinc-600'
                  }`}
                />
                <span className="text-sm font-medium text-white">
                  {milestone.date}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-semibold text-white">
                    {milestone.title}
                  </h3>
                  {milestone.status === '进行中' && (
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400 ring-1 ring-emerald-500/30">
                      进行中
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-400">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 联系方式 */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary-600/20 to-indigo-600/20 p-6 ring-1 ring-primary-500/20">
        <h2 className="text-lg font-semibold text-white">加入我们</h2>
        <p className="mt-2 text-sm text-zinc-300/80">
          我们正在寻找对 AI 充满热情的伙伴。如果你也想打造下一代个人 AI 助理，
          欢迎发送简历到{' '}
          <a
            href="mailto:career@mentus.ai"
            className="text-primary-500 hover:text-primary-400"
          >
            career@mentus.ai
          </a>
          。
        </p>
      </div>
    </PageShell>
  )
}
