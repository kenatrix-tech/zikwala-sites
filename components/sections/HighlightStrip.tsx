import { Check } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface HighlightStripProps {
  trustPoints: NonNullable<SiteConfig["hero"]["trustPoints"]>
}

export function HighlightStrip({ trustPoints }: HighlightStripProps) {
  if (!trustPoints?.length) return null

  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-1.5 text-on-primary text-sm font-medium whitespace-nowrap">
              <Check size={14} className="shrink-0 opacity-80" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
