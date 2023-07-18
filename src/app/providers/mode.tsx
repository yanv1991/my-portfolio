'use client'

import { ThemeProvider } from 'next-themes'

function Mode({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default Mode;