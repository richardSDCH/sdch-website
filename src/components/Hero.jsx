import { useEffect, useRef, useState } from 'react';
import { images } from "../data/images";

// Height of the fixed <Header /> (h-16 = 4rem). Kept in one place so
// Hero's "fill the rest of the screen" math stays correct if the
// header height ever changes.
const HEADER_HEIGHT = '4rem'

const ROTATE_INTERVAL_MS = 5000

// Placeholder images live in public/images — swap these three files
// for real photography (jpg/webp) and update the extensions below.
// Keep the same variable names/shape; nothing else needs to change.
const slides = [
  {
    src: images.europeMap.src,
    alt: images.europeMap.alt,
    title: "From Europe to everywhere, and back",
    author: images.europeMap.author,
    photoByHref: images.europeMap.photoByHref,
    unsplashHref: images.europeMap.unsplashHref
  },
  {
    src: images.deichstrasseChannel.src,
    alt: images.deichstrasseChannel.alt,
    title: "At the heart of tradition and trade",
    author: images.deichstrasseChannel.author,
    photoByHref: images.deichstrasseChannel.photoByHref,
    unsplashHref: images.deichstrasseChannel.unsplashHref
  },
  {
    src: images.humanTech.src,
    alt: images.humanTech.alt,
    title: "Tech solutions that listen first",
    author: images.humanTech.author,
    photoByHref: images.humanTech.photoByHref,
    unsplashHref: images.humanTech.unsplashHref
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    // Still rotate for reduced-motion users (the content itself is
    // informational, not just decorative motion) — just skip the
    // animated crossfade via the transition classes below.
    if (prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        setActive((i) => (i + 1) % slides.length)
      }, ROTATE_INTERVAL_MS)
      return () => clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, ROTATE_INTERVAL_MS)

    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <section
      className="relative w-screen overflow-hidden"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT})` }}
      aria-label="Featured"
    >
      {/* Rotating images */}
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={[
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none',
            i === active ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-hidden={i !== active}
        />
      ))}

      {/* Darken the image so the headline stays readable regardless of
          which photo is showing */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Centered headline, one per slide, crossfading with the image */}
      <div className="relative flex flex-col h-full items-center justify-center px-6 text-center">
        {slides.map((slide, i) => (
          <h1
            key={slide.title}
            className={[
              'absolute max-w-5xl text-4xl font-display font-semibold tracking-tight text-white transition-opacity duration-1000 ease-in-out motion-reduce:transition-none sm:text-5xl md:text-6xl',
              i === active ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            aria-hidden={i !== active}
         >
            {slide.title}
          </h1>
        ))}
        {/* Visually hidden live text so screen readers announce the
            current headline once, without re-reading all three */}
        <span className="sr-only" role="status" aria-live="polite">
          {slides[active].title}
        </span>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex justify-between w-full -translate-x-1/2 gap-2">
        <div className="w-160"></div>
        {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}: ${slide.title}`}
              aria-current={i === active}
              className={[
                'h-2 w-2 rounded-full transition-colors',
                i === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
              ].join(' ')}
            />
        ))}
        <div className="w-160 flex">
          {slides.map((slide, i) => (
            <p 
              key={slide.author}
              className={[
                'absolute right-10 text-sm font-display tracking-tight text-white transition-opacity duration-1000 ease-in-out motion-reduce:transition-none sm:text-xs md:text-sm',
                i === active ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
              aria-hidden={i !== active}
            >
              Photo by <a className="underline" href={slide.photoByHref}>{slide.author}</a> on <a className="underline" href={slide.unsplashHref}>Unsplash</a>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
