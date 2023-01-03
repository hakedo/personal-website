import React, { useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import { TbMessageDots } from 'react-icons/tb'
import sanityClient from '../../client'


const Home = () => {

   const [homeData, setHomeData] = useState(null);

   useEffect(() => {
      sanityClient.fetch(
         `*[_type == "home"]{
            text,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )
         .then((data) => setHomeData(data))
         .catch(console.error);
      // console.log(homeData && homeData);
   }, [])


   return (
      <section className="home section" id="home">
         <div className="home-container container grid">
            <div className="home-content grid">

               <Social />

               {/* Home Image */}
               <img className="home-img" src={homeData && homeData[0].mainImage.asset.url} alt="" />

               {/* Home Text */}
               <div className="">
                  <h1 className="home-title">Edgar Hakobyan</h1>
                  <h3 className="home-subtitle">Software Engineer</h3>
                  <p className="home-description">
                     {homeData && homeData[0].text}.
                  </p>
                  <div>
                     <a href="#contact" className="button button-flex">
                        Say Hello<TbMessageDots className="button-right-icon" />
                     </a>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Home;