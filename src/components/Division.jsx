

export default function Division({ side, image, alt, author, texts }) {

    return (
        <>
            <section id="outer-container" className="w-full flex">
                {side === "left" && <img src={image} loading="lazy" alt={alt} className="w-1/2" title={`Photo by ${author} on Unsplash`}/>}
                <div id="text-space" className="w-1/2 flex justify-center items-center bg-[#FFF7EE]">
                    <div className="w-[70%]">
                        <h2 className="font-display font-semibold text-3xl text-rose-900 mb-6">{texts.h2}</h2>
                        <h3 className="font-display font-medium text-2xl text-stone-800 mb-3">{texts.first.h3}</h3>
                        <p className="mb-6 text-slate-800">{texts.first.p}</p>
                        <h3 className="font-display font-medium text-2xl text-stone-800 mb-3">{texts.second.h3}</h3>
                        <p className="mb-6 text-slate-800">{texts.second.p}</p>
                        <h3 className="font-display font-medium text-2xl text-stone-800 mb-3">{texts.third.h3}</h3>
                        <p className="text-slate-800">{texts.third.p}</p>
                    </div>
                </div>
                {side === "right" && <img src={image} loading="lazy" alt={alt} className="w-1/2" title={`Photo by ${author} on Unsplash`}/>}
            </section>
        </>
    )
}
