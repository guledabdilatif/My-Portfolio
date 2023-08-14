import React from "react";
import "./Services.css";
import web from '../../Assets/web-development.png'
import ui from '../../Assets/ui.png'
import mobileApp from '../../Assets/app-development.png'

const Services = () => {
  return (
    <section id="Services" className="container text-center">
      <h5 className="text-center">What I Offer</h5>
      <h1 className="text-center">Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="services-box text-center">
            <h5 className="text-center">UI/UX Design</h5>
            <img src={ui} alt="" />

          </div>
        </div>
        <div className="col-md-4">
          <div className="services-box text-center">
            <h5 className="text-center">Web Development</h5>
            <img src={web} alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-box text-center">
            <h5 className="text-center">Mobile Development</h5>
            <img src={mobileApp} alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
