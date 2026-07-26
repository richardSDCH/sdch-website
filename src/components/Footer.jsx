export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-100 bg-[#FDD0B1]">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-brand-900/60">
        <p>&copy; {year} SDCH Handelslösungen UG. All rights reserved.</p>
      </div>
    </footer>
  )
}
