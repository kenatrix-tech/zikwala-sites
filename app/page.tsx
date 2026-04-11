import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Stats } from "@/components/sections/Stats"
import { Testimonials } from "@/components/sections/Testimonials"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"

export default function HomePage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  return (
    <>
      <Hero hero={config.hero} business={config.business} />

      <Services services={config.services} nav={config.nav} />

      {features.stats && config.stats && (
        <Stats stats={config.stats} />
      )}

      {features.testimonials && config.testimonials && (
        <Testimonials testimonials={config.testimonials} />
      )}

      <About about={config.about} />

      <Contact contact={config.contact} business={config.business} />
    </>
  )
}
