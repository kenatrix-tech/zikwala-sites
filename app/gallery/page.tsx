import type { Metadata } from "next"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { Gallery } from "@/components/sections/Gallery"
import Link from "next/link"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  const stateCode = business.state.split(" ")[0]
  return {
    title: `Gallery | ${business.name} | ${business.city}, ${stateCode}`,
    description: `View the work and portfolio of ${business.name} in ${business.city}, ${stateCode}. ${business.tagline}`,
  }
}

const config = getConfig()
const features = getFeatures(config.tier)
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
