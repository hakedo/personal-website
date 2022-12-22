import React from "react";

const PortfolioItem = ({ item }) => {
   return (
      <div className="portfolio-card" key={item.id}>
         <img src={item.image} alt="" className="portfolio-img" />
         <h3 className="portfolio-title">{item.title}</h3>
         <div className="button-flex">
            <a href={item.url} className="portfolio-button" target="_blank" rel="noreferrer">
               Live Demo
            </a>
            <a href={item.github} className="portfolio-button" target="_blank" rel="noreferrer">
               GitHub
            </a>
         </div>
      </div>
   );
};

export default PortfolioItem;
