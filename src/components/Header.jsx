import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SDCHLogo from "../../public/resources/images/SDCH_Logo_Light_Background.png"

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

function navClass({ isActive }) {
  return [
    'text-sm font-medium transition-colors',
    isActive ? 'text-brand-700' : 'text-brand-900/70 hover:text-brand-700',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-brand-100">
      <div className="flex h-16 items-center justify-between px-10 bg-[#FFF1E4]">
        <NavLink to="/" className="tracking-tight">
          <img src={SDCHLogo} alt="SDCH logo" className="h-10"></img>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-100 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-100 px-6 py-3 sm:hidden">
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
