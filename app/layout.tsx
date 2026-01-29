import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'АМДЭ ХХК - Үндэсний амттаны төгс зоог',
  description: 'Монгол уламжлалыг хадгалсан жинхэнэ амт',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  )
}
