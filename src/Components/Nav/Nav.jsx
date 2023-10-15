import React from "react";
import "./nav.css";
import { useState } from "react";
import {AiOutlineBars} from 'react-icons/ai'

import 'aos/dist/aos.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [open, setOpen] = useState(true);

  function navToggle(){
    setOpen(!open);
  }
  return (
    <div>
      <nav>
        <div className="nav-left">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "" : ""}
          >
           ABDILADIF MOHAMUD
          </a>
          </div>
        <div className={ open ? "nav-right": "hide-navright"}>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setActiveNav("#About")}
            className={activeNav === "#About" ? "active" : ""}
          >
            About Me
          </a>
          <a
            href="#Experience"
            onClick={() => setActiveNav("#Experience")}
            className={activeNav === "#Experience" ? "active" : ""}
          >
            Experience
          </a>
          <a
            href="#Services"
            onClick={() => setActiveNav("#Services")}
            className={activeNav === "#Services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#Portfolio"
            onClick={() => setActiveNav("#Portfolio")}
            className={activeNav === "#Portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#Contact"
            onClick={() => setActiveNav("#Contact")}
            className={activeNav === "#Contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
        <AiOutlineBars className="bars" onClick={navToggle}/>

      </nav>
    </div>
  );
};

export default Nav;
