import React from "react";
import "./about.css";
import AboutImg from "../../assets/me.jpg";
import { CgFileDocument } from 'react-icons/cg'
// import CV from "../../assets/Smith-Cv.pdf";

const About = () => {
   return (
      <section className="about section" id="about">
         <h2 className="section-title">About Me</h2>
         <span className="section-subtitle">My introduction</span>

         <div className="about-container container grid">
            <div className="about-me">
               <img src={AboutImg} alt="" className="about-img" />
            </div>

            <div>
               <p className="about-description">
                  I started my journey as a programmer 2 years ago when I enrolled in a Bachelor's Degree program for Computer Science (expected graduation Fall 2023). During the following years, I developed my skills in web applications & object-oriented programming. I am passionate about design and programming.
               </p>

               <a download="" href="{CV}" className="button button-flex">
                  Download CV <CgFileDocument className="button-right-icon" />
               </a>
            </div>

         </div>
      </section>
   );
};

export default About;
