import React from 'react'
import { projectData } from '../constants'
import { NavLink } from 'react-router-dom'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import NormalLoader from '../components/NormalLoader'




const ProjectsSection = () => {
  return (
    <React.Suspense fallback={<NormalLoader />}>
    <div className='flex flex-wrap my-20 gap-16'>
     
    {projectData.map((proj,id)=>(
        <div className='my-7 lg:w-[400px] w-full' key={proj.name}> 
          <div className='block-container w-60 h-[7.5rem] lg:w-96 lg:h-48 md:w-96 md:h-48 ' >
            <div className={`btn-back rounded-xl ${proj.theme}`}>
              {/* <div className='flex justify-center items-center btn-front rounded-xl '> */}
                <img src={proj.image} alt={proj.name} className='w-full h-full object-contain' />
              {/* </div>                 */}
            </div>    
          </div>
          <div className="mt-5 flex flex-col">
              <h4 className='text-2xl font-poppins font-semibold'>{proj.name}</h4>
              <p className='mt-2 text-slate-500'>{proj.summary}</p>
              <div className='my-5 flex flex-wrap leading-snug items-center justify-start gap-2 ml-5  dark:bg-black dark:text-white'>
        {proj?.tags?.map((point,idx)=>(
          <p  key={`prjoj-comp-${idx}`} 
          className={`h-auto leading-snug dark:text-white border bg-blue-500 shadow-sm rounded-xl p-1 border-gray-400 ${proj.color} ${proj.theme}  text-sm font-normal pl-1 font-worksans`}>{point} </p>
        ))}
      </div>
              <div className='flex gap-4 mt-2 font-poppins items-center justify-between'>
               <div className={`flex gap-4 items-center `}>
                 <NavLink to={proj?.link?.url} target='_blank' rel='noopener noreferrer' className={`font-semibold `}>
                Link </NavLink>
                <FaArrowRight className={`w-4 h-4   object-contain transform hover:translate-x-2 ${proj.textcolor}`} />
                </div>
                
                <NavLink to={proj?.link?.github} target='_blank' rel='noopener noreferrer'>
                  <div><FaGithub className={`w-8 h-8 mr-4 ${proj?.textcolor}`} alt='github' />
                    {/* <img src={github} className={`w-8 h-8 mr-4   ${proj.theme}`} alt='github' />  */}
                    </div></NavLink>
            </div>
            </div>
        </div>
    ))}
   </div>
   </React.Suspense>
  )
}

export default ProjectsSection
