import React, { useState } from "react";
import ProjectsItem from "../assets/data/ProjectsItem";
import "./Projects.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Projects({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="projects" className="container-projects">
      <section className="slider">
        {/* <FaArrowAltCircleLeft className="project-left" onClick={prevSlide} />
        <FaArrowAltCircleRight className="project-right" onClick={nextSlide} /> */}

        {ProjectsItem.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <FaArrowAltCircleLeft
                className="project-left"
                onClick={prevSlide}
              />
              <FaArrowAltCircleRight
                className="project-right"
                onClick={nextSlide}
              />
              {index === current && (
                <>
                  <div>
                    <div className="projects-heading">projects</div>
                  </div>

                  <div className="image-container">
                    <img src={slide.img} alt="star" className="image" />
                  </div>

                  <div className="projects-info">
                    <div className="projects-name">{slide.name}</div>
                    <div className="projects-desc">{slide.desc}</div>
                    <a href={slide.homepage}>
                      <button className="btn-projects">Explore</button>
                    </a>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
