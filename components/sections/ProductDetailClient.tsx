"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronLeft, Tag, CheckCircle2, ShoppingBag, X, ZoomIn, ChevronLeft as Prev, ChevronRight as Next } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { fetchProductBySlug, type ProductDto } from "@/lib/kenatrix"

interface Props {
  slug: string
  business: SiteConfig["business"]
}

function formatPrice(product: ProductDto) {
  const amount = product.price ?? 0
  const formatted = "$" + Number(amount).toLocaleString("en-US")
  return product.isNegotiable ? formatted + " (negotiable)" : formatted
}

function whatsappLink(phone: string, product: ProductDto) {
  const digits = phone.replace(/\D/g, "")
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")
  const link = product.listingSlug && base ? `\n\n🔗 ${base}/products/${product.listingSlug}` : ""
  const text = encodeURIComponent(
    `Hi, I'd like to order: ${product.name} — ${formatPrice(product)}. Is it available?${link}`
  )
  return `https://wa.me/${digits}?text=${text}`
}

function WhatsAppIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function Skeleton() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
      </div>
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          <div className="space-y-3">
            <div className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-5 gap-2">
              {[0,1,2,3,4].map(i => <div key={i} className="aspect-square bg-gray-100 rounded-xl animate-pulse" />)}
            </div>
            <div className="hidden lg:block space-y-2 mt-6">
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
          <div className="space-y-4 pt-2">
            <div className="h-4 w-24 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-1/3 bg-gray-100 rounded animate-pulse" />
            <div className="h-12 bg-gray-100 rounded-xl animate-pulse mt-6" />
            <div className="h-12 bg-gray-100 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: string[]
  name: string
  startIndex: number
  onClose: () => void
}

