import React, { useRef } from "react"
import { Link } from "react-router-dom"
import "./About.css"
import aboutImg from "../assets/about.jpg"
import useScrollAnimation from "../hooks/useScrollAnimation"

function About() {
  const refContainer = useRef()
  const isVisible = useScrollAnimation(refContainer)

  return (
    <section id="about" className="about section">
      <div
        ref={refContainer}
        className={`about-container ${isVisible ? "show" : ""}`}
      >
        <div className="about-img">
          <img src={aboutImg} alt="À propos de ConstruBat" />
        </div>

        <div className="about-text">
          <h3>À propos de nous</h3>
          <p>
            Avec plus de 25 ans d’expérience, ConstruBat est spécialisée dans la
            construction, la rénovation et les travaux publics. Nous nous engageons
            à créer des bâtiments durables, esthétiques et fonctionnels.
          </p>

         <div className="about-features">
  {[
    { icon: "🏗️", text: "Construction moderne et durable" },
    { icon: "🛠️", text: "Rénovation & entretien" },
    { icon: "📐", text: "Projets sur-mesure" },
  ].map((feature, index) => (
    <div
      key={index}
      className={`feature ${isVisible ? "show" : ""}`}
      style={{ transitionDelay: `${index * 0.3}s` }}
    >
      <span>{feature.icon}</span>
      <p>{feature.text}</p>
    </div>
  ))}
</div>

         <Link to="/devis" className="btn">Demandez un devis</Link>
        </div>
      </div>
    </section>
  )
}

export default About;