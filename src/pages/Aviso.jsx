import { Link } from 'react-router-dom'

export default function Imprint() {

  return (
      <>
        <div className="text-sm pt-6 text-slate-700 dark:text-slate-400">
          <Link to="/" className="pl-6 text-base font-semibold text-slate-800 hover:text-slate-500">
            ← Volver a inicio
          </Link>
          <div id="headline" className="">
            <h2 className="font-semibold pt-10 text-xl text-center text-slate-900 dark:text-slate-300">Aviso legal</h2>
          </div>
          <div className="w-3/4 mx-auto">
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Editor</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem]">
              <span className="font-medium text-slate-900 dark:text-slate-300">SDCH Handelslösungen UG (haftungsbeschränkt)</span><br />
              Am Sandtorkai 32 <br />
              20457 Hamburg <br />
              Handelsregister Amtsgericht Hamburg <br />
              HRB 180300 <br />
              +49 174 4767013 <br />
              info@sdch.eu <br />
            </p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Datos según § 5 TMG and § 55 RStV</h4>
            <ul className="list-disc ml-3 leading-[1.15rem]">
              <li className="mt-1">Director General: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Responsable según § 5 TMG and § 55 RStV: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Responsable de acuerdo a la Ley de Prensa: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Página web construída por <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
            </ul>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Aviso de responsabilidad</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">A pesar del control cuidadoso de los contenidos, no asumimos ninguna responsabilidad por los contenidos de los enlaces externos (excepto nuestros canales de redes sociales). Los operadores de las páginas enlazadas son los únicos responsables del contenido de sus páginas.</p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Copyright</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">Reservados todos los derechos. En particular, las reimpresiones, la inclusión en servicios en línea e Internet y la reproducción en soportes de datos como CD-ROM, DVD-ROM, etc. solo pueden realizarse con el consentimiento previo por escrito de los directores generales de SDCH Handelslösungen UG.</p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Créditos fotográficos</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] mt-2 text-justify">Por el suministro de imágenes agradecemos a los autores/fotógrafos de Unpslash
                <a className="text-rose-800 hover:text-rose-400" href="https://unsplash.com/"> (https://unsplash.com/)</a>.
                Los créditos específicos se agregan en cada atributo “title”.
            </p>
          </div>
        </div>
      </>
    )
  }