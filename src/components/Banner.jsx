import { useLanguage } from "../i18n/LanguageContext.jsx"

export default function Banner() {

    const { t } = useLanguage()
    const texts = t.main.home.banner

    return (
        <>
            <section id="banner-space" className="flex items-center py-16 sm:h-140 sm:py-0 bg-[#FFF1E4]">
                <h3 id="banner-text" className="w-11/12 sm:w-3/4 mx-auto font-display text-xl leading-8 sm:text-2xl sm:leading-9 text-stone-800">
                    {texts.h3}
                </h3>
            </section>
        </>
    )
}