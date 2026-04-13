import { Star, Quote } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface TestimonialsProps {
  testimonials: NonNullable<SiteConfig["testimonials"]>
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-accent), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {testimonials.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{testimonials.subtitle}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 120}>
              <div className={`relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover h-full${i === 1 ? " md:-translate-y-4" : ""}`}>
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote size={48} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: "var(--color-primary)" }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
