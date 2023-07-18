import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './components/navbar'
import Footer from './components/footer'

import ModeProvider from './providers/mode';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yaser Nicaragua\'s portfolio',
  description: 'This is my personal website',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    url: 'https://ynicaragua.com',
    siteName: 'Yaser Nicaragua'
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="dark:bg-gray-800 w-full">
          <Navbar />
          <div><ModeProvider>{children}</ModeProvider></div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
