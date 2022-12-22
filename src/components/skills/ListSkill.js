import React from 'react'
import ItemSkill from './ItemSkill'

const ListSkill = ({ expData, index }) => {
   const list = expData[index].map((item, i) => {
      return (
         <ItemSkill
            language={expData[index][i].language}
            level={expData[index][i].level}
         />
      )
   })
   return (
      <div className="skills-box">
         <div className="skills-group">
            {list}
         </div>
      </div>
   )
}

export default ListSkill