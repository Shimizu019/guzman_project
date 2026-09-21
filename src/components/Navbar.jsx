import { NavLink } from 'react-router-dom'

import { getInitials } from '../utils/getInitials'

// The student who is signed in — shown in the top-right corner
const currentStudent = 'Benju Guzman'

// The pages shown in the navigation bar.
// Add a new line here and the link appears automatically.
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'Students' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LEFT: logo + portal name */}
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-logo">🎓</span>
          <span className="navbar-brand-text">Student Portal</span>
        </NavLink>

        {/* CENTER: the page links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              // "end" makes sure Home is only highlighted on "/"
              end={link.to === '/'}
              // NavLink tells us if this link is the current page
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT: the signed-in student's profile */}
        <div className="navbar-profile" title={currentStudent}>
          {getInitials(currentStudent)}
        </div>
      </div>
    </header>
  )
}

export default Navbar