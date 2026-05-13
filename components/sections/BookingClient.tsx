"use client"

import { useState, useMemo } from "react"
import { CheckCircle, Calendar, ChevronRight, Scissors, Sparkles, Heart, Eye, Droplets, Palette, Star, Wrench, Zap, Droplet, BookOpen, Wind, Car, type LucideIcon } from "lucide-react"
import type { SiteConfig } from "@/config/types"

const ICON_MAP: Record<string, LucideIcon> = {
  Scissors, Sparkles, Heart, Eye, Droplets, Palette, Star, Calendar,
  Wrench, Zap, Droplet, BookOpen, Wind, Car,
}

interface BookingClientProps {
  booking: NonNullable<SiteConfig["booking"]>
  business: SiteConfig["business"]
}

type Step = "service" | "datetime" | "details" | "done"

interface FormState {
  name: string
  phone: string
  email: string
  address: string
  notes: string
}

type Errors = Partial<Record<keyof FormState, string>>

// ── Generate time slots ────────────────────────────────────────────────────────
function generateSlots(open: string, close: string, stepMin: number): string[] {
  const slots: string[] = []
  const [oh, om] = open.split(":").map(Number)
  const [ch, cm] = close.split(":").map(Number)
  let cur = oh * 60 + (om ?? 0)
  const end = ch * 60 + (cm ?? 0)
  while (cur < end) {
    const h = Math.floor(cur / 60)
    const m = cur % 60
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`)
    cur += stepMin
  }
  return slots
}

function formatSlot(t: string): string {
  const [h, m] = t.split(":").map(Number)
  const ampm = h < 12 ? "AM" : "PM"
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`
}

function isPastSlot(date: string, time: string): boolean {
  if (!date) return false
  const now = new Date()
  const slotDate = new Date(`${date}T${time}`)
  return slotDate <= now
}

// ── Validate ──────────────────────────────────────────────────────────────────
function validate(f: FormState, collectAddress: boolean): Errors {
  const e: Errors = {}
  if (!f.name.trim() || f.name.trim().length < 2) e.name = "Please enter your full name."
  if (!f.phone.trim() || !/^[\d\s\-\+\(\)]{7,15}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number."
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address."
  if (collectAddress && !f.address.trim()) e.address = "Please enter your address."
  return e
}

export function BookingClient({ booking, business }: BookingClientProps) {
  const openTime   = booking.openTime  ?? "09:00"
  const closeTime  = booking.closeTime ?? "19:00"
  const timeStep   = booking.timeStep  ?? 30
  const slots      = useMemo(() => generateSlots(openTime, closeTime, timeStep), [openTime, closeTime, timeStep])

  const [step, setStep]                 = useState<Step>("service")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [form, setForm]                 = useState<FormState>({ name: "", phone: "", email: "", address: "", notes: "" })
  const [errors, setErrors]             = useState<Errors>({})
  const [touched, setTouched]           = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitting, setSubmitting]     = useState(false)
  const [apiError, setApiError]         = useState<string | null>(null)
  const [bookingNumber, setBookingNumber] = useState<string | null>(null)

  const selectedService  = selectedIndex !== null ? booking.services[selectedIndex] : null
  const depositPercent   = selectedService?.depositPercent ?? booking.defaultDepositPercent ?? 0
  const collectAddress   = booking.collectAddress ?? false
  const notesPlaceholder = booking.notesPlaceholder ?? "Any special requests or notes for us?"

  const availableSlots = useMemo(
    () => slots.filter(t => !isPastSlot(selectedDate, t)),
    [slots, selectedDate]
  )

  function handleBlur(field: keyof FormState) {
    setTouched(t => ({ ...t, [field]: true }))
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  function goToDateTime(i: number) {
    setSelectedIndex(i)
    setStep("datetime")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function goToDetails() {
    if (!selectedDate || !selectedTime) return
    setStep("details")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form, collectAddress)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setTouched({ name: true, phone: true, email: true, address: true })
      return
    }
    setErrors({})
    setApiError(null)
    setSubmitting(true)

    const apiBase = (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")

    try {
      if (selectedService?.listingId || selectedService?.priceAmount !== undefined) {
        const body: Record<string, unknown> = {
          clientName:    form.name,
          clientPhone:   form.phone,
          clientEmail:   form.email || undefined,
          scheduledDate: selectedDate,
          scheduledTime: selectedTime,
          serviceAddress: collectAddress ? form.address : undefined,
          customerNotes: form.notes || undefined,
          depositPercent,
        }
        if (selectedService.listingId) {
          body.serviceListingId = selectedService.listingId
        } else {
          body.serviceName   = selectedService.name
          body.serviceAmount = selectedService.priceAmount
        }
        if (booking.stripeConnectAccountId) {
          body.stripeConnectAccountId = booking.stripeConnectAccountId
        }

        const res  = await fetch(`${apiBase}/api/v1/public/booking`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        const data = await res.json()
        if (!res.ok) {
          setApiError(data?.message ?? "Something went wrong. Please try again.")
          return
        }
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl
          return
        }
        setBookingNumber(data.bookingNumber ?? null)
      } else {
        await fetch(`${apiBase}/api/v1/public/contact/notify-lead`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name, phone: form.phone, email: form.email,
            details: `Service: ${selectedService?.name} · ${selectedDate} at ${formatSlot(selectedTime)}${form.address ? ` · Address: ${form.address}` : ""}${form.notes ? `\nNotes: ${form.notes}` : ""}`,
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? "unknown",
            appName: business.name, type: "BOOKING_REQUEST",
            reason: "Appointment Request", notifyEmail: business.email,
          }),
        })
      }
      setStep("done")
    } finally {
      setSubmitting(false)
    }
  }

  // ── Done ──────────────────────────────────────────────────────────────────────
  if (step === "done") {
    return (
      <section className="py-24">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--color-accent)" }}>
            <CheckCircle size={40} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re Booked!</h2>
          {bookingNumber && <p className="text-sm text-gray-400 mb-2">Booking #{bookingNumber}</p>}
          <p className="text-gray-500 mb-2">
            Thanks <strong>{form.name}</strong>! Your <strong>{selectedService?.name}</strong> appointment on{" "}
            <strong>{new Date(selectedDate + "T12:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</strong>{" "}
            at <strong>{formatSlot(selectedTime)}</strong> is confirmed.
          </p>
          <p className="text-gray-400 text-sm mb-8">We&apos;ll call you at {form.phone} to confirm. See you soon!</p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "var(--color-primary)" }}>
            Back to Home
          </a>
        </div>
      </section>
    )
  }

  // ── Details form ──────────────────────────────────────────────────────────────
  if (step === "details") {
    return (
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <button onClick={() => setStep("datetime")} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            ← Back
          </button>

          {/* Summary pill */}
          <div className="rounded-2xl border border-gray-100 p-4 mb-6 flex flex-wrap gap-3 items-center text-sm" style={{ background: "var(--color-accent)" }}>
            <span className="font-semibold text-gray-800">{selectedService?.name}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-600">{new Date(selectedDate + "T12:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</span>
            <span className="text-gray-400">·</span>
            <span className="font-medium text-primary">{formatSlot(selectedTime)}</span>
            {selectedService?.price && <><span className="text-gray-400">·</span><span className="text-gray-600">{selectedService.price}</span></>}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Your Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input value={form.name} onChange={e => handleChange("name", e.target.value)} onBlur={() => handleBlur("name")}
                  placeholder="Your name"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${touched.name && errors.name ? "border-red-400" : "border-gray-200"}`} />
                {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                <input type="tel" value={form.phone} onChange={e => handleChange("phone", e.target.value)} onBlur={() => handleBlur("phone")}
                  placeholder="Your phone number"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${touched.phone && errors.phone ? "border-red-400" : "border-gray-200"}`} />
                {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-gray-400 font-normal">(optional — for confirmation)</span></label>
              <input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")}
                placeholder="your@email.com"
                className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${touched.email && errors.email ? "border-red-400" : "border-gray-200"}`} />
              {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {collectAddress && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Address *</label>
                <input value={form.address} onChange={e => handleChange("address", e.target.value)} onBlur={() => handleBlur("address")}
                  placeholder="123 Main St, City, State"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${touched.address && errors.address ? "border-red-400" : "border-gray-200"}`} />
                {touched.address && errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Notes <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea value={form.notes} onChange={e => handleChange("notes", e.target.value)}
                rows={3} placeholder={notesPlaceholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none" />
            </div>

            {apiError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{apiError}</div>
            )}

            <button type="submit" disabled={submitting}
              className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "var(--color-primary)" }}>
              {submitting ? "Processing…" : depositPercent > 0 ? `Pay ${depositPercent}% Deposit & Confirm` : "Confirm Appointment"}
            </button>

            <p className="text-center text-xs text-gray-400">
              {depositPercent > 0 ? "You'll be redirected to secure checkout for your deposit." : "No payment required. We'll call to confirm your appointment."}
            </p>
          </form>
        </div>
      </section>
    )
  }

  // ── Date + Time picker ─────────────────────────────────────────────────────────
  if (step === "datetime") {
    const today    = new Date().toISOString().split("T")[0]
    const canContinue = selectedDate && selectedTime

    return (
      <section className="py-16 overflow-x-hidden">
        <div className="max-w-xl mx-auto px-4 sm:px-6 w-full">
          <button onClick={() => setStep("service")} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            ← Back to services
          </button>

          {/* Selected service summary */}
          <div className="rounded-2xl border border-gray-100 p-4 mb-8 flex items-center gap-4" style={{ background: "var(--color-accent)" }}>
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--color-primary)" }}>
              {selectedService?.icon && ICON_MAP[selectedService.icon]
                ? (() => { const Icon = ICON_MAP[selectedService.icon!]!; return <Icon size={18} className="text-white" /> })()
                : <Calendar size={18} className="text-white" />}
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">{selectedService?.name}</div>
              <div className="flex gap-3 text-xs text-gray-500 mt-0.5">
                {selectedService?.price    && <span className="text-primary font-medium">{selectedService.price}</span>}
                {selectedService?.duration && <span>· {selectedService.duration}</span>}
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="mb-8">
            <h3 className="text-base font-bold text-gray-900 mb-3">Select a Date</h3>
            <div className="relative">
              <input type="date" value={selectedDate} min={today}
                onChange={e => { setSelectedDate(e.target.value); setSelectedTime("") }}
                className="w-full bg-white border border-gray-300 rounded-xl pl-4 pr-12 py-4 text-sm text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-gray-300 transition-all box-border" />
              <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="mb-8">
              <h3 className="text-base font-bold text-gray-900 mb-3">Select a Time</h3>
              {availableSlots.length === 0 ? (
                <p className="text-sm text-gray-400">No available times for this date. Please choose another day.</p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableSlots.map(t => (
                    <button key={t} type="button" onClick={() => setSelectedTime(t)}
                      className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
                        selectedTime === t
                          ? "text-white border-transparent shadow-md"
                          : "border-gray-200 text-gray-700 hover:border-primary/40 hover:text-primary bg-white"
                      }`}
                      style={selectedTime === t ? { background: "var(--color-primary)", borderColor: "var(--color-primary)" } : {}}>
                      {formatSlot(t)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <button onClick={goToDetails} disabled={!canContinue}
            className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--color-primary)" }}>
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </section>
    )
  }

  // ── Service picker ─────────────────────────────────────────────────────────────
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {booking.services.map((service, i) => {
            const Icon = service.icon && ICON_MAP[service.icon] ? ICON_MAP[service.icon]! : Calendar
            return (
              <button key={i} onClick={() => goToDateTime(i)}
                className="text-left rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-primary/30 transition-all group bg-white">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: "var(--color-accent)" }}>
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">{service.name}</div>
                {service.description && <p className="text-gray-500 text-sm mb-3 line-clamp-2">{service.description}</p>}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    {service.price     && <span className="text-primary font-semibold text-sm">{service.price}</span>}
                    {service.duration  && <span className="text-gray-400 text-xs">· {service.duration}</span>}
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