function Lightbox({ images, name, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20
                   text-white rounded-full p-2.5 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={22} />
      </button>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
        {current + 1} / {images.length}
      </div>

      {images.length > 1 && (
        <button
          className="absolute left-3 sm:left-6 z-10 bg-white/10 hover:bg-white/25
                     text-white rounded-full p-3 transition-colors"
          onClick={e => { e.stopPropagation(); prev() }}
          aria-label="Previous"
        >
          <Prev size={24} />
        </button>
      )}

      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] mx-14 sm:mx-20"
        onClick={e => e.stopPropagation()}
      >
        <Image
          key={current}
          src={images[current]}
          alt={`${name} — photo ${current + 1}`}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {images.length > 1 && (
        <button
          className="absolute right-3 sm:right-6 z-10 bg-white/10 hover:bg-white/25
                     text-white rounded-full p-3 transition-colors"
          onClick={e => { e.stopPropagation(); next() }}
          aria-label="Next"
        >
          <Next size={24} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setCurrent(i) }}
              className={`rounded-full transition-all duration-200
                ${i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Image Gallery ────────────────────────────────────────────────────────────

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  function prev() { setActive(i => (i - 1 + images.length) % images.length) }
  function next() { setActive(i => (i + 1) % images.length) }

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5
                      rounded-2xl flex items-center justify-center">
        <ShoppingBag size={64} className="text-primary/30" />
      </div>
    )
  }

  return (
    <>
      <div className="space-y-3">
        <div
          className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden group cursor-zoom-in"
          onClick={() => setLightboxIndex(active)}
        >
          <Image
            key={active}
            src={images[active]}
            alt={`${name} — photo ${active + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={active === 0}
          />
          <div className="absolute bottom-3 right-3 bg-black/40 text-white rounded-full p-1.5
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <ZoomIn size={16} />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2
                           bg-white/80 hover:bg-white shadow-md rounded-full p-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Previous image"
              >
                <Prev size={18} className="text-gray-700" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           bg-white/80 hover:bg-white shadow-md rounded-full p-2
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Next image"
              >
                <Next size={18} className="text-gray-700" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-full transition-all duration-200
                      ${i === active ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {images.map((url, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-150
                  ${i === active
                    ? "border-primary shadow-md scale-[1.03]"
                    : "border-transparent opacity-55 hover:opacity-90 hover:scale-[1.02]"}`}
              >
                <Image src={url} alt={`${name} thumbnail ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          name={name}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

// ─── Mobile description with read-more toggle ─────────────────────────────────

function DescriptionBlock({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [overflows, setOverflows] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // rAF ensures the browser has finished layout with line-clamp applied before measuring
    const raf = requestAnimationFrame(() => {
      setOverflows(el.scrollHeight > el.clientHeight + 1)
    })
    return () => cancelAnimationFrame(raf)
  }, [text])

  return (
    <div className="pt-6 border-t border-gray-100">
      <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Description</h3>
      <p
        ref={ref}
        className={`text-gray-600 leading-relaxed text-sm ${!expanded ? "line-clamp-5" : ""}`}
      >
        {text}
      </p>
      {(overflows || expanded) && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-2 text-primary text-sm font-semibold hover:underline focus:outline-none"
        >
          {expanded ? "Read less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  )
}

// ─── CTA block (shared) ───────────────────────────────────────────────────────

function CTAs({ contactPhone, product }: { contactPhone: string; product: ProductDto }) {
  const isUnavailable = product.status === "SOLD" || product.status === "INACTIVE"

  if (isUnavailable) {
    return (
      <div className="py-4 text-center bg-gray-50 rounded-2xl">
        <p className="text-gray-500 font-semibold">This item is currently unavailable</p>
        <Link href="/products" className="text-primary text-sm mt-2 inline-block hover:underline">
          Browse other products →
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <a
        href={whatsappLink(contactPhone, product)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2
                   text-white font-bold py-4 rounded-site text-sm
                   transition-all hover:scale-[1.02] hover:shadow-lg"
        style={{
          background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
        }}
      >
        <WhatsAppIcon />
        Order on WhatsApp
      </a>
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${contactPhone}`}
          className="inline-flex items-center justify-center gap-2
                     bg-primary text-white font-bold py-3 rounded-site text-sm
                     hover:opacity-90 transition-opacity"
        >
          <Phone size={15} />
          Call to Order
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center
                     border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-site text-sm
                     hover:border-gray-900 hover:text-gray-900 transition-all"
        >
          Send Inquiry
        </Link>
      </div>

      {product.stock > 0 && product.stock < 5 && (
        <div className="flex items-center gap-1.5 text-sm text-orange-600 font-medium">
          <CheckCircle2 size={14} />
          Only {product.stock} left in stock
        </div>
      )}
    </div>
  )
}

// ─── Share Buttons ────────────────────────────────────────────────────────────

function ShareButtons({ product }: { product: ProductDto }) {
  const [copied, setCopied] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)

  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")
  const url = `${base}/products/${product.listingSlug}`
  const shareTitle = product.name
  const shareText = `${product.name}${product.price ? ` — $${Number(product.price).toLocaleString("en-US")}` : ""}`
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(shareText)

  // Detect Web Share API after hydration (mobile browsers / Safari)
  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  async function handleNativeShare() {
    try {
      await navigator.share({ title: shareTitle, text: shareText, url })
    } catch { /* user cancelled */ }
  }

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="pt-4 border-t border-gray-100">
      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Share</p>

      {/* Native share sheet — shown on mobile after hydration (opens WhatsApp, FB, IG, SMS, etc.) */}
      {canNativeShare && (
        <button
          onClick={handleNativeShare}
          className="w-full mb-3 inline-flex items-center justify-center gap-2
                     bg-primary/10 text-primary font-semibold text-sm
                     py-2.5 rounded-site hover:bg-primary/20 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Share this product
        </button>
      )}

      {/* Individual platform icons — always visible */}
      <div className="flex items-center gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-[#1877F2] hover:text-white text-gray-500 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank" rel="noopener noreferrer" aria-label="Share on X"
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-black hover:text-white text-gray-500 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-[#25D366] hover:text-white text-gray-500 transition-all"
        >
          <WhatsAppIcon />
        </a>
        <button
          onClick={copyLink} aria-label="Copy link"
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-primary hover:text-white text-gray-500 transition-all"
        >
          {copied
            ? <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><polyline points="20 6 9 17 4 12" /></svg>
            : <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          }
        </button>
        {copied && <span className="text-xs text-green-600 font-medium">Copied!</span>}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ProductDetailClient({ slug, business }: Props) {
  const [product, setProduct] = useState<ProductDto | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetchProductBySlug(slug)
      .then(p => {
        if (!p) setNotFound(true)
        else setProduct(p)
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <Skeleton />

  if (notFound || !product) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <ShoppingBag size={56} className="text-gray-200" />
        <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
        <p className="text-gray-400 text-sm">This item may no longer be available.</p>
        <Link href="/products" className="text-primary font-semibold hover:underline mt-2">
          ← Browse all products
        </Link>
      </div>
    )
  }

  const allImages = (
    product.images?.length
      ? product.images.map(img => img.imageUrl)
      : product.thumbnailUrl ? [product.thumbnailUrl] : []
  ).filter(Boolean).slice(0, 8) as string[]

  const contactPhone = product.contactPhone ?? business.phone

  return (
    <div className="bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Products
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">

          {/* ── Column 1: Images + desktop description ── */}
          <div>
            <ImageGallery images={allImages} name={product.name} />

            {/* Description — desktop only, below images */}
            {product.description && (
              <div className="hidden lg:block mt-8">
                <DescriptionBlock text={product.description} />
              </div>
            )}
          </div>

          {/* ── Column 2: Name, price, badges, CTAs ── */}
          <div className="space-y-5 lg:pt-2">

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.categoryName && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold
                                 text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <Tag size={11} />
                  {product.categoryName}
                </span>
              )}
              {product.condition && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {product.condition}
                </span>
              )}
              {product.brandName && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {product.brandName}
                </span>
              )}
            </div>

            {/* Name + price */}
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-primary">{formatPrice(product)}</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* CTAs */}
            <CTAs contactPhone={contactPhone} product={product} />

            {/* Share */}
            <ShareButtons product={product} />

            {/* Description — mobile only, after CTAs */}
            {product.description && (
              <div className="lg:hidden">
                <DescriptionBlock text={product.description} />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
