import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    // min-h-screen + flex-col keeps the footer at the bottom of short pages
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* The navbar appears on every page */}
      <Navbar />

      {/* The page changes here depending on the URL */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          {/* Any URL that is not listed above shows the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          © {new Date().getFullYear()} Student Information Portal — Built with
          React and React Router
        </div>
      </footer>
    </div>
  )
}

export default App
