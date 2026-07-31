

export default function Service({ texts, numeral }) {

    return (
        <>
          <div className="flex gap-6 py-12 first:pt-0 sm:gap-10">
            <span
              aria-hidden="true"
              className="select-none font-display text-6xl leading-none text-slate-300 sm:text-7xl w-20"
            >
              {numeral}
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-800 sm:text-2xl">
                {texts.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-lg text-slate-800">
                {texts.body}
              </p>
            </div>
          </div>
        </>
    )
}