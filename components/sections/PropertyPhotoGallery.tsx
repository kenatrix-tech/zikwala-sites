"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Camera, X, ChevronLeft, ChevronRight, Home } from "lucide-react"

interface Props {
  images: string[]
  alt: string
}

export function PropertyPhotoGallery({ images, alt }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const count = images.length

  const open  = (i: number) => setLightbox(i)
  const close = () => setLightbox(null)
  const prev  = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + count) % count), [count])
  const next  = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % count), [count])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      close()
      if (e.key === "ArrowLeft")   prev()
      if (e.key === "ArrowRight")  next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox, prev, next])

  if (count === 0) {
    return (
      <div className="w-full aspect-[4/3] md:aspect-[21/8] bg-gradient-to-br from-gray-100
                      to-gray-200 flex items-center justify-center rounded-2xl">
        <Home size={56} className="text-gray-300" />
      </div>
    )
  }

  const main   = images[0]
  const thumbs = images.slice(1, 5)
  const extra  = Math.max(0, count - 5)

  return (
    <>
      {/* ── Mobile: single image + count pill ── */}
      <button
        onClick={() => open(0)}
        className="md:hidden relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100
                   block cursor-pointer"
      >
        <Image src={main} alt={alt} fill className="object-cover" priority sizes="100vw" />
        {count > 1 && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5
                          bg-black/60 backdrop-blur-sm text-white text-xs
                          font-semibold px-2.5 py-1.5 rounded-lg pointer-events-none">
            <Camera size={13} />
            {count} photos
          </div>
        )}
      </button>

      {/* ── Desktop: Zillow-style mosaic ── */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[460px]">
        {/* Main image */}
        <button
          onClick={() => open(0)}
          className="relative col-span-2 row-span-2 bg-gray-100 overflow-hidden cursor-pointer
                     group"
        >
          <Image src={main} alt={alt} fill className="object-cover group-hover:scale-105
                                                       transition-transform duration-500" priority sizes="50vw" />
        </button>

        {/* Thumbnails */}
        {thumbs.map((url, i) => {
          const isLastShown = i === thumbs.length - 1 && extra > 0
          return (
            <button
              key={i}
              onClick={() => open(i + 1)}
              className="relative col-span-1 row-span-1 bg-gray-100 overflow-hidden cursor-pointer group"
            >
              <Image
                src={url}
                alt={`${alt} photo ${i + 2}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="25vw"
              />
              {isLastShown && (
                <div className="absolute inset-0 bg-black/55 flex flex-col
                                items-center justify-center gap-1 pointer-events-none">
                  <Camera size={20} className="text-white/80" />
                  <span className="text-white font-black text-xl leading-none">+{extra}</span>
                  <span className="text-white/80 text-xs font-medium">more photos</span>
                </div>
              )}
            </button>
          )
        })}

        {/* Empty slots */}
        {Array.from({ length: Math.max(0, 4 - thumbs.length) }).map((_, i) => (
          <div key={`e${i}`} className="col-span-1 row-span-1 bg-gray-100" />
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white
                          text-sm font-semibold px-4 py-1.5 rounded-full pointer-events-none">
            {lightbox + 1} / {count}
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white
                       p-2 rounded-full transition-colors z-10"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          {count > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-6 bg-white/10 hover:bg-white/25 text-white
                         p-2.5 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3] px-16 sm:px-20"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${alt} photo ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          {count > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-6 bg-white/10 hover:bg-white/25 text-white
                         p-2.5 rounded-full transition-colors z-10"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Dot indicators */}
          {count <= 10 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightbox(i) }}
                  className={`w-2 h-2 rounded-full transition-all
                    ${i === lightbox ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
