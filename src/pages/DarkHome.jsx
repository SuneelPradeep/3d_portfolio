
import { Canvas } from '@react-three/fiber'
import React, {lazy, Suspense, useState } from 'react'
// import LACity from '../models/LACity'
// import GodZilla from '../models/Godzilla'
// import NightSky from '../models/NightSky'
// import FighterJet from '../models/FighterJet'
import Loader from '../components/Loader'
import {Preload} from '@react-three/drei'

const LACity = lazy(()=> import ("../models/LACity"))
const NightSky = lazy(()=> import ('../models/NightSky'))
const FighterJet = lazy(()=> import ('../models/FighterJet'))
const GodZilla = lazy(()=> import ('../models/Godzilla'))

const DarkHome = () => {
    const [isRotating,setisRotating] = useState(false)
    
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
    <Canvas camera={{near : 0.1, far:1000}} className={`w-full h-screen mb-4 bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
        <Suspense fallback={<Loader />} >
        <Preload all />
        <directionalLight position={[1,1,1]} intensity={2} />
        <ambientLight intensity={0.5} />
        {/* <pointLight />
        <spotLight /> */}
        <hemisphereLight skyColor='#ffffff' groundColor="#ffffff" intensity={5} />
        
        <FighterJet position={[3, 2.8, 0.3]} rotation={[0.2, 2, 0.3]} scale={[0.25, 0.25, 0.25]} />
                   
        <NightSky isRotating={isRotating} /> 

        <LACity scale={cityScale} position={cityPosition} rotation={[0,-0.35,0]} isRotating={isRotating} setisRotating={setisRotating}  >
        <ambientLight intensity={-19} >
         <GodZilla scale={[0.0250,0.0250,0.0250]} position={[-0.8,4.5,0.5]} rotation={[1,-2,-0.5]}  />
         </ambientLight>
          </LACity>
            </Suspense>
      </Canvas>
  )
}

export default DarkHome
