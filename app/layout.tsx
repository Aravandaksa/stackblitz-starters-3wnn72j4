// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pickly — скопіюй сайт за одну команду',
  description: 'Введи URL — і AI скопіює сайт для тебе',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Montserrat', sans-serif", backgroundColor: '#f9fafb' }}>
        {children}
      </body>
    </html>
  )
}
