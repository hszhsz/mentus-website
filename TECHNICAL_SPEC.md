# Mentus 官网技术方案文档

> 版本: 1.0.0
> 更新日期: 2026-02-17
> 状态: MVP 阶段

---

## 1. 项目概述

### 1.1 项目定位
Mentus 官网是基于 Next.js 14 构建的现代化静态官网，用于展示产品信息、提供下载入口、介绍 Skill 生态，并引导用户注册/登录。

### 1.2 核心目标
- 产品品牌展示与价值传递
- 用户注册/登录入口
- Skill 市场预览
- 下载页面引导
- SEO 优化与流量获取

---

## 2. 技术栈选型

### 2.1 核心框架
| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.2.28 | React 框架，支持 App Router、SSG/SSR |
| React | 18.2.0 | UI 组件开发 |
| TypeScript | 5.3.3 | 类型安全 |
| Tailwind CSS | 3.3.0 | 原子化 CSS 样式 |

### 2.2 UI 组件与图标
| 技术 | 版本 | 用途 |
|------|------|------|
| lucide-react | 0.469.0 | 图标库 |

### 2.3 开发工具
| 工具 | 用途 |
|------|------|
| ESLint | 代码质量检查 |
| PostCSS | CSS 处理 |
| next/font | 字体优化加载 |

---

## 3. 架构设计

### 3.1 项目结构
```
mentus-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 根布局（SEO 元数据、全局样式）
│   ├── page.tsx             # 首页
│   ├── loading.tsx          # 全局加载状态
│   ├── error.tsx            # 错误边界
│   ├── not-found.tsx        # 404 页面
│   ├── globals.css          # 全局样式
│   ├── sitemap.ts           # 动态站点地图
│   ├── robots.ts            # 爬虫规则
│   ├── about/page.tsx       # 关于我们
│   ├── skills/page.tsx      # Skill 市场
│   ├── download/page.tsx    # 下载页面
│   ├── pricing/page.tsx     # 定价页面
│   ├── contact/page.tsx     # 联系我们
│   ├── privacy/page.tsx     # 隐私政策
│   ├── terms/page.tsx       # 服务条款
│   ├── login/page.tsx       # 登录页
│   ├── register/page.tsx    # 注册页
│   └── forgot-password/     # 找回密码
├── components/              # 共享组件
│   ├── SiteHeader.tsx       # 站点导航
│   ├── SiteFooter.tsx       # 站点页脚
│   ├── PageShell.tsx        # 页面布局壳
│   └── FadeIn.tsx           # 滚动动画组件
├── public/                  # 静态资源
│   ├── manifest.json        # PWA 配置
│   └── favicon.ico          # 站点图标
├── next.config.js           # Next.js 配置
├── tailwind.config.ts       # Tailwind 配置
└── package.json             # 依赖管理
```

### 3.2 路由设计
| 路由 | 类型 | 说明 |
|------|------|------|
| `/` | Page | 首页，产品展示 |
| `/skills` | Page | Skill 市场，展示 12 个免费 Skill |
| `/download` | Page | 下载页面，支持多平台 |
| `/pricing` | Page | 定价方案对比 |
| `/about` | Page | 关于我们、品牌故事 |
| `/contact` | Page | 联系表单 |
| `/privacy` | Page | 隐私政策 |
| `/terms` | Page | 服务条款 |
| `/login` | Client Page | 登录页面（交互） |
| `/register` | Client Page | 注册页面（交互） |
| `/forgot-password` | Client Page | 找回密码（交互） |
| `/sitemap.xml` | Route | 动态站点地图 |
| `/robots.txt` | Route | 爬虫规则 |

---

## 4. 核心实现

### 4.1 SEO 策略

#### 元数据配置 (layout.tsx)
```typescript
export const metadata: Metadata = {
  title: {
    default: 'Mentus — 脑 + 手的个人 AI 助理',
    template: '%s · Mentus',
  },
  description: 'Mentus 基于 OpenClaw 内核...',
  keywords: ['AI助理', 'OpenClaw', '个人助理', ...],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: '/og-image.png', ... }],
  },
  twitter: {
    card: 'summary_large_image',
    ...
  },
}
```

#### 动态站点地图
- 自动生成 XML 格式的 sitemap
- 包含所有页面的优先级和更新频率
- 支持搜索引擎抓取优化

#### Robots 配置
- 允许所有合法爬虫访问
- 屏蔽 `/api/`、`/_next/` 等内部路径
- 指向 sitemap.xml 位置

### 4.2 响应式设计

