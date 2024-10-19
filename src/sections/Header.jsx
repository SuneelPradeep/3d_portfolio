import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import PhotoWall from '../components/PhotoWall'
// import Ingredients from '../components/Ingredients'
import logo from '../assets/images/logo.png'
import Profiles from '../components/Profiles'
import { Loader } from '@react-three/drei'
import NormalLoader from '../components/NormalLoader'

const Header = () => {
    const width = useWindowDimensions()
  return (
    <React.Suspense fallback={<NormalLoader />}>
    <div id="header" className='h-full grid place-items-center place-content-top gap-4 my-4 '>
       
            <PhotoWall 
            // size={width > Breakpoints.sm ? 384 : 256} 
            size={(width?.width > 426) ? (width?.width)/3  : 200 || 256}
              />
        
         <img src={logo} width={550} height={140} alt='Suneel Pradeep'   />
         {/* <Ingredients />  */}
         <Profiles />
        </div>
        </React.Suspense>
  )
}

export default Header
