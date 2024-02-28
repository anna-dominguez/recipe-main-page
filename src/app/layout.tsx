import type { Metadata } from 'next'
import { Outfit, Young_Serif } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--outfit',
  weight: ['400', '600', '700'],
})
const young = Young_Serif({
  subsets: ['latin'],
  variable: '--young',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Recipe Main Page',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${young.variable}`}>{children}</body>
    </html>
  )
}
