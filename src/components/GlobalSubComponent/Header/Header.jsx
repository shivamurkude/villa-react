import React from 'react'
import "./Header.css"



const Header = ({title, des}) => {
  return (
    <div className=' bg p-[2rem] h-[20rem] m-auto flex flex-col justify-center items-center'>
      <div className='bg-white py-[1rem] px-[2rem] text-black'>
        <h1 className='font-serif font-thin'>{title}</h1>
      </div>
      <div className='p-[2rem]'>
        <h1 className='text-5xl font-bold font-serif text-white'>{des}</h1>
      </div>
    </div>
  )
}

export default Header