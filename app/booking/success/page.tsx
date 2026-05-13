import type { Metadata } from "next"
import Link from "next/link"
import { getConfig } from "@/config"

export const metadata: Metadata = {
  title: "Booking Confirmed",
  robots: { index: false },
}

export default function BookingSuccessPage() {
  const { business } = getConfig()
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
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Deposit Paid — You&apos;re Confirmed!</h1>
        <p className="text-gray-500 mb-2">
          Your booking at <strong>{business.name}</strong> is confirmed. A receipt has been sent to your email.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Have questions? Call us at <a href={`tel:${business.phone}`} className="text-primary hover:underline">{business.phone}</a> or email{" "}
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
