import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      {/* Logo Image */}
      <div className="logo">
        <NavLink to="/">
          <img src="/images/logo-construcBat.png" alt="ConstruBat Logo" />
        </NavLink>
      </div>

      {/* Bouton Burger */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;