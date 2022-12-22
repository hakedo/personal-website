import React from "react";
import "./skills.css";
import expData from './expData'
import ListSkill from './ListSkill'

const Skills = () => {
   return (
      <section className="skills section" id="skills">
         <h2 className="section-title">Skills</h2>
         <span className="section-subtitle">My technical level</span>

         <div className="skills-container container grid">

            <div className="skills-content">
               <h3 className="skills-title">Frontend Developer</h3>
               <ListSkill expData={expData} index={0} />
            </div>

            <div className="skills-content">
               <h3 className="skills-title">Backend Developer</h3>
               <ListSkill expData={expData} index={1} />
            </div>

            <div className="skills-content">
               <h3 className="skills-title">Programming Languages</h3>
               <ListSkill expData={expData} index={2} />
            </div>

            <div className="skills-content">
               <h3 className="skills-title">Other Skills</h3>
               <ListSkill expData={expData} index={3} />
            </div>
            
         </div>

      </section>
   );
};

export default Skills;
