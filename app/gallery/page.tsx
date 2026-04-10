import type { Metadata } from "next"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { Gallery } from "@/components/sections/Gallery"
import Link from "next/link"

const config = getConfig()
const features = getFeatures(config.tier)

export const metadata: Metadata = {
  title: `Gallery | ${config.business.name}`,
  description: `View our work and portfolio at ${config.business.name}.`,
}

export default function GalleryPage() {
  if (!features.gallery || !config.gallery) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Gallery not available on your current plan.
        </h1>
        <Link href="/contact" className="text-primary underline">
          Contact us to upgrade
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.gallery.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.gallery.subtitle}</p>
        </div>
      </section>

      <Gallery gallery={config.gallery} />
    </>
  )
}
