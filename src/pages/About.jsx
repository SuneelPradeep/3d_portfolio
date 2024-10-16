import React from 'react'

import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'
import { useSelector } from 'react-redux'
import AboutMe from '../sections/AboutMe'
import ThemeMode from '../components/ThemeMode'
import Education from '../sections/Education'
import WorkExperience from '../sections/WorkExperience'
import Header from '../sections/Header'
import Skills from '../sections/Skills'
import Languages from '../sections/Languages'
import MouseFollower from '../components/MouseFollower'
import Photography from '../sections/Photography'

const About = () => {
  const darkMode = useSelector(state => state.darkMode)
  
  return (
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
  )
}

export default About
