import React, { useEffect } from "react";
import "./about.css";
import me from '../../Assets/images/me.png'
import { FaBook, FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import NumberCounter from 'number-counter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <section id="About" className="container" data-aos="fade-up">
      <h1 className="text-center">About Me</h1>
      <div className="row d-flex align-items-start">
        <div className="col-md-4 text-center" data-aos="fade-up">

          <div className="header-img">
            <img src={me} alt="" />
          </div>

        </div>
        <div className="col-md-8" data-aos="fade-up">
          <div className="about-content ">
            <div className="about-cards">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-card text-center">
                    <div className="about-icon">
                      <FaBook />
                    </div>
                    <h5 className="text-center">Experience</h5>
                    <h6 className="text-center">2+ Year <br /> Working on Projects</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-card text-center">
                    <div className="about-icon">
                      <FaAward className="icon" />
                    </div>
                    <h5 className="text-center">Awards</h5>
                    <h6 className="text-center"><NumberCounter start={0} end={10} postFix='+' /> Certifications Received</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-card text-center">
                    <div className="about-icon">
                      <AiFillProject className="icon" />
                    </div>
                    <h5 className="text-center">Projects</h5>
                    <h6 className="text-center"><NumberCounter start={0} end={50} postFix='+' delay='3' />Projects Completed</h6>
                  </div>
                </div>
              </div>
            </div>
            <p>
              I’m Abdiladif Mohamud, a Software Engineer with 2+ years of experience building responsive, user-friendly web and mobile applications. 
              Skilled in React, Laravel, and React Native, I combine clean code with strong UI/UX design to deliver engaging digital solutions. 
              Passionate about problem-solving and mentoring, I’ve guided 20+ students in web development and design, and I’m always eager to learn and create impactful projects.
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
