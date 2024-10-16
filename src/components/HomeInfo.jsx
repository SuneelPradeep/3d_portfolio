import React from 'react'
import { NavLink } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg'
import { useSelector } from 'react-redux';


const InfoBox = ({text,link,btnText})=>(
    <div className="info-box">
   <p className='font-medium text-center sm:text-xl '>{text} </p> 
   <NavLink to={link} className="neo-brutalism-white dark:bg-black neo-btn"> {btnText}
     <img src={arrow} className='w-4 h-4 object-contain hover:translate-x-2' /> </NavLink>
   
    </div>
)

const renderContent = (darkMode) =>({
  
    1 : (<h1 className='neo-brutalism-blue dark:bg-black bg-[#2b77e7] sm:text-xl sm:leading-snug px-8 py-4 text-white mx-5 text-center'> 
    Hi , I am <span className='font-semibold'>Suneel Pradeep Setti</span>
     <br /> a software developer from Vizag.
     <p className='text-sm text-gray-500'>Play and Rotate this page for 3D & sections ,turn on {darkMode ? 'Light Mode' : 'Dark Mode'} below to see another 3D </p></h1>
      ),
    2 : (<InfoBox text="Worked with many companies and picked up many skills along the way" link="/about" btnText="About Me"  />),
    3 : (<InfoBox text="Led multiple projects to success over the years.Curious about the projects?" link="/projects" btnText="My Projects"  />),
    4 : (<InfoBox text="Looking for a dev? or need a project done ?" link="/contact" btnText="Contact Me"  />),
   // 5:   (<InfoBox text="Learn more about me ?" link="/projects" btnText="Let's head"  />),
})

const HomeInfo = ({currentStage}) => {
  const darkMode = useSelector(state=> state.darkMode)

  return renderContent(darkMode)[currentStage] || null;
  
}

export default HomeInfo
