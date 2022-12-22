import React from "react";
import "./portfolio.css";
import { projectsData } from "./Data";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
   return (
      <section class="section" id="portfolio">
         <h2 class="section-title">Portfolio</h2>
         <span class="section-subtitle">Most recent work</span>

         <PortfolioList data={projectsData} />
      </section>
   );
};

export default Portfolio;
