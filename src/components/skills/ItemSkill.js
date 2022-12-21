import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'


const ItemSkill = ({language, level}) => {
   return (
      <div className="skills-data">
         <BsPatchCheckFill />

         <div>
            <h3 className="skills-name">{language}</h3>
            <span className="skills-level">{level}</span>
         </div>
      </div>
   )
}

export default ItemSkill