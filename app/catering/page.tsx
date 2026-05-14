import type { Metadata } from "next"
import { getConfig } from "@/config"
import { redirect } from "next/navigation"
import { CateringClient } from "@/components/sections/CateringClient"

export function generateMetadata(): Metadata {
  const { business, catering } = getConfig()
  const stateCode = business.state.split(" ")[0]
  return {
    title: `${catering?.title ?? "Catering"} | ${business.name} | ${business.city}, ${stateCode}`,
    description: `${catering?.subtitle ?? `Professional catering services by ${business.name}`} in ${business.city}, ${stateCode}. ${business.tagline}`,
  }
}

export default function CateringPage() {
  const config = getConfig()
  if (!config.catering) redirect("/")

  return (
    <div className="bg-white">
      <CateringClient
        catering={config.catering}
        business={config.business}
        contact={config.contact}
      />
    </div>
  )
}
