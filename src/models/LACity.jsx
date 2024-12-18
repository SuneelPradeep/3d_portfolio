/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Nelib! (https://sketchfab.com/Nelib)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/snow-village-8f9c2a69457d4d42829e0ed2d862e407
Title: Snow Village
*/

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: FUD-UJEP (https://sketchfab.com/FUD-UJEP)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/la-night-city-a85450184c6e4ddf87b49c402641e5b4
Title: LA Night City
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import LAScene from '../assets/3d/la_night_city.glb'
import {a } from '@react-spring/three'
import { useThree,useFrame } from '@react-three/fiber'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentStage, changeMode } from '../slice/HomeSlice'

const  LACity = ({isRotating,setisRotating, children, ...props}) => {
  const { nodes, materials } = useGLTF(LAScene,true, 'https://www.gstatic.com/draco/v1/decoders/')
  const currentStage = useSelector((state)=> state.currentStage)
  const dispatch = useDispatch()
  const cityRef = useRef()
  const {gl,viewport} = useThree()
  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95

  const handlePointerDown = (e)=>{
      e.stopPropagation();
      e.preventDefault()
      setisRotating(true)
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      lastX.current = clientX;
  }
  const handlePointerUp = (e)=>{
    e.stopPropagation();
      e.preventDefault()
      setisRotating(false)
  }
  const handlePointerMove = (e)=>{
    e.stopPropagation();
      e.preventDefault()
      if(isRotating){
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const delta = ( clientX - lastX.current) / viewport.width;
        cityRef.current.rotation.y += (delta * 0.005 * Math.PI)
        lastX.current = clientX;
        rotationSpeed.current =delta * 0.05 * Math.PI
      }     
  }
  const handleKeyDown = (e)=>{
    if(e.key==='ArrowLeft'){
        if(!isRotating) setisRotating(true)
        cityRef.current.rotation.y += 0.05 * Math.PI
       rotationSpeed.current = 0.0125;
    }
    else if(e.key ==='ArrowRight'){
        if(!isRotating) setisRotating(true)
            cityRef.current.rotation.y -= 0.05*Math.PI
    }
  }

  const handleKeyUp =(e)=>{
       if(e.key==='ArrowLeft' || e.key==='ArrowRight'){
        setisRotating(true)
       }
  }
  const handleTouchStart = (e)=>{
       e.preventDefault()
       e.stopPropagation()
       setisRotating(true)
       const clientX = e.touches ? e.touches[0].clientX : e.clientX
       lastX.current = clientX
  }
  const handleTouchEnd = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    setisRotating(false)
  }
  const handleTouchMove = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(isRotating){
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
       const delta = (clientX - lastX.current) / viewport.width
       cityRef.current.rotation.y += delta * 0.05 * Math.PI;
        lastX.current = clientX
        rotationSpeed.current = delta * 0.05 * Math.PI
    }
    
  }

  useEffect(()=>{
    const canvas = gl.domElement
       canvas.addEventListener('pointerdown',handlePointerDown)
       canvas.addEventListener('pointerup',handlePointerUp)
       canvas.addEventListener('pointermove',handlePointerMove)
        window.addEventListener('keydown',handleKeyDown)
        window.addEventListener('keyup',handleKeyUp)
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchend", handleTouchEnd);
        canvas.addEventListener("touchmove", handleTouchMove);

        return ()=> {
        canvas.removeEventListener('pointerdown',handlePointerDown)
        canvas.removeEventListener('pointerup',handlePointerUp)
        canvas.removeEventListener('pointermove',handlePointerMove)
        window.removeEventListener('keydown',handleKeyDown)
        window.removeEventListener('keyup',handleKeyUp)
        canvas.removeEventListener("touchstart", handleTouchStart);
        canvas.removeEventListener("touchend", handleTouchEnd);
        canvas.removeEventListener("touchmove", handleTouchMove);
     
        }
  },[gl,handlePointerDown,handlePointerMove,handlePointerUp])

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      cityRef.current.rotation.y += rotationSpeed.current;
    }
     else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = cityRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >5.85 && normalizedRotation <=6.2:
          dispatch(changeCurrentStage(1));
          break;
        case normalizedRotation >= 5.05 && normalizedRotation <= 5.55:
          dispatch(changeCurrentStage(2));
          break;
        case normalizedRotation >= 1.5 && normalizedRotation <= 2.5:
          dispatch(changeCurrentStage(3));
          break;
          case normalizedRotation >= 3.5 && normalizedRotation <= 4.7:
          dispatch(changeCurrentStage(4));
          break;
        // case normalizedRotation >= 2.4 && normalizedRotation <= 3.4:
        //   dispatch(changeCurrentStage(4));
        //   break;
        // case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        //   dispatch(changeCurrentStage(5));
        //   break;
        default:
          dispatch(changeCurrentStage(null));
      }
    }
  });


  return (
    <a.group {...props} ref={cityRef} >
      <a.group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <a.group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <a.group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={70}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u3_v1_0.geometry}
              material={materials.Dtla_Orbit_u3_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u3_v1_0_1.geometry}
              material={materials.Dtla_Orbit_u3_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u3_v1_0_2.geometry}
              material={materials.Dtla_Orbit_u3_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u3_v1_0_3.geometry}
              material={materials.Dtla_Orbit_u3_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v1_0.geometry}
              material={materials.Dtla_Orbit_u1_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v1_0_1.geometry}
              material={materials.Dtla_Orbit_u1_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v1_0_2.geometry}
              material={materials.Dtla_Orbit_u1_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v2_0.geometry}
              material={materials.Dtla_Orbit_u2_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v2_0_1.geometry}
              material={materials.Dtla_Orbit_u2_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v2_0_2.geometry}
              material={materials.Dtla_Orbit_u2_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v2_0_3.geometry}
              material={materials.Dtla_Orbit_u2_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v1_0.geometry}
              material={materials.Dtla_Orbit_u2_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v1_0_1.geometry}
              material={materials.Dtla_Orbit_u2_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v1_0_2.geometry}
              material={materials.Dtla_Orbit_u2_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v1_0_3.geometry}
              material={materials.Dtla_Orbit_u2_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v2_0.geometry}
              material={materials.Dtla_Orbit_u1_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v2_0_1.geometry}
              material={materials.Dtla_Orbit_u1_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v2_0_2.geometry}
              material={materials.Dtla_Orbit_u1_v2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v2_0_3.geometry}
              material={materials.Dtla_Orbit_u1_v2}
            />
          </a.group>
        </a.group>
        {children}
      </a.group>
    </a.group>
  )
}

export default LACity