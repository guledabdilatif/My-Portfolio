import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../Assets/portfolio1.png";
import portfolio2 from "../../Assets/portfolio2.png";
import portfolio3 from "../../Assets/portfolio3.png";
import portfolio4 from "../../Assets/portfolio4.png";
import portfolio5 from "../../Assets/portfolio5.png";
import portfolio6 from "../../Assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="container">
      <h5 className="text-center">My Recent Work</h5>
      <h1 className="text-center">Portfolio</h1>
      <div className="row">
        <div className="col-md-4">
        <div className="porfolio-outer">
        <div className="portfolio-column text-center">
        <img src={portfolio1} alt="" />
        <p>
       Coffee Website
        </p>
        <div className="portfolio-btn">
        <a href="https://github.com/guledabdilatif/Coffee-Website" className="text-center" target="_blank">Github</a>
        <a href="https://caffeine-site.netlify.app" target='_blank'>View On Browser</a>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="porfolio-outer">
        <div className="portfolio-column text-center">
        <img src={portfolio2} alt="" />
        <p>
        Tour and Travel Website
        </p>
        <div className="portfolio-btn">
        <a href="https://github.com/guledabdilatif/tour-and-travel-website" className="text-center" target="_blank">Github</a>
        <a href="https://travel-travel-site.netlify.app" target='_blank'>View On Browser</a>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="porfolio-outer">
        <div className="portfolio-column text-center">
        <img src={portfolio3} alt="" />
        <p>
        Food Website
        </p>
        <div className="portfolio-btn">
        <a href="https://github.com/guledabdilatif/Food-website" className="text-center" target="_blank">Github</a>
        <a href="https://refreshment.netlify.app" target='_blank'>View On Browser</a>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="porfolio-outer">
        <div className="portfolio-column text-center">
        <img src={portfolio4} alt="" />
        <p>
        Food Website Design
        </p>
        <div className="portfolio-btn">
        <a href="https://www.figma.com/file/svNxChr2lqChjwjDTGcjSO/Food-web-App-Design?node-id=2%3A2&t=TLDKGs4e81aTbuz7-1" target='_blank'>View On Figma</a>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="porfolio-outer">
        <div className="portfolio-column portfolio-column-1 text-center">
        <img src={portfolio5} alt="" />
        <p>
       Website Design
        </p>
        <div className="portfolio-btn">
        <a href="https://www.figma.com/file/ug4V40f0K4X8b8h3wIuBPJ/project-1?node-id=0%3A1&t=46wcLx5xMb2QNZk6-1" target='_blank'>View On Figma</a>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="porfolio-outer">
        <div className="portfolio-column text-center">
        <img src={portfolio6} alt="" />
        <p>
        PC Login Design
        </p>
        <div className="portfolio-btn">
        <a href="https://www.figma.com/file/IeTsYdYhKgcUw9uUKX6lvt/Login-iMac-1?node-id=0%3A1&t=UeLkpsa5VLTZqwcj-1" target='_blank'>View On Figma</a>
        </div>
        </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
