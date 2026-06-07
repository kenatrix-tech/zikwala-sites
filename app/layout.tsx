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
import { CartProvider } from "@/lib/cart"
import { CartDrawer } from "@/components/ui/CartDrawer"
import { ChatWidget } from "@/components/ui/ChatWidget"
import { buildChatPrompt } from "@/lib/buildChatPrompt"

const config = getConfig()
const features = getFeatures(config.tier)
const hasProducts = !!(config.products || config.sellerSlug) &&
  !["realestate", "cardealership"].includes(config.business.niche)
const paymentEnabled = features.payment && hasProducts && config.business.niche !== "restaurant"

// Auto-inject listing pages into nav based on active features + data.
// Skip any href already present in the manual nav to avoid duplicates.
const manualNavHrefs = new Set(config.nav.links.map(l => l.href))
const manualNavPaths = new Set(config.nav.links.map(l => l.href.split("?")[0]))

const listingLinks: { label: string; href: string }[] = [
  // Vehicle inventory — cardealership niche only
  ...(features.vehicleListings && config.business.niche === "cardealership" && (config.vehicles || config.sellerSlug)
    ? [{ label: "Inventory", href: "/vehicles" }]
    : []),
  // Property listings — realestate niche only; skip if nav already has any /properties link (with or without query params)
  ...(features.propertyListings && config.business.niche === "realestate" && (config.properties || config.sellerSlug) && !manualNavPaths.has("/properties")
    ? [{ label: "Properties", href: "/properties" }]
    : []),
  // Sold listings portfolio — basic real estate only
  ...(!features.propertyListings && config.business.niche === "realestate" && config.soldListings && !manualNavHrefs.has("/sold")
    ? [{ label: "Sold Listings", href: "/sold" }]
    : []),
  // Shop / Menu — product-based businesses; skip realestate/cardealership (they use /properties and /vehicles)
  ...(features.productListings &&
    !["realestate", "cardealership"].includes(config.business.niche) &&
    (config.products || config.sellerSlug) &&
    !manualNavHrefs.has("/products")
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
  ...(config.isLive !== true && { robots: { index: false, follow: false } }),
  icons: {
    icon: config.business.logo,
    apple: config.business.logo,
  },
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    images: [{ url: config.seo.ogImage, width: 1200, height: 630, alt: config.seo.title }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [{ url: config.seo.ogImage, width: 1200, height: 630, alt: config.seo.title }],
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

  const defaultDark = config.theme.darkMode
  const allowDarkMode = config.theme.allowDarkMode !== false

  return (
    <html lang="en" style={themeVars}>
      <head>
        {/* Anti-flash: apply dark class before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var a=${allowDarkMode ? "true" : "false"};var d=${defaultDark ? "true" : "false"};if(!a){if(d)document.documentElement.classList.add('dark');return;}var s=localStorage.getItem('theme');if(s?s==='dark':d)document.documentElement.classList.add('dark')}catch(e){}})()` }} />
        {/* Establish CDN connection before any resource is requested — biggest LCP win */}
        <link rel="preconnect" href="https://cdn.zikwala.com" />
        {/* Preload hero image early — static export skips Next.js preload injection */}
        <link rel="preload" as="image" href={config.hero.image} fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={fontUrl} />
        <link href={fontUrl} rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ({
              realestate:   "RealEstateAgent",
              lawfirm:      "LegalService",
              restaurant:   "Restaurant",
              bakery:       "Bakery",
              beauty:       "BeautySalon",
              cleaning:     "HomeAndConstructionBusiness",
              autorepair:   "AutoRepair",
              cardealership:"AutoDealer",
              hvac:         "HomeAndConstructionBusiness",
              electrical:   "Electrician",
              plumbing:     "Plumber",
              painting:     "HomeAndConstructionBusiness",
              handyman:     "HomeAndConstructionBusiness",
              catering:     "FoodEstablishment",
              photography:  "Photographer",
              tutor:        "EducationalOrganization",
              insurance:    "InsuranceAgency",
              babysitting:  "LocalBusiness",
              eventplanning:"EventVenue",
              decoration:   "HomeAndConstructionBusiness",
              boutique:     "ClothingStore",
              tax:          "AccountingService",
            } as Record<string, string>)[config.business.niche] ?? "LocalBusiness",
            "name": config.business.name,
            "description": config.seo.description,
            "telephone": config.business.phone,
            "email": config.business.email,
            "image": config.seo.ogImage,
            "url": process.env.NEXT_PUBLIC_SITE_URL ?? "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": config.business.address,
              "addressLocality": config.business.city,
              "addressRegion": config.business.state,
              "addressCountry": "US",
            },
            ...(config.business.niche === "restaurant" || config.business.niche === "bakery" || config.business.niche === "catering"
              ? { "servesCuisine": config.business.tagline }
              : {}),
            ...(config.social && Object.values(config.social).some(Boolean)
              ? { "sameAs": Object.values(config.social).filter(Boolean) }
              : {}),
            ...(config.areasServed && config.areasServed.length > 0
              ? { "areaServed": config.areasServed.map(a => ({ "@type": "City", "name": a.name })) }
              : {}),
            ...(config.testimonials && config.testimonials.items.length > 0
              ? {
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": (config.testimonials.items.reduce((s, t) => s + t.rating, 0) / config.testimonials.items.length).toFixed(1),
                    "reviewCount": config.testimonials.items.length,
                    "bestRating": 5,
                    "worstRating": 1,
                  }
                }
              : {}),
          })}}
        />
        {config.faq && config.faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": config.faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer,
                },
              })),
            })}}
          />
        )}
      </head>
      <body>
        <CartProvider>
          {config.isDemo && (
            <DemoBanner businessName={config.business.name} />
          )}
          <Navbar business={config.business} nav={config.nav} extraLinks={listingLinks} defaultDark={defaultDark} allowDarkMode={allowDarkMode} paymentEnabled={paymentEnabled} />
          <main>{children}</main>
          <Footer
            business={config.business}
            nav={config.nav}
            social={config.social}
          />
          <WhatsAppButton
            phone={config.business.phone}
            message={`Hi, I'm interested in ${config.business.name}'s services.`}
            mode={config.stickyContact ?? "both"}
          />
          {paymentEnabled && <CartDrawer />}
          {config.features?.liveChat && (
            <ChatWidget
              systemPrompt={buildChatPrompt(config)}
              businessName={config.business.name}
              apiBase={process.env.NEXT_PUBLIC_AI_MOCK === "true" ? "mock" : (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com")}
            />
          )}
        </CartProvider>
      </body>
    </html>
  )
}
