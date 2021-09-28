import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
