import Link from "next/link"

interface DemoBannerProps {
  businessName: string
}

export function DemoBanner({ businessName }: DemoBannerProps) {
  return (
    <div className="bg-yellow-400 text-yellow-900 text-center py-2 px-4 text-sm font-medium z-50 sticky top-0">
      <span>
        This is a demo site for{" "}
        <strong>{businessName}</strong> —{" "}
        Like what you see?{" "}
      </span>
      <Link
        href="https://zikwala.com/order"
        className="underline font-bold hover:text-yellow-800"
        target="_blank"
      >
        Get your own site →
      </Link>
    </div>
  )
}
