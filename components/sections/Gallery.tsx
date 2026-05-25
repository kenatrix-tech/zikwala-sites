import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface GalleryProps {
  gallery: NonNullable<SiteConfig["gallery"]>
  /** Hide the internal title/subtitle — use when the page already has its own header */
  hideHeader?: boolean
  /** Limit to 6 images and show a "View All" link to /gallery */
  preview?: boolean
}

export function Gallery({ gallery, hideHeader = false, preview = false }: GalleryProps) {
  const images = preview ? gallery.images.slice(0, 6) : gallery.images
  const aspectClass =
    gallery.aspectRatio === "portrait" ? "aspect-[3/4]" :
    gallery.aspectRatio === "landscape" ? "aspect-[4/3]" :
    "aspect-square"

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {gallery.title}
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">{gallery.subtitle}</p>
          </AnimateIn>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <AnimateIn key={i} delay={i * 60}>
              <div className={`relative ${aspectClass} overflow-hidden group cursor-pointer`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Gradient overlay — always visible at bottom, intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                                opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                {img.alt && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0
                                  transition-transform duration-300">
                    <p className="text-white text-sm font-semibold leading-tight drop-shadow">{img.alt}</p>
                  </div>
                )}

                {/* Badge */}
                {img.badge && (
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide
                    ${img.badge === "Sold"
                      ? "bg-gray-900/80 text-white"
                      : img.badge === "For Rent"
                      ? "bg-blue-600/85 text-white"
                      : img.badge === "Under Contract"
                      ? "bg-amber-500/85 text-white"
                      : "bg-primary/85 text-white"
                    } backdrop-blur-sm`}>
                    {img.badge}
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {preview && gallery.images.length > 6 && (
          <AnimateIn className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-white/20 text-white
                         font-semibold px-8 py-3.5 rounded-site
                         hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              View All Photos
              <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-gray-500 mt-3">{gallery.images.length} photos in our gallery</p>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
