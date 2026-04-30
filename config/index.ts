import type { SiteConfig } from "./types"

// ── Existing demo configs ──────────────────────────────────
import { config as demoCleaning } from "./clients/demo-cleaning"
import { config as demoRealestate } from "./clients/demo-realestate"
import { config as demoLawfirm } from "./clients/demo-lawfirm"
import { config as demoTax } from "./clients/demo-tax"
import { config as demoDecoration } from "./clients/demo-decoration"

// ── New demo configs ───────────────────────────────────────
import { config as demoAutorepair } from "./clients/demo-autorepair"
import { config as demoPainting } from "./clients/demo-painting"
import { config as demoCatering } from "./clients/demo-catering"
import { config as demoRestaurant } from "./clients/demo-restaurant"
import { config as demoRestaurantEthiopian } from "./clients/demo-restaurant-ethiopian"
import { config as demoBakery } from "./clients/demo-bakery"
import { config as demoHvac } from "./clients/demo-hvac"
import { config as demoElectrical } from "./clients/demo-electrical"
import { config as demoPlumbing } from "./clients/demo-plumbing"
import { config as demoHandyman } from "./clients/demo-handyman"
import { config as demoBeauty } from "./clients/demo-beauty"
import { config as demoPhotography } from "./clients/demo-photography"
import { config as demoTutor } from "./clients/demo-tutor"
import { config as demoInsurance } from "./clients/demo-insurance"
import { config as demoBabysitting } from "./clients/demo-babysitting"
import { config as demoEventplanning } from "./clients/demo-eventplanning"
import { config as demoCardealership } from "./clients/demo-cardealership"
import { config as debelaMengesha } from "./clients/debela-mengesha"
import { config as bulchaRealEstate } from "./clients/bulcha-real-estate"
import { config as zikwalaAgency } from "./clients/zikwala-agency"
import { config as abelCleaning } from "./clients/abel-cleaning"
import { config as bezaBoutique } from "./clients/beza-boutique"
import { config as lenaHartPhotography } from "./clients/lena-hart-photography"
import { config as ariaBeautyStudio } from "./clients/aria-beauty-studio"
import { config as peakComfortHvac } from "./clients/peak-comfort-hvac"
import { config as aceAutoCare } from "./clients/ace-auto-care"
import { config as nazretEthiopianRestaurant } from "./clients/nazret-ethiopian-restaurant"
import { config as markRealEstate } from "./clients/mark-real-estate"
import { config as sterlingLegal } from "./clients/sterling-legal"
import { config as flowproPlumbing } from "./clients/flowpro-plumbing"
import { config as fixrightHandyman } from "./clients/fixright-handyman"
import { config as danielHailu } from "./clients/daniel-hailu"
import { config as habeshanateDecor } from "./clients/habeshanate-decor"

// ── Production client configs (add real clients here) ────────────
// import { config as sparkleCleaningConfig } from "./clients/sparkle-cleaning" 
const configs: Record<string, SiteConfig> = {
  // ── Existing demos ────────────────────────────────────────
  "demo-cleaning": demoCleaning,
  "demo-realestate": demoRealestate,
  "demo-lawfirm": demoLawfirm,
  "demo-tax": demoTax,
  "demo-decoration": demoDecoration,

  // ── New demos ─────────────────────────────────────────────
  "demo-autorepair": demoAutorepair,
  "demo-painting": demoPainting,
  "demo-catering": demoCatering,
  "demo-restaurant": demoRestaurant,
  "demo-restaurant-ethiopian": demoRestaurantEthiopian,
  "demo-bakery": demoBakery,
  "demo-hvac": demoHvac,
  "demo-electrical": demoElectrical,
  "demo-plumbing": demoPlumbing,
  "demo-handyman": demoHandyman,
  "demo-beauty": demoBeauty,
  "demo-photography": demoPhotography,
  "demo-tutor": demoTutor,
  "demo-insurance": demoInsurance,
  "demo-babysitting": demoBabysitting,
  "demo-eventplanning": demoEventplanning,
  "demo-cardealership": demoCardealership,

  // ── Production clients (add real clients here) ────────────
  // "sparkle-cleaning": sparkleCleaningConfig,
  "debela-mengesha": debelaMengesha,
  "bulcha-real-estate": bulchaRealEstate,
  "zikwala-agency": zikwalaAgency,
  "abel-cleaning": abelCleaning,
  "beza-boutique": bezaBoutique,
  "lena-hart-photography": lenaHartPhotography,
  "aria-beauty-studio": ariaBeautyStudio,
  "peak-comfort-hvac": peakComfortHvac,
  "ace-auto-care": aceAutoCare,
  "nazret-ethiopian-restaurant": nazretEthiopianRestaurant,
  "mark-real-estate": markRealEstate,
  "sterling-legal": sterlingLegal,
  "flowpro-plumbing": flowproPlumbing,
  "fixright-handyman": fixrightHandyman,
  "daniel-hailu": danielHailu,
  "habeshanate-decor": habeshanateDecor,
}

/**
 * Returns the active site config.
 * Set NEXT_PUBLIC_CLIENT_ID in .env.local per client build.
 * Falls back to "demo-cleaning" for development.
 */
export function getConfig(): SiteConfig {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID ?? "demo-cleaning"
  const config = configs[clientId]

  if (!config) {
    throw new Error(
      `No config found for client "${clientId}". ` +
      `Available: ${Object.keys(configs).join(", ")}`
    )
  }

  return config
}
