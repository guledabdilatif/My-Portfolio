import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="Services" className="container">
      <h5 className="text-center">What I Offer</h5>
      <h1 className="text-center">Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="services-box">
            <h5 className="text-center">UI/UX Design</h5>
           
              <p className="text-center">Goal Identification</p>
              <p className="text-center">Sitemap and wireframe creation</p>
              <p className="text-center">Designing</p>
              <p className="text-center">Launching</p>
       
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-box">
            <h5 className="text-center">Web Development</h5>
           
              <p className="text-center">Information Gathering</p>
              <p className="text-center">Structure of the Website</p>
              <p className="text-center">Designing of the Website</p>
              <p className="text-center">Building The Website</p>
              <p className="text-center">Deploying the Website</p>
           
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-box">
            <h5 className="text-center">Content Creation</h5>
           
              <p className="text-center">Planing</p>
              <p className="text-center">Topic Identification</p>
              <p className="text-center">Create Content</p>
              <p className="text-center">Edit</p>
              <p className="text-center">Publish</p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
