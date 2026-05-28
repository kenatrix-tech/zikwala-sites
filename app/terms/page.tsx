import type { Metadata } from "next"
import { getConfig } from "@/config"
import type { Niche } from "@/config/types"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  return {
    title: `Terms of Service | ${business.name}`,
    description: `Terms of service for ${business.name}. Please read these terms carefully before using our services.`,
  }
}

// ─── Niche groups ────────────────────────────────────────────────────────────
const SERVICE_BOOKING_NICHES: Niche[] = [
  "beauty", "photography", "decoration", "eventplanning",
  "hvac", "autorepair", "plumbing", "handyman", "painting",
  "electrical", "babysitting", "cleaning",
]
const FOOD_NICHES: Niche[] = ["restaurant", "catering", "bakery"]
const PROFESSIONAL_NICHES: Niche[] = ["tax", "tutor", "insurance"]

type TermsProps = { businessName: string; email: string; phone: string }

// ─── Real Estate ─────────────────────────────────────────────────────────────
function RealEstateTerms({ businessName }: { businessName: string }) {
  return (
    <>
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">1. Nature of Services</h2>
        <p>
          {businessName} provides real estate brokerage services including buyer representation, seller
          representation, property search assistance, and general real estate consultation. This website
          is for informational purposes only and does not constitute a binding agreement or guarantee of
          services until a formal representation agreement is signed.
        </p>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">2. No Guarantee of Results</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Property listings, pricing, and availability are subject to change without notice and are not guaranteed to be accurate or current.</li>
          <li>Past sales performance and statistics reflect historical results and do not guarantee future outcomes.</li>
          <li>Market conditions, financing, inspections, and third-party factors outside our control may affect any real estate transaction.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">3. Consultations and Representation</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Initial consultations do not establish an agency relationship. A formal written representation agreement is required before {businessName} acts as your agent.</li>
          <li>Agent compensation is governed by the applicable representation agreement and is typically paid at closing.</li>
          <li>You are free to work with other agents until a signed exclusive agreement is in place.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">4. Not Legal or Financial Advice</h2>
        <p>
          Nothing on this website constitutes legal, tax, financial, or investment advice. You are
          encouraged to consult a licensed attorney, accountant, or financial advisor for matters
          related to your real estate transaction.
        </p>
      </section>
    </>
  )
}

// ─── Law Firm ─────────────────────────────────────────────────────────────────
function LawFirmTerms({ businessName }: { businessName: string }) {
  return (
    <>
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">1. Nature of Services</h2>
        <p>
          {businessName} provides legal services pursuant to formal engagement agreements. This website
          is for informational purposes only and does not constitute legal advice or establish an
          attorney-client relationship.
        </p>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">2. No Attorney-Client Relationship</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Submitting a contact form, calling, or emailing us does not create an attorney-client relationship. A relationship is established only upon a signed engagement agreement and receipt of any required retainer.</li>
          <li>Do not submit confidential or time-sensitive information through this website before an engagement is established.</li>
          <li>If you have a legal emergency or imminent deadline, please contact our office directly by phone.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">3. Consultations and Fees</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Initial consultations may be subject to a fee, which will be disclosed prior to scheduling. Free consultations, where offered, are limited in scope and do not constitute full legal advice.</li>
          <li>Legal fees, retainer requirements, and billing arrangements are set forth in the written engagement agreement.</li>
          <li>{businessName} reserves the right to decline representation at its sole discretion, including due to conflicts of interest.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">4. No Guarantee of Outcome</h2>
        <p>
          Nothing on this website constitutes a guarantee or prediction of the outcome of any legal
          matter. Prior results do not guarantee similar outcomes in future cases.
        </p>
      </section>
    </>
  )
}

// ─── Service + Booking (salon, HVAC, photography, decoration, auto-repair, etc.)
function ServiceBookingTerms({ businessName, email, phone }: TermsProps) {
  return (
    <>
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">1. Nature of Services</h2>
        <p>
          {businessName} provides professional services booked by appointment. This website facilitates
          inquiries and scheduling. All service agreements are finalized through direct communication
          via phone, WhatsApp, or email prior to the appointment.
        </p>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">2. Appointments and Deposits</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Some services require a deposit to secure your appointment. Deposit amount and terms will be confirmed at the time of booking.</li>
          <li>Appointments are confirmed only after direct communication with us. Submitting a contact form does not guarantee availability.</li>
          <li>We reserve the right to decline or reschedule any appointment at our discretion with reasonable notice.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">3. Cancellations and Refunds</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cancellations made less than 24 hours before the scheduled appointment may forfeit any deposit paid.</li>
          <li>Refund requests must be submitted within 48 hours of the service date by contacting us at{" "}
            <a href={`mailto:${email}`} className="text-primary underline">{email}</a> or{" "}
            <a href={`tel:${phone}`} className="text-primary underline">{phone}</a>.
          </li>
          <li>We reserve the right to reschedule due to circumstances beyond our control (weather, equipment failure, emergencies) with reasonable notice.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">4. Pricing</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All prices displayed are in US Dollars and are subject to change without notice.</li>
          <li>Final pricing is confirmed during the booking conversation and may vary based on scope, materials, or complexity.</li>
          <li>Payment is accepted via cash, Zelle, CashApp, card, or other methods agreed upon at time of booking.</li>
        </ul>
      </section>
    </>
  )
}

