import React, { useEffect, useState } from "react";
import ProjectsItem from "../assets/data/ProjectsItem";
import "./Projects.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Projects({ slides }) {
  // const [searchText, setSearchText] = useState("");
  // const [projectsData, setProjectsData] = useState(ProjectsInfo);

  // useEffect(() => {
  //   if (searchText === "") return;
  //   setProjectsData(() =>
  //     ProjectsInfo.filter((item) =>
  //       item.name.toLowerCase().match(searchText.toLowerCase())
  //     )
  //   );
  // }, [searchText]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchText(e.target.value);
  //   if (!e.target.value.length > 0) {
  //     setProjectsData(ProjectsInfo);
  //   }
  // };
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
        <FaArrowAltCircleLeft className="project-left" onClick={prevSlide} />
        <FaArrowAltCircleRight className="project-right" onClick={nextSlide} />

        {ProjectsItem.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
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
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>
    </div>
    // <div id="projects" className="projects-container">
    //   <h1 className="projects-heading">Projects</h1>
    //   <div className="projects-searchBar">
    //     <form>
    //       <input
    //         type="text"
    //         value={searchText}
    //         onChange={handleChange}
    //         placeholder="Project Name"
    //       />

    //       <div className="projects-items">
    //         {projectsData.map((item) => (
    //           <div className="allItems" key={item.id}>
    //             <div className="image-container">
    //               <img className="images" src={item.img} alt="projecst img" />
    //             </div>

    //             <div className="info-container">
    //               <div className="project-name">{item.name}</div>
    //               <div className="project-desc">{item.desc}</div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </form>
    //     <div className="btn-detail">
    //       <button className="projects-detail">More</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Projects;
