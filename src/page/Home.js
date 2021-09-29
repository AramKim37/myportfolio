import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProjectsItem from "../assets/data/ProjectsItem";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects slides={ProjectsItem} />
    </div>
  );
}

export default Home;
