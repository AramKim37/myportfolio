import React, { useState, useEffect } from "react";
import "./Photo.css";
import { PhotoData } from "../assets/data/Photo";

function Photo() {
  const [searchText, setSearchText] = useState("");
  const [photoData, setPhotosData] = useState(PhotoData);

  useEffect(() => {
    if (searchText === "") return;
    setPhotosData(() =>
      PhotoData.filter((item) =>
        item.title.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setPhotosData(PhotoData);
    }
  };

  return (
    <div id="photo" className="projects-container">
      <h1 className="projects-heading">Photography</h1>
      <div className="projects-searchBar">
        <form>
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Photo Name"
          />
        </form>
        <div className="items-container">
          <div className="projects-items">
            {photoData.map((item) => (
              <div className="allItems" key={item.id}>
                <div className="image-container">
                  <img className="images" src={item.image} alt="projecst img" />
                </div>

                <div className="info-container">
                  <div className="project-name">{item.title}</div>
                  <div className="project-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
