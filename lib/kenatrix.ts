/**
 * Kenatrix Core API — types + fetch helpers for dynamic listings.
 *
 * Used by Standard/Pro/Premium clients that have a sellerSlug configured.
 * All fetches run at build time (Next.js static export) → data is baked
 * into the HTML and refreshed on every deployment.
 */

const API_BASE =
  (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")

// ─── API Types ────────────────────────────────────────────────────────────────

/** Returned by GET /api/v1/public/property/seller/{sellerSlug} */
export interface PropertyDto {
  id: number
  listingId: number
  listingSlug: string

  // Address
  street?: string
  subcity?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  latitude?: number
  longitude?: number
  unitNumber?: number

  // Property details
  categoryId?: number
  categoryName?: string
  bedRooms: number   // Java int primitive — always present (0 when unset)
  bathRooms: number
  squareFeet: number
  totalFloors: number
  yearBuilt: number

  // Pricing
  monthlyRent?: number
  sellingPrice?: number
  currency?: string
  /** "S" = For Sale, "R" = For Rent */
  propertyPurpose?: string

  // Features
  flooring?: string
  parking?: string
  amenities?: string[]
  appliances?: string[]

  // Media
  thumbnailUrl?: string
  images?: PropertyImageDto[]

  // Description
  description?: string
  specifications?: Record<string, unknown>

  // Contact
  contactName?: string
  contactEmail?: string
  contactPhone?: string

  // Meta
  status?: string
  isFeatured?: boolean
  sellerSlug?: string
}

export interface PropertyImageDto {
  imageId: number
  fileName: string
  size: number
  imageUrl: string
  imageType: string
  propertyId: number
}

/** Returned by GET /api/v1/public/product/seller/{sellerSlug} */
export interface ProductSummaryDto {
  productId: number
  title: string
  currency?: string
  condition?: string
  mainImageUrl?: string
  price?: number
  street?: string
  city?: string
  state?: string
  subcity?: string
  country?: string
  zipCode?: string
  status?: string
}

/** Returned by GET /api/v1/public/product/{id} */
export interface ProductDto {
  productId: number
  listingId: number
  listingSlug: string

  name: string
  price?: number
  isNegotiable?: boolean
  currency?: string

  categoryId?: number
  categoryName?: string
  productTypeName?: string

  condition?: string
  stock: number  // Java int primitive — always present
  brandName?: string
  description?: string
  status?: string

  contactName?: string
  contactEmail?: string
  contactPhone?: string

  street?: string
  subcity?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string

  thumbnailUrl?: string
  images?: ProductImageDto[]

  sellerSlug?: string
}

export interface ProductImageDto {
  imageId: number
  productId: number
  fileName: string
  size: number
  imageType: string
  imageUrl: string
}

/** Returned by GET /api/v1/public/vehicle/seller/{sellerSlug} */
export interface VehicleSummaryDto {
  id: number
  /** Category entity from Java — serialized as { id, name, ... } */
  category?: { id: number; name: string; [key: string]: unknown }
  year?: number
  make?: string
  model?: string
  mileage?: number
  price?: number
  street?: string
  city?: string
  state?: string
  subcity?: string
  country?: string
  zipCode?: string
}

/** Returned by GET /api/v1/public/vehicle/{id} */
export interface VehicleDto {
  id: number
  listingId: number
  listingSlug: string

  vinCd?: string
  vehicleType?: string
  condition?: string

  year?: number
  make?: string
  model?: string
  vehicleTrim?: string
  exteriorColor?: string
  interiorColor?: string
  transmission?: string
  fuelType?: string
  mileage?: number
  description?: string

  categoryId?: number
  categoryName?: string

  price?: number
  currency?: string
  isFeatured?: boolean

  street?: string
  subcity?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string

  contactName?: string
  contactEmail?: string
  contactPhone?: string
  sellerSlug?: string

  status?: string
  thumbnailUrl?: string
  specifications?: Record<string, unknown>
  images?: VehicleImageDto[]
}

export interface VehicleImageDto {
  imageId: number
  fileName: string
  size: number
  imageUrl: string
  imageType: string
  vehicleId: number
}

// ─── Listing API Types ────────────────────────────────────────────────────────

/** Returned by GET /api/v1/public/listing/seller?sellerSlug={slug} */
export interface ListingDto {
  id: number
  listingType?: string
  titleLine1?: string
  titleLine2?: string
  titleLine3?: string
  displayPriceText?: string
  price?: number
  currency?: string
  location?: string
  thumbnailUrl?: string
  categoryName?: string
  categorySlug?: string
  countryCode?: string
  slug?: string
  status?: string
  views?: number
  isFeatured?: boolean
}

export interface PageableResponse<T> {
  content: T[]
  pageSize: number
  pageNumber: number
  totalRecords: number
  totalPages: number
  hasNext: boolean
  hasPrevious: boolean
}

// ─── Fetch Helpers ────────────────────────────────────────────────────────────

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { cache: "no-store" })
    if (!res.ok) return null
    const contentType = res.headers.get("content-type") ?? ""
    if (!contentType.includes("application/json")) return null
    return await res.json() as T
  } catch {
    return null
  }
}

export async function fetchPropertiesBySeller(sellerSlug: string): Promise<PropertyDto[]> {
  const data = await apiFetch<PropertyDto[]>(`/api/v1/public/property/seller/${sellerSlug}`)
  return data ?? []
}

export async function fetchPropertyBySlug(slug: string): Promise<PropertyDto | null> {
  return apiFetch<PropertyDto>(`/api/v1/public/property/slug/${slug}`)
}

export async function fetchProductsBySeller(sellerSlug: string): Promise<ProductSummaryDto[]> {
  const data = await apiFetch<ProductSummaryDto[]>(`/api/v1/public/product/seller/${sellerSlug}`)
  return data ?? []
}

export async function fetchProductById(id: string | number): Promise<ProductDto | null> {
  return apiFetch<ProductDto>(`/api/v1/public/product/${id}`)
}

export async function fetchProductBySlug(slug: string): Promise<ProductDto | null> {
  return apiFetch<ProductDto>(`/api/v1/public/product/slug/${encodeURIComponent(slug)}`)
}

export async function fetchVehiclesBySeller(sellerSlug: string): Promise<VehicleSummaryDto[]> {
  const data = await apiFetch<VehicleSummaryDto[]>(`/api/v1/public/vehicle/seller/${sellerSlug}`)
  return data ?? []
}

export async function fetchVehicleById(id: string | number): Promise<VehicleDto | null> {
  return apiFetch<VehicleDto>(`/api/v1/public/vehicle/${id}`)
}

/** Fetch all listings for a seller — works across product/vehicle/property types */
export async function fetchListingsBySellerSlug(sellerSlug: string): Promise<ListingDto[]> {
  const data = await apiFetch<PageableResponse<ListingDto>>(
    `/api/v1/public/listing/seller?sellerSlug=${encodeURIComponent(sellerSlug)}&size=50`
  )
  return data?.content ?? []
}

// ─── Adapters: API → SiteConfig format ───────────────────────────────────────

function mapPropertyStatus(
  purpose?: string
): "For Sale" | "For Rent" | "Sold" | "Under Contract" {
  if (purpose === "R") return "For Rent"
  return "For Sale"
}

type PropertyConfigItem = {
  id: string
  title: string
  address: string
  city: string
  price: number
  status: "For Sale" | "For Rent" | "Sold" | "Under Contract"
  type: "House" | "Condo" | "Townhouse" | "Apartment" | "Land" | "Commercial"
  bedrooms?: number
  bathrooms?: number
  sqft?: number
  image: string
  badge?: string
  slug?: string
}

export function adaptProperties(
  items: PropertyDto[],
  fallback?: { title: string; subtitle: string }
) {
  const mapped: PropertyConfigItem[] = items.map((p) => ({
    id: String(p.id),
    title: [p.street, p.city, p.state].filter(Boolean).join(", ") || "Property Listing",
    address: p.street ?? "",
    city: [p.city, p.state].filter(Boolean).join(", "),
    price: p.sellingPrice ?? p.monthlyRent ?? 0,
    status: mapPropertyStatus(p.propertyPurpose),
    type: (p.categoryName as PropertyConfigItem["type"]) ?? "House",
    bedrooms: p.bedRooms,
    bathrooms: p.bathRooms,
    sqft: p.squareFeet,
    image: p.thumbnailUrl ?? "",
    slug: p.listingSlug,
  }))

  return {
    title: fallback?.title ?? "Available Listings",
    subtitle: fallback?.subtitle ?? "Browse our current properties",
    items: mapped,
  }
}

type ProductConfigItem = {
  id: string
  name: string
  description?: string
  price: number
  image: string
  category?: string
  condition?: string
  inStock?: boolean
  slug?: string
}

export function adaptProducts(
  items: ProductSummaryDto[],
  fallback?: { title: string; subtitle: string }
) {
  const mapped: ProductConfigItem[] = items.map((p) => ({
    id: String(p.productId),
    name: p.title,
    price: p.price ?? 0,
    image: p.mainImageUrl ?? "",
    condition: p.condition,
    inStock: p.status !== "SOLD" && p.status !== "INACTIVE",
    slug: String(p.productId),
  }))

  return {
    title: fallback?.title ?? "Available Products",
    subtitle: fallback?.subtitle ?? "Browse our products",
    items: mapped,
  }
}

type VehicleConfigItem = {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage?: number
  image: string
  sold?: boolean
  slug?: string
}

export function adaptVehicles(
  items: VehicleSummaryDto[],
  fallback?: { title: string; subtitle: string }
) {
  const mapped: VehicleConfigItem[] = items.map((v) => ({
    id: String(v.id),
    make: v.make ?? "Unknown",
    model: v.model ?? "",
    year: v.year ?? new Date().getFullYear(),
    price: v.price ?? 0,
    mileage: v.mileage,
    image: "", // VehicleSummaryDto has no thumbnailUrl — shown as placeholder
    slug: String(v.id),
  }))

  return {
    title: fallback?.title ?? "Available Vehicles",
    subtitle: fallback?.subtitle ?? "Browse our inventory",
    items: mapped,
  }
}

/** Adapt ListingDto[] (from /listing/seller endpoint) into the products config format */
export function adaptListings(
  items: ListingDto[],
  fallback?: { title?: string; subtitle?: string }
) {
  const mapped = items.map((l) => ({
    id: String(l.id),
    name: [l.titleLine1, l.titleLine2, l.titleLine3].filter(Boolean).join(" ") || "Item",
    price: l.price ? Number(l.price) : 0,
    image: l.thumbnailUrl ?? "",
    category: l.categoryName,
    inStock: l.status !== "SOLD" && l.status !== "INACTIVE",
    slug: l.slug ?? String(l.id),
  }))

  return {
    title: fallback?.title ?? "Our Collection",
    subtitle: fallback?.subtitle ?? "Browse and order directly via WhatsApp",
    items: mapped,
  }
}
