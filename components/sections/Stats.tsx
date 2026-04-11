import type { SiteConfig } from "@/config/types"

interface StatsProps {
  stats: NonNullable<SiteConfig["stats"]>
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Full gradient bg */}
      <div className="absolute inset-0 bg-gradient-brand" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.items.map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
