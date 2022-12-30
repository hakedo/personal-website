import React from "react";
import "./footer.css";
import { GrGithub, GrLinkedinOption } from 'react-icons/gr'

const Footer = () => {
   return (
      <footer id="footer" className="footer">
         <div className="footer-container container">

            <h1 className="footer-title">hak3do</h1>

            <ul className="footer-list">
               <li>
                  <a href="#home" className="footer-link" rel="noreferrer">
                     Home
                  </a>
               </li>

               <li>
                  <a href="#about" className="footer-link" rel="noreferrer">
                     About
                  </a>
               </li>

               <li>
                  <a href="#portfolio" className="footer-link" rel="noreferrer">
                     Projects
                  </a>
               </li>
            </ul>

            <div className="footer-social">
               <a
                  href="https://github.com/hakedo"
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
               >
                  <GrGithub />
               </a>

               <a
                  href="https://www.linkedin.com/in/ehakobyan99/"
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
               >
                  <GrLinkedinOption />
               </a>
            </div>
            <span className="footer-copy">
               &#169; Edgar Hakobyan | hak3do.com<br />
               All rigths reserved
            </span>
         </div>
      </footer>
   );
};

export default Footer;
