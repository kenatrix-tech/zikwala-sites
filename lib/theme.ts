import type { SiteConfig } from "@/config/types"

const RADIUS_MAP = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
}

const FONT_MAP: Record<string, string> = {
  Inter: "'Inter', sans-serif",
  Poppins: "'Poppins', sans-serif",
  Montserrat: "'Montserrat', sans-serif",
  "Playfair Display": "'Playfair Display', serif",
}

/**
 * Converts a SiteConfig theme into CSS custom properties.
 * Applied inline on <body> so every Tailwind utility
 * that references var(--color-*) picks up the right value.
 */
export function buildThemeVars(
  theme: SiteConfig["theme"]
): React.CSSProperties {
  return {
    "--color-primary": theme.primary,
    "--color-secondary": theme.secondary,
    "--color-accent": theme.accent,
    "--color-surface": theme.surface,
    "--color-on-primary": theme.onPrimary,
    "--font-sans": FONT_MAP[theme.font] ?? FONT_MAP["Inter"],
    "--font-heading": FONT_MAP[theme.font] ?? FONT_MAP["Inter"],
    "--radius": RADIUS_MAP[theme.roundedLevel],
  } as React.CSSProperties
}

/**
 * Returns the Google Fonts URL for the selected font.
 */
export function getFontUrl(font: SiteConfig["theme"]["font"]): string {
  const families: Record<string, string> = {
    Inter: "Inter:wght@400;500;600;700",
    Poppins: "Poppins:wght@400;500;600;700",
    Montserrat: "Montserrat:wght@400;500;600;700",
    "Playfair Display": "Playfair+Display:wght@400;600;700",
  }
  const family = families[font] ?? families["Inter"]
  return `https://fonts.googleapis.com/css2?family=${family}&display=swap`
}
