import React from 'react'

const CustomButton  = ({type,text,onClick,disabled}) => {
  return (
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl"
  >
    <span className="w-[12.5rem] lg:w-[16.5rem] items-center h-full bg-gradient-to-br from-[#00c6ff] to-[#0072ff]
     group-hover:from-[#00c6ff] group-hover:via-[#ff5478]  group-hover:to-[#0072ff] absolute rounded-xl" />  
     {/* group-hover:via-[#ff5478] group-hover:via-[#241571]*/}
    <span className="relative w-48 lg:w-64 py-3 px-8 transition-all ease-out dark:bg-gray-900  bg-white dark:text-white text-black rounded-xl group-hover:bg-opacity-0">
       <span className="relative text-wrap">{text}</span> 
    </span> 
    {/* <span className="w-[12.5rem] lg:w-[16.5rem] items-center h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
     group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute rounded-xl" />
    <span className="relative w-48 lg:w-64 py-3 px-8 transition-all ease-out dark:bg-gray-900  bg-white dark:text-white text-black rounded-xl group-hover:bg-opacity-0">
       <span className="relative text-wrap">{text}</span> 
    </span> */}

  </button>
  )
}

export default CustomButton