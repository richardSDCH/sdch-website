import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Shared shell rendered around every page via <Outlet />.
// Add anything that should persist across navigation here
// (header, footer, cookie banner, etc.) instead of repeating
// it in each page component.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
