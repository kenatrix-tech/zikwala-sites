"use client"

import Link from "next/link"
import { XCircle, ShoppingBag, ArrowLeft } from "lucide-react"

export default function OrderCancelledPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <XCircle size={40} className="text-gray-400" />
          </div>
        </div>

        {/* Message */}
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">Payment Cancelled</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
            No worries — your cart is still saved. You can go back and complete your purchase anytime.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-site
                       bg-gradient-brand text-on-primary hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={15} />
            Back to Cart
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-site
                       border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300
                       hover:border-primary hover:text-primary transition-colors"
          >
            <ShoppingBag size={15} />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}
