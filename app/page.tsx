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
import { Packages } from "@/components/sections/Packages"

export default function HomePage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  return (
    <>
      <Hero hero={config.hero} business={config.business} />

      <Services services={config.services} nav={config.nav} />

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
