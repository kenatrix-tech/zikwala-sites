import type { Metadata } from "next"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { Contact } from "@/components/sections/Contact"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  const stateCode = business.state.split(" ")[0]
  return {
    title: `Contact ${business.name} | ${business.city}, ${stateCode}`,
    description: `Contact ${business.name} in ${business.city}, ${stateCode}. Call, email, or send a message — we respond within 24 hours.`,
  }
}

const config   = getConfig()
const features = getFeatures(config.tier)

export default function ContactPage() {
  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.contact.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.contact.subtitle}</p>
        </div>
      </section>

      <Contact contact={config.contact} business={config.business} whatsappInquiry={features.whatsappInquiry} />
    </>
  )
}
