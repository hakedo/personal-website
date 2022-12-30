import React from "react";
import { ImLinkedin } from 'react-icons/im'
import { GrGithub } from 'react-icons/gr'

const Social = () => {
   return (
      <div>
         <div>
            <span className="home-logo">hak3do</span>
         </div>
         <div className="home-social">
            <a
               href="https://www.linkedin.com/in/ehakobyan99/"
               className="home-social-icon"
               target="_blank"
               rel="noreferrer"
            >
               <ImLinkedin />
            </a>

            <a
               href="https://github.com/hakedo"
               className="home-social-icon"
               target="_blank"
               rel="noreferrer"
            >
               <GrGithub />
            </a>
         </div>
      </div>
   );
};

export default Social;
