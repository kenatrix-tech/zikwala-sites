import type { Metadata } from "next"
import { getConfig } from "@/config"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  return {
    title: `Terms of Service | ${business.name}`,
    description: `Terms of service for ${business.name}. Please read these terms carefully before using our services.`,
  }
}

export default function TermsPage() {
  const { business } = getConfig()
  const effectiveDate = "January 1, 2025"

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        <h1 className="text-3xl font-black text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-10">Effective date: {effectiveDate}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-sm leading-relaxed text-gray-600">

          <section>
            <p>
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using the website
              operated by {business.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing
              or using our website, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">1. Services</h2>
            <p>
              {business.name} provides product listings, service information, and contact facilitation
              through our website. All orders and service bookings are finalized through direct
              communication via WhatsApp, phone, or email — not through automated checkout on this site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">2. Orders and Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                All prices displayed are in US Dollars (USD) and are subject to change without notice.
              </li>
              <li>
                Orders are confirmed only after direct communication with us via WhatsApp or phone.
                Listing an item on our website does not constitute a binding offer or guarantee of
                availability.
              </li>
              <li>
                Payment is accepted via cash, Zelle, CashApp, or other methods agreed upon at the time
                of order. Payment terms are confirmed during the order conversation.
              </li>
              <li>
                We reserve the right to cancel any order at our discretion, in which case any payment
                received will be refunded in full.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">3. Returns and Refunds</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                All sales are final unless the item received is materially different from what was
                described or agreed upon.
              </li>
              <li>
                Refund or exchange requests must be submitted within 48 hours of receiving your order
                by contacting us at{" "}
                <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a>{" "}
                or{" "}
                <a href={`tel:${business.phone}`} className="text-primary underline">{business.phone}</a>.
              </li>
              <li>
                Custom, personalized, or made-to-order items are non-refundable unless defective.
              </li>
              <li>
                We are not responsible for items damaged after delivery or items returned without
                prior authorization.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">4. Service Bookings</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Service bookings (e.g., event decoration) require a deposit to secure your date.
                Deposit terms are confirmed at time of booking.
              </li>
              <li>
                Cancellations made less than 72 hours before the scheduled service date may forfeit
                the deposit.
              </li>
              <li>
                We reserve the right to reschedule services due to circumstances beyond our control
                (weather, emergencies, etc.) with reasonable notice.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and product photos — is the
              property of {business.name} or its content suppliers and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or use any content from
              this site without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided &quot;as is&quot; without warranties of any kind,
              express or implied. We do not warrant that the website will be uninterrupted, error-free,
              or free of viruses or other harmful components. Product availability and pricing are
              subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {business.name} shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of this
              website or our products and services. Our total liability to you for any claim shall not
              exceed the amount you paid for the product or service in question.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party platforms such as WhatsApp and Google Maps.
              These links are provided for convenience only. We are not responsible for the content,
              privacy practices, or terms of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of {business.state.split(" ")[0]},
              United States, without regard to its conflict of law provisions. Any disputes arising
              from these Terms shall be resolved in the courts located in {business.city},{" "}
              {business.state}.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">10. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this
              page with an updated effective date. Continued use of our website following any changes
              constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>{business.name}</strong></p>
              <p>{business.city}, {business.state}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a>
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${business.phone}`} className="text-primary underline">{business.phone}</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
