import type { Metadata } from "next"
import { getConfig } from "@/config"

export function generateMetadata(): Metadata {
  const { business } = getConfig()
  return {
    title: `Privacy Policy | ${business.name}`,
    description: `Privacy policy for ${business.name}. Learn how we collect, use, and protect your personal information.`,
  }
}

export default function PrivacyPage() {
  const { business } = getConfig()
  const effectiveDate = "January 1, 2025"

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Effective date: {effectiveDate}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-sm leading-relaxed text-gray-600">

          <section>
            <p>
              {business.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              personal information. This Privacy Policy explains what information we collect, how we use
              it, and your rights regarding that information when you visit our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect information you voluntarily provide when you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Submit our contact or inquiry form (name, email address, phone number, message)</li>
              <li>Contact us via WhatsApp or phone to place an order</li>
              <li>Email us directly</li>
            </ul>
            <p className="mt-3">
              We do not automatically collect cookies, tracking data, or browsing behavior beyond
              standard web server logs (IP address, browser type, pages visited).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect solely to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your inquiries and process your orders</li>
              <li>Communicate with you about products, services, or bookings</li>
              <li>Provide customer support</li>
              <li>Improve our services based on feedback</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">3. Third-Party Services</h2>
            <p className="mb-3">
              Our website uses the following third-party services that may process limited data:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>WhatsApp (Meta)</strong> — when you click &quot;Order on WhatsApp,&quot; you are
                redirected to WhatsApp. Your use of WhatsApp is governed by{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                   className="text-primary underline">Meta&apos;s Privacy Policy</a>.
              </li>
              <li>
                <strong>Google Maps</strong> — we may embed Google Maps on our contact page, which is
                governed by{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                   className="text-primary underline">Google&apos;s Privacy Policy</a>.
              </li>
              <li>
                <strong>Email providers</strong> — inquiry form submissions are delivered to our business
                email. Your message is handled according to standard email security practices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">4. Data Retention</h2>
            <p>
              We retain your contact information only as long as necessary to fulfill your request or
              maintain a business relationship with you. You may request deletion of your data at any
              time by contacting us at{" "}
              <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We take reasonable precautions to protect your information. However, no method of
              transmission over the internet is 100% secure. We cannot guarantee absolute security
              of data transmitted to us.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">6. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected such
              information, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of any future communications from us</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated effective date. Continued use of our website after changes constitutes
              your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
