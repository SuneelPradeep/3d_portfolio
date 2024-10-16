
import { Canvas } from '@react-three/fiber'
import React, { Suspense,useState } from 'react'
import Loader from '../components/Loader'
import SeaKeep from '../models/SeaKeep'
import GoingMerry from '../models/GoingMerry'
import Bird from '../models/Bird'
import Luffy from '../models/Luffy'


const LightHome = () => {
    const [isRotating,setisRotating] = useState(false)
    

    const adjustSeaKeepScreen = ()=>{
            let screenScale, screenPosition;
              if(window.innerWidth < 450) {
                screenScale = [0.055, 0.055, 0.055];
                screenPosition = [0, -5, -29];
            }
             else if (window.innerWidth < 769) {
                screenScale = [0.055, 0.055, 0.055];
                screenPosition = [0, -5, -29]; 
            } else {
               screenScale = [0.055, 0.055, 0.055];
               screenPosition = [0, -7, -29];
             }     
             return [screenScale, screenPosition];       
         }
    const [islandScale, islandPosition] = adjustSeaKeepScreen()

  return (
    <Canvas camera={{  near : 0.1, far:1000}} className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
        <Suspense fallback={<Loader />} >
        {/* <directionalLight position={[1,1,1]} intensity={0} /> */}
        <ambientLight intensity={2} />
        {/* <pointLight />
        <spotLight /> */}
        <hemisphereLight skyColor='#29C5F6' groundColor="#2E8B57" intensity={3.5} />
         <Bird  />
         <SeaKeep scale={islandScale} position={islandPosition} rotation={[0,-6.69,0]}  isRotating={isRotating} setisRotating={setisRotating}  /> 
          <GoingMerry scale={[1.2,1.2,1.2]} position = {[8,-5.5,-3]} rotation={[4.7,0,0.1]} >
            <Luffy scale={[0.4,0.4,0.4]} position = {[-1.6,0.3,1.4]} rotation={[-4.2,29.75,-6]}  />
            </GoingMerry>
            {/* <GoingMerry scale={[1.2,1.2,1.2]} islandPosition={islandPosition} position = {[8,-5.5,-3]} rotation={[4.7,-0.1,0.1]} > */}
          
           </Suspense>
      </Canvas>
  )
}

export default LightHome
