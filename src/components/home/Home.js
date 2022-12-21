import React from "react";
import "./home.css";
import Social from "./Social";
import { TbMessageDots } from 'react-icons/tb'


const Home = () => {
   return (
      <section className="home section" id="home">
         <div className="home-container container grid">
            <div className="home-content grid">

               <Social />

               {/* Home Image */}
               <div className="home-img"></div>

               {/* Home Text */}
               <div className="">
                  <h1 className="home-title">Edgar Hakobyan</h1>
                  <h3 className="home-subtitle">Software Engineer</h3>
                  <p className="home-description">
                     I'm creative designer based in New York, and I'm very passionate and
                     dedicated to my work.
                  </p>
                  <a href="#contact" className="button button--flex">
                     Say Hello<TbMessageDots className="button-right-icon" />
                  </a>
               </div>
               
            </div>
         </div>
      </section>
   );
};

export default Home;