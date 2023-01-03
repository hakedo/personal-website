import React, { useState, useEffect } from "react";
import "./about.css";
import CV from "../../assets/edgar_resume.pdf";
import { CgFileDocument } from 'react-icons/cg'
import sanityClient from '../../client'


const About = () => {

   const [aboutData, setaboutData] = useState(null);
   useEffect(() => {
      sanityClient.fetch(
         `*[_type == "about"]{
            content,
            aboutImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )
         .then((data) => setaboutData(data))
         .catch(console.error);
      // console.log(aboutData && aboutData)
   }, [])

   return (
      <section className="about section" id="about">
         <h2 className="section-title">About Me</h2>
         <span className="section-subtitle">My introduction</span>

         <div className="about-container container grid">
            <img src={aboutData && aboutData[0].aboutImage.asset.url} alt="" className="about-img" />

            <div className="about-data">

               <p className="about-description">
                  {aboutData && aboutData[0].content}
               </p>

               <a download="edgar_resume" href={CV} className="button button--flex">
                  Download CV
                  <CgFileDocument className="button-icon" />
               </a>
            </div>
         </div>
      </section>
   );
};

export default About;
