import type { SiteConfig } from "@/config/types"
import { HeroSplit } from "./hero/HeroSplit"
import { HeroCentered } from "./hero/HeroCentered"
import { HeroMinimal } from "./hero/HeroMinimal"
import { HeroBold } from "./hero/HeroBold"
import { HeroMagazine } from "./hero/HeroMagazine"
import { HeroShop } from "./hero/HeroShop"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function Hero({ hero, business }: HeroProps) {
  switch (hero.variant) {
    case "centered":
      return <HeroCentered hero={hero} business={business} />
    case "minimal":
      return <HeroMinimal hero={hero} business={business} />
    case "bold":
      return <HeroBold hero={hero} business={business} />
    case "magazine":
      return <HeroMagazine hero={hero} business={business} />
    case "shop":
      return <HeroShop hero={hero} business={business} />
    default:
      return <HeroSplit hero={hero} business={business} />
  }
}
