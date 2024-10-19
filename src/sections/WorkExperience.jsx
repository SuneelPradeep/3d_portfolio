import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { WorkExperienceData } from '../constants'
import NormalLoader from '../components/NormalLoader'

const WorkExperience = ({darkMode}) => {
  const [readmore,setReadmore] = useState(false)

  return (
    <React.Suspense fallback={<NormalLoader />}>
    <div className="py-16">
    <h3 className='subhead-text'> Work Experience </h3>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
    <p>I have worked with all sorts of companies, leveling up my skills and teaming up with smart people.Here's the rundown. </p> 
     </div>
     <div className='mt-12 flex '> 
       <VerticalTimeline  lineColor={darkMode ? 'white' :'#94a3b8'} >
     {WorkExperienceData?.map((edu,id)=>(
      <VerticalTimelineElement  key={edu.id} date={`${edu.period.start} - ${edu.period.end}`}
       icon={<div className='flex  justify-center items-center w-full h-full'><img src={edu.logo} alt={edu.name} 
      className='w-[60%] h-[60%] object-contain' /></div>}
      contentStyle={{backgroundColor : darkMode ? 'black' : '',color: darkMode ? "white" :"",borderBottom:'8px', 
         borderStyle: 'solid' , borderBottomColor :edu.iconBg,
         borderLeft:'solid 3px #94a3b8',borderTop:'solid 3px #94a3b8',borderRight:'solid 3px #94a3b8',
        boxShadow : 'none',borderRadius:'1rem'}}
      contentArrowStyle={{backgroundColor:darkMode ? '' : '#94a3b8'}}
      iconStyle={{background : edu.iconBg,border:'solid 0.5px #94a3b8 '}}

      >
        <div className='dark:bg-black dark:text-white'>
        
          <h3 className='dark:text-white text-black font-poppins text-xl font-semibold'> {edu.name} </h3>
          <p style={{margin:0}} className='font-base font-medium dark:text-gray-500 text-black-500'> {edu.location}</p>
           <p style={{margin:0}} className='font-base font-medium dark:text-gray-300 text-black-500'> {edu.position}</p>
          </div>
        <p onClick={()=>setReadmore((pre)=> !pre)} className='dark:text-white text-black-500/50 text-sm font-normal pl-1'>{readmore ? edu.summary : edu?.summary?.slice(0,80)}<span className='text-blue-500 cursor-pointer font-semibold'>{!readmore ? '...Read more' : ''}</span></p>
        
        <div className='my-5 flex flex-wrap leading-snug items-center justify-start gap-2 ml-5  dark:bg-black dark:text-white'>
          {edu?.keyFocus?.map((point,idx)=>(
            <p  key={`edu-comp-${idx}`} className='h-auto font-worksans leading-snug dark:text-white border shadow-sm rounded-xl p-0.5 text-xs lg:text-sm lg:p-1 border-gray-400 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-black-500 font-normal pl-1'>{point} </p>
          ))}
        </div>

      </VerticalTimelineElement>
     ))}
     </VerticalTimeline>
     </div>
   </div>
   </React.Suspense>
  )
}

export default WorkExperience
