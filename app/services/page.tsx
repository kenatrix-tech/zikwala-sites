import type { Metadata } from "next"
import { getConfig } from "@/config"
import { Services } from "@/components/sections/Services"

export function generateMetadata(): Metadata {
  const { business, services } = getConfig()
  const stateCode = business.state.split(" ")[0]
  return {
    title: `${services.title} | ${business.name} | ${business.city}, ${stateCode}`,
    description: `${services.subtitle} — ${business.name} serving ${business.city}, ${stateCode}. ${business.tagline}`,
  }
}

const config = getConfig()

export default function ServicesPage() {
  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{config.services.title}</h1>
          <p className="text-gray-500 text-lg">{config.services.subtitle}</p>
        </div>
      </section>
      <Services services={config.services} nav={config.nav} hideHeader />
    </>
  )
}
