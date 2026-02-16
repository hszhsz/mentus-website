import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">Mentus</div>
          <div className="flex gap-6">
            <Link href="#features" className="text-gray-600 hover:text-primary-600">功能</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-primary-600">定价</Link>
            <Link href="#download" className="text-gray-600 hover:text-primary-600">下载</Link>
            <Link href="/login" className="text-primary-600 font-medium">登录</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            你的个人<span className="text-primary-600">AI助理</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mentus = 脑 + 手。智慧思考与动手执行的完美结合，
            让AI不再只是聊天工具，而是真正为你解决问题的得力助手。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#download"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition"
            >
              免费下载
            </Link>
            <Link
              href="#features"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-primary-50 transition"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="🧠 智慧大脑"
              description="基于OpenClaw内核，具备强大的推理和规划能力，理解你的需求并制定最优执行方案。"
            />
            <FeatureCard
              title="🖐️ 灵活双手"
              description="真正动手执行，文件整理、日程管理、浏览器控制...AI不再只是说说而已。"
            />
            <FeatureCard
              title="☁️ 端云协同"
              description="本地执行保护隐私，云端同步实现多端协同，随时随地使用你的AI助理。"
            />
            <FeatureCard
              title="🛒 Skill市场"
              description="丰富的Skill生态，满足日常办公和职业需求，还可以定制专属Skill。"
            />
            <FeatureCard
              title="🔒 隐私优先"
              description="数据在你本地，云端只做同步。可选择纯本地模式，完全掌控自己的数据。"
            />
            <FeatureCard
              title="⚡ 极速体验"
              description="优化的执行引擎，秒级响应，流畅的使用体验。"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">选择适合你的方案</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="免费版"
              price="¥0"
              description="基础功能体验"
              features={[
                '基础免费Skill',
                '本地执行功能',
                '社区支持',
              ]}
            />
            <PricingCard
              name="基础版"
              price="¥29"
              period="/月"
              description="适合个人用户"
              features={[
                '多端协同',
                '云端同步',
                '所有免费Skill',
                '付费Skill 8折',
                '10,000 模型额度/月',
              ]}
              highlighted
            />
            <PricingCard
              name="高级版"
              price="¥99"
              period="/月"
              description="适合专业用户"
              features={[
                '基础版所有权益',
                '50,000 模型额度/月',
                '每月解锁2个付费Skill',
                '付费Skill 6折',
                '优先技术支持',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">开始体验 Mentus</h2>
          <p className="text-gray-600 mb-8">支持 Windows、macOS 和 Linux</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition">
              下载 Windows 版
            </button>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">
              下载 macOS 版
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold mb-2">Mentus</div>
              <p className="text-gray-400">让AI真正为你所用</p>
            </div>
            <div className="flex gap-6 text-gray-400">
              <Link href="/privacy" className="hover:text-white">隐私政策</Link>
              <Link href="/terms" className="hover:text-white">服务条款</Link>
              <Link href="/contact" className="hover:text-white">联系我们</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Mentus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingCard({
  name,
  price,
  period = '',
  description,
  features,
  highlighted = false,
}: {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <div className={`p-6 rounded-lg ${highlighted ? 'bg-primary-600 text-white shadow-xl scale-105' : 'bg-white shadow-md'}`}>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="text-3xl font-bold mb-2">
        {price}<span className="text-lg font-normal">{period}</span>
      </div>
      <p className={`mb-6 ${highlighted ? 'text-primary-100' : 'text-gray-500'}`}>{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span className={highlighted ? 'text-primary-50' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-2 rounded-full font-medium transition ${
        highlighted
          ? 'bg-white text-primary-600 hover:bg-primary-50'
          : 'bg-primary-600 text-white hover:bg-primary-700'
      }`}>
        选择方案
      </button>
    </div>
  )
}
