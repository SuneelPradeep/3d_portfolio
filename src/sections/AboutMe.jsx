
import React, { useRef, useState } from 'react'
import {motion,useInView} from 'framer-motion'
import beachpic from '../assets/images/me/beach2.jpg'
import { NavLink } from 'react-router-dom'


const AboutMe = () => {
  const [readmore,setReadmore] = useState(false)
  const ref=useRef(null)
  const isInView = useInView(ref,{once:true})
  const containerVariants = {
    hidden :{opacity : 0, y:150},
    visible : {opacity :1, y:0, transition : {duration:1.5,ease:'easeInOut'}}
  }
  let contentdata = [<p>Hey there! </p>, 
  <><p>
    I&apos;m <strong className='blue-gradient_text'>Suneel Pradeep Setti </strong>, and as you might have already read, I&apos;m a developer, photographer, singer etc.,. This website was created to showcase all of my skills and future plans. 
  </p><br /></>,
  <><p>
    My fascination with computers led me to development. The way code transforms into something tangible and useful, like creating a simple variable <code className='font-semibold bg-gray-600 text-white'>string name = &quot;Suneel&quot;</code> which holds my identity in a line of code, amazed me. Witnessing this magic turned my curiosity into a quest for innovation, exploring how sites like Amazon and Meta work.
  </p><br /></>,
  <p onClick={()=> setReadmore(pre=> !pre)} className='text-blue-500 underline font-semibold cursor-pointer'>{!readmore ? '...Read more' : '' } </p>,
  <p>
    Photography captivates me because it allows me to freeze real-life moments. Looking back at these pictures years later, I see how much has changed, and it brings a wave of nostalgia and fond memories.
  </p>,
  <><p>
    I love singing as it gives me a beautiful way to express myself and worship God. I also recorded some songs on StarMaker.
  </p><br /></> , 
  <p>
    I created this website to showcase my talents and to make it easier for you to connect with me. If you like what you see, head over to the <NavLink to="/contact" className='underline text-blue-500'> Contact Section</NavLink>   below and send me a message. I would love to hear from you!
  </p>]

  
  return (
    <>
     <h3 className='subhead-text my-2'>About Me</h3>
    <motion.div id={"AboutMe"} className='font-worksans lg:mx-[4rem] my-[4rem] h-auto grid gap-12 md:grid-cols-4 place-content-center'
     initial='hidden' variants={containerVariants} ref={ref} animate={isInView ? 'visible':'hidden'}>

     <div className='relative h-full md:h-auto lg:h-full col-span-2  lg:col-span-1  '>
                <img src={beachpic} alt='Me' className="w-full  md:block object-cover md:object-cover lg:object-contain" />
            </div>      
             <div className='col-span-2 lg:col-span-3 max-w-full  lg:text-md lg:leading-6 leading-9 text-start font-poppins '>
           {readmore ? contentdata.map((item,id)=> (
            <span key={id}>{item}</span>
           )) : contentdata?.slice(0,4)?.map((item,od)=> (
            <span key={od}>{item} 
          </span> ))}
</div> 
        </motion.div>
        </>
  )
}

export default AboutMe