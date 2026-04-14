import type { Metadata } from "next"
import { CheckCircle2, ArrowRight, Star, Zap, Phone } from "lucide-react"
import { getConfig } from "@/config"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Get Your Professional Website | Zikwala",
  description:
    "Professional websites for small businesses. Setup in 3–5 days. We handle everything — domain, SSL, hosting, updates.",
  robots: { index: false }, // don't let Google index this page
}

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    setupFee: 399,
    monthly: 19,
    description: "Professional online presence. Everything you need to be found and contacted.",
    highlight: false,
    features: [
      "Home, Services, About & Contact pages",
      "WhatsApp contact button",
      "SSL certificate + domain setup",
      "Mobile & tablet responsive",
      "SEO basics — show up on Google",
      "Go live in 3–5 business days",
    ],
    notIncluded: [
      "Gallery / portfolio page",
      "Testimonials section",
      "Listings page (vehicles or properties)",
      "Booking & online payment",
      "Analytics & Google Business",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    setupFee: 799,
    monthly: 29,
    description: "Full website with all sections. The right choice for most businesses.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Basic",
      "Gallery / portfolio page",
      "Testimonials & reviews section",
      "Stats & achievements section",
      "Listings page — vehicles or properties",
      "2 content updates per month",
    ],
    notIncluded: [
      "Booking & online payment",
      "Analytics & Google Business",
      "Custom design",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    setupFee: 1399,
    monthly: 49,
    description: "Take bookings and payments online. Built for service businesses that want to grow.",
    highlight: false,
    features: [
      "Everything in Standard",
      "Online booking & appointment system",
      "Online payment (deposits & service fees)",
      "Google Analytics — track your visitors",
      "Google Business profile setup",
      "Same-day content updates",
      "Monthly performance summary",
    ],
    notIncluded: [
      "Custom design",
      "Full e-commerce store",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    setupFee: null,
    monthly: null,
    description: "Custom-designed website built around your brand. Fully scoped to your needs.",
    highlight: false,
    badge: "Custom",
    features: [
      "Everything in Pro",
      "Unique design — not a template",
      "E-commerce store (optional add-on)",
      "Multi-location support",
      "Social media integration",
      "Priority support (same-day response)",
      "Annual SEO review",
      "Monthly performance report",
    ],
    notIncluded: [],
  },
]

const CUSTOM_SERVICES = [
  {
    icon: "🛒",
    name: "E-Commerce Store",
    description: "Online store with product catalog, cart, checkout, and payment processing (Stripe). Perfect for retail, bakeries, or any business selling products.",
    price: "From $3,000",
    monthly: "$199/mo",
  },
  {
    icon: "📅",
    name: "Booking & Scheduling App",
    description: "Custom appointment system with calendar, client management, reminders, and payments. Built for salons, tutors, photographers, and service providers.",
    price: "From $4,000",
    monthly: "$149/mo",
  },
  {
    icon: "🏢",
    name: "Business Portal / Dashboard",
    description: "Client portal, staff management, invoicing, or any custom internal tool. Powered by our Kenatrix backend platform.",
    price: "From $5,000",
    monthly: "Custom",
  },
]

const INCLUDED_FOR_ALL = [
  "Free SSL certificate (https://)",
  "Domain setup & configuration",
  "Home, Services, About & Contact pages",
  "WhatsApp contact button",
  "SEO basics — show up on Google",
  "Mobile & tablet optimized",
  "Hosted & managed by us",
  "No contracts — cancel anytime",
]

