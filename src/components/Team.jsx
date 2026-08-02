import { useLanguage } from '../i18n/LanguageContext.jsx'
import { FaLinkedinIn } from "react-icons/fa6";
import { images } from "../data/images.js";


export default function Team() {

    const { t } = useLanguage()
    const texts = t.main.about.team

    return (
        <>
            <section id="team-section" className="w-full px-6 py-12 sm:px-14 bg-[#FFF7EE]">
                <h3 className="font-semibold font-display text-2xl">{texts.h3}</h3>
                <div id="team-members" className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between">
                    <div id="team-1" className="w-full sm:w-1/2 mt-4 p-4 flex flex-col sm:flex-row bg-[#FFF1E4] rounded-lg border border-slate-100">
                        <div id="photo-title" className="shrink-0 text-center">
                            <a
                              href="https://www.linkedin.com/in/ricardohenriquez"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Ricardo Henriquez's LinkedIn profile"
                              className="group relative mx-auto block w-40 overflow-hidden rounded-md sm:mx-0"
                            >
                                <img
                                  src={images.ricardoH.src}
                                  loading="lazy"
                                  alt={images.ricardoH.alt}
                                  className="w-40 h-auto grayscale-0 transition duration-300 group-hover:grayscale"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/10 group-hover:opacity-100">
                                    <FaLinkedinIn className="text-blue-300" size={40} />
                                </div>
                            </a>
                            <h4 id="name" className="text-lg font-medium font-display text-slate-700 mt-1">Ricardo Henriquez</h4>
                            <h4 id="title" className="text-slate-700 font-display italic">{texts.team1.title}</h4>
                        </div>
                        <div id="bio" className="flex-1 min-w-0 mt-3 sm:mt-0 sm:pl-4">
                            <p id="p1" className="text-slate-800 text-sm leading-5">
                                {texts.team1.p1}
                            </p>
                            <p id="p2" className="text-slate-800 text-sm leading-5 mt-2">
                                {texts.team1.p2}
                            </p>
                        </div>
                    </div>
                    <div id="team-2" className="w-full sm:w-1/2 mt-4 p-4 flex flex-col sm:flex-row bg-[#FFF1E4] rounded-lg border border-slate-100">
                        <div id="photo-title" className="shrink-0 text-center">
                            <a
                              href="https://www.linkedin.com/in/itai-cohen-9478959b"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Itai Cohen's LinkedIn profile"
                              className="group relative mx-auto block w-40 overflow-hidden rounded-md sm:mx-0"
                            >
                                <img
                                  src={images.itaiC.src}
                                  loading="lazy"
                                  alt={images.itaiC.alt}
                                  className="w-40 h-auto grayscale-0 transition duration-300 group-hover:grayscale"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/10 group-hover:opacity-100">
                                    <FaLinkedinIn className="text-blue-300" size={40} />
                                </div>
                            </a>
                            <h4 id="name" className="text-lg font-medium font-display text-slate-700 mt-1">Itai Cohen</h4>
                            <h4 id="title" className="text-slate-700 font-display italic">{texts.team2.title}</h4>
                        </div>
                        <div id="bio" className="flex-1 min-w-0 mt-3 sm:mt-0 sm:pl-4">
                            <p id="p1" className="text-slate-800 text-sm leading-5">
                                {texts.team2.p1}
                            </p>
                            <p id="p2" className="text-slate-800 text-sm leading-5 mt-2">
                                {texts.team2.p2}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}