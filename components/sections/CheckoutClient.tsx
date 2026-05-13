"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Minus, Plus, Trash2, CreditCard, ArrowLeft, Lock, Sparkles, ArrowRight, CheckCircle2, X } from "lucide-react"
import { useCart } from "@/lib/cart"

interface Props {
  stripeConnectedAccountId: string
  currency: string
  sellerSlug?: string
  businessName: string
  isDemo?: boolean
}

const API_URL = process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com"
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "")

export function CheckoutClient({ stripeConnectedAccountId, currency, sellerSlug, businessName, isDemo }: Props) {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showDemoNotice, setShowDemoNotice] = useState(false)

  async function handleCheckout() {
    if (items.length === 0) return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${API_URL}/api/v1/public/storefront/checkout/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stripeConnectedAccountId,
          currency,
          sellerSlug: sellerSlug ?? "",
          successUrl: `${SITE_URL}/order-confirmation`,
          cancelUrl: `${SITE_URL}/order-cancelled`,
          items: items.map(item => ({
            listingId: Number(item.id),
            name: item.name,
            imageUrl: item.image || null,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to create checkout session")
      }

      const data = await res.json()
      clearCart()
      window.location.href = data.checkoutUrl

    } catch (err) {
      setError("Something went wrong. Please try again or contact us.")
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <ShoppingBag size={56} className="text-gray-200" />
        <h2 className="text-xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-400 text-sm">Add some products before checking out.</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-site
                     bg-gradient-brand text-on-primary hover:opacity-90 transition-opacity"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

      {/* Back */}
      <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
        <ArrowLeft size={15} />
        Continue Shopping
      </Link>

      <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Items */}
        <div className="lg:col-span-3 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              {/* Image */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-700">
                {item.image && (
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white text-sm leading-snug truncate">{item.name}</p>
                <p className="text-sm font-bold mt-1" style={{ color: "var(--color-primary)" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">${item.price.toFixed(2)} each</p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center
                               text-gray-500 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center
                               text-gray-500 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto text-gray-300 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-500 dark:text-gray-400">
                <span>Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 dark:text-gray-400">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-2 mt-2 flex justify-between font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-xs text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              onClick={isDemo ? () => setShowDemoNotice(true) : handleCheckout}
              disabled={loading}
              className="mt-5 w-full inline-flex items-center justify-center gap-2
                         text-sm font-bold py-4 rounded-site text-on-primary
                         bg-gradient-brand hover:opacity-90 transition-all
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Redirecting to payment...
                </>
              ) : (
                <>
                  <CreditCard size={16} />
                  Pay with Card
                </>
              )}
            </button>

            {showDemoNotice && (
              <div className="mt-4 rounded-2xl overflow-hidden ring-1 ring-black/5">
                <div
                  className="px-5 py-4 text-white relative"
                  style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)" }}
                >
                  <button
                    onClick={() => setShowDemoNotice(false)}
                    className="absolute top-3 right-3 opacity-60 hover:opacity-100 transition-opacity"
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={15} className="opacity-90" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-90">Demo Preview</span>
                  </div>
                  <p className="text-sm font-bold leading-snug pr-4">
                    Payment is available on your live website
                  </p>
                  <p className="text-xs opacity-75 mt-0.5">
                    This is a demo — checkout is fully functional once your site goes live.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 px-5 py-4 space-y-2.5">
                  {[
                    "Stripe-powered secure checkout",
                    "Visa, Mastercard, Apple Pay & more",
                    "Instant order confirmation emails",
                    "Funds deposited directly to your account",
                  ].map(feat => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} style={{ color: "var(--color-primary)" }} className="shrink-0" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{feat}</span>
                    </div>
                  ))}
                  <a
                    href="https://zikwala.com/website/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full inline-flex items-center justify-center gap-2
                               text-xs font-bold py-3 rounded-xl text-on-primary
                               bg-gradient-brand hover:opacity-90 transition-opacity"
                  >
                    Get Your Website
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )}

            {!showDemoNotice && (
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-400">
                <Lock size={11} />
                {isDemo ? "Demo preview — no real charge" : "Secured by Stripe"}
              </div>
            )}

            {!isDemo && (
              <p className="text-xs text-gray-400 text-center mt-2">
                Sold by {businessName}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

