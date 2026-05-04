import type { SiteConfig } from "./types"
import { config } from "./active-client"

export function getConfig(): SiteConfig {
  return config
}
