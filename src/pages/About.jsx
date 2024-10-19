import React, { lazy } from 'react'

import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'
import { useSelector } from 'react-redux'
import AboutMe from '../sections/AboutMe'
import ThemeMode from '../components/ThemeMode'
import NormalLoader from '../components/NormalLoader'
// import Education from '../sections/Education'
// import WorkExperience from '../sections/WorkExperience'
// import Header from '../sections/Header'
// import Skills from '../sections/Skills'
// import Languages from '../sections/Languages'
// import MouseFollower from '../components/MouseFollower'
// import Photography from '../sections/Photography'

const Header = lazy(()=> import('../sections/Header'))
const Education = lazy(()=> import('../sections/Education'))
const WorkExperience = lazy(()=> import('../sections/WorkExperience'))
const Skills = lazy(()=> import('../sections/Skills'))
const Photography = lazy(()=> import('../sections/Photography'))
const Languages = lazy(()=> import('../sections/Languages'))
const MouseFollower = lazy(()=> import('../components/MouseFollower'))


const About = () => {
  const darkMode = useSelector(state => state.darkMode)
 
  
  return (
    <React.Suspense fallback={<NormalLoader />}>
    <section className='max-container relative'>
      <h1 className='head-text'>  Hello , I 'm  <span className='blue-gradient_text font-semibold drop-shadow'>Suneel Pradeep</span></h1>
     <MouseFollower />
     <Header />
     <AboutMe />
     <Skills  />
     <Education darkMode={darkMode}  />
     <WorkExperience darkMode={darkMode} />
     <Languages />
     <Photography />
     <hr className='border-slate-200'  />
     
    <CTA />

    <ThemeMode />
    </section>
    </React.Suspense>
  )
}

export default About
