import React, { useEffect } from "react";
import "./Services.css";
import web from '../../Assets/images/web-development.png'
import graphic from '../../Assets/images/graphic design.png'
import mentor from '../../Assets/images/mentoring.png'
import ui from '../../Assets/images/ui.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <section id="Services" className="container" data-aos="fade-up">
      <h1 className="text-center">Services</h1>
      <div className="row">
        <div className="col-md-4" data-aos="fade-up">
          <div className="services-box">
            <h4 className="text-center">Web Development</h4>
            <p>I specialize in full-stack web development, creating both frontend and backend applications. I build responsive, user-friendly interfaces paired with robust, scalable server-side solutions to deliver seamless and functional web experiences tailored to client needs.</p>
            <img src={web} alt="" />
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <div className="services-box">
            <h4 className="text-center">Graphics Design</h4>
            <p>
              I offer a wide range of graphic design services, including illustrations, logo design, and print designs. My work focuses on delivering visually striking and cohesive designs that effectively communicate brand identity and captivate audiences.</p>
            <img src={graphic} alt="" />
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <div className="services-box">
            <h4 className="text-center">UI/UX Design</h4>
            <p>I specialize in full-stack web development, creating both frontend and backend applications. I build responsive, user-friendly interfaces paired with robust, scalable server-side solutions to deliver seamless and functional web experiences tailored to client needs.</p>
            <img src={ui} alt="" />
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <div className="services-box">
            <h4 className="text-center">mentoring</h4>
            <p>
            I provide graphic design and frontend development mentorship, teaching Adobe Illustrator, HTML, CSS, JavaScript, Git, and Bootstrap. I help students create professional designs, build responsive websites, and enhance collaborative coding skills.            </p>
            <img src={mentor} alt="" />
          </div>
        </div>




      </div>
    </section>
  );
};

export default Services;
