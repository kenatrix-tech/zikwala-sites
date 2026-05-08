"use client"

import Link from "next/link"
import { CheckCircle2, ShoppingBag, Phone } from "lucide-react"
import { getConfig } from "@/config"

const config = getConfig()

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: "var(--color-accent)" }}>
            <CheckCircle2 size={40} style={{ color: "var(--color-primary)" }} />
          </div>
        </div>

        {/* Message */}
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">Order Confirmed!</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
            Thank you for your purchase. A receipt has been sent to your email.
            {config.business.name} will reach out to confirm your order details.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 space-y-3 text-sm">
          <p className="font-semibold text-gray-700 dark:text-gray-300">Questions about your order?</p>
          <a
            href={`tel:${config.business.phone}`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone size={14} />
            {config.business.phone}
          </a>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-site
                       bg-gradient-brand text-on-primary hover:opacity-90 transition-opacity"
          >
            <ShoppingBag size={15} />
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-site
                       border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300
                       hover:border-primary hover:text-primary transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
