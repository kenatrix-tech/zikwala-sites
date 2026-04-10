import type { Metadata } from "next"
import { getConfig } from "@/config"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { getFeatures } from "@/lib/features"

const config = getConfig()
const features = getFeatures(config.tier)

export const metadata: Metadata = {
  title: `About | ${config.business.name}`,
  description: `Learn more about ${config.business.name} — ${config.business.tagline}`,
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.about.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.business.tagline}</p>
        </div>
      </section>

      <About about={config.about} />

      {features.testimonials && config.testimonials && (
        <Testimonials testimonials={config.testimonials} />
      )}
    </>
  )
}
