"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { CheckCircle, Calendar, ChevronRight, ChevronLeft, Scissors, Sparkles, Heart, Eye, Droplets, Palette, Star, Wrench, Zap, Droplet, BookOpen, Wind, Car, type LucideIcon } from "lucide-react"
import type { SiteConfig } from "@/config/types"

const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""

const ICON_MAP: Record<string, LucideIcon> = {
  Scissors, Sparkles, Heart, Eye, Droplets, Palette, Star, Calendar,
  Wrench, Zap, Droplet, BookOpen, Wind, Car,
}

interface BookingClientProps {
  booking: NonNullable<SiteConfig["booking"]>
  business: SiteConfig["business"]
  sellerSlug?: string
  isLive?: boolean
  isDemo?: boolean
}

type Step = "service" | "datetime" | "details" | "done"

function StripePaymentForm({ bookingNumber, onSuccess }: { bookingNumber: string | null, onSuccess: (paymentIntentId?: string) => void }) {
  const stripe   = useStripe()
  const elements = useElements()
  const [paying,  setPaying]  = useState(false)
  const [ready,   setReady]   = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  async function handlePay(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements || !ready) {
      setError("Card form is not ready yet. Please wait a moment and try again.")
      return
    }
    setPaying(true)
    setError(null)
    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/booking/success?booking=" + (bookingNumber ?? ""),
        },
        redirect: "if_required",
      })
      if (result.error) {
        setError(result.error.message ?? "Payment failed. Please try again.")
        setPaying(false)
      } else {
        onSuccess(result.paymentIntent?.id)
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.")
      setPaying(false)
    }
  }

  return (
    <form onSubmit={handlePay} className="space-y-5">
      {!ready && !error && (
        <div className="flex items-center gap-2 text-sm text-gray-400 py-2">
          <svg className="animate-spin h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Loading card form…
        </div>
      )}
      <PaymentElement
        onReady={() => setReady(true)}
        onLoadError={(e) => setError(e.error?.message ?? "Failed to load payment form. Please refresh.")}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={paying || !ready}
        className="w-full bg-primary text-white font-bold py-4 rounded-site
                   hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {paying ? "Processing…" : "Pay Deposit Now"}
      </button>
    </form>
  )
}

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

// ── Calendar picker ───────────────────────────────────────────────────────────
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"]

