import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-900">Page not found</h1>
      <p className="mt-4 text-brand-900/70">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700">
        Back to home
      </Link>
    </section>
  )
}
