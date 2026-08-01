import { useLanguage } from '../i18n/LanguageContext.jsx'
import SalomonDCohenHenriquez from "/resources/images/SalomonDanielCohenHenriquez.png"

export default function History() {

    const { t } = useLanguage()
    const texts = t.main.about.history

    return (
        <>
            <section id="about" className="w-full flex flex-col-reverse gap-8 py-8 px-6 md:flex-row md:gap-0 md:px-0 bg-[#FDD0B1]">
                <div className="w-full md:w-3/4 md:pl-14">
                    <p id="p1" className="mt-4 leading-5 font-display max-w-3xl text-slate-800">
                    <span id="span1" className="font-medium">SDCH Handelslösungen UG</span>{texts.p1.pf1}<span id="span2" className="font-semibold">Salomon Daniel Cohen Henriquez</span>{texts.p1.pf2}<span id="span3" className="font-medium">SDC Henriquez & Co</span>{texts.p1.pf3}<span id="span4" className="font-medium">Abraham Cohen Henriquez</span>{texts.p1.pf4}<span id="span5" className="italic">{texts.p1.span5}</span>.
                    </p>
                    <p id="p2" className="mt-2 leading-5 font-display max-w-3xl text-slate-800">
                    {texts.p2}
                    </p>
                    <p id="p3" className="mt-2 leading-5 font-display max-w-3xl text-slate-800">
                    {texts.p3}
                    </p>
                </div>
                <div className="w-full md:w-1/4">
                    <div className="w-fit mx-auto md:mx-0">
                    <img src={SalomonDCohenHenriquez} loading="lazy" alt="Portrait photo of Salomon Daniel Cohen Henriquez" className="h-48 sm:h-60 mx-auto rounded-xs"/>
                    <h4 className="font-display font-semibold text-sm text-slate-900 mt-2 text-center md:text-left">Salomon Daniel Cohen Henriquez</h4>
                    <h4 className="text-sm font-normal text-center md:text-left">Curaçao 1830 - Hamburg 1908</h4>
                    </div>
                </div>
            </section>
        </>
    )
}