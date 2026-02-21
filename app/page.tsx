import Link from 'next/link'
import {
  Brain,
  Cloud,
  Cpu,
  Hand,
  Lock,
  Shield,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react'

import FeatureCard from '@/components/FeatureCard'
import HeroStat from '@/components/HeroStat'
import StepCard from '@/components/StepCard'
import TrustCard from '@/components/TrustCard'
import PricingCard from '@/components/PricingCard'
import { pricingPlans } from '@/lib/data'

export default function Home() {
  // 首页只展示前3个定价方案
  const homePricingPlans = pricingPlans.slice(0, 3)

  return (
    <div>
      <section className="overflow-hidden py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-200 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4 text-primary-500" />
              脑 + 手：从理解到执行
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              让 AI 有脑，也有手
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300/90 sm:text-lg">
              Mentus 基于 OpenClaw 内核，把「思考」与「执行」合在一起：你只需说清楚目标，
              它负责拆解、规划并动手完成，把时间还给你。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#download"
                className="w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-primary-600/20 transition hover:bg-primary-500 sm:w-auto"
              >
                免费下载
              </Link>
              <Link
                href="/#features"
                className="w-full rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 sm:w-auto"
              >
                了解功能
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-zinc-300/80">
              <div className="inline-flex items-center gap-2">
                <Cpu className="h-4 w-4 text-zinc-300/70" />
                本地执行 · 低门槛
              </div>
              <div className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-zinc-300/70" />
                隐私优先 · 可控同步
              </div>
              <div className="inline-flex items-center gap-2">
                <Cloud className="h-4 w-4 text-zinc-300/70" />
                端云协同 · 多端一致
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <HeroStat title="3 分钟上手" desc="安装 → 登录 → 开始使用" />
            <HeroStat title="≤ 3 秒同步" desc="配置/Skill 列表/任务状态" />
            <HeroStat title="权限可见" desc="Skill 安装前明确说明" />
            <HeroStat title="可纯本地" desc="完全不依赖云端协同" />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">核心能力</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300/80 sm:text-base">
              用最少的操作，把你的意图变成可执行的步骤；用最明确的边界，让你安心把事情交给它。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Brain className="h-5 w-5 text-primary-500" />}
              title="智慧大脑"
              description="理解目标、拆解任务、规划步骤，并持续自检优化。"
            />
            <FeatureCard
              icon={<Hand className="h-5 w-5 text-primary-500" />}
              title="动手执行"
              description="不止给建议：它会真正把事情做完，并把结果交到你手里。"
            />
            <FeatureCard
              icon={<Cloud className="h-5 w-5 text-primary-500" />}
              title="端云协同"
              description="本地执行守住隐私，云端只做同步，多端体验一致。"
            />
            <FeatureCard
              icon={<Store className="h-5 w-5 text-primary-500" />}
              title="Skill 生态"
              description="日常工具 + 职业技能的组合，让能力随需求生长。"
            />
            <FeatureCard
              icon={<Lock className="h-5 w-5 text-primary-500" />}
              title="隐私优先"
              description="结构化数据可控同步，不同步本地文件、屏幕内容与敏感信息。"
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5 text-primary-500" />}
              title="极速体验"
              description="交互响应清晰，执行状态可见，失败可恢复。"
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">选择适合你的方案</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300/80 sm:text-base">
              先用免费版感受「脑 + 手」，再按协同与额度升级。价格为示例，可随产品策略调整。
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {homePricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">开始体验 Mentus</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300/80 sm:text-base">
                桌面端优先：Windows / macOS / Linux。安装向导 ≤ 3 步完成。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
                >
                  下载 Windows 版
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  下载 macOS 版
                </a>
              </div>
              <div className="mt-4 text-xs text-zinc-400">
                Linux 版本即将上线，先从 Windows/macOS 开始。
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="text-sm font-medium text-white">上手路径</div>
              <div className="mt-4 grid gap-4">
                <StepCard index="01" title="安装" desc="下载并完成本地初始化" />
                <StepCard index="02" title="登录" desc="一个账号打通多端协同" />
                <StepCard index="03" title="开始" desc="用自然语言发出指令" />
              </div>
              <div className="mt-6 rounded-xl bg-white/5 p-4 text-xs text-zinc-300/80 ring-1 ring-white/10">
                提示：你可以先用免费 Skill 体验，再按需开启云同步范围。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="py-20 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">信任是默认配置</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300/80 sm:text-base">
              你永远能知道它要访问什么、同步什么、以及不做什么。
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <TrustCard
              title="云端只做同步"
              desc="只同步结构化数据：配置、Skill 列表、任务状态与可选记忆索引。"
            />
            <TrustCard
              title="敏感数据不上传"
              desc="不上传本地文件内容、屏幕内容、密码/密钥/API Token 等敏感信息。"
            />
            <TrustCard
              title="可选择纯本地"
              desc="你可以关闭云协同，所有数据仅存本地，仍可使用基础功能。"
            />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/privacy"
              className="rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              阅读隐私政策
            </Link>
            <Link
              href="/terms"
              className="rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              查看服务条款
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
