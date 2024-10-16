
import React, { useRef } from 'react'
import NightSkyScene from '../assets/3d/night_sky_visible_spectrum_monochromatic.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const NightSky = ({isRotating, ...props}) => {
    const {scene,animations} = useGLTF(NightSkyScene)
  const nightskyRef = useRef()

  useFrame((_,delta)=>{
    if(isRotating){
      nightskyRef.current.rotation.y +=0.15 *delta
    }
  })
  return (
      <mesh ref={nightskyRef} {...props} scale={[10,10,10]} position={[0,1,1]}>
        <directionalLight intensity={10} position={[0,10,0]} />
        <ambientLight intensity={10} />
  <primitive object={scene} />
      </mesh>
  )}



export default NightSky
