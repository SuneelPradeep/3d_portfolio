import React from 'react'
import CTA from '../components/CTA'
import ThemeMode from '../components/ThemeMode'
import Certifications from '../sections/Certifications'
import ProjectsSection from '../sections/ProjectsSection'
import Resume from '../sections/Resume'

const Projects = () => {
  return (
    <section className='max-container relative' >
       <h1 className='head-text'>  My  <span className='blue-gradient_text font-semibold drop-shadow'>Projects </span></h1>
     <div className="my-5 flex flex-col gap-3 text-slate-500">
      <p className='my-2'>I have embarked on numerous projects throughout the years ,but these are the ones I hold closest</p>
       </div>
     <ProjectsSection />
     <Certifications />
     <Resume />
   <hr className='border-slate-200' />
   
   <CTA />
   <ThemeMode />
    </section>
  )
}

export default Projects

