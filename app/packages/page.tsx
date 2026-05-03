import type { Metadata } from "next"
import { getConfig } from "@/config"
import { Packages } from "@/components/sections/Packages"
import { Contact } from "@/components/sections/Contact"
import { redirect } from "next/navigation"

export function generateMetadata(): Metadata {
  const { business, packages } = getConfig()
  const stateCode = business.state.split(" ")[0]
  return {
    title: `${packages?.title ?? "Packages"} | ${business.name} | ${business.city}, ${stateCode}`,
    description: `${packages?.subtitle ?? "View our packages and pricing"} — ${business.name} serving ${business.city}, ${stateCode}.`,
  }
}

const config = getConfig()

export default function PackagesPage() {
  if (!config.packages) redirect("/")

  return (
    <>
      <section className="bg-accent py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.packages.title}
          </h1>
          {config.packages.subtitle && (
            <p className="text-gray-500 text-lg">{config.packages.subtitle}</p>
          )}
        </div>
      </section>

      <Packages packages={config.packages} nav={config.nav} hideHeader />

      <Contact contact={config.contact} business={config.business} />
    </>
  )
}
