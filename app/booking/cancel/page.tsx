"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getConfig } from "@/config"

export const dynamic = "force-static"

function BookingCancelContent() {
  const { business } = getConfig()
  const searchParams = useSearchParams()
  const bookingNumber = searchParams.get("booking")

  return (
    <section className="py-32">
      <div className="max-w-lg mx-auto px-4 text-center">

        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Payment Not Completed
        </h1>

        {bookingNumber && (
          <div className="inline-block bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {bookingNumber}
          </div>
        )}

        <p className="text-gray-500 dark:text-gray-400 mb-2">
          No payment was made — your booking at <strong>{business.name}</strong> is not confirmed yet.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-8">
          You can try again or contact us directly at{" "}
          <a href={`tel:${business.phone}`} className="text-primary hover:underline">{business.phone}</a>.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
            style={{ background: "var(--color-primary)" }}
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary/30 transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function BookingCancelPage() {
  return (
    <Suspense>
      <BookingCancelContent />
    </Suspense>
  )
}
