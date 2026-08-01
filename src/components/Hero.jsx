import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { images } from "../data/images";

// Height of the fixed <Header /> (h-16 = 4rem). Kept in one place so
// Hero's "fill the rest of the screen" math stays correct if the
// header height ever changes.
const HEADER_HEIGHT = '4rem'

const ROTATE_INTERVAL_MS = 5000

export default function Hero() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  const { t } = useLanguage()
  const texts = t.main.home.hero

  const slides = [
    {
      src: images.europeMap.src,
      alt: images.europeMap.alt,
      title: texts.titles.europeMap,
      author: images.europeMap.author,
      photoByHref: images.europeMap.photoByHref,
      unsplashHref: images.europeMap.unsplashHref
    },
    {
      src: images.deichstrasseChannel.src,
      alt: images.deichstrasseChannel.alt,
      title: texts.titles.deichstrasseChannel,
      author: images.deichstrasseChannel.author,
      photoByHref: images.deichstrasseChannel.photoByHref,
      unsplashHref: images.deichstrasseChannel.unsplashHref
    },
    {
      src: images.stairsPeople.src,
      alt: images.stairsPeople.alt,
      title: texts.titles.stairsPeople,
      author: images.stairsPeople.author,
      photoByHref: images.stairsPeople.photoByHref,
      unsplashHref: images.stairsPeople.unsplashHref
    },
  ]

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
            i === active ? 'opacity-100' : 'opacity-0 pointer-events-none',
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
              'absolute max-w-6xl text-4xl font-display font-semibold tracking-tight text-white transition-opacity duration-1000 ease-in-out motion-reduce:transition-none sm:text-5xl md:text-6xl',
              i === active ? 'opacity-100' : 'opacity-0 pointer-events-none',
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

      {/* Photo credit, one per slide, crossfading with the image */}
      <div className="absolute inset-x-4 bottom-3 sm:inset-x-10 sm:bottom-6">
        <div className="relative h-4 text-right sm:h-5">
          {slides.map((slide, i) => (
            <p
              key={slide.author}
              className={[
                'absolute inset-x-0 truncate text-xs font-display tracking-tight text-white transition-opacity duration-1000 ease-in-out motion-reduce:transition-none sm:text-sm',
                i === active ? 'opacity-100' : 'opacity-0 pointer-events-none',
              ].join(' ')}
              aria-hidden={i !== active}
            >
             {texts.credits.photoBy} <a className="underline" href={slide.photoByHref}>{slide.author}</a> {texts.credits.on} <a className="underline" href={slide.unsplashHref}>Unsplash</a>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