export default function GetStartedPage() {
  const config = getConfig()

  // This page is only meaningful on demo sites
  if (!config.isDemo) redirect("/")

  const businessName = config.business.name
  const zikwalaUrl = process.env.NEXT_PUBLIC_ZIKWALA_URL ?? "https://zikwala.com"
  const zikwalaEmail = process.env.NEXT_PUBLIC_ZIKWALA_EMAIL ?? "hello@zikwala.com"

  function orderLink(planName: string) {
    const params = new URLSearchParams({
      plan: planName,
      business: businessName,
    })
    return `${zikwalaUrl}/website-order?${params.toString()}`
  }

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-gradient-brand text-white py-20 px-4 text-center">
        <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-4">
          Zikwala Web Services
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 max-w-2xl mx-auto leading-tight">
          Get Your Professional Website Live in Days
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
          You just saw what your site could look like. We handle everything —
          design, domain, SSL, hosting, and updates. You focus on your business.
        </p>
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25
                        backdrop-blur-sm rounded-full px-5 py-2.5 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Demo shown: <strong className="ml-1">{businessName}</strong>
        </div>
      </section>

      {/* ── All plans include ── */}
      <section className="bg-gray-50 py-10 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
            Every plan includes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {INCLUDED_FOR_ALL.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 size={15} className="text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500">
              One-time setup fee + low monthly for hosting & support. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 flex flex-col overflow-hidden
                  ${plan.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 scale-[1.03]"
                    : "border-gray-200 shadow-sm"
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1.5
                                  text-xs font-bold text-white bg-gradient-brand">
                    {plan.badge === "Most Popular" && <Zap size={11} className="inline mr-1 -mt-0.5" />}
                    {plan.badge === "Best Value" && <Star size={11} className="inline mr-1 -mt-0.5" />}
                    {plan.badge}
                  </div>
                )}

                <div className={`p-6 flex flex-col flex-1 ${plan.badge ? "pt-10" : ""}`}>
                  {/* Plan name & price */}
                  <div className="mb-6">
                    <h3 className="text-lg font-black text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-snug">{plan.description}</p>
                    {plan.setupFee !== null ? (
                      <>
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-black text-gray-900">${plan.setupFee}</span>
                          <span className="text-gray-500 text-sm mb-1.5">setup</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          then{" "}
                          <span className="font-bold text-gray-700">${plan.monthly}/mo</span>
                          {" "}hosting & support
                        </p>
                      </>
                    ) : (
                      <div>
                        <p className="text-3xl font-black text-gray-900">Let&apos;s Talk</p>
                        <p className="text-sm text-gray-500 mt-1">Scoped to your project</p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-400 line-through">
                        <div className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {plan.setupFee !== null ? (
                    <a
                      href={orderLink(plan.name)}
                      className={`w-full text-center py-3 rounded-site font-bold text-sm
                        transition-all duration-200 hover:scale-105
                        ${plan.highlight
                          ? "bg-gradient-brand text-white shadow-lg hover:opacity-90"
                          : "bg-gray-900 text-white hover:bg-gray-700"
                        }`}
                    >
                      Order {plan.name} Plan
                      <ArrowRight size={14} className="inline ml-1.5 -mt-0.5" />
                    </a>
                  ) : (
                    <a
                      href={orderLink("Premium")}
                      className="w-full text-center py-3 rounded-site font-bold text-sm
                        border-2 border-gray-900 text-gray-900
                        hover:bg-gray-900 hover:text-white transition-all duration-200"
                    >
                      <Phone size={14} className="inline mr-1.5 -mt-0.5" />
                      Book a Free Consultation
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Not sure which plan is right?{" "}
            <a
              href={`${zikwalaUrl}/website-order?business=${encodeURIComponent(businessName)}`}
              className="text-primary font-semibold hover:underline"
            >
              Contact us — we'll help you choose.
            </a>
          </p>
        </div>
      </section>

      {/* ── Custom / Enterprise services ── */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-3">
              Beyond the website
            </p>
            <h2 className="text-2xl font-black mb-3">Need More Than a Website?</h2>
            <p className="text-white/60 max-w-lg mx-auto text-sm">
              We also build custom web applications — e-commerce stores, booking systems,
              and business portals — powered by our backend platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOM_SERVICES.map((svc) => (
              <div key={svc.name}
                   className="bg-white/5 border border-white/10 rounded-2xl p-6
                              hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="font-bold text-white mb-2">{svc.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{svc.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-white">{svc.price}</p>
                    <p className="text-white/40 text-xs">{svc.monthly} maintenance</p>
                  </div>
                  <a
                    href={`${zikwalaUrl}/website-order?plan=${encodeURIComponent(svc.name)}&business=${encodeURIComponent(businessName)}`}
                    className="text-xs font-bold text-white/70 hover:text-white
                               border border-white/20 hover:border-white/50
                               px-3 py-1.5 rounded-full transition-all"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-gray-50 py-20 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "You Order", desc: "Pick a plan and send us an email. We'll reach out within 24 hours." },
              { step: "2", title: "We Customize", desc: "We update the site with your real content, photos, and business info." },
              { step: "3", title: "You Approve", desc: "Review your site on a preview link. We make any changes you need." },
              { step: "4", title: "Go Live", desc: "We connect your domain, set up SSL, and your site is live. Done." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white
                                flex items-center justify-center font-black text-lg mb-4 shadow-lg">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          Ready to get started?
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Your site can be live in 3–5 business days. No contracts, no surprises.
        </p>
        <a
          href={orderLink("Standard")}
          className="inline-flex items-center gap-2 bg-gradient-brand text-white
                     font-bold px-8 py-4 rounded-site shadow-xl
                     hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          Get Started — Standard Plan
          <ArrowRight size={16} />
        </a>
        <p className="text-xs text-gray-400 mt-4">
          Or email us at{" "}
          <a href={`mailto:${zikwalaEmail}`} className="underline">{zikwalaEmail}</a>
        </p>
      </section>

    </div>
  )
}
