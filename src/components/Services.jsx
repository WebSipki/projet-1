import React, { useRef } from "react"
import "./Services.css"
import useScrollAnimation from "../hooks/useScrollAnimation"

const servicesData = [
  {
    icon: "🏠",
    title: "Construction de maisons",
    description: "Maisons individuelles modernes et durables, construites selon vos besoins.",
  },
  {
    icon: "🏢",
    title: "Bâtiments commerciaux",
    description: "Conception et construction de bureaux, commerces et espaces industriels.",
  },
  {
    icon: "🛠️",
    title: "Rénovation & entretien",
    description: "Rénovation complète de bâtiments existants et travaux d’entretien.",
  },
  {
    icon: "📐",
    title: "Projets sur-mesure",
    description: "Plans personnalisés, optimisation des espaces et suivi complet du projet.",
  },
]

function Services() {
  const ref = useRef()
  const isVisible = useScrollAnimation(ref)

  return (
    <section id="services" className="services section">
      <div className={`services-container ${isVisible ? "show" : ""}`} ref={ref}>
        <h3>Nos Services</h3>
        <div className="services-cards">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`card ${isVisible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;