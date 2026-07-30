import { useLanguage } from "../i18n/LanguageContext.jsx"
import Division from "../components/Division";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { images } from "../data/images";

export default function Home() {

  const { t } = useLanguage()
  const texts = t.main.home.divisions

  return (
    <div>
      <Hero />
      <Banner />
      <Division id="personal-advice" texts={texts.personalAdvice} side="left" image={images.businessAdvice.src} alt={images.businessAdvice.alt} author={images.businessAdvice.author}/>
      <Division id="hands-on" texts={texts.handsOn} side="right" image={images.globalReach.src} alt={images.globalReach.alt} author={images.globalReach.author}/>
      <Division id="complexity" texts={texts.complexity} side="left" image={images.complexity.src} alt={images.complexity.alt} author={images.complexity.author}/>
    </div>
  )
}
