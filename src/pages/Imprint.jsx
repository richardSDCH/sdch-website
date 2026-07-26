import { Link } from 'react-router-dom'

export default function Imprint() {

  return (
      <>
        <div className="text-sm pt-6 text-slate-700 dark:text-slate-400">
          <Link to="/" className="pl-6 text-base font-semibold text-slate-800 hover:text-slate-500">
            ← Back to home
          </Link>
          <div id="headline" className="">
            <h2 className="font-semibold pt-10 text-xl text-center text-slate-900 dark:text-slate-300">Imprint</h2>
          </div>
          <div className="w-3/4 mx-auto">
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Publisher</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem]">
              <span className="font-medium text-slate-900 dark:text-slate-300">SDCH Handelslösungen UG (haftungsbeschränkt)</span><br />
              Am Sandtorkai 32 <br />
              20457 Hamburg <br />
              Handelsregister Amtsgericht Hamburg <br />
              HRB 180300 <br />
              +49 174 4767013 <br />
              info@sdch.eu <br />
            </p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Data according to § 5 TMG and § 55 RStV</h4>
            <ul className="list-disc ml-3 leading-[1.15rem]">
              <li className="mt-1">Managing Director: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Responsible according to § 5 TMG and § 55 RStV: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Responsible in terms of the press law: <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
              <li className="mt-1">Website built by <span className="font-medium text-slate-900 dark:text-slate-300">Ricardo Henriquez</span></li>
            </ul>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Liability notice</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">Despite careful control of the contents, we do not bear any liability for the contents of external links (except for our social media channels). 
              The operators of the linked pages are solely responsible for the content of their pages.</p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Copyright</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">All rights reserved. In particular, reprints, inclusion in online services and the Internet and reproduction on 
              data media such as CD-ROM, DVD-ROM etc. may only be made with the prior written consent of the managing directors 
              of SDCH Handelslösungen UG.
            </p>
            <h4 className="font-semibold mt-2 mb-1 text-slate-900">Photo credits</h4>
            <p className="leading-[1.1] sm:leading-[1.15rem] text-justify">For the provision of images we thank the authors/photographers and the operators of Unpslash
                <a className="text-rose-800 hover:text-rose-400" href="https://unsplash.com/"> (https://unsplash.com/)</a>.
                Specific credits are added in each “title” attribute.
            </p>
          </div>
        </div>
      </>
    )
  }