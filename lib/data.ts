// 静态数据配置

import type { NavItem, FooterSection, PricingPlan, FAQ, Milestone, Value } from '@/types'
import { Zap, Sparkles, LayoutGrid, Sun, Brain, Shield, Target, Heart, Lightbulb, Users } from 'lucide-react'

// 导航配置
export const navItems: NavItem[] = [
  { href: '/skills', label: 'Skill 市场' },
  { href: '/pricing', label: '定价' },
  { href: '/download', label: '下载' },
  { href: '/about', label: '关于' },
]

// 页脚链接配置
export const footerLinks: Record<string, FooterSection> = {
  product: {
    title: '产品',
    links: [
      { href: '/skills', label: 'Skill 市场' },
      { href: '/pricing', label: '定价' },
      { href: '/download', label: '下载' },
      { href: '/about', label: '关于我们' },
    ],
  },
  support: {
    title: '支持',
    links: [
      { href: '/contact', label: '联系我们' },
      { href: '/privacy', label: '隐私政策' },
      { href: '/terms', label: '服务条款' },
      { href: 'mailto:contact@mentus.ai', label: '发送邮件' },
    ],
  },
  community: {
    title: '社区',
    links: [
      { href: 'https://github.com/mentus', label: 'GitHub', external: true },
      { href: 'https://twitter.com/mentusai', label: 'Twitter', external: true },
      { href: '#', label: 'Discord', external: true },
      { href: '#', label: '开发者文档', external: true },
    ],
  },
}

// 定价方案配置
export const pricingPlans: PricingPlan[] = [
  {
    name: '免费版',
    price: '¥0',
    period: '',
    description: '基础功能体验',
    icon: Zap,
    features: ['基础免费 Skill（10个）', '本地执行能力', '纯本地模式', '社区支持'],
    limitations: ['无云端同步', '无多端协同', '无付费 Skill 使用'],
    cta: '免费开始',
    href: '/download',
    highlighted: false,
  },
  {
    name: '基础版',
    price: '¥29',
    period: '/月',
    description: '适合个人用户',
    icon: Sparkles,
    features: ['多端协同', '云端同步', '所有免费 Skill', '付费 Skill 8 折', '基础模型额度', '邮件支持'],
    limitations: [],
    cta: '升级基础版',
    href: '/contact',
    highlighted: true,
    badge: '推荐',
  },
  {
    name: '高级版',
    price: '¥99',
    period: '/月',
    description: '适合专业用户',
    icon: Zap,
    features: [
      '基础版所有权益',
      '更高模型额度',
      '每月解锁部分付费 Skill',
      '付费 Skill 6 折',
      '优先技术支持',
      '定制化 Skill 预约',
    ],
    limitations: [],
    cta: '联系购买',
    href: '/contact',
    highlighted: false,
  },
]

// FAQ 配置
export const faqs: FAQ[] = [
  {
    question: '免费版和付费版有什么区别？',
    answer:
      '免费版仅支持本地执行和基础 Skill，不包含云端同步和多端协同功能。付费版支持云端同步、多端协同，并包含模型额度和 Skill 折扣。',
  },
  {
    question: '可以随时取消订阅吗？',
    answer:
      '是的，你可以随时取消订阅。取消后，你的账号将在当前计费周期结束后降级为免费版，已购买的付费 Skill 仍可继续使用。',
  },
  {
    question: 'Skill 是如何收费的？',
    answer:
      'Skill 分为免费和付费两种。付费 Skill 支持单次付费永久使用、按调用次数付费和按月订阅付费三种模式，价格从 10-200 元不等。付费会员可享受折扣。',
  },
  {
    question: '模型额度用完了怎么办？',
    answer: '你可以单独购买模型额度包，或升级到更高级别的会员计划。模型额度用完后，你仍可使用本地执行功能。',
  },
  {
    question: '支持哪些支付方式？',
    answer: '我们支持微信支付、支付宝和银行卡支付。所有支付均通过安全的第三方支付渠道完成。',
  },
]

// 里程碑配置
export const milestones: Milestone[] = [
  {
    date: '2026 Q1',
    title: 'MVP 发布',
    description: '完成基础功能开发，支持 Windows、macOS 和 Linux 平台。',
    status: '进行中',
  },
  {
    date: '2026 Q2',
    title: 'Skill 市场上线',
    description: '开放第三方 Skill 开发，推出职业垂直 Skill。',
    status: '计划',
  },
  {
    date: '2026 Q3',
    title: '移动端发布',
    description: '推出 iOS 和 Android 应用，实现真正的多端协同。',
    status: '计划',
  },
  {
    date: '2026 Q4',
    title: '企业版',
    description: '推出团队协作功能，支持企业定制化需求。',
    status: '计划',
  },
]

// 价值观配置
export const values: Value[] = [
  {
    icon: Heart,
    title: '用户优先',
    description: '始终把用户体验放在第一位，用最少的操作完成最多的任务。',
  },
  {
    icon: Shield,
    title: '隐私至上',
    description: '本地执行优先，云端只做同步，敏感数据永远不会上传。',
  },
  {
    icon: Lightbulb,
    title: '持续创新',
    description: '基于 OpenClaw 内核不断优化，为用户带来最新最好的 AI 体验。',
  },
  {
    icon: Users,
    title: '开放生态',
    description: '构建开放的 Skill 市场，让用户和开发者共同创造无限可能。',
  },
]

// Skill 分类配置
export const skillCategories = [
  { id: 'all', name: '全部', icon: LayoutGrid },
  { id: 'daily', name: '日常通用', icon: Sun },
  { id: 'career', name: '职业垂直', icon: Brain },
  { id: 'tool', name: '工具辅助', icon: Shield },
]
