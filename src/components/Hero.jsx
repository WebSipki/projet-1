import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Hero.css"

const slides = [
  { image: "/images/hero1.jpg", title: "Construisons vos rêves ensemble", text: "Des maisons, immeubles et bâtiments industriels de qualité depuis 1995" },
  { image: "/images/hero2.jpg", title: "Rénovation & Modernisation", text: "Redonnez vie à vos bâtiments avec notre savoir-faire" },
  { image: "/images/hero3.jpg", title: "Innovation & Durabilité", text: "Nous construisons pour les générations futures" },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1)
  const goToSlide = (index) => setCurrent(index)

  return (
    <section className="hero">
      <div className="hero-slide" style={{ backgroundImage: `url(${slides[current].image})` }}>
        <div className="hero-content animate">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].text}</p>
          <Link to="/devis" className="btn">Demandez un devis</Link>
        </div>

        {/* Flèches */}
        <button className="arrow left" onClick={prevSlide}>❮</button>
        <button className="arrow right" onClick={nextSlide}>❯</button>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;