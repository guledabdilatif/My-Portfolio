import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { WebsitesDetails, DesignsDetails, mobileDetails } from "./constants";
import { FaCloudDownloadAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <section id="Portfolio" className="container">
      <h1 className="text-center">Portfolio</h1>
      <div className="portfolio-tabs text-center" data-aos="fade-up">


        <div >
          {/* web */}
          <div className="web-rows text-center" data-aos="fade-up">
            {WebsitesDetails.map((item) => {
              return <Link to={`/project/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="web-row-container" data-aos="fade-up">
                  <img src={item.webimage} alt={item.webname} />
                  <div className="web-details">
                    <p>{item.webname}</p>
                  </div>
                </div>
              </Link>
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
