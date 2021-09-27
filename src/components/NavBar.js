import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          {/* <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-name"
            onClick={close}
          >
            ARAM KIM
          </Link> */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes color="grey" /> : <FaBars color="grey" />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={close}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={close}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={close}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="photo"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-links"
                onClick={close}
              >
                Photography
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
