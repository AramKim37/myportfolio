import React from "react";
import "./Hero.css";
import Typical from "react-typical";
import HeroImg from "../assets/images/hero1.jpg";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="container">
        <h1 className="hero-heading">
          <span>Hello, This is</span>
          <span className="hero-name">Aram Kim</span>
        </h1>

        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero-info">
          <p className="hero-typicalText">
            I am familiar with{" "}
            <Typical
              className="typical"
              loop={Infinity}
              wrapper="b"
              steps={[
                "Java",
                2000,
                "HTML",
                2000,
                "CSS",
                2000,
                "React.js",
                2000,
                "MongoDB",
                2000,
                "JavaScript",
                2000,
                "Python",
                2000,
                "Git",
                2000,
              ]}
            ></Typical>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
