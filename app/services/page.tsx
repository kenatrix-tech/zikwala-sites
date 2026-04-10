import type { Metadata } from "next"
import { getConfig } from "@/config"
import { Services } from "@/components/sections/Services"
import { Contact } from "@/components/sections/Contact"

const config = getConfig()

export const metadata: Metadata = {
  title: `Services | ${config.business.name}`,
  description: `Explore all services offered by ${config.business.name} in ${config.business.city}, ${config.business.state}.`,
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.services.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.services.subtitle}</p>
        </div>
      </section>

      <Services services={config.services} />

      <Contact contact={config.contact} business={config.business} />
    </>
  )
}
