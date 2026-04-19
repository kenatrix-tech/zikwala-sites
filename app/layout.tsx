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
  ...(features.vehicleListings && (config.vehicles || config.sellerSlug)
    ? [{ label: "Inventory", href: "/vehicles" }]
    : []),
  // Standard+ real estate: dynamic property listings page
  ...(features.propertyListings && config.business.niche === "realestate" && (config.properties || config.sellerSlug)
    ? [{ label: "Properties", href: "/properties" }]
    : []),
  // Standard+ non-realestate: generic listings page
  ...(features.propertyListings && config.business.niche !== "realestate" && (config.properties || config.sellerSlug)
    ? [{ label: "Listings", href: "/properties" }]
    : []),
  // Basic real estate: sold listings portfolio (no feature gate — always visible)
  ...(!features.propertyListings && config.business.niche === "realestate" && config.soldListings
    ? [{ label: "Sold Listings", href: "/sold" }]
    : []),
  ...(features.productListings && (config.products || config.sellerSlug)
    ? [{ label: config.business.niche === "restaurant" ? "Menu" : "Shop", href: "/products" }]
    : []),
  ...(config.catering
    ? [{ label: "Catering", href: "/catering" }]
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

  // Site is blocked — show nothing, no design visible
  if (config.isActive === false) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm">This site is not available.</p>
          </div>
        </body>
      </html>
    )
  }

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
