import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { EducationData } from '../constants'

const Education = ({darkMode}) => {
  return (
    <div className="py-16">
    <h3 className='subhead-text'> My Education </h3>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
    <p>I have studied in one of the reputed Universities, institutions and learned many things, made many friends along the way.</p> 
     </div>
     <div className='mt-12 flex '> 
       <VerticalTimeline lineColor={darkMode ? 'white' :'#94a3b8'} >
     {EducationData.map((edu,id)=>(
      <VerticalTimelineElement  key={edu.id} date={`${edu.period.start} - ${edu.period.end}`}
       icon={<div className='flex  justify-center items-center w-full h-full'><img src={edu.logo} alt={edu.institution} 
      className='w-[60%] h-[60%] object-contain' /></div>}
      //contentLi
      contentArrowStyle={{backgroundColor:darkMode ? '' : '#94a3b8'}}
      contentStyle={{backgroundColor : darkMode ? 'black' : '',color: darkMode ? "white" :"",
        borderBottom:'8px',  borderStyle: 'solid ' , borderBottomColor : edu.iconBg, 
        borderLeft:'solid 3px #94a3b8',borderTop:'solid 3px #94a3b8',borderRight:'solid 3px #94a3b8',
        boxShadow : 'none',borderRadius:'1rem'}}
      iconStyle={{background : edu.iconBg,border:'solid 0.5px #94a3b8 '}}

      >
        <div className='dark:bg-black dark:text-white'>
        
          <h3 className='dark:text-white text-black font-poppins text-xl font-semibold'> {edu.institution} </h3>
          <p style={{margin:0}} className='font-base font-normal text-sm dark:text-gray-500 text-gray-500'> {edu.location}</p>
           <p style={{margin:0}} className='font-base font-medium dark:text-gray-300 text-black-500'> {edu.degree}</p>
           <p style={{margin:0}} className='font-base font-medium dark:text-gray-300 text-gray-500'> {edu.study}</p>
        </div>
        <ul className='my-5 list-disc ml-5 space-y-2 dark:bg-black dark:text-white'>
            {/* <li className='dark:text-white text-black-500/50 text-sm font-normal pl-1'>{edu.study} </li> */}
          {/* {edu?.points?.map((point,idx)=>(
            <li  key={`edu-comp-${idx}`} className='dark:text-white text-black-500/50 text-sm font-normal pl-1'>{point} </li>
          ))} */}
        </ul>

      </VerticalTimelineElement>
     ))}
     </VerticalTimeline>
     </div>
   </div>
   

   
  )
}

export default Education
