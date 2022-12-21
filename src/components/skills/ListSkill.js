import React from 'react'
import ItemSkill from './ItemSkill'

const ListSkill = ({ data, index }) => {
   const list = data[index].map((item, i) => {
      return (
         <ItemSkill
            language={data[index][i].language}
            level={data[index][i].level}
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