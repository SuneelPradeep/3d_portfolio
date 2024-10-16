import React from 'react'

const Alert = ({text,type}) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center text-center'>
      <div role='alert' className={`${type==='danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100  justify-center items-center lg:inline-flex lg:rounded-full rounded-md leading-none text-center `}>
      <p className={`${type==='danger' ? 'bg-red-500' : 'bg-blue-500'} uppercase rounded-full flex px-2 py-1 justify-center items-center font-semibold mr-3 text-xs w-20 text-center` }>{type==='danger' ? "Failed" : "Success"}</p>
      <p className='mr-2 text-left text-xs lg:text-lg'> {text}</p>
        </div>
    </div>
  )
}

export default Alert
