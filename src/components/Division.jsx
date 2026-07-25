

export default function Division({ side, image, alt, author }) {

    return (
        <>
            <section id="outer-container" className="w-full flex">
                {side === "left" && <img src={image} alt={alt} className="w-1/2" title={`Photo by ${author} on Unsplash`}/>}
                <div id="text-space" className="w-1/2 bg-[#FFF7EE]"></div>
                {side === "right" && <img src={image} alt={alt} className="w-1/2" title={`Photo by ${author} on Unsplash`}/>}
            </section>
        </>
    )
}
