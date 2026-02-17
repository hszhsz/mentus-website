import type { Metadata } from 'next'
import {
  Brain,
  Calendar,
  Cloud,
  FileText,
  Github,
  Globe,
  LayoutGrid,
  Lock,
  Music,
  Search,
  Shield,
  Sparkles,
  Sun,
  Type,
} from 'lucide-react'

import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Skill 市场',
  description: '探索 Mentus Skill 生态：日常工具 + 职业技能，让 AI 能力随需求生长。',
}

const skillCategories = [
  { id: 'all', name: '全部', icon: LayoutGrid },
  { id: 'daily', name: '日常通用', icon: Sun },
  { id: 'career', name: '职业垂直', icon: Brain },
  { id: 'tool', name: '工具辅助', icon: Shield },
]

const skills = [
  {
    id: 'file-manager',
    name: '文件管理',
    description: '文件整理、搜索、分类，让文件管理更高效',
    category: 'daily',
    icon: FileText,
    price: 0,
    downloads: 1205,
    rating: 4.8,
  },
  {
    id: 'calendar',
    name: '日程管理',
    description: '日程创建、提醒设置、云端日历同步',
    category: 'daily',
    icon: Calendar,
    price: 0,
    downloads: 982,
    rating: 4.7,
  },
  {
    id: 'weather',
    name: '天气查询',
    description: '实时天气查询、天气预报、出行建议',
    category: 'daily',
    icon: Sun,
    price: 0,
    downloads: 756,
    rating: 4.5,
  },
  {
    id: 'notes',
    name: '笔记管理',
    description: '笔记创建、编辑、分类，类似 Obsidian 的体验',
    category: 'daily',
    icon: Type,
    price: 0,
    downloads: 634,
    rating: 4.6,
  },
  {
    id: 'browser',
    name: '浏览器控制',
    description: '浏览器自动化控制、网页操作、表单填写',
    category: 'tool',
    icon: Globe,
    price: 0,
    downloads: 892,
    rating: 4.9,
  },
  {
    id: 'music',
    name: '音乐播放',
    description: '音乐播放控制、歌单管理、跨平台同步',
    category: 'daily',
    icon: Music,
    price: 0,
    downloads: 521,
    rating: 4.4,
  },
  {
    id: 'github',
    name: 'GitHub 助手',
    description: 'GitHub 仓库管理、Issue 追踪、PR 处理',
    category: 'career',
    icon: Github,
    price: 0,
    downloads: 1103,
    rating: 4.8,
  },
  {
    id: 'summarize',
    name: '文本摘要',
    description: '长文摘要、关键信息提取、内容总结',
    category: 'tool',
    icon: Sparkles,
    price: 0,
    downloads: 1456,
    rating: 4.7,
  },
  {
    id: 'todo',
    name: '待办事项',
    description: '待办创建、优先级管理、完成追踪',
    category: 'daily',
    icon: LayoutGrid,
    price: 0,
    downloads: 823,
    rating: 4.5,
  },
  {
    id: 'search',
    name: '智能搜索',
    description: '网络搜索、本地文件搜索、信息聚合',
    category: 'tool',
    icon: Search,
    price: 0,
    downloads: 967,
    rating: 4.6,
  },
  {
    id: 'cloud-sync',
    name: '云端同步',
    description: '配置同步、记忆备份、多端协同',
    category: 'tool',
    icon: Cloud,
    price: 0,
    downloads: 1342,
    rating: 4.8,
  },
  {
    id: 'privacy-guard',
    name: '隐私守护',
    description: '敏感数据保护、权限管理、隐私审计',
    category: 'tool',
    icon: Lock,
    price: 0,
    downloads: 678,
    rating: 4.9,
  },
]

export default function SkillsPage() {
  return (
    <PageShell
      title="Skill 市场"
      subtitle="日常工具与职业技能的组合，让 AI 能力随你的需求生长。MVP 阶段所有 Skill 免费开放体验。"
    >
      {/* 分类标签 */}
      <div className="flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <category.icon className="h-4 w-4 text-primary-500" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Skill 网格 */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {/* 底部提示 */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary-600/20 to-indigo-600/20 p-6 ring-1 ring-primary-500/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">需要特定职业的 Skill？</h3>
            <p className="mt-1 text-sm text-zinc-300/80">
              我们正在开发律师、程序员、数据分析师等垂直职业 Skill。
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-500"
          >
            提交需求
          </a>
        </div>
      </div>
    </PageShell>
  )
}

function SkillCard({
  skill,
}: {
  skill: {
    id: string
    name: string
    description: string
    category: string
    icon: React.ComponentType<{ className?: string }>
    price: number
    downloads: number
    rating: number
  }
}) {
  const Icon = skill.icon

  return (
    <div className="group glass rounded-2xl p-5 transition hover:bg-white/8">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
          <Icon className="h-6 w-6 text-primary-500" />
        </div>
        {skill.price === 0 ? (
          <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs text-emerald-400 ring-1 ring-emerald-500/30">
            免费
          </span>
        ) : (
          <span className="rounded-full bg-primary-500/20 px-2.5 py-1 text-xs text-primary-400 ring-1 ring-primary-500/30">
            ¥{skill.price}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-base font-semibold text-white">{skill.name}</h3>
      <p className="mt-1 text-sm text-zinc-300/80">{skill.description}</p>

      <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
        <span className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          {skill.rating}
        </span>
        <span>{skill.downloads} 次下载</span>
      </div>

      <button className="mt-4 w-full rounded-full bg-white/5 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10">
        了解更多
      </button>
    </div>
  )
}
