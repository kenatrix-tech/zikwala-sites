"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getConfig } from "@/config"

export const dynamic = "force-static"

function BookingSuccessContent() {
  const { business } = getConfig()
  const searchParams = useSearchParams()
  const bookingNumber = searchParams.get("booking")

  return (
    <section className="py-32">
      <div className="max-w-lg mx-auto px-4 text-center">

        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "var(--color-accent)" }}
        >
          <svg className="text-primary w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Booking Confirmed!
        </h1>

        {bookingNumber && (
          <div className="inline-block bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {bookingNumber}
          </div>
        )}

        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Your deposit is paid and your booking at <strong>{business.name}</strong> is confirmed.
          A confirmation has been sent to your email.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-8">
          Have questions? Call{" "}
          <a href={`tel:${business.phone}`} className="text-primary hover:underline">{business.phone}</a>
          {" "}or email{" "}
          <a href={`mailto:${business.email}`} className="text-primary hover:underline">{business.email}</a>.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
          style={{ background: "var(--color-primary)" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default function BookingSuccessPage() {
  return (
    <Suspense>
      <BookingSuccessContent />
    </Suspense>
  )
}
