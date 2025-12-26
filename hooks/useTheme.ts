import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  // Initialize theme from localStorage or system preference
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return savedTheme || (prefersDark ? 'dark' : 'light')
    }
    return 'dark'
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const updateTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return
    const root = window.document.documentElement

    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    updateTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}