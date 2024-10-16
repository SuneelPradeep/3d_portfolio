import React from 'react'
import { NavLink } from 'react-router-dom'
// import icon2 from './'

const Navbar = () => {
  return (
    <header className='header '>
        {/* <NavLink to='/' className="w-10 cursor-pointer h-10 dark:border-2 border-white rounded-full shadow-md dark:bg-black bg-white items-center justify-center flex font-bold ">
        <p className='blue-gradient_text'> SP </p>
        </NavLink> */}
        <NavLink to='/' className="w-12 cursor-pointer h-12   items-center justify-center flex font-bold ">
        <img src="./icon.png" alt='logo'  />
        </NavLink> 
      
       <nav className='flex gap-7 font-medium text-lg'>
         {/* <NavLink to='/'> Home </NavLink> */}
         <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-400' :  'dark:text-white text-black-500'}> About </NavLink>
         <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-400' : 'dark:text-white text-black-500'}> Projects </NavLink>
         {/* <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-400' : 'text-black'}> Contact </NavLink> */}
       </nav>
    </header>
  )
}

export default Navbar
