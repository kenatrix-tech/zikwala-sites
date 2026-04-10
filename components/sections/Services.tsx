import {
  Home, Building2, Sparkles, HardHat, Globe, Briefcase, Heart,
  MapPin, TrendingUp, FileText, BookOpen, Shield, Palette,
  Star, Droplets, Phone, Mail,
} from "lucide-react"
import type { SiteConfig } from "@/config/types"

// Map icon name strings (from config) to Lucide components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home, Building2, Sparkles, HardHat, Globe, Briefcase, Heart,
  MapPin, TrendingUp, FileText, BookOpen, Shield, Palette,
  Star, Droplets, Phone, Mail,
}

interface ServicesProps {
  services: SiteConfig["services"]
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {services.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.items.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Home
            return (
              <div
                key={service.name}
                className="bg-surface border border-accent rounded-site p-6 hover:shadow-md transition-shadow"
              >
                <div className="bg-accent text-primary w-11 h-11 rounded-site flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                {service.price && (
                  <span className="text-primary font-bold text-sm">
                    {service.price}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
