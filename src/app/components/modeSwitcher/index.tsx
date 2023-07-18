'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ModeSwitcher = () => {
const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const onThemeSwitch = (theme: string) => () => {
    console.log('theme', theme)
    setTheme(theme)
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      The current theme is: {theme}
      <button onClick={onThemeSwitch('light')}>Light Mode</button>
      <button onClick={onThemeSwitch('dark')}>Dark Mode</button>
    </div>
  )
}

export default ModeSwitcher;
