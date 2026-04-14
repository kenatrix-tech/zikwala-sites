import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DemoBannerProps {
  businessName: string
}

export function DemoBanner({ businessName }: DemoBannerProps) {
  return (
    <div className="bg-gray-900 text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center
                      justify-between gap-2 text-sm">
        <p className="text-white/70 text-center sm:text-left">
          <span className="text-white/40 mr-2">DEMO</span>
          You&apos;re viewing a preview site for{" "}
          <strong className="text-white">{businessName}</strong>
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-1.5 bg-white text-gray-900
                     font-bold text-xs px-4 py-1.5 rounded-full shrink-0
                     hover:bg-gray-100 transition-colors"
        >
          Get this site from $399
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}
