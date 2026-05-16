"use client"

import { useState, useRef } from "react"
import { Check, ChevronRight, ChevronLeft, Home, MapPin, Sliders, User, CheckCircle2, ImagePlus, X, Loader2 } from "lucide-react"
import imageCompression from "browser-image-compression"

const COMPRESSION_OPTIONS = {
  maxWidthOrHeight: 1280,  // same as Angular service
  initialQuality: 0.8,     // same as Angular's canvas.toBlob quality
  maxSizeMB: 1,            // safety cap for 4K source photos (Angular has none)
  useWebWorker: true,
  fileType: "image/webp" as const,
}

// ── Constants ────────────────────────────────────────────────────────────────

const PROPERTY_TYPES = [
  { id: 3, label: "Apartment" },
  { id: 1, label: "House" },
  { id: 4, label: "Condo" },
  { id: 2, label: "Townhouse" },
  { id: 5, label: "Commercial" },
  { id: 6, label: "Room" },
]

const BED_OPTIONS = [
  { value: 0, label: "Studio" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6+" },
]

const BATH_OPTIONS = [
  { value: 1, label: "1" },
  { value: 1.5, label: "1½" },
  { value: 2, label: "2" },
  { value: 2.5, label: "2½" },
  { value: 3, label: "3" },
  { value: 3.5, label: "3½" },
  { value: 4, label: "4+" },
]

const APPLIANCES = ["Laundry", "Dishwasher", "Stove/Oven", "Refrigerator"]
const AMENITIES  = ["Balcony", "Pool", "Elevator", "Air Conditioning", "Gym"]
const FLOORING   = ["Carpet", "Hardwood", "Tile"]
const PARKING    = ["Garage", "Street Parking", "Off-street", "None"]

const US_STATES = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DC", name: "DC" },
  { code: "DE", name: "Delaware" }, { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" }, { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" }, { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" }, { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" }, { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" }, { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" }, { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
]

// ── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1
  purpose: "RENT" | "SELL"
  categoryId: number | null
  monthlyRent: string
  sellingPrice: string
  description: string
  // Step 2
  street: string
  city: string
  state: string
  zipCode: string
  // Step 3
  bedRooms: number | null
  bathRooms: number | null
  squareFeet: string
  appliances: string[]
  amenities: string[]
  flooring: string
  parking: string
  // Step 4
  contactName: string
  contactPhone: string
  contactEmail: string
}

interface Props {
  sellerSlug: string
  agentName: string
  apiBase: string
}

// ── Step indicator ────────────────────────────────────────────────────────────

const STEPS = [
  { label: "Details", icon: Home },
  { label: "Address", icon: MapPin },
  { label: "Features", icon: Sliders },
  { label: "Contact", icon: User },
]

function StepBar({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEPS.map((step, i) => {
        const done = i < current
        const active = i === current
        const Icon = step.icon
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                done ? "bg-primary text-white" :
                active ? "bg-primary text-white ring-4 ring-primary/20" :
                "bg-gray-100 text-gray-400"
              }`}>
                {done ? <Check size={16} /> : <Icon size={16} />}
              </div>
              <span className={`text-[10px] font-medium hidden sm:block ${active ? "text-primary" : "text-gray-400"}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`w-12 sm:w-16 h-0.5 mx-1 mb-4 transition-colors ${i < current ? "bg-primary" : "bg-gray-200"}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Chip helpers ─────────────────────────────────────────────────────────────

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
        selected
          ? "bg-primary text-white border-primary"
          : "bg-white text-gray-600 border-gray-200 hover:border-primary/50"
      }`}
    >
      {label}
    </button>
  )
}

function NumChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-w-[48px] px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${
        selected
          ? "bg-primary text-white border-primary"
          : "bg-white text-gray-700 border-gray-200 hover:border-primary/50"
      }`}
    >
      {label}
    </button>
  )
}

// ── Input component ───────────────────────────────────────────────────────────

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
const textareaClass = `${inputClass} resize-none`

// ── Main component ────────────────────────────────────────────────────────────

export function PropertySubmitClient({ sellerSlug, agentName, apiBase }: Props) {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [compressing, setCompressing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState<FormData>({
    purpose: "RENT",
    categoryId: null,
    monthlyRent: "",
    sellingPrice: "",
    description: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    bedRooms: null,
    bathRooms: null,
    squareFeet: "",
    appliances: [],
    amenities: [],
    flooring: "",
    parking: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  })

  const set = (field: keyof FormData, value: unknown) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const toggleMulti = (field: "appliances" | "amenities", item: string) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(v => v !== item)
        : [...prev[field], item],
    }))
  }

  const isCommercial = form.categoryId === 5

  const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    e.target.value = ""
    if (!files.length) return
    const existing = new Set(imageFiles.map(f => f.name))
    const unique = files.filter(f => !existing.has(f.name)).slice(0, 10 - imageFiles.length)
    if (!unique.length) return

    setCompressing(true)
    try {
      const compressed = await Promise.all(unique.map(f => imageCompression(f, COMPRESSION_OPTIONS)))
      const previews = await Promise.all(compressed.map(f => new Promise<string>(resolve => {
        const reader = new FileReader()
        reader.onload = ev => resolve(ev.target!.result as string)
        reader.readAsDataURL(f)
      })))
      setImageFiles(prev => [...prev, ...compressed])
      setImagePreviews(prev => [...prev, ...previews])
    } finally {
      setCompressing(false)
    }
  }

  const removeImage = (i: number) => {
    setImageFiles(prev => prev.filter((_, idx) => idx !== i))
    setImagePreviews(prev => prev.filter((_, idx) => idx !== i))
  }

  // ── Validation per step ───────────────────────────────────────────────────

  const validate = (s: number): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {}
    if (s === 0) {
      if (!form.categoryId) errs.categoryId = "Select a property type"
    }
    if (s === 1) {
      if (!form.city.trim()) errs.city = "City is required"
      if (!form.state) errs.state = "State is required"
    }
    if (s === 2) {
      if (!isCommercial && form.bedRooms === null) errs.bedRooms = "Select bedrooms"
      if (form.bathRooms === null) errs.bathRooms = "Select bathrooms"
    }
    if (s === 3) {
      if (!form.contactName.trim()) errs.contactName = "Name is required"
      if (!form.contactPhone.trim()) errs.contactPhone = "Phone is required"
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const next = () => {
    if (validate(step)) setStep(s => s + 1)
  }
  const back = () => setStep(s => s - 1)

  // ── Submit ────────────────────────────────────────────────────────────────

  const submit = async () => {
    if (!validate(3)) return
    setSubmitting(true)
    try {
      const listing = {
        sellerSlug,
        propertyPurpose: form.purpose,
        categoryId: form.categoryId,
        monthlyRent: form.purpose === "RENT" && form.monthlyRent ? Number(form.monthlyRent) : null,
        sellingPrice: form.purpose === "SELL" && form.sellingPrice ? Number(form.sellingPrice) : null,
        description: form.description || null,
        street: form.street || null,
        city: form.city,
        state: form.state,
        zipCode: form.zipCode || null,
        country: "US",
        bedRooms: form.bedRooms,
        bathRooms: form.bathRooms,
        squareFeet: form.squareFeet ? Number(form.squareFeet) : null,
        appliances: form.appliances.length ? form.appliances : null,
        amenities: form.amenities.length ? form.amenities : null,
        flooring: form.flooring || null,
        parking: form.parking || null,
        contactName: form.contactName,
        contactPhone: form.contactPhone,
        contactEmail: form.contactEmail || null,
        status: "PENDING",
      }

      const body = new FormData()
      body.append("listing", JSON.stringify(listing))
      if (imageFiles.length > 0) {
        body.append("thumbnail", imageFiles[0])
        imageFiles.slice(1).forEach(f => body.append("files", f))
      }

      await fetch(`${apiBase}/api/v1/public/property/submit`, {
        method: "POST",
        body,
      })
      setSubmitted(true)
    } catch {
      setErrors({ contactName: "Something went wrong. Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  // ── Success screen ────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Property Submitted!</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Thank you! Your property has been submitted to {agentName}. You will be contacted within 24 hours to confirm details.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setImageFiles([]); setImagePreviews([]); setForm({ purpose: "RENT", categoryId: null, monthlyRent: "", sellingPrice: "", description: "", street: "", city: "", state: "", zipCode: "", bedRooms: null, bathRooms: null, squareFeet: "", appliances: [], amenities: [], flooring: "", parking: "", contactName: "", contactPhone: "", contactEmail: "" }) }}
            className="mt-6 text-primary text-sm font-medium underline underline-offset-2"
          >
            Submit another property
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-10 sm:py-14 px-4">
      <div className="max-w-xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Submit a Property</h1>
          <p className="text-gray-500 text-sm mt-1">
            List your property with {agentName} — no account needed
          </p>
        </div>

        <StepBar current={step} />

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">

          {/* ── Step 1: Type & Price ── */}
          {step === 0 && (
            <>
              {/* Photo upload zone */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Photos <span className="text-gray-400 font-normal">(optional · up to 10)</span></p>
                {imagePreviews.length === 0 ? (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={compressing}
                    className="w-full border-2 border-dashed border-gray-200 rounded-xl py-8 flex flex-col items-center gap-2 text-gray-400 hover:border-primary/40 hover:text-primary/60 transition-colors disabled:opacity-50"
                  >
                    {compressing ? <Loader2 size={28} className="animate-spin" /> : <ImagePlus size={28} />}
                    <span className="text-sm">{compressing ? "Compressing photos..." : "Tap to add photos"}</span>
                    <span className="text-xs">JPG, PNG, HEIC · First photo becomes the main image</span>
                  </button>
                ) : (
                  <div
                    className="flex gap-2 overflow-x-auto pb-2 cursor-pointer"
                    onClick={() => !compressing && imagePreviews.length < 10 && fileInputRef.current?.click()}
                  >
                    {imagePreviews.map((url, i) => (
                      <div key={i} className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-gray-200">
                        <img src={url} alt="" className="w-full h-full object-cover" />
                        {i === 0 && (
                          <span className="absolute bottom-0 left-0 right-0 text-center text-[9px] font-semibold bg-black/50 text-white py-0.5">Main</span>
                        )}
                        <button
                          type="button"
                          onClick={ev => { ev.stopPropagation(); removeImage(i) }}
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 flex items-center justify-center"
                        >
                          <X size={10} className="text-white" />
                        </button>
                      </div>
                    ))}
                    {imagePreviews.length < 10 && (
                      <div className="shrink-0 w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 hover:border-primary/40 transition-colors">
                        {compressing ? <Loader2 size={20} className="animate-spin" /> : <ImagePlus size={20} />}
                      </div>
                    )}
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={onFileSelected}
                  className="hidden"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Listing Type</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["RENT", "SELL"] as const).map(p => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => set("purpose", p)}
                      className={`py-3 rounded-xl font-semibold text-sm border-2 transition-all ${
                        form.purpose === p
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 text-gray-600 hover:border-primary/50"
                      }`}
                    >
                      {p === "RENT" ? "For Rent" : "For Sale"}
                    </button>
                  ))}
                </div>
              </div>


              <Field label="Property Type *" error={errors.categoryId}>
                <div className="flex flex-wrap gap-2">
                  {PROPERTY_TYPES.map(t => (
                    <Chip
                      key={t.id}
                      label={t.label}
                      selected={form.categoryId === t.id}
                      onClick={() => set("categoryId", t.id)}
                    />
                  ))}
                </div>
              </Field>

              <Field label={form.purpose === "RENT" ? "Monthly Rent (optional)" : "Asking Price (optional)"}>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    type="number"
                    min={0}
                    placeholder={form.purpose === "RENT" ? "e.g. 1800" : "e.g. 425000"}
                    value={form.purpose === "RENT" ? form.monthlyRent : form.sellingPrice}
                    onChange={e => set(form.purpose === "RENT" ? "monthlyRent" : "sellingPrice", e.target.value)}
                    className={`${inputClass} pl-8`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">Adding a price gets 3× more inquiries. Leave blank to show "Contact for price".</p>
              </Field>

              <Field label="Description (optional)">
                <textarea
                  rows={3}
                  placeholder="Describe the property — highlights, condition, available date..."
                  value={form.description}
                  onChange={e => set("description", e.target.value)}
                  className={textareaClass}
                />
              </Field>
            </>
          )}

          {/* ── Step 2: Address ── */}
          {step === 1 && (
            <>
              <Field label="Street Address (optional)">
                <input
                  type="text"
                  placeholder="e.g. 1234 Oak St, Unit 2B"
                  value={form.street}
                  onChange={e => set("street", e.target.value)}
                  className={inputClass}
                />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="City *" error={errors.city}>
                  <input
                    type="text"
                    placeholder="e.g. Portland"
                    value={form.city}
                    onChange={e => set("city", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="State *" error={errors.state}>
                  <select
                    value={form.state}
                    onChange={e => set("state", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    {US_STATES.map(s => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Zip Code (optional)">
                <input
                  type="text"
                  placeholder="e.g. 97201"
                  value={form.zipCode}
                  onChange={e => set("zipCode", e.target.value)}
                  className={`${inputClass} max-w-[160px]`}
                />
              </Field>
            </>
          )}

          {/* ── Step 3: Size & Features ── */}
          {step === 2 && (
            <>
              {!isCommercial && (
                <div>
                  <p className={`text-sm font-medium mb-2 ${errors.bedRooms ? "text-red-500" : "text-gray-700"}`}>
                    Bedrooms *
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BED_OPTIONS.map(o => (
                      <NumChip
                        key={o.value}
                        label={o.label}
                        selected={form.bedRooms === o.value}
                        onClick={() => { set("bedRooms", o.value) }}
                      />
                    ))}
                  </div>
                  {errors.bedRooms && <p className="text-red-500 text-xs mt-1">{errors.bedRooms}</p>}
                </div>
              )}

              <div>
                <p className={`text-sm font-medium mb-2 ${errors.bathRooms ? "text-red-500" : "text-gray-700"}`}>
                  Bathrooms {isCommercial ? "(optional)" : "*"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {BATH_OPTIONS.map(o => (
                    <NumChip
                      key={o.value}
                      label={o.label}
                      selected={form.bathRooms === o.value}
                      onClick={() => { set("bathRooms", o.value) }}
                    />
                  ))}
                </div>
                {errors.bathRooms && <p className="text-red-500 text-xs mt-1">{errors.bathRooms}</p>}
              </div>

              <Field label="Square Footage (optional)">
                <div className="relative max-w-[200px]">
                  <input
                    type="number"
                    min={0}
                    placeholder="e.g. 850"
                    value={form.squareFeet}
                    onChange={e => set("squareFeet", e.target.value)}
                    className={inputClass}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">sq ft</span>
                </div>
              </Field>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-4">Features — all optional</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Appliances</p>
                    <div className="flex flex-wrap gap-2">
                      {APPLIANCES.map(item => (
                        <Chip key={item} label={item} selected={form.appliances.includes(item)} onClick={() => toggleMulti("appliances", item)} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {AMENITIES.map(item => (
                        <Chip key={item} label={item} selected={form.amenities.includes(item)} onClick={() => toggleMulti("amenities", item)} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Flooring</p>
                    <div className="flex flex-wrap gap-2">
                      {FLOORING.map(item => (
                        <Chip key={item} label={item} selected={form.flooring === item} onClick={() => set("flooring", form.flooring === item ? "" : item)} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Parking</p>
                    <div className="flex flex-wrap gap-2">
                      {PARKING.map(item => (
                        <Chip key={item} label={item} selected={form.parking === item} onClick={() => set("parking", form.parking === item ? "" : item)} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── Step 4: Contact Info ── */}
          {step === 3 && (
            <>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm text-gray-600">
                <p className="font-medium text-gray-800 mb-0.5">How {agentName} will reach you</p>
                <p>Your contact details are private — only {agentName} will see them to confirm your listing.</p>
              </div>

              <Field label="Your Full Name *" error={errors.contactName}>
                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  value={form.contactName}
                  onChange={e => set("contactName", e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Phone Number *" error={errors.contactPhone}>
                <input
                  type="tel"
                  placeholder="e.g. (503) 555-1234"
                  value={form.contactPhone}
                  onChange={e => set("contactPhone", e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Email Address (optional)">
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={form.contactEmail}
                  onChange={e => set("contactEmail", e.target.value)}
                  className={inputClass}
                />
              </Field>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500">
                By submitting, your property will be reviewed by {agentName} and listed once approved. No payment required.
              </div>

              {errors.contactName && errors.contactName === "Something went wrong. Please try again." && (
                <p className="text-red-500 text-sm text-center">{errors.contactName}</p>
              )}
            </>
          )}

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between pt-2">
            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm font-medium"
              >
                <ChevronLeft size={16} /> Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                className="flex items-center gap-1.5 bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="flex items-center gap-2 bg-primary text-white px-8 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {submitting ? (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : <Check size={16} />}
                {submitting ? "Submitting..." : "Submit Property"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
