import { Link } from 'react-router-dom'

export default function Imprint() {

  return (
      <>
        <div className="text-sm pt-6 text-slate-700 dark:text-slate-400">
          <Link to="/" className="pl-6 text-base font-semibold text-slate-800 hover:text-slate-500">
            ← Zurück zur Startseite
          </Link>
          <div id="headline" className="">
            <h2 className="font-semibold pt-10 text-xl text-center text-slate-900 dark:text-slate-300">Impressum</h2>
          </div>
          <div className="w-3/4 mx-auto">
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Herausgeber</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem]">
              <span className="font-medium text-slate-900 dark:text-slate-300">SDCH Handelslösungen UG (haftungsbeschränkt)</span><br />
              Am Sandtorkai 32 <br />
              20457 Hamburg <br />
              Handelsregister Amtsgericht Hamburg <br />
              HRB 180300 <br />
              +49 174 4767013 <br />
              info@sdch.eu <br />
            </p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Angaben gemäß § 5 TMG und § 55 RStV</h4>
            <ul className="list-disc ml-3 leading-[1.15rem]">
              <li className="mt-1">Geschäftsführer: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Verantwortlich gem. gemäß § 5 TMG und § 55 RStV: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Verantwortlich i. S. d. Presserechts: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Website erstellt von <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
            </ul>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Haftungshinweis</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links (ausgenommen unsere Social Media-Kanäle). Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Copyright</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">Alle Rechte vorbehalten. Insbesondere dürfen Nachdruck, Aufnahme in Online-Dienste und Internet und Vervielfältigung auf Datenträger wie CD-ROM, DVD-ROM etc. nur nach vorheriger schriftlicher Zustimmung durch die Geschäftsführer der SDCH Handelslösungen UG erfolgen.</p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Bildnachweis</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">Für die Bereitstellung bedanken wir uns bei den Urhebern/Fotografen und den Betreibern der Unpslash
            <a className="underline text-rose-800 hover:text-rose-400" href="https://unsplash.com/">(https://unsplash.com/)</a>.
                Spezifische Credits werden in jedem “title” Attribut hinzugefügt.
            </p>
          </div>
        </div>
      </>
    )
  }