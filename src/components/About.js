import React from "react";
import "./About.css";
import AboutImg from "../assets/images/hero2.jpg";
import AboutImg1 from "../assets/images/hero3.jpg";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="top-text">
        <div className="left">
          <p className="about-heading">Hi, I am Aram Kim</p>
          <h2 className="about-subheading">Software Engineer</h2>
          <div className="about-info">
            <p>
              I am from chittagong, Bangladesh. A place of beauty and nature.
              Since my childhood, i love art and design. I always try to design
              stuff with my unique point of view. I also love to create things
              that can be usefull to others.
              <br /> <br />
              I started coding since I was in high school. Coding is also an art
              for me. I love it and now I have the opportunity to design along
              with the coding. I find it really interesting and I enjoyed the
              process a lot.
              <br />
              <br />
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </p>
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
