import type { Metadata } from "next"
import { getConfig } from "@/config"
import { BookingClient } from "@/components/sections/BookingClient"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  return {
    title: `Book an Appointment | ${business.name}`,
    description: `Schedule your appointment at ${business.name} in ${business.city}, ${business.state}. Choose a service, pick a time, and book online.`,
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

  return (
    <>
      <section className="bg-accent py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.booking.title ?? "Book an Appointment"}
          </h1>
          <p className="text-gray-500 text-lg">
            {config.booking.subtitle ?? "Choose a service and pick a time that works for you."}
          </p>
        </div>
      </section>
      <BookingClient booking={config.booking} business={config.business} />
    </>
  )
}
