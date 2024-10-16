import React from 'react'
import darkmodepic from '../assets/icons/darkmode.png'
import lightmodepic from '../assets/icons/lightmode.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from '../slice/HomeSlice'

const ThemeMode = () => {
    const darkMode = useSelector((state)=> state?.darkMode)
    const dispatch = useDispatch()
  return (
   
       <div className='bottom-1 left-2 absolute'>
        <img src={!darkMode ? darkmodepic : lightmodepic} alt='Dark Mode' className='w-10 h-10 cursor-pointer' onClick={() => dispatch(changeMode())} />
      </div>
    
  )
}

export default ThemeMode
