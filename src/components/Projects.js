import React, { useEffect, useState } from "react";
import ProjectsInfo from "../assets/data/ProjectsItem";
import "./Projects.css";

function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-searchBar">
        <form>
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Project Name"
          />

          <div className="projects-items">
            {projectsData.map((item) => (
              <div className="allItems" key={item.id}>
                <div className="image-container">
                  <img className="images" src={item.img} alt="projecst img" />
                </div>

                <div className="info-container">
                  <div className="project-name">{item.name}</div>
                  <div className="project-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Projects;
