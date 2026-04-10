import type { Metadata } from "next"
import { getConfig } from "@/config"
import { Contact } from "@/components/sections/Contact"

const config = getConfig()

export const metadata: Metadata = {
  title: `Contact | ${config.business.name}`,
  description: `Get in touch with ${config.business.name} in ${config.business.city}, ${config.business.state}.`,
}

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

      <Contact contact={config.contact} business={config.business} />
    </>
  )
}
