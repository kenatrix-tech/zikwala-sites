"use client"

import { useEffect, useRef, useState } from "react"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  /** Delay before transition starts (ms). Use for staggered children. */
  delay?: number
}

export function AnimateIn({ children, className = "", delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll${inView ? " in-view" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
