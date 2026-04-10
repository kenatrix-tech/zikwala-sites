import type { SiteConfig } from "@/config/types"

interface StatsProps {
  stats: NonNullable<SiteConfig["stats"]>
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.items.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-on-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-on-primary opacity-80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
