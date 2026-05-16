import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { PropertySubmitClient } from "@/components/sections/PropertySubmitClient"

export default function SubmitPropertyPage() {
  const config = getConfig()
  if (!config.sellerSlug) redirect("/")

  const apiBase = (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")

  return (
    <div className="bg-white min-h-screen">
      <PropertySubmitClient
        sellerSlug={config.sellerSlug}
        agentName={config.business.name}
        apiBase={apiBase}
      />
    </div>
  )
}
