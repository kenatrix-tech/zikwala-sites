import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { CheckoutClient } from "@/components/sections/CheckoutClient"

export default function CheckoutPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.payment || !config.payment?.enabled || !config.payment.stripeConnectedAccountId) {
    redirect("/products")
  }

  return (
    <CheckoutClient
      stripeConnectedAccountId={config.payment.stripeConnectedAccountId}
      currency={config.payment.currency ?? "usd"}
      sellerSlug={config.sellerSlug}
      businessName={config.business.name}
    />
  )
}