// ─── Food & Beverage (restaurant, catering, bakery) ──────────────────────────
function FoodTerms({ businessName, email, phone }: TermsProps) {
  return (
    <>
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">1. Nature of Services</h2>
        <p>
          {businessName} provides food and beverage products and services. Orders, reservations, and
          catering inquiries are finalized through direct communication via phone, WhatsApp, or email.
        </p>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">2. Orders and Payment</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All prices are in US Dollars and are subject to change without notice. Menu items and availability may vary.</li>
          <li>Orders are confirmed only after direct communication with us. Submitting a form does not guarantee order placement.</li>
          <li>Payment is accepted via cash, Zelle, CashApp, card, or other methods confirmed at the time of order.</li>
          <li>Large or custom orders (catering, event packages) may require a deposit. Terms are confirmed at time of booking.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">3. Cancellations and Refunds</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Due to the perishable nature of food products, all sales are final once an order is prepared or delivered.</li>
          <li>If your order is incorrect or does not meet what was agreed upon, contact us within 24 hours at{" "}
            <a href={`mailto:${email}`} className="text-primary underline">{email}</a> or{" "}
            <a href={`tel:${phone}`} className="text-primary underline">{phone}</a>.
          </li>
          <li>Catering cancellations made less than 72 hours before the event may forfeit the deposit.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">4. Allergens and Dietary Information</h2>
        <p>
          While we take care in preparing food, we cannot guarantee that any item is completely free of
          allergens. Please inform us of any dietary restrictions or allergies when placing your order.
          {businessName} is not liable for allergic reactions resulting from undisclosed dietary needs.
        </p>
      </section>
    </>
  )
}

// ─── Professional Services (tax, tutor, insurance) ───────────────────────────
function ProfessionalTerms({ businessName, email, phone }: TermsProps) {
  return (
    <>
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">1. Nature of Services</h2>
        <p>
          {businessName} provides professional consulting and advisory services. This website is for
          informational purposes only. A formal engagement is required before services are rendered.
        </p>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">2. No Guarantee of Outcome</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Information provided on this website is general in nature and does not constitute professional tax, financial, or academic advice tailored to your individual situation.</li>
          <li>Results depend on individual circumstances and factors outside our control. Past results do not guarantee future outcomes.</li>
          <li>You are encouraged to verify any information independently and consult additional professionals as needed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">3. Consultations and Fees</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Initial consultations may be offered at no cost or subject to a fee disclosed prior to scheduling.</li>
          <li>Service fees, payment schedules, and scope of work are confirmed in writing before services begin.</li>
          <li>Payment is accepted via cash, check, Zelle, or other methods agreed upon at time of engagement.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">4. Cancellations and Refunds</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Appointment cancellations with less than 24 hours notice may be subject to a cancellation fee.</li>
          <li>Refund requests for completed services are evaluated on a case-by-case basis. Contact us at{" "}
            <a href={`mailto:${email}`} className="text-primary underline">{email}</a> or{" "}
            <a href={`tel:${phone}`} className="text-primary underline">{phone}</a>.
          </li>
        </ul>
      </section>
    </>
  )
}

// ─── Retail (boutique, car dealership) ───────────────────────────────────────
function RetailTerms({ businessName, email, phone }: TermsProps) {
  return (
    <>
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">1. Nature of Services</h2>
        <p>
          {businessName} provides product listings and sales facilitation through our website. All
          purchases are finalized through direct communication via WhatsApp, phone, or email.
        </p>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">2. Orders and Payment</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All prices are in US Dollars and are subject to change without notice.</li>
          <li>Orders are confirmed only after direct communication with us. Listing an item does not constitute a binding offer or guarantee of availability.</li>
          <li>Payment is accepted via cash, Zelle, CashApp, card, or other methods agreed upon at the time of order.</li>
          <li>We reserve the right to cancel any order at our discretion, in which case any payment received will be refunded in full.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">3. Returns and Refunds</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All sales are final unless the item received is materially different from what was described or agreed upon.</li>
          <li>Return or exchange requests must be submitted within 48 hours of receiving your item by contacting us at{" "}
            <a href={`mailto:${email}`} className="text-primary underline">{email}</a> or{" "}
            <a href={`tel:${phone}`} className="text-primary underline">{phone}</a>.
          </li>
          <li>Custom or personalized items are non-refundable unless defective.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">4. Product Availability</h2>
        <p>
          Product listings on this website are for informational purposes and may not reflect real-time
          availability. We make no guarantee that any listed item will be available at the time of your
          inquiry.
        </p>
      </section>
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TermsPage() {
  const config = getConfig()
  const { business } = config
  const effectiveDate = config.launchDate ?? "January 1, 2025"
  const niche = business.niche
  const props: TermsProps = { businessName: business.name, email: business.email, phone: business.phone }

  const nicheSection =
    niche === "realestate"                     ? <RealEstateTerms businessName={business.name} /> :
    niche === "lawfirm"                        ? <LawFirmTerms businessName={business.name} /> :
    (SERVICE_BOOKING_NICHES as Niche[]).includes(niche) ? <ServiceBookingTerms {...props} /> :
    (FOOD_NICHES as Niche[]).includes(niche)            ? <FoodTerms {...props} /> :
    (PROFESSIONAL_NICHES as Niche[]).includes(niche)    ? <ProfessionalTerms {...props} /> :
                                                          <RetailTerms {...props} />

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

          {nicheSection}

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and photos — is the property
              of {business.name} or its content suppliers and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or use any content without our written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided &quot;as is&quot; without warranties of any kind,
              express or implied. We do not warrant that the website will be uninterrupted, error-free,
              or free of harmful components. Information on this site is subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {business.name} shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of this
              website or our services. Our total liability to you for any claim shall not exceed the
              amount you paid for the service in question.
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
              <p>Email:{" "}
                <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a>
              </p>
              <p>Phone:{" "}
                <a href={`tel:${business.phone}`} className="text-primary underline">{business.phone}</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
