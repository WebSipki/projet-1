import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>ConstruBat</h4>
          <p>
            Entreprise de construction et rénovation depuis 1995. Maisons, immeubles, bâtiments industriels.
          </p>
        </div>

        <div className="footer-links">
          <h4>Liens rapides</h4>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contactez-nous</h4>
          <p>📍 123 Rue de l’Entreprise, Paris</p>
          <p>📞 +33 1 23 45 67 89</p>
          <p>✉️ contact@construbat.fr</p>

          <div className="socials">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ConstruBat. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;