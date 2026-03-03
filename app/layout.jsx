export const metadata = {
  title: 'Temu DBA · HR终面答题板',
  description: '65题 · 10模块 · Fit·动机·可靠性聚焦 · 自我介绍·工作经历·职业过渡·稳定性·实战行为·Temu认知·职业规划·工作强度·远程工作·主动性',
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