#### 断点策略
```css
/* Tailwind 默认断点 */
sm: 640px   /* 手机横屏 */
md: 768px   /* 平板竖屏 */
lg: 1024px  /* 平板横屏/小笔记本 */
xl: 1280px  /* 桌面 */
2xl: 1536px /* 大屏桌面 */
```

#### 布局适配
- **移动端**: 单列布局，汉堡菜单
- **平板**: 双列网格，展开导航
- **桌面**: 多列网格，完整导航

### 4.3 样式系统

#### 设计令牌
```css
/* 颜色系统 */
--color-bg: #09090b;           /* 背景色 */
--color-primary: #0ea5e9;       /* 主色调 */
--color-primary-dark: #0284c7;  /* 主色深色 */

/* 圆角 */
--radius-sm: 0.5rem;
--radius-md: 0.75rem;
--radius-lg: 1rem;
--radius-full: 9999px;
```

#### 核心工具类
```css
/* 玻璃态效果 */
.glass {
  @apply bg-white/5 backdrop-blur border border-white/10;
}

/* 渐变文字 */
.gradient-text {
  @apply bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent;
}
```

### 4.4 动画效果

#### 滚动触发动画
- `FadeIn` 组件：元素进入视口时的淡入动画
- 支持方向：上/下/左/右
- 支持延迟和持续时间配置

#### CSS 动画
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### 4.5 交互页面

#### 表单处理
所有表单页面（login/register/forgot-password）使用：
- React `useState` 管理表单状态
- 受控组件模式
- 提交后显示演示提示

```typescript
const [email, setEmail] = useState('')
const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  setStatus('submitted')
}
```

---

## 5. 性能优化

### 5.1 构建优化
- **静态导出**: 支持纯静态部署
- **代码分割**: 按路由自动分割
- **Tree Shaking**: 移除未使用代码

### 5.2 加载优化
- **字体优化**: 使用 `next/font` 自动优化
- **图片优化**: 配置图片域名，支持懒加载
- **CSS 优化**: Tailwind 自动 Purge

### 5.3 运行时优化
- **组件懒加载**: 动态导入大型组件
- **状态管理**: 最小化状态更新
- **事件优化**: 防抖/节流处理

---

## 6. 部署配置

### 6.1 Next.js 配置
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.mentus.ai'],
    unoptimized: true,  // 静态导出时必需
  },
  trailingSlash: true,   // 友好的 URL
  poweredByHeader: false, // 隐藏 X-Powered-By
}
```

### 6.2 部署方式
| 方式 | 命令 | 输出目录 |
|------|------|----------|
| 开发 | `npm run dev` | `.next/` |
| 构建 | `npm run build` | `.next/` |
| 静态导出 | `next export` | `dist/` |

### 6.3 生产环境建议
- 使用 CDN 加速静态资源
- 配置 HTTPS 和 HTTP/2
- 启用 Gzip/Brotli 压缩
- 配置缓存策略

---

## 7. 开发规范

### 7.1 代码规范
- **ESLint**: 使用 `eslint-config-next`
- **TypeScript**: 严格模式开启
- **组件**: 函数组件 + Hooks
- **样式**: Tailwind 工具类优先

### 7.2 文件命名
- 页面组件: `page.tsx`
- 布局组件: `layout.tsx`
- 共享组件: PascalCase (如 `SiteHeader.tsx`)
- 工具函数: camelCase

### 7.3 Git 提交规范
```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 代码格式
refactor: 重构
perf: 性能优化
test: 测试相关
chore: 构建/工具
```

---

## 8. 未来规划

### 8.1 短期优化
- [ ] 接入真实后端 API
- [ ] 添加用户认证状态管理
- [ ] 实现 Skill 详情页
- [ ] 添加博客/新闻模块

### 8.2 中期规划
- [ ] 多语言支持 (i18n)
- [ ] 深色/浅色主题切换
- [ ] 动画性能优化 (Framer Motion)
- [ ] 实时在线客服

### 8.3 长期目标
- [ ] 服务端渲染 (SSR) 与静态生成 (SSG) 混合
- [ ] 边缘计算部署 (Edge Runtime)
- [ ] A/B 测试支持
- [ ] 数据分析集成

---

## 9. 附录

### 9.1 依赖清单
```json
{
  "dependencies": {
    "lucide-react": "^0.469.0",
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "5.3.3"
  }
}
```

### 9.2 相关文档
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [React 文档](https://react.dev)

### 9.3 联系方式
- 技术负责人: heshaozhong
- 项目仓库: mentus-website
