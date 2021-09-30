import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProjectsItem from "../assets/data/ProjectsItem";
import Photo from "../components/Photo";
import Contact from "../components/Contact";
import Map from "../components/Map";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects slides={ProjectsItem} />
      <Photo />
      <Contact />
      <Map />
    </div>
  );
}

export default Home;
