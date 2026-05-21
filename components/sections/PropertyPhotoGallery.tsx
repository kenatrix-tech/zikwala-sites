"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Home } from "lucide-react"

interface Props {
  images: string[]
  alt: string
}

export function PropertyPhotoGallery({ images, alt }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [mobileIdx, setMobileIdx] = useState(0)
  const touchStartX = useRef<number>(0)
  const count = images.length

  const open  = (i: number) => setLightbox(i)
  const close = () => setLightbox(null)
  const prev  = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + count) % count), [count])
  const next  = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % count), [count])

  const mobilePrev = () => setMobileIdx(i => (i - 1 + count) % count)
  const mobileNext = () => setMobileIdx(i => (i + 1) % count)

  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close()
      if (e.key === "ArrowLeft")  prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [lightbox, prev, next])

  if (count === 0) {
    return (
      <div className="w-full h-[340px] md:h-[480px] bg-gradient-to-br from-gray-100
                      to-gray-200 flex items-center justify-center rounded-2xl">
        <Home size={56} className="text-gray-300" />
      </div>
    )
  }

  const extra = Math.max(0, count - 3)

  return (
    <>
      {/* ── Mobile: full-width swipeable ── */}
      <div className="md:hidden relative w-full h-[65vw] min-h-[260px] max-h-[420px] rounded-xl overflow-hidden bg-gray-100">
        <div
          className="w-full h-full"
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 40) diff > 0 ? mobileNext() : mobilePrev()
          }}
          onClick={() => open(mobileIdx)}
        >
          <Image
            src={images[mobileIdx]}
            alt={`${alt} photo ${mobileIdx + 1}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Prev / Next arrows */}
        {count > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); mobilePrev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60
                         text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={e => { e.stopPropagation(); mobileNext() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60
                         text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Counter */}
        {count > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/55 backdrop-blur-sm text-white
                          text-xs font-semibold px-2.5 py-1 rounded-lg pointer-events-none">
            {mobileIdx + 1} / {count}
          </div>
        )}
      </div>

      {/* ── Desktop: main + 2 stacked ── */}
      <div className="hidden md:grid grid-cols-3 gap-2 rounded-2xl overflow-hidden h-[480px]">

        {/* Main image — 2/3 width, full height */}
        <button
          onClick={() => open(0)}
          className="relative col-span-2 bg-gray-100 overflow-hidden cursor-pointer group"
        >
          <Image
            src={images[0]}
            alt={alt}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            priority
            sizes="66vw"
          />
        </button>

        {/* Right column — 2 stacked */}
        <div className="flex flex-col gap-2">
          {images[1] && (
            <button
              onClick={() => open(1)}
              className="relative flex-1 bg-gray-100 overflow-hidden cursor-pointer group rounded-none"
            >
              <Image
                src={images[1]}
                alt={`${alt} photo 2`}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="33vw"
              />
            </button>
          )}

          {images[2] && (
            <button
              onClick={() => open(2)}
              className="relative flex-1 bg-gray-100 overflow-hidden cursor-pointer group rounded-none"
            >
              <Image
                src={images[2]}
                alt={`${alt} photo 3`}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="33vw"
              />
              {extra > 0 && (
                <div className="absolute inset-0 bg-black/50 flex flex-col
                                items-center justify-center gap-1 pointer-events-none">
                  <span className="text-white font-black text-3xl leading-none">+{extra}</span>
                  <span className="text-white/80 text-sm font-medium">more photos</span>
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      {/* ── Lightbox — rendered via portal so it truly covers the full screen ── */}
      {lightbox !== null && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col" style={{ touchAction: "none" }}>

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
            <span className="text-white/60 text-sm font-medium tracking-wide">
              {lightbox + 1} <span className="text-white/30">/ {count}</span>
            </span>
            <button
              onClick={close}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <X size={26} />
            </button>
          </div>

          {/* Main image */}
          <div
            className="flex-1 min-h-0 relative"
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightbox}
              src={images[lightbox]}
              alt={`${alt} photo ${lightbox + 1}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "0 56px",
              }}
            />

            {count > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                             bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                             bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {count > 1 && (
            <div className="flex-shrink-0 flex gap-2 px-4 py-3 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden
                              transition-all duration-200
                              ${i === lightbox ? "ring-2 ring-white opacity-100" : "opacity-40 hover:opacity-80"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  )
}
