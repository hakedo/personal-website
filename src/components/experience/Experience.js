import React from "react";
import "./experience.css";
import { RxCalendar } from 'react-icons/rx'

const Experience = () => {

   return (
      <section id="experience" className="experience section">
         <h2 className="section-title">Experience</h2>
         <span className="section-subtitle">My personel journey</span>

         <div className="experience-container container">

            {/* TOP CATEGORIES */}
            <div className="experience-tabs">
               <div className="experience-category button-flex">
                  <i className="uil uil-graduation-cap experience-icon"></i>
                  Education
               </div>
               <div className="experience-category button-flex">
                  <i className="uil uil-graduation-cap experience-icon"></i>
                  Experience
               </div>
            </div>


            <div className="experience-sections">

               {/* TOP LEFT */}
               <div className="experience-data">
                  <div>
                     <h3 className="experience-title">Software Engineering</h3>
                     <span className="experience-subtitle">
                        Arizona State University
                     </span>
                     <div className="experience-calender button-flex">
                        <RxCalendar className="button-left-icon" />
                        2021 - Present
                     </div>
                  </div>

                  <div>
                     <span className="experience-rounder"></span>
                     <span className="experience-line"></span>
                  </div>
               </div>

               {/* MIDDLE RIGHT */}
               <div className="experience-data">
                  <div></div>

                  <div>
                     <span className="experience-rounder"></span>
                     <span className="experience-line"></span>
                  </div>

                  <div>
                     <h3 className="experience-title">Architectural Designer</h3>
                     <span className="experience-subtitle">
                        EHDM Group Inc
                     </span>
                     <div className="experience-calender button-flex">
                        <RxCalendar className="button-left-icon" />
                        2019 - 2021
                     </div>
                  </div>
               </div>

               {/* MIDDLE LEFT */}
               <div className="experience-data">
                  <div>
                     <h3 className="experience-title">Front-End Bootcamp</h3>
                     <span className="experience-subtitle">
                        Arizona State University
                     </span>
                     <div className="experience-calender button-flex">
                        <RxCalendar className="button-left-icon" />
                        2022
                     </div>
                  </div>

                  <div>
                     <span className="experience-rounder"></span>
                     <span className="experience-line"></span>
                  </div>
               </div>

               {/* BOTTOM RIGHT */}
               <div className="experience-data">
                  <div></div>

                  <div>
                     <span className="experience-rounder"></span>
                  </div>

                  <div>
                     <h3 className="experience-title">Library Assistant</h3>
                     <span className="experience-subtitle">
                        Glendale Branch Library
                     </span>
                     <div className="experience-calender button-flex">
                        <RxCalendar className="button-left-icon" />
                        2016 - 2018
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
