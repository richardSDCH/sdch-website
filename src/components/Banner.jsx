import { useLanguage } from "../i18n/LanguageContext.jsx"

export default function Banner() {

    const { t } = useLanguage()
    const texts = t.main.home.banner

    return (
        <>
            <section id="banner-space" className="flex items-center h-140 bg-[#FFF1E4]">
                <h3 id="banner-text" className="w-3/4 mx-auto font-display text-2xl leading-9 text-stone-800"> 
                    {texts.h3}
                </h3>
            </section>
        </>
    )
}