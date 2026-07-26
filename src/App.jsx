import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Imprint from './pages/Imprint.jsx'
import Impressum from './pages/Impressum.jsx'
import Aviso from './pages/Aviso.jsx'
import Privacy from './pages/Privacy.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import Privacidad from './pages/Privacidad.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="privacy" element={<Privacy />} />
        <Route path="imprint" element={<Imprint />} />

        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="impressum" element={<Impressum />} />

        <Route path="privacidad" element={<Privacidad />} />
        <Route path="aviso" element={<Aviso />} />
      </Routes>
    </>
  )
}

export default App
