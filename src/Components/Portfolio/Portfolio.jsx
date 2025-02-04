import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { WebsitesDetails, DesignsDetails, mobileDetails } from "./portfolioDetails";
import { FaCloudDownloadAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id)
  }
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <section id="Portfolio" className="container">
      <h1 className="text-center">Portfolio</h1>
      <div className="portfolio-tabs text-center" data-aos="fade-up">

        <button onClick={() => updateToggle(1)}>Websites</button>
        <button onClick={() => updateToggle(2)}>Designs</button>
        <button onClick={() => updateToggle(3)}>Mobile Apps</button>
        <div className={toggle === 1 ? "show-content text-center" : "content text-center"}>
          {/* web */}
          <div className="web-rows text-center" data-aos="fade-up">
            {WebsitesDetails.map((item) => {
              return <div>
                <div className="web-row-container" data-aos="fade-up">
                  <img src={item.webimage} alt="" />
                  <div className="web-details ">
                    <p>{item.webname}</p>
                    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <a href={item.weblink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 24, marginLeft: 10, marginTop: -10, textDecoration: 'none' }}>{item.linkIcon}</a>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        {/* designs */}
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="web-rows" data-aos="fade-up">
            {DesignsDetails.map((item) => {
              return <div>
                <div data-aos="fade-up">
                  <img src={item.desingimage} alt="" />
                  <div className="web-details">
                    <p>{item.desingname}</p>
                    <div>
                      <a href={item.downloaddesign} target="_blank" rel="noopener noreferrer" className="anchor" download><FaCloudDownloadAlt /></a>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>

        </div>
        {/* mobile apps */}
        <div className={toggle === 3 ? "show-content" : "content"}>
          <div className="web-rows" data-aos="fade-up">
            {mobileDetails.map((item) => {
              return <div>
                <div data-aos="fade-up">
                  <img src={item.image} alt="" />
                  <div className="web-details">
                    <p>{item.name}</p>
                    <div>
                      <a href={item.image} target="_blank" rel="noopener noreferrer" className="anchor" download><FaCloudDownloadAlt /></a>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
