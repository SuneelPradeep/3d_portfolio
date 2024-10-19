
import React, { useEffect, useRef, useState } from 'react'
import HomeInfo from '../components/HomeInfo'
import { useSelector } from 'react-redux'

import DarkHome from './DarkHome'
import LightHome from './LightHome'
import ThemeMode from '../components/ThemeMode'
import binksake from '../assets/one_piece_bink_no_sake.mp3'
import onepiece from '../assets/one_piece.mp3'
// import { soundoff,soundon } from '../assets/icons'
import { TbMusic, TbMusicOff } from 'react-icons/tb'

const Home = () => {
    //const [isRotating,setisRotating] = useState(false)
    const currentStage = useSelector((state)=> state.currentStage)
    const darkMode = useSelector((state) => state?.darkMode ?? false); 

    const lightaudioRef = useRef(new Audio( binksake))
    const darkaudioRef = useRef(new Audio( onepiece))
  
    lightaudioRef.current.volume = 0.4;
    lightaudioRef.current.loop = true;
    darkaudioRef.current.volume = 0.4;
    darkaudioRef.current.loop = true;
    const [isPlayingAudio,setIsPlayingAudio] = useState(false)

    useEffect(()=>{
        if(isPlayingAudio){
          if(darkMode){
            lightaudioRef.current.pause()
            darkaudioRef.current.play()
            
            return()=> darkaudioRef.current.pause()
          }else{
            darkaudioRef.current.pause()
            lightaudioRef.current.play()
            
            return()=> lightaudioRef.current.pause()
          }          
        }    
    },[isPlayingAudio,darkMode])

      const adjustCityScreen = ()=>{
         let screenScale, screenPosition;
           if(window.innerWidth < 450) {
            screenScale = [7.5, 7.5, 7.5];
            screenPosition = [0, -10, -30.4];
           }
          else if (window.innerWidth < 769) {
            screenScale = [8.5, 8.5, 8.5];
            screenPosition = [0, -10, -30.4];
          } else {
            screenScale = [9, 9, 9];
            screenPosition = [0, -10, -30.4];
          }     
          return [screenScale, screenPosition];       
      }
     const [cityScale, cityPosition] = adjustCityScreen()
      
  return (
    <section className='w-full h-screen relative'>
      <div className="absolute top-16   left-0 right-0 z-10 flex items-center justify-center">
      <HomeInfo currentStage={currentStage} />
        </div>
       {darkMode ?
        ( <DarkHome />) 
       :  (<LightHome />)
        }
      <div className='bottom-12 left-2 absolute'>
        {/* <img src={!isPlayingAudio ? soundoff : soundon } alt='Play Music' className='w-10 h-10 cursor-pointer' onClick={() => setIsPlayingAudio(aud => !aud)} /> */}
        {!isPlayingAudio ? <TbMusicOff className={`w-8 h-8 cursor-pointer ${darkMode ? 'text-teal-300' : 'text-violet-400'}`} onClick={() => setIsPlayingAudio(aud => !aud)} /> 
        : <TbMusic className={`w-8 h-8 cursor-pointer ${darkMode ? 'text-teal-300' : 'text-violet-400'}`}  onClick={() => setIsPlayingAudio(aud => !aud)}/> }
      </div>
      <ThemeMode />
      
    </section>
  )
}

export default Home
 