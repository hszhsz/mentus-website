// 通用类型定义

// Skill 类型
export interface Skill {
  id: string
  name: string
  description: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  price: number
  downloads: number
  rating: number
}

// 定价方案类型
export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  limitations: string[]
  cta: string
  href: string
  highlighted: boolean
  badge?: string
}

// 里程碑类型
export interface Milestone {
  date: string
  title: string
  description: string
  status: '进行中' | '计划' | '已完成'
}

// 价值观类型
export interface Value {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

// FAQ 类型
export interface FAQ {
  question: string
  answer: string
}

// 页脚链接类型
export interface FooterLink {
  href: string
  label: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

// 导航项类型
export interface NavItem {
  href: string
  label: string
}
