// src/components/LanguageDropdown.jsx
import { Listbox } from '@headlessui/react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Add/rename flag files under public/flags/ to match these paths.
const options = [
  { code: 'en', label: 'English', flag: '/resources/images/EN.png' },
  { code: 'de', label: 'Deutsch', flag: '/resources/images/DE.png' },
  { code: 'es', label: 'Español', flag: '/resources/images/ES.png' },
]

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage()
  const current = options.find((o) => o.code === language) ?? options[0]

  return (
    <Listbox value={language} onChange={setLanguage}>
      <div className="relative">
        <Listbox.Button className="flex items-center gap-2 rounded-md border border-slate-100 px-3 py-1.5 text-sm text-slate-900/80 hover:text-slate-900 hover:cursor-pointer">
          <img src={current.flag} alt="" className="h-5 w-5 rounded-full object-cover" />
          <span>{current.label}</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Listbox.Button>

        <Listbox.Options className="absolute right-0 z-10 mt-2 w-28 rounded-md border border-slate-100 bg-white py-1 shadow-lg focus:outline-none">
          {options.map((option) => (
            <Listbox.Option
              key={option.code}
              value={option.code}
              className={({ active }) =>
                [
                  'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm',
                  active ? 'bg-brand-50 text-slate-900' : 'text-slate-900/80',
                ].join(' ')
              }
            >
              {({ selected }) => (
                <>
                  <img src={option.flag} alt="" className="h-5 w-5 rounded-full object-cover" />
                  <span className={selected ? 'font-medium' : ''}>{option.label}</span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}