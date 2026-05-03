import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Gallery } from "@/components/sections/Gallery"
import { SoldListings } from "@/components/sections/SoldListings"
import { Stats } from "@/components/sections/Stats"
import { Testimonials } from "@/components/sections/Testimonials"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { MortgageCalculator } from "@/components/sections/MortgageCalculator"
import { HomeValuation } from "@/components/sections/HomeValuation"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { AreasServed } from "@/components/sections/AreasServed"
import { FAQ } from "@/components/sections/FAQ"
import { VehicleListings } from "@/components/sections/VehicleListings"
import { PropertyListings } from "@/components/sections/PropertyListings"
import { ProductListings } from "@/components/sections/ProductListings"
import { ShopFeaturedGrid } from "@/components/sections/ShopFeaturedGrid"
import { Packages } from "@/components/sections/Packages"
import { HighlightStrip } from "@/components/sections/HighlightStrip"

export default function HomePage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  // ── Shop layout: product-based businesses with a sellerSlug ──────────────
  // Excludes realestate and cardealership which have their own layouts (future).
  if (
    config.sellerSlug &&
    config.business.niche !== "realestate" &&
    config.business.niche !== "cardealership"
  ) {
    return (
      <>
        <Hero hero={config.hero} business={config.business} />

        <ShopFeaturedGrid
          sellerSlug={config.sellerSlug}
          business={config.business}
          storefrontFilter={config.storefrontFilter}
          fallback={{
            title: config.products?.title,
            subtitle: config.products?.subtitle,
          }}
        />

        {features.stats && config.stats && (
          <Stats stats={config.stats} />
        )}

        <About about={config.about} />

        {features.testimonials && config.testimonials && (
          <Testimonials testimonials={config.testimonials} googleReviewUrl={config.googleReviewUrl} />
        )}

        <Contact contact={config.contact} business={config.business} />
      </>
    )
  }

  // ── Service layout (existing, all non-shop clients unchanged) ────────────
  return (
    <>
      <Hero hero={config.hero} business={config.business} />

      {config.hero.trustPoints && config.hero.trustPoints.length > 0 && (
        <HighlightStrip trustPoints={config.hero.trustPoints} />
      )}

      <Services services={config.services} />

      {features.vehicleListings && config.vehicles && (
        <VehicleListings vehicles={config.vehicles} business={config.business} preview />
      )}

      {features.propertyListings && config.properties && (
        <PropertyListings properties={config.properties} business={config.business} preview />
      )}

      {features.productListings && config.products && (
        <ProductListings products={config.products} business={config.business} preview />
      )}

      {features.gallery && config.gallery && !config.soldListings && (
        <Gallery gallery={config.gallery} />
      )}

      {features.gallery && config.soldListings && (
        <SoldListings soldListings={config.soldListings} business={config.business} preview />
      )}

      {features.stats && config.stats && (
        <Stats stats={config.stats} />
      )}

      {features.testimonials && config.testimonials && (
        <Testimonials testimonials={config.testimonials} googleReviewUrl={config.googleReviewUrl} />
      )}

      {config.howItWorks && <HowItWorks />}

      <About about={config.about} />

      {config.homeValuation && (
        <HomeValuation business={config.business} contact={config.contact} />
      )}

      {config.mortgageCalculator && config.business.niche === "realestate" && (
        <MortgageCalculator nav={config.nav} business={config.business} />
      )}

      {config.areasServed && config.areasServed.length > 0 && (
        <AreasServed areasServed={config.areasServed} business={config.business} />
      )}

      {config.packages && (
        <Packages packages={config.packages} nav={config.nav} />
      )}

      {config.faq && config.faq.length > 0 && (
        <FAQ faq={config.faq} />
      )}

      <Contact contact={config.contact} business={config.business} />
    </>
  )
}
