"use client"

import { useState } from "react"
import Image from "next/image"

interface Props {
  logo?: string
  name: string
  /** "navbar" = compact (h-9), "footer" = slightly larger text fallback */
  variant?: "navbar" | "footer"
}

export function LogoBrand({ logo, name, variant = "navbar" }: Props) {
  const [broken, setBroken] = useState(false)

  if (logo && !broken) {
    return (
      <Image
        src={logo}
        alt={name}
        width={140}
        height={40}
        className={variant === "navbar" ? "h-9 w-auto object-contain" : "h-10 w-auto object-contain"}
        onError={() => setBroken(true)}
      />
    )
  }

  // Text fallback
  return variant === "navbar" ? (
    <span className="text-base font-bold leading-tight text-gray-900">{name}</span>
  ) : (
    <span className="text-white text-xl font-bold">{name}</span>
  )
}
