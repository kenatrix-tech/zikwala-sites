import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronLeft, Tag, CheckCircle2, ShoppingBag } from "lucide-react"
import { getConfig } from "@/config"
import {
  fetchProductsBySeller,
  fetchProductById,
  type ProductDto,
} from "@/lib/kenatrix"

// ─── Static params for output: export ──────────────────────────────────────

export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return []
  const products = await fetchProductsBySeller(config.sellerSlug)
  return products.map((p) => ({ id: String(p.productId) }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const config = getConfig()
  const product = await fetchProductById(params.id)
  if (!product) return { title: "Product | " + config.business.name }
  return {
    title: `${product.name} | ${config.business.name}`,
    description: product.description?.slice(0, 160) ?? `${product.name} — available at ${config.business.name}`,
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(product: ProductDto) {
  const amount = product.price ?? 0
  const formatted = "$" + Number(amount).toLocaleString("en-US")
  return product.isNegotiable ? formatted + " (negotiable)" : formatted
}

function whatsappLink(phone: string, product: ProductDto) {
  const digits = phone.replace(/\D/g, "")
  const text = encodeURIComponent(
    `Hi, I'd like to order: ${product.name} — ${formatPrice(product)}. Is it available?`
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const config = getConfig()
  const product = await fetchProductById(params.id)
  if (!product) notFound()

  const allImages = [
    ...(product.thumbnailUrl ? [product.thumbnailUrl] : []),
    ...(product.images?.map((img) => img.imageUrl) ?? []),
  ].filter(Boolean).slice(0, 6)

  const contactPhone = product.contactPhone ?? config.business.phone
  const isUnavailable = product.stock === 0 || product.status === "SOLD" || product.status === "INACTIVE"

  return (
    <div className="bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Products
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">

          {/* Left: images */}
          <div>
            {allImages.length > 0 ? (
              <div className="space-y-2">
                <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={allImages[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {isUnavailable && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-white text-gray-900 font-black text-sm px-4 py-2 rounded-full">
                        Unavailable
                      </span>
                    </div>
                  )}
                </div>
                {allImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {allImages.slice(1, 5).map((url, i) => (
                      <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <Image src={url} alt={`${product.name} photo ${i + 2}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5
                              rounded-2xl flex items-center justify-center">
                <ShoppingBag size={64} className="text-primary/30" />
              </div>
            )}
          </div>

          {/* Right: details */}
          <div className="space-y-5">

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
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-primary">{formatPrice(product)}</p>
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            )}

            {/* Location */}
            {(product.city || product.state) && (
              <p className="text-sm text-gray-500">
                📍 {[product.city, product.state].filter(Boolean).join(", ")}
              </p>
            )}

            {/* CTAs */}
            {!isUnavailable ? (
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappLink(contactPhone, product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2
                             text-white font-bold py-3.5 rounded-site
                             transition-all hover:scale-[1.02] hover:shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #5BBF7A 0%, #3EA85E 100%)",
                    boxShadow: "0 2px 8px rgba(62,168,94,0.35)",
                  }}
                >
                  <WhatsAppIcon />
                  Order on WhatsApp
                </a>
                <a
                  href={`tel:${contactPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2
                             bg-primary text-white font-bold py-3.5 rounded-site
                             hover:opacity-90 transition-opacity"
                >
                  <Phone size={16} />
                  Call to Order
                </a>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2
                             border-2 border-gray-900 text-gray-900 font-bold py-3 rounded-site
                             hover:bg-gray-900 hover:text-white transition-all"
                >
                  Send Inquiry
                </Link>
              </div>
            ) : (
              <div className="py-4 text-center">
                <p className="text-gray-400 font-semibold">This item is currently unavailable</p>
                <Link href="/products" className="text-primary text-sm mt-2 inline-block hover:underline">
                  Browse other products →
                </Link>
              </div>
            )}

            {/* Contact */}
            {product.contactName && (
              <p className="text-sm text-gray-500 pt-2 border-t border-gray-100">
                Seller: <span className="font-semibold text-gray-700">{product.contactName}</span>
              </p>
            )}

            {/* Stock note */}
            {!isUnavailable && product.stock > 0 && product.stock < 5 && (
              <div className="flex items-center gap-1.5 text-sm text-orange-600 font-medium">
                <CheckCircle2 size={14} />
                Only {product.stock} left in stock
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
