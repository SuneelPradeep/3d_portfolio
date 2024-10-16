import React, { useEffect } from 'react'
// import { IconType } from 'react-icons'
import { FaGithubAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { LinksData } from '../constants'
// import Tippy from '@tippyjs/react'
import { motion,useAnimation } from 'framer-motion'


const profiles = [
    {
      title: "Instagram",
      icon: FaInstagram,
      link: LinksData.instagram,
      bgColor: "bg-[#e1306c]",
    },
    {
      title: "LinkedIn",
      icon: FaLinkedinIn,
      link: LinksData.linkedin,
      bgColor: "bg-[#2867b2]",
    },
    
    {
      title: "GitHub",
      icon: FaGithubAlt,
      link: LinksData.github,
      bgColor: "bg-[#211f1f]",
    },
    // {
    //     title: "Twitter",
    //     icon: FaTwitter,
    //     link: LinksData.twitter,
    //     bgColor: "bg-[#1da1f2]",
    //   },
    // {
    //   title: "Dribbble",
    //   icon: FaDribbble,
    //   link: LinksData.dribbble,
    //   bgColor: "bg-[#ea4c89]",
    // },
    // {
    //   title: "DEV Community",
    //   icon: FaDev,
    //   link: LinksData.dev,
    //   bgColor: "bg-[#0a0a0a]",
    // },
    // {
    //   title: "Facebook",
    //   icon: FaFacebookF,
    //   link: LinksData.facebook,
    //   bgColor: "bg-[#3b5998]",
    // },
  ];
const Profiles = () => {

 const controls = useAnimation()

 useEffect(()=>{
    const sequence = async()=>{
      for(let i in profiles){
         await controls.start((i)=>({
            opacity:1, x:0,scale:1,rotate:0,
            transition: {duration :1.0, delay : 1.5+ i*0.7, ease:'easeInOut'}
         }))
      }
    }
    sequence()
 },[controls])

  return (
    <div className=' flex items-center justify-center gap-8 mt-6 mb-4' >
  {profiles.map(({title,link,bgColor, icon:Icon },index)=>(
//    <Tippy key={index} content={<p className='dark:text-white' ><small>{title}</small></p>}placement='bottom'>
        <motion.div key={`${title}${index}`} className={`w-8 h-8 flex items-center justify-center hover:scale-125 text-sm  rounded-full text-white ${bgColor} `}
         animate={controls} initial={{x:100,scale:0.8,rotate:45, opacity:0, y:-20}} custom={index}>
           <a href={link}  target='_blank' rel='noreferrer'>
            <Icon className='w-5 h-5'   />
            <span className='sr-only'>{title}</span>
            </a> 
        </motion.div>
      
    // </Tippy>
  

  ))}
    </div>
  )
}

export default Profiles