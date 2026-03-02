export const metadata = {
  title: 'Temu DBA · HR终面答题板',
  description: '57题 · 7模块 · Fit·动机·可靠性聚焦 · 教育背景·PayPal·过渡→Foxx·Luckin·稳定性·Temu动机·文化适配',
};
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
