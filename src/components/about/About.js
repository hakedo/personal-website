import React from "react";
import "./about.css";
import AboutImg from "../../assets/me2.jpg";
import CV from "../../assets/edgar_resume.pdf";
import { CgFileDocument } from 'react-icons/cg'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img src={AboutImg} alt="" className="about-img" />

        <div className="about-data">

          <p className="about-description">
            I started my journey as a programmer 2 years ago when I enrolled in a Bachelor's Degree program for Computer Science (expected graduation Fall 2023). During the following years, I developed my skills in web applications & object-oriented programming. I am passionate and eager to desing and build applications and software.
          </p>

          <a download="edgar_resume" href={CV} className="button button--flex">
            Download CV
            <CgFileDocument className="button-icon"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
