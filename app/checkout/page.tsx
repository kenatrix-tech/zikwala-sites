import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { CheckoutClient } from "@/components/sections/CheckoutClient"

export default function CheckoutPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  const hasPayment = features.payment && config.payment?.enabled && config.payment.stripeConnectedAccountId

  if (!hasPayment && config.isLive) {
    redirect("/products")
  }

  return (
    <CheckoutClient
      stripeConnectedAccountId={config.payment?.stripeConnectedAccountId ?? ""}
      currency={config.payment?.currency ?? "usd"}
      sellerSlug={config.sellerSlug}
      businessName={config.business.name}
      isDemo={!hasPayment}
    />
  )
}
