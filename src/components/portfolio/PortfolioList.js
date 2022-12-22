import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ data }) => {
   return (
      <div>
         <div className="portfolio-container container grid">
            {data.map((item) => {
               return <PortfolioItem item={item} key={item.id} />;
            })}
         </div>
      </div>
   );
};

export default Portfolio;
