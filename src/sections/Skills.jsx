import React from 'react'
import { skills } from '../constants'

const Skills = () => {
  return (
    <div className="py-10 flex mx-8 flex-col">
      <h3 className='subhead-text'> My Skills </h3>
      <div className="mt-16 flex flex-wrap gap-12">
           {skills.map((skill,id)=>(
            <div key={id} className='block-container w-20 h-20'>
        <div className="rounded-xl btn-back" />
        {/* transform: rotateZ(15deg);  this is the css thats making hte normal background shadow div to 3d type as its helping transform-style:preserve-3d */}
        {/* transform: translateZ(20px) rotateZ(15deg) rotateX(-20deg) rotateY(-20deg); this on hover is helping the tranform on hover */}
 
        <div className="flex btn-front rounded-xl justify-center items-center">
          <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />

        </div>
            </div>
           ))}
      </div>
     </div>
  )
}

export default Skills
