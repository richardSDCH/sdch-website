import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const year = new Date().getFullYear()

  const { t } = useLanguage()
  const texts = t.footer

  return (
    <footer className="bg-rose-950">
      <div className="mx-auto h-28 flex justify-between items-center gap-5 px-10 py-8 text-sm text-slate-50 sm:flex-row sm:justify-between">
        <p>&copy; {year} SDCH Handelslösungen UG. {texts.copyright}</p>
        <nav className="flex gap-4">
          <Link to={texts.imprint.link} className="hover:text-rose-200">{texts.imprint.title}</Link>
          <Link to={texts.privacy.link} className="hover:text-rose-200">{texts.privacy.title}</Link>
        </nav>
      </div>
    </footer>
  )
}
