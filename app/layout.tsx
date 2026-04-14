import type { Metadata } from "next"
// @ts-ignore: Allow side-effect import of CSS without type declarations
import "./globals.css"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { buildThemeVars, getFontUrl } from "@/lib/theme"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { DemoBanner } from "@/components/layout/DemoBanner"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

const config = getConfig()
const features = getFeatures(config.tier)

// Auto-inject listing pages into nav based on active features + data
const listingLinks: { label: string; href: string }[] = [
  ...(features.vehicleListings && config.vehicles
    ? [{ label: "Inventory", href: "/vehicles" }]
    : []),
  ...(features.propertyListings && config.properties
    ? [{ label: "Listings", href: "/properties" }]
    : []),
]

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords,
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeVars = buildThemeVars(config.theme)
  const fontUrl = getFontUrl(config.theme.font)

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontUrl} rel="stylesheet" />
      </head>
      <body style={themeVars}>
        {config.isDemo && (
          <DemoBanner businessName={config.business.name} />
        )}
        <Navbar business={config.business} nav={config.nav} extraLinks={listingLinks} />
        <main>{children}</main>
        <Footer
          business={config.business}
          nav={config.nav}
          social={config.social}
        />
        <WhatsAppButton
          phone={config.business.phone}
          message={`Hi, I'm interested in ${config.business.name}'s services.`}
        />
      </body>
    </html>
  )
}
