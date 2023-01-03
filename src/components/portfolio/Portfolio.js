import React from "react";
import "./portfolio.css";
import { projectsData } from "./Data";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
   return (
      <section className="section" id="portfolio">
         <h2 className="section-title">Portfolio</h2>
         <span className="section-subtitle">Most recent work</span>

         <PortfolioList data={projectsData} />
      </section>
   );
};

export default Portfolio;
