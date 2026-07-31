// src/pages/Contact.jsx
import { useState } from 'react'
import { useLanguage } from "../i18n/LanguageContext.jsx"

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {

  const { t } = useLanguage()
  const texts = t.main.contact
  
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    // Honeypot check: if this hidden field is filled, silently drop
    // the submission without calling the API at all.
    if (formData.get('company_website')) {
      setStatus('success') // pretend it worked, don't tip off the bot
      return
    }

    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New contact form submission — SDCH website')

    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h4 className="text-sm font-medium uppercase tracking-wide text-brand-600">
        {texts.h4}
      </h4>
      <h2 className="mt-3 text-3xl font-display font-semibold tracking-tight text-brand-900 sm:text-4xl">
        {texts.h2}
      </h2>
      <p className="mt-4 max-2w-xl text-brand-900/70">
        {texts.p1}
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        {/* Honeypot — invisible to real users, catches naive bots */}
        <input
          type="text"
          name="company_website"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <div>
          <label id="name-label" htmlFor="name" className="block text-sm font-medium text-brand-900">
            {texts.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-md border border-brand-100 px-3 py-2 text-brand-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
        </div>

        <div>
          <label id="email-label" htmlFor="email" className="block text-sm font-medium text-brand-900">
            {texts.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-md border border-brand-100 px-3 py-2 text-brand-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
        </div>

        <div>
          <label id="message-label" htmlFor="message" className="block text-sm font-medium text-brand-900">
            {texts.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1.5 w-full rounded-md border border-brand-100 px-3 py-2 text-brand-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-md w-36 bg-rose-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-rose-800 cursor-pointer disabled:opacity-50"
        >
          {status === 'sending' ? texts.button.sending : texts.button.send}
        </button>

        {status === 'success' && (
          <p id="thank-you" className="text-sm text-green-700" role="status">
            {texts.thankYou}
          </p>
        )}
        {status === 'error' && (
          <p id="error" className="text-sm text-red-700" role="alert">
            {texts.error}
            <a id="email-address" href="mailto:info@sdch.eu" className="underline">info@sdch.eu</a>.
          </p>
        )}
      </form>
    </section>
  )
}