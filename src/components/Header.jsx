import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from "../i18n/LanguageContext.jsx"
import SDCHLogo from "/resources/images/SDCH_Logo_Light_Background.png"
import LanguageDropdown from './LanguageDropdown.jsx'

function navClass({ isActive }) {
  return [
    'font-medium transition-colors',
    isActive ? 'text-slate-700' : 'text-slate-900/70 hover:text-slate-700',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const { t } = useLanguage()
  const texts = t.header

  const links = [
    { to: '/', label: texts.home, end: true },
    { to: '/about', label: texts.about },
    { to: '/services', label: texts.services },
    { to: '/contact', label: texts.contact },
  ]

  return (
    <header className="border-b border-brand-100">
      <div className="flex h-16 items-center justify-between gap-3 px-4 bg-[#FFF1E4] sm:px-6 md:px-10">
        <NavLink to="/" className="tracking-tight shrink-0">
          <img src={SDCHLogo} alt="SDCH logo" className="h-8 sm:h-10"></img>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageDropdown />

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-100 px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