function CalendarPicker({ value, min, onChange }: { value: string; min: string; onChange: (d: string) => void }) {
  const minDate = new Date(min + "T12:00")
  const [viewYear,  setViewYear]  = useState(minDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(minDate.getMonth())

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  function toStr(y: number, m: number, d: number) {
    return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`
  }

  function isPast(d: number) {
    return new Date(viewYear, viewMonth, d) < new Date(min + "T00:00")
  }

  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth    = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDayOfWeek }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 p-4 select-none">
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={prevMonth} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          <ChevronLeft size={16} className="text-gray-500 dark:text-gray-300" />
        </button>
        <span className="text-sm font-semibold text-gray-800 dark:text-white">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button type="button" onClick={nextMonth} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          <ChevronRight size={16} className="text-gray-500 dark:text-gray-300" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-medium text-gray-400 dark:text-gray-500 py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />
          const str      = toStr(viewYear, viewMonth, day)
          const selected = value === str
          const past     = isPast(day)
          return (
            <button key={i} type="button" disabled={past} onClick={() => onChange(str)}
              className={`h-9 w-full rounded-lg text-sm font-medium transition-all ${
                selected  ? "text-white shadow-sm"
                : past    ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              style={selected ? { background: "var(--color-primary)" } : {}}>
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DatePickerField({ value, min, onChange }: { value: string; min: string; onChange: (d: string) => void }) {
  const [open, setOpen] = useState(!value)

  function handleSelect(d: string) {
    onChange(d)
    setOpen(false)
  }

  const displayDate = value
    ? new Date(value + "T12:00").toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" })
    : null

  return (
    <div>
      <button type="button" onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3.5 text-sm transition-all hover:border-gray-300 dark:hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30">
        <span className={displayDate ? "text-gray-800 dark:text-white font-medium" : "text-gray-400"}>
          {displayDate ?? "Select a date"}
        </span>
        <div className="flex items-center gap-2">
          {displayDate && <span className="text-xs text-gray-400">{open ? "Close" : "Change"}</span>}
          <Calendar size={16} className="text-gray-400 shrink-0" />
        </div>
      </button>
      {open && (
        <div className="mt-2">
          <CalendarPicker value={value} min={min} onChange={handleSelect} />
        </div>
      )}
    </div>
  )
}

export function BookingClient({ booking, business, sellerSlug, isLive, isDemo }: BookingClientProps) {
  const stripePromise = useMemo(
    () => loadStripe(STRIPE_KEY, booking.stripeConnectAccountId ? { stripeAccount: booking.stripeConnectAccountId } : undefined),
    [booking.stripeConnectAccountId]
  )

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
  const [clientSecret, setClientSecret] = useState<string | null>(null)

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

    if (!isLive || isDemo) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setStep("done")
      setSubmitting(false)
      return
    }

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
          siteUrl:       window.location.origin,
        }
        if (selectedService.listingId) {
          body.serviceListingId = selectedService.listingId
        } else {
          body.serviceName   = selectedService.name
          body.serviceAmount = selectedService.priceAmount
        }
        if (sellerSlug) {
          body.sellerSlug = sellerSlug
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
        if (data.clientSecret) {
          setClientSecret(data.clientSecret)
          setBookingNumber(data.bookingNumber ?? null)
          window.scrollTo({ top: 0, behavior: "smooth" })
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
      window.scrollTo({ top: 0, behavior: "smooth" })
      setStep("done")
    } finally {
      setSubmitting(false)
    }
  }

  // ── Done ──────────────────────────────────────────────────────────────────────
  if (step === "done") {
    return (
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "var(--color-accent)" }}>
            <CheckCircle size={40} className="text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">You&apos;re Booked!</h2>
          <p className="text-gray-500 text-sm mb-6">Thanks <strong>{form.name}</strong>! We&apos;ll call you at <strong>{form.phone}</strong> to confirm.</p>

          <div className="rounded-2xl border border-gray-100 text-left divide-y divide-gray-100 mb-8" style={{ background: "var(--color-accent)" }}>
            {bookingNumber && (
              <div className="flex justify-between px-5 py-3 text-sm">
                <span className="text-gray-500">Booking #</span>
                <span className="font-semibold text-gray-800">{bookingNumber}</span>
              </div>
            )}
            <div className="flex justify-between px-5 py-3 text-sm">
              <span className="text-gray-500">Service</span>
              <span className="font-semibold text-gray-800">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between px-5 py-3 text-sm">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-gray-800">
                {new Date(selectedDate + "T12:00").toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" })}
              </span>
            </div>
            <div className="flex justify-between px-5 py-3 text-sm">
              <span className="text-gray-500">Time</span>
              <span className="font-semibold text-gray-800">{formatSlot(selectedTime)}</span>
            </div>
            {selectedService?.price && (
              <div className="flex justify-between px-5 py-3 text-sm">
                <span className="text-gray-500">Price</span>
                <span className="font-semibold text-primary">{selectedService.price}</span>
              </div>
            )}
          </div>

          <Link href="/" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold text-sm" style={{ background: "var(--color-primary)" }}>
            Back to Home
          </Link>
        </div>
      </section>
    )
  }

  // ── Details form ──────────────────────────────────────────────────────────────
  if (step === "details") {
    return (
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          {!clientSecret && (
            <button onClick={() => setStep("datetime")} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
              ← Back
            </button>
          )}

          {/* Summary pill */}
          <div className="rounded-2xl border border-gray-100 p-4 mb-6 flex flex-wrap gap-3 items-center text-sm" style={{ background: "var(--color-accent)" }}>
            <span className="font-semibold text-gray-800">{selectedService?.name}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-600">{new Date(selectedDate + "T12:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</span>
            <span className="text-gray-400">·</span>
            <span className="font-medium text-primary">{formatSlot(selectedTime)}</span>
            {selectedService?.price && <><span className="text-gray-400">·</span><span className="text-gray-600">{selectedService.price}</span></>}
          </div>

          {clientSecret ? (
            /* ── Phase 2: card form slides in, no page navigation ── */
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl p-5 sm:p-8 space-y-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Pay Your Deposit</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Booking #{bookingNumber} · {form.name} · {form.phone}
                </p>
              </div>
              <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: "stripe" } }}>
                <StripePaymentForm
                  bookingNumber={bookingNumber}
                  onSuccess={(_piId) => {
                    setStep("done")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                />
              </Elements>
            </div>
          ) : (
            /* ── Phase 1: contact details ── */
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl p-5 sm:p-8 space-y-5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Full Name *</label>
                  <input value={form.name} onChange={e => handleChange("name", e.target.value)} onBlur={() => handleBlur("name")}
                    placeholder="Your name"
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.name && errors.name ? "border-red-400" : "border-gray-200 dark:border-gray-600"}`} />
                  {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Phone *</label>
                  <input type="tel" value={form.phone} onChange={e => handleChange("phone", e.target.value)} onBlur={() => handleBlur("phone")}
                    placeholder="Your phone number"
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.phone && errors.phone ? "border-red-400" : "border-gray-200 dark:border-gray-600"}`} />
                  {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email <span className="text-gray-400 font-normal">(optional — for confirmation)</span></label>
                <input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")}
                  placeholder="your@email.com"
                  className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.email && errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-600"}`} />
                {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {collectAddress && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Service Address *</label>
                  <input value={form.address} onChange={e => handleChange("address", e.target.value)} onBlur={() => handleBlur("address")}
                    placeholder="123 Main St, City, State"
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.address && errors.address ? "border-red-400" : "border-gray-200 dark:border-gray-600"}`} />
                  {touched.address && errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Notes <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea value={form.notes} onChange={e => handleChange("notes", e.target.value)}
                  rows={3} placeholder={notesPlaceholder}
                  className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none" />
              </div>

              {apiError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{apiError}</div>
              )}

              <button type="submit" disabled={submitting}
                className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "var(--color-primary)" }}>
                {submitting ? "Saving…" : depositPercent > 0 ? `Continue to Payment` : "Confirm Appointment"}
              </button>

              <p className="text-center text-xs text-gray-400">
                {depositPercent > 0 ? `A ${depositPercent}% deposit secures your appointment.` : "No payment required. We'll call to confirm your appointment."}
              </p>
            </form>
          )}
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
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Select a Date</h3>
            <DatePickerField
              value={selectedDate}
              min={today}
              onChange={d => { setSelectedDate(d); setSelectedTime("") }}
            />
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="mb-8">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Select a Time</h3>
              {availableSlots.length === 0 ? (
                <p className="text-sm text-gray-400">No available times for this date. Please choose another day.</p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableSlots.map(t => (
                    <button key={t} type="button" onClick={() => setSelectedTime(t)}
                      className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
                        selectedTime === t
                          ? "text-white border-transparent shadow-md"
                          : "border-gray-200 dark:border-gray-500 text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:border-primary/40 hover:text-primary"
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
    <section className="py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {booking.title ?? "Book an Appointment"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {booking.subtitle ?? "Select a service to get started"}
          </p>
        </div>

        <div className="space-y-3">
          {booking.services.map((service, i) => {
            const Icon = service.icon && ICON_MAP[service.icon] ? ICON_MAP[service.icon]! : Calendar
            return (
              <button
                key={i}
                onClick={() => goToDateTime(i)}
                className="w-full text-left flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 hover:border-primary hover:shadow-md hover:bg-primary/[0.02] dark:hover:border-primary/60 transition-all duration-150 group"
              >
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                  style={{ background: "var(--color-accent)" }}>
                  <Icon size={20} className="text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 dark:text-white text-[15px] leading-snug">
                    {service.name}
                  </div>
                  {service.description && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5 line-clamp-1">
                      {service.description}
                    </p>
                  )}
                  {(service.price || service.duration) && (
                    <div className="flex items-center gap-2 mt-1.5">
                      {service.price    && <span className="text-primary font-bold text-sm">{service.price}</span>}
                      {service.duration && <span className="text-gray-400 text-xs">· {service.duration}</span>}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={20}
                  className="shrink-0 text-gray-300 dark:text-gray-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
