// import { Canvas } from '@react-three/fiber'
// import React, { lazy, Suspense } from 'react'
// import Loader from '../components/Loader'
// import { Html, Preload } from '@react-three/drei'

// const Naruto = lazy(()=> import('../models/Naruto'))

// const LoadNaruto = ({darkMode}) => {
//   return (
//     // <Canvas camera={{position : [0,0,5],near : 0.1, far:1000}} >
//     <Html>
//       <div className='w-full h-screen relative'>  
//          <Suspense fallback={<Loader />}>
      
//       <ambientLight intensity={2} />
//       <Naruto currentAnimation="Hip Hop Dancing"/>
//       </Suspense>
//       <h1>{darkMode ? 'Loading MonsterVerse... ' : "Loading One Piece World... " }</h1>
//       </div>   
//       </Html>
//   )
// }

// export default LoadNaruto


// LoadNaruto.jsx
import React, { lazy, Suspense } from 'react';
import { Html } from '@react-three/drei';
import Loader from '../components/Loader';
// import Naruto from '../models/Naruto';
const Naruto = lazy(()=> import('../models/Naruto'))


const LoadNaruto = ({ darkMode }) => {
  return (
    <>
      {/* Display the Naruto model */}
      <Suspense fallback={<Loader />}>
      
      <ambientLight intensity={2} />
      <Naruto currentAnimation="Hip Hop Dancing"/>
      </Suspense>
      <Html center>
        <div className="w-full h-screen relative">
          <h1 className="whitespace-nowrap absolute bottom-5 left-0 right-0 flex font-semibold text-lg lg:text-3xl justify-center items-end">
            {darkMode ? 'Loading MonsterVerse...' : 'Loading One Piece World...'}
          </h1>
        </div>
      </Html>
    </>
  );
};

export default LoadNaruto;

