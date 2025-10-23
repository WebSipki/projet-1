import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./ProjectsSlider.css"

const projectsData = [
  { img: "/images/project1.jpg", title: "Maison moderne à Paris" },
  { img: "/images/project2.jpg", title: "Immeuble commercial" },
  { img: "/images/project3.jpg", title: "Rénovation bâtiment historique" },
  { img: "/images/project4.jpg", title: "Projet industriel clé en main" },
]

function ProjectsSlider() {
  return (
    <section id="projects" className="projects section">
      <h3>Nos Projets</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h4>{project.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProjectsSlider;