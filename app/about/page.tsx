import type { Metadata } from "next"
import { getConfig } from "@/config"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { getFeatures } from "@/lib/features"

const config = getConfig()
const features = getFeatures(config.tier)

const nicheLabels: Record<string, string> = {
  realestate:   "Real Estate Agent",
  lawfirm:      "Law Office",
  restaurant:   "Restaurant",
  bakery:       "Bakery",
  beauty:       "Beauty Salon",
  cleaning:     "Cleaning Service",
  autorepair:   "Auto Repair Shop",
  cardealership:"Car Dealership",
  hvac:         "HVAC Service",
  electrical:   "Electrician",
  plumbing:     "Plumbing Service",
  painting:     "Painting Service",
  handyman:     "Handyman Service",
  catering:     "Catering Service",
  photography:  "Photography Studio",
  tutor:        "Tutoring Service",
  insurance:    "Insurance Agency",
  babysitting:  "Childcare Service",
  eventplanning:"Event Planning",
  decoration:   "Decoration Service",
  boutique:     "Boutique",
  tax:          "Tax Service",
}

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  const stateCode = business.state.split(" ")[0]
  const nicheLabel = nicheLabels[business.niche] ?? "Local Business"
  return {
    title: `About ${business.name} | ${nicheLabel} | ${business.city}, ${stateCode}`,
    description: `Meet the team behind ${business.name} — ${business.tagline}. Proudly serving ${business.city}, ${stateCode} and surrounding areas.`,
  }
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-accent py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.about.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.business.tagline}</p>
        </div>
      </section>

      <About about={config.about} />

      {features.testimonials && config.testimonials && (
        <Testimonials testimonials={config.testimonials} googleReviewUrl={config.googleReviewUrl} />
      )}
    </>
  )
}
