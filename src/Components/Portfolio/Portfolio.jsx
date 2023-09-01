import React, { useState } from "react";
import "./Portfolio.css";
import { WebsitesDetails, DesignsDetails } from "./portfolioDetails";

const Portfolio = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id)
  }


  return (
    <section id="Portfolio" className="container">
      <h5 className="text-center">My Recent Work</h5>
      <h1 className="text-center">Portfolio</h1>
      <div className="portfolio-tabs text-center ">

        <button onClick={() => updateToggle(1)}>Websites</button>
        <button onClick={() => updateToggle(2)}>Designs</button>
        <button onClick={() => updateToggle(3)}>Mobile Apps</button>
        <div className={toggle === 1 ? "show-content" : "content"}>
          {/* web */}
          <div className="web-rows text-center">
            {WebsitesDetails.map((item) => {
              return <div>
                <div className="web-row-container">
                  <img src={item.webimage} alt="" />
                  <div className="web-details ">
                    <p>{item.webname}</p>
                    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <a href={item.weblink} target="_blank" className="anchor">{item.view}</a>
                      <a href={item.GithubLink} target="_blank" style={{ fontSize: 24, marginLeft: 10, marginTop: -10, textDecoration: 'none' }}>{item.GithubIcon}</a>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        {/* designs */}
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="web-rows">
            {DesignsDetails.map((item) => {
              return <div>
                <div>
                  <img src={item.desingimage} alt="" />
                  <div className="web-details">
                    <p>{item.desingname}</p>
                    <div>
                      <a href={item.downloaddesign} target="_blank" className="anchor" download>Download</a>
                      <a href={item.figmafileLink} target="_blank" style={{ fontSize: 24, marginLeft: 10, marginTop: -10, textDecoration: 'none' }}>{item.figmaIcon}</a>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>

        </div>
        {/* mobile apps */}
        <div className={toggle === 3 ? "show-content" : "content"}>
          <h1>Mobile Apps</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et facilis tenetur perferendis explicabo cupiditate saepe libero sapiente culpa, doloribus possimus? Ratione facilis placeat quam vitae tempora. Est hic omnis aliquid.F</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
