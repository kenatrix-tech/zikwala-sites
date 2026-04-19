"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  defaultDark: boolean
}

export function ThemeToggle({ defaultDark }: ThemeToggleProps) {
  const [dark, setDark] = useState(defaultDark)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read saved preference or fall back to config default
    const saved = localStorage.getItem("theme")
    const isDark = saved ? saved === "dark" : defaultDark
    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
    setMounted(true)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  // Avoid hydration mismatch — render placeholder until mounted
  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                 text-gray-500 hover:text-primary hover:bg-accent"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
