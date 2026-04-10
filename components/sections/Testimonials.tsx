import { Star } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface TestimonialsProps {
  testimonials: NonNullable<SiteConfig["testimonials"]>
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {testimonials.title}
          </h2>
          <p className="text-gray-500 text-lg">{testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-accent rounded-site p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                <div className="text-gray-400 text-xs">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
