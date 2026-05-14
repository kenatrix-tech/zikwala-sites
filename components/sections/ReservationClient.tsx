"use client"

import { useState, useMemo } from "react"
import { CheckCircle, Calendar, ChevronLeft, ChevronRight, Minus, Plus, Users } from "lucide-react"
import type { SiteConfig } from "@/config/types"

// ── Shared helpers ────────────────────────────────────────────────────────────
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"]

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
  const h12  = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`
}

function isPastSlot(date: string, time: string): boolean {
  if (!date) return false
  return new Date(`${date}T${time}`) <= new Date()
}

// ── Calendar ──────────────────────────────────────────────────────────────────
function CalendarPicker({ value, min, onChange }: { value: string; min: string; onChange: (d: string) => void }) {
  const minDate = new Date(min + "T12:00")
  const [viewYear,  setViewYear]  = useState(minDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(minDate.getMonth())

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) } else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) } else setViewMonth(m => m + 1)
  }
  function toStr(y: number, m: number, d: number) {
    return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`
  }
  function isPast(d: number) {
    return new Date(viewYear, viewMonth, d) < new Date(min + "T00:00")
  }

  const cells: (number | null)[] = [
    ...Array.from({ length: new Date(viewYear, viewMonth, 1).getDay() }, () => null),
    ...Array.from({ length: new Date(viewYear, viewMonth + 1, 0).getDate() }, (_, i) => i + 1),
  ]

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 p-4 select-none">
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={prevMonth} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          <ChevronLeft size={16} className="text-gray-500 dark:text-gray-300" />
        </button>
        <span className="text-sm font-semibold text-gray-800 dark:text-white">{MONTHS[viewMonth]} {viewYear}</span>
        <button type="button" onClick={nextMonth} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          <ChevronRight size={16} className="text-gray-500 dark:text-gray-300" />
        </button>
      </div>
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map(d => <div key={d} className="text-center text-xs font-medium text-gray-400 dark:text-gray-500 py-1">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />
          const str = toStr(viewYear, viewMonth, day)
          const selected = value === str
          const past = isPast(day)
          return (
            <button key={i} type="button" disabled={past} onClick={() => onChange(str)}
              className={`h-9 w-full rounded-lg text-sm font-medium transition-all ${
                selected ? "text-white shadow-sm" : past ? "text-gray-300 dark:text-gray-600 cursor-not-allowed" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
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

  function handleSelect(d: string) { onChange(d); setOpen(false) }

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
      {open && <div className="mt-2"><CalendarPicker value={value} min={min} onChange={handleSelect} /></div>}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
interface ReservationClientProps {
  booking: NonNullable<SiteConfig["booking"]>
  business: SiteConfig["business"]
  isLive?: boolean
}

type Step = "guests" | "datetime" | "details" | "done"
interface FormState { name: string; phone: string; email: string; notes: string }
type Errors = Partial<Record<keyof FormState, string>>

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (!f.name.trim() || f.name.trim().length < 2) e.name = "Please enter your full name."
  if (!f.phone.trim() || !/^[\d\s\-\+\(\)]{7,15}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number."
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address."
  return e
}

const QUICK_SIZES = [1, 2, 3, 4, 6, 8]

export function ReservationClient({ booking, business, isLive }: ReservationClientProps) {
  const openTime  = booking.openTime  ?? "11:00"
  const closeTime = booking.closeTime ?? "22:00"
  const timeStep  = booking.timeStep  ?? 30
  const maxGuests = 20

  const slots = useMemo(() => generateSlots(openTime, closeTime, timeStep), [openTime, closeTime, timeStep])

  const [step,         setStep]         = useState<Step>("guests")
  const [guests,       setGuests]       = useState(2)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [form,         setForm]         = useState<FormState>({ name: "", phone: "", email: "", notes: "" })
  const [errors,       setErrors]       = useState<Errors>({})
  const [touched,      setTouched]      = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitting,   setSubmitting]   = useState(false)
  const [apiError,     setApiError]     = useState<string | null>(null)

  const today = new Date().toISOString().split("T")[0]

  const availableSlots = useMemo(
    () => slots.filter(t => !isPastSlot(selectedDate, t)),
    [slots, selectedDate]
  )

  function adjustGuests(delta: number) {
    setGuests(g => Math.min(maxGuests, Math.max(1, g + delta)))
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  function handleBlur(field: keyof FormState) {
    setTouched(t => ({ ...t, [field]: true }))
  }

  function goToDateTime() {
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
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setTouched({ name: true, phone: true, email: true })
      return
    }
    setErrors({})
    setApiError(null)
    setSubmitting(true)

    if (!isLive) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setStep("done")
      setSubmitting(false)
      return
    }

    const apiBase = (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")
    try {
      await fetch(`${apiBase}/api/v1/public/contact/notify-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, phone: form.phone, email: form.email,
          details: `Reservation: ${guests} guest${guests > 1 ? "s" : ""} · ${selectedDate} at ${formatSlot(selectedTime)}${form.notes ? `\nNotes: ${form.notes}` : ""}`,
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? "unknown",
          appName: business.name, type: "BOOKING_REQUEST",
          reason: "Table Reservation", notifyEmail: business.email,
        }),
      })
      window.scrollTo({ top: 0, behavior: "smooth" })
      setStep("done")
    } catch {
      setApiError("Something went wrong. Please try again or call us directly.")
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Reservation Requested!</h2>
          <p className="text-gray-500 text-sm mb-6">Thanks <strong>{form.name}</strong>! We&apos;ll call you at <strong>{form.phone}</strong> to confirm your table.</p>

          <div className="rounded-2xl border border-gray-100 text-left divide-y divide-gray-100 mb-8" style={{ background: "var(--color-accent)" }}>
            <div className="flex justify-between px-5 py-3 text-sm">
              <span className="text-gray-500">Guests</span>
              <span className="font-semibold text-gray-800">{guests} {guests === 1 ? "guest" : "guests"}</span>
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
            <div className="flex justify-between px-5 py-3 text-sm">
              <span className="text-gray-500">Restaurant</span>
              <span className="font-semibold text-gray-800">{business.name}</span>
            </div>
          </div>

          <a href="/" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold text-sm" style={{ background: "var(--color-primary)" }}>
            Back to Home
          </a>
        </div>
      </section>
    )
  }

  // ── Details ───────────────────────────────────────────────────────────────────
  if (step === "details") {
    return (
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <button onClick={() => setStep("datetime")} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            ← Back
          </button>

          <div className="rounded-2xl border border-gray-100 p-4 mb-6 flex flex-wrap gap-3 items-center text-sm" style={{ background: "var(--color-accent)" }}>
            <span className="font-semibold text-gray-800">{guests} {guests === 1 ? "guest" : "guests"}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-600">{new Date(selectedDate + "T12:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</span>
            <span className="text-gray-400">·</span>
            <span className="font-medium text-primary">{formatSlot(selectedTime)}</span>
          </div>

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
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email <span className="text-gray-400 font-normal">(optional)</span></label>
              <input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")}
                placeholder="your@email.com"
                className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.email && errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-600"}`} />
              {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Special Requests <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea value={form.notes} onChange={e => handleChange("notes", e.target.value)}
                rows={3} placeholder="Allergies, dietary needs, special occasions..."
                className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none" />
            </div>

            {apiError && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{apiError}</div>}

            <button type="submit" disabled={submitting}
              className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "var(--color-primary)" }}>
              {submitting ? "Sending…" : "Confirm Reservation"}
            </button>
            <p className="text-center text-xs text-gray-400">No payment required. We&apos;ll call to confirm your table.</p>
          </form>
        </div>
      </section>
    )
  }

  // ── Date + Time ───────────────────────────────────────────────────────────────
  if (step === "datetime") {
    return (
      <section className="py-16 overflow-x-hidden">
        <div className="max-w-xl mx-auto px-4 sm:px-6 w-full">
          <button onClick={() => setStep("guests")} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            ← Back
          </button>

          <div className="rounded-2xl border border-gray-100 p-4 mb-8 flex items-center gap-3" style={{ background: "var(--color-accent)" }}>
            <Users size={18} className="text-primary shrink-0" />
            <span className="font-semibold text-gray-800 text-sm">{guests} {guests === 1 ? "guest" : "guests"}</span>
          </div>

          <div className="mb-8">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Select a Date</h3>
            <DatePickerField value={selectedDate} min={today} onChange={d => { setSelectedDate(d); setSelectedTime("") }} />
          </div>

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

          <button onClick={goToDetails} disabled={!selectedDate || !selectedTime}
            className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--color-primary)" }}>
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </section>
    )
  }

  // ── Guests ────────────────────────────────────────────────────────────────────
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">How many guests?</h2>
        <p className="text-gray-400 text-sm text-center mb-10">Including yourself</p>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button type="button" onClick={() => adjustGuests(-1)} disabled={guests <= 1}
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:text-primary border-gray-300 text-gray-600">
            <Minus size={22} />
          </button>

          <div className="text-center min-w-[80px]">
            <div className="text-6xl font-bold text-gray-900 dark:text-white leading-none">{guests}</div>
            <div className="text-sm text-gray-400 mt-1">{guests === 1 ? "guest" : "guests"}</div>
          </div>

          <button type="button" onClick={() => adjustGuests(1)} disabled={guests >= maxGuests}
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:text-primary border-gray-300 text-gray-600">
            <Plus size={22} />
          </button>
        </div>

        {/* Quick select */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {QUICK_SIZES.map(n => (
            <button key={n} type="button" onClick={() => setGuests(n)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                guests === n ? "text-white border-transparent" : "border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-primary/40 bg-white dark:bg-gray-700"
              }`}
              style={guests === n ? { background: "var(--color-primary)" } : {}}>
              {n}
            </button>
          ))}
          <button type="button" onClick={() => setGuests(10)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              guests >= 10 ? "text-white border-transparent" : "border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-primary/40 bg-white dark:bg-gray-700"
            }`}
            style={guests >= 10 ? { background: "var(--color-primary)" } : {}}>
            10+
          </button>
        </div>

        {guests >= 10 && (
          <p className="text-center text-xs text-gray-400 mb-6">For large parties, we&apos;ll call to arrange the best seating for your group.</p>
        )}

        <button onClick={goToDateTime}
          className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base"
          style={{ background: "var(--color-primary)" }}>
          Continue <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
