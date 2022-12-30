import React from "react";
import { BiLinkExternal } from 'react-icons/bi'

const PortfolioItem = ({ item }) => {
   return (
      <div className="portfolio-card" key={item.id}>
         <img src={item.image} alt="" className="portfolio-img" />
         <h3 className="portfolio-title">{item.title}</h3>
         <p className="portfolio-description">{item.description}</p>
         <div className="button-flex">
            {(item.url !== '') ? (
               <a href={item.url} className="portfolio-button" target="_blank" rel="noreferrer">
                  Live Demo&nbsp;<BiLinkExternal />
               </a>) : ''
            }
            
            <a href={item.github} className="portfolio-button" target="_blank" rel="noreferrer">
               GitHub&nbsp; <BiLinkExternal />
            </a>
         </div>
      </div>
   );
};

export default PortfolioItem;
