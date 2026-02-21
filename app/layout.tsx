import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
}

export const metadata: Metadata = {
  title: {
    default: 'Mentus — 脑 + 手的个人 AI 助理',
    template: '%s · Mentus',
  },
  description:
    'Mentus 基于 OpenClaw 内核，将智慧思考与动手执行合二为一：本地执行保护隐私，云端只做同步，多端协同更简单。',
  keywords: ['AI助理', 'OpenClaw', '个人助理', '自动化', 'Skill市场', '端云协同', '隐私优先'],
  authors: [{ name: 'Mentus Team' }],
  creator: 'Mentus',
  publisher: 'Mentus',
  metadataBase: new URL('https://mentus.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://mentus.ai',
    siteName: 'Mentus',
    title: 'Mentus — 脑 + 手的个人 AI 助理',
    description: '让 AI 真正为你所用，把时间还给你。本地执行，云端同步，多端协同。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mentus - 个人 AI 助理',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentus — 脑 + 手的个人 AI 助理',
    description: '让 AI 真正为你所用，把时间还给你。本地执行，云端同步，多端协同。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.className}>
      <body>
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(99,102,241,0.16),transparent_50%),radial-gradient(600px_circle_at_40%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>
        <SiteHeader />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
