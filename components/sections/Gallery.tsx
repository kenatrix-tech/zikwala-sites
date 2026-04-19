import Image from "next/image"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface GalleryProps {
  gallery: NonNullable<SiteConfig["gallery"]>
  /** Hide the internal title/subtitle — use when the page already has its own header */
  hideHeader?: boolean
}

export function Gallery({ gallery, hideHeader = false }: GalleryProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {gallery.title}
            </h2>
            <p className="text-gray-500 text-lg">{gallery.subtitle}</p>
          </AnimateIn>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.images.map((img, i) => (
            <AnimateIn key={i} delay={i * 75}>
              <div className="relative aspect-square rounded-site overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
      </div>
    </section>
  )
}
