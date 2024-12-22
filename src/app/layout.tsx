import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navigation/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ITBG',
  description: 'A minimalist web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
} 