import React from "react";
import "./About.css";
import AboutImg from "../assets/images/hero2.jpg";
import AboutImg1 from "../assets/images/hero3.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="top-text">
        <div className="left">
          <p className="about-heading">Hi, I am Aram Kim</p>
          <h2 className="about-subheading">Software Engineer</h2>
          <div className="about-info">
            <p>
              <br></br>I am a software developer who always tries to be the best
              over the best. <br></br>No matter what field I work in, <br></br>
              if I do my best, one day I will become the best.<br></br>
              <br></br>I dream that the program I made will be useful to
              everyone.
              <br></br>I am taking it one step at a time for that dream
              <br></br>
              <br></br>
              <span className="steve">"Stay Hungry,&nbsp; Stay foolish"</span>
            </p>
            <div className="icons">
              <div className="gitIcon">
                <a href="https://github.com/AramKim37">
                  <FaGithubSquare color="rgb(177, 170, 176)" size="40px" />
                </a>
              </div>

              <div className="linkedIcon">
                <a href="https://www.linkedin.com/in/aram-kim/">
                  <FaLinkedin color="rgb(177, 170, 176)" size="40px" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="com1" src={AboutImg} alt="aboutImg"></img>
          <img className="com2" src={AboutImg1} alt="aboutImg"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
