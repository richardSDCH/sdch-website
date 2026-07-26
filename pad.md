import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-100">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-sm text-brand-900/60 sm:flex-row sm:justify-between">
        <p>&copy; {year} SDCH Handelslösungen UG. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link to="/privacy" className="hover:text-brand-900">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand-900">Terms of Use</Link>
          <Link to="/imprint" className="hover:text-brand-900">Imprint</Link>
        </nav>
      </div>
    </footer>
  )
}