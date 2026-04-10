import Image from "next/image"
import type { SiteConfig } from "@/config/types"

interface GalleryProps {
  gallery: NonNullable<SiteConfig["gallery"]>
}

export function Gallery({ gallery }: GalleryProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {gallery.title}
          </h2>
          <p className="text-gray-500 text-lg">{gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-site overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
