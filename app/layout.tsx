export const metadata = {
  title: 'Mentus - 你的个人AI助理',
  description: 'Mentus 是基于OpenClaw内核的个人AI助理，脑+手的完美结合，让AI真正为你所用',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
