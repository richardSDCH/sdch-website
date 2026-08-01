import { useLanguage } from "../i18n/LanguageContext.jsx"
import Service from "../components/Service";

export default function Services() {

  const { t } = useLanguage()
  const texts = t.main.services

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 sm:py-24">
      <h2 className="mt-3 text-3xl font-display font-semibold tracking-tight text-slate-900">
        {texts.h2}
      </h2>
      <p id="intro" className="mt-4 max-w-xl text-lg text-slate-800">
        {texts.intro}
      </p>

      <div className="mt-16 divide-y divide-slate-200">
        <Service texts={texts.service1} numeral={"I"}/>
        <Service texts={texts.service2} numeral={"II"}/>
        <Service texts={texts.service3} numeral={"III"}/>
      </div>
    </section>
  )
}