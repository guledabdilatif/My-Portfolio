import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser, AiFillProject } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <FaHome  className="icon"/>
        </a>
        <a
          href="#About"
          onClick={() => setActiveNav("#About")}
          className={activeNav === "#About" ? "active" : ""}
        >
          <AiOutlineUser  className="icon" />
        </a>
        <a
          href="#Experience"
          onClick={() => setActiveNav("#Experience")}
          className={activeNav === "#Experience" ? "active" : ""}
        >
          <BiBook  className="icon"/>
        </a>
        <a
          href="#Services"
          onClick={() => setActiveNav("#Services")}
          className={activeNav === "#Services" ? "active" : ""}
        >
          <RiServiceLine  className="icon" />
        </a>
        <a
          href="#Portfolio"
          onClick={() => setActiveNav("#Portfolio")}
          className={activeNav === "#Portfolio" ? "active" : ""}
        >
          <AiFillProject  className="icon" />
        </a>
        <a
          href="#Contact"
          onClick={() => setActiveNav("#Contact")}
          className={activeNav === "#Contact" ? "active" : ""}
        >
          <BiMessageSquareDetail  className="icon" />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
