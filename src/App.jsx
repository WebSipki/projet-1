import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import ProjectsSlider from "./components/ProjectsSlider"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import DevisForm from "./components/DevisForm"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<ProjectsSlider />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/devis" element={<DevisForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;