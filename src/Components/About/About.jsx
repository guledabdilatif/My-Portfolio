import React from "react";
import "./about.css";
import ME from "../../Assets/me-about.jpg";
import { FaBook, FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import NumberCounter from 'number-counter';

const About = () => {
  return (
    <section id="About" className="container">
      <h5 className="text-center">Get to Know</h5>
      <h1 className="text-center">About Me</h1>
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="about-image about-img-bg">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-content ">
            <div className="about-cards">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-card text-center">
                    <div className="about-icon">
                      <FaBook />
                    </div>
                    <h5 className="text-center">Experience</h5>
                    <h6 className="text-center">1 Year Working on Projects</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-card text-center">
                    <div className="about-icon">
                      <FaAward  className="icon"/>
                    </div>
                    <h5 className="text-center">Awards</h5>
                    <h6 className="text-center"><NumberCounter start={0} end={6} postFix ='+'/> Awards Received</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-card text-center">
                    <div className="about-icon">
                      <AiFillProject   className="icon"/>
                    </div>
                    <h5 className="text-center">Projects</h5>
                    <h6 className="text-center"><NumberCounter start={0} end={10} postFix ='+' delay='3'/>Projects Completed</h6>
                  </div>
                </div>
              </div>
            </div>
            <p>
              I am a dedicated, hardworking and proactive Front-end Developer
              with a good background in Web-design. I am looking for an
              opportunity that will allow me to use my technical skills in a
              challenging environment where I can be a valuable asset to the
              organization.
            </p>
            <a href="https://wa.me/+254723710285" target="_blank">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
