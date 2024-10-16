// import { motion,useAnimation } from 'framer-motion'
// // import Image from 'next/image'
// import React, { useEffect } from 'react'
// import beach from '../assets/images/me/beach.jpg'
// import purple from '../assets/images/me/purple.jpg'
// import black2 from "../assets/images/me/black2.jpg"
// import gray2 from "../assets/images/me/gray2.jpg"

// const photos = [
//      beach,purple,black2,gray2
// ]
// // const photos  = [
// //     "/purple.jpg",
// //     "/gray2.jpg",
// //     "/black2.jpg",
// //     "/beach.jpg"
// // ]
// // type Props = {
// //     size ?: number,
// //     delay ?: number
// // }


// const PhotoWall = ({size = 512,delay=0.8}) => {

//     const controls= useAnimation()
//     useEffect(()=>{
//     async function sequence() {
//         for(let i in photos){
//      await controls.start((i)=> ({
//         opacity : 1,
//         transition :{duration: 1.0, delay: i* delay,ease:'easeInOut'}
//      }))
//         }
             
//     }
//     sequence()
//     },[controls,delay])

//   return (
//     <div className='flex gap-1' style={{width :size,height:size}}>
//     {photos.map((photo,index)=>(
//         <motion.div key={index} initial={{opacity :0,y:20}} custom={index} animate={controls}
//         className={`relative transition-[width] `}
//          style={{animationDelay : `${index *0.5 +0.5}s`,width :`${size}px`,height:`${size}px`}} 
//          onMouseEnter={(e)=> e.currentTarget.style.width = `${size/2}px`} 
//          onMouseLeave={(e)=> e.currentTarget.style.width = `${size/4}px`} >
//              <img src={photo} alt='SuneelPradeep'
//                 className={`w-full h-auto lg:w-full object-fill  ${index === 0 ? "rounded-l" : ""}${index === photos.length - 1 ? "rounded-r" : ""}`}          
//                 style={{ width: '100%', height: 'auto' }}  
//                 />
                  
//         </motion.div>
//     ))}
//         </div>
//   )
// }

// export default PhotoWall


import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import beach from '../assets/images/me/beach.jpg';
import purple from '../assets/images/me/purple.jpg';
import black2 from '../assets/images/me/black2.jpg';
import gray2 from '../assets/images/me/gray2.jpg';
import useWindowDimensions, { Breakpoints } from '../hooks/useWindowDimensions';

const photos = [beach, purple, black2, gray2];

const PhotoWall = ({ size,  delay = 0.8 }) => {
    
   // const [size,setSize] = useState((420 < useWindowDimensions()?.width) ? useWindowDimensions()?.width/3 : 200 || 256)
            
    // const width = size > Breakpoints.md ? 750 : Breakpoints
    
    const controls = useAnimation();

    useEffect(() => {
        async function sequence() {
            for (let i = 0; i < photos?.length; i++) {
                await controls.start({
                    opacity: 1,
                    transition: { duration: 1.0, delay: i * delay, ease: 'easeInOut' },
                });
            }
        }
        sequence();
    }, [controls, delay]);

    return (
        <div className='flex gap-1 mt-2 mb-4 rounded-lg overflow-hidden' style={{height: 512}} >
            {photos.map((photo, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    custom={index}
                    animate={controls}
                    className={`relative transition-[width]`}
                    style={{
                        animationDelay: `${index * 0.5 + 0.5}s`,
                        width: `${size/3}px`,
                        height: `512`,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.width = `${size/2}px`)}
                    onMouseLeave={(e) => (e.currentTarget.style.width = `${size/3 }px`)}
                >
                    <img
                        src={photo}
                        alt='SuneelPradeep'
                        className={`w-full h-auto object-cover ${index === 0 ? 'rounded-l' : ''}${index === photos.length - 1 ? 'rounded-r' : ''}`}
                        style={{ width: '100%', height: 512 }}
                    />
                </motion.div>
            ))}
        </div>
   );
};

export default PhotoWall;
