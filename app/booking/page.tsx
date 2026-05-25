import type { Metadata } from "next"
import { getConfig } from "@/config"
import { BookingClient } from "@/components/sections/BookingClient"
import { ReservationClient } from "@/components/sections/ReservationClient"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  const isRestaurant = business.niche === "restaurant"
  return {
    title: isRestaurant ? `Reserve a Table | ${business.name}` : `Book an Appointment | ${business.name}`,
    description: isRestaurant
      ? `Reserve a table at ${business.name} in ${business.city}, ${business.state}. Pick your party size, date, and time.`
      : `Schedule your appointment at ${business.name} in ${business.city}, ${business.state}. Choose a service, pick a time, and book online.`,
  }
}

export default function BookingPage() {
  const config = getConfig()

  if (!config.booking) {
    return (
      <section className="py-32 text-center">
        <p className="text-gray-500">Booking is not available.</p>
      </section>
    )
  }

  const isRestaurant = config.business.niche === "restaurant"

  return (
    <>
      <section className="bg-accent py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.booking.title ?? (isRestaurant ? "Reserve a Table" : "Book an Appointment")}
          </h1>
          <p className="text-gray-500 text-lg">
            {config.booking.subtitle ?? (isRestaurant ? "Choose your party size, date, and time." : "Choose a service and pick a time that works for you.")}
          </p>
        </div>
      </section>

      {isRestaurant
        ? <ReservationClient booking={config.booking} business={config.business} isLive={config.isLive} />
        : <BookingClient booking={config.booking} business={config.business} sellerSlug={config.sellerSlug} isLive={config.isLive} isDemo={config.isDemo} />
      }
    </>
  )
}
