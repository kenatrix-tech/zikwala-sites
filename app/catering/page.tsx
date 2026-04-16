import { getConfig } from "@/config"
import { redirect } from "next/navigation"
import { CheckCircle2, ArrowRight, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function CateringPage() {
  const config = getConfig()

  if (!config.catering) redirect("/")

  const { catering, business, contact } = config
  const whatsappNumber = business.phone.replace(/\D/g, "")

  function inquiryLink(packageName: string) {
    const text = encodeURIComponent(
      `Hi, I'm interested in catering from ${business.name} — ${packageName} package.`
    )
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }

  return (
    <div className="bg-white">

      {/* ── Hero banner ── */}
      <section className="bg-gradient-brand text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
            Catering Services
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            {catering.title}
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
            {catering.subtitle}
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {catering.serviceArea && (
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20
                              rounded-full px-4 py-1.5 text-sm text-white/80">
                <MapPin size={13} />
                {catering.serviceArea}
              </div>
            )}
            {catering.minimumNotice && (
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20
                              rounded-full px-4 py-1.5 text-sm text-white/80">
                <Clock size={13} />
                {catering.minimumNotice}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Event types ── */}
      <section className="bg-gray-50 py-10 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
            We cater for
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {catering.eventTypes.map((type) => (
              <span
                key={type}
                className="px-4 py-2 rounded-full text-sm font-semibold border-2
                           text-primary border-primary/20 bg-accent"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Catering Packages</h2>
            <p className="text-gray-500">Choose a package or contact us for a fully custom quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catering.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border-2 flex flex-col overflow-hidden
                  ${pkg.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 scale-[1.03]"
                    : "border-gray-200 shadow-sm"
                  }`}
              >
                {pkg.badge && (
                  <div className="bg-gradient-brand text-white text-xs font-bold text-center py-1.5">
                    {pkg.badge}
                  </div>
                )}

                <div className={`p-6 flex flex-col flex-1 ${pkg.badge ? "" : ""}`}>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-snug">{pkg.description}</p>

                  {/* Pricing & minimum */}
                  <div className="mb-5">
                    {pkg.priceFrom ? (
                      <p className="text-2xl font-black text-gray-900">{pkg.priceFrom}</p>
                    ) : (
                      <p className="text-2xl font-black text-gray-900">Custom Quote</p>
                    )}
                    {pkg.minimumGuests && (
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <Users size={11} />
                        Minimum {pkg.minimumGuests} guests
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={inquiryLink(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 rounded-site font-bold text-sm
                      transition-all duration-200 hover:scale-105
                      ${pkg.highlight
                        ? "bg-gradient-brand text-white shadow-lg hover:opacity-90"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                      }`}
                  >
                    Get a Quote
                    <ArrowRight size={14} className="inline ml-1.5 -mt-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-4 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          Have a custom event in mind?
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Send us the details — guest count, date, and menu preferences — and we&apos;ll build a
          package around your event.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white
                     font-bold px-8 py-4 rounded-site shadow-xl
                     hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          Contact Us for a Custom Quote
          <ArrowRight size={16} />
        </Link>
        <p className="text-xs text-gray-400 mt-4">
          Or call us directly at{" "}
          <a href={`tel:${business.phone}`} className="underline">{business.phone}</a>
        </p>
      </section>

    </div>
  )
}
