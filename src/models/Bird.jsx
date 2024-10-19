import React, { useEffect, useRef } from 'react'
import BirdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
    const {scene,animations} = useGLTF(BirdScene,true, 'https://www.gstatic.com/draco/v1/decoders/')
    const birdRef = useRef()
    const {actions} = useAnimations(animations,birdRef)
    
    useEffect(()=>{
        //  birdRef.current.rotation.y += 0.25
         actions['Take 001'].play()
    },[])

  useFrame(({clock,camera})=>{
    // here we will make the bird move towards the screen and rotate back
    // so first we update y to have bird like motion which sin theta like sine wave 
    // so this moves according to clock 
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    if(birdRef.current.position.x > camera.position.x + 10){
        // this means wehn it reaches end point of screen it rotates back and fly 
        birdRef.current.rotation.y = Math.PI
    }
    else if(birdRef.current.position.x < camera.position.x -10){
        // changes birds direction to forward and reset bird's rotation
       birdRef.current.rotation.y = 0;    
    }
    // updating x and z according to direction
    if(birdRef.current.rotation.y === 0){
        // move front 
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01
    }else{
        // move back
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01
    }

  })

  return (
    <mesh position={[-5,2,1]} scale={[0.003,0.003,0.003]} ref={birdRef}>
      <primitive object={scene}  />
    </mesh>
  )
}

export default Bird
