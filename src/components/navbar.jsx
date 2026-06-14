import { useState } from 'react'

function Navbar() {


  return (
    <div className='navbar'>
      <a className='flex-[5] flex justify-center text-2xl font-bold logo' href='#'><span className='text-blue-500'>SKE</span><span className='text-lime-500'> 23</span></a>
      <a className='flex flex-1 items-center justify-center ' href='#'>About</a>
      <a className='flex flex-1 items-center justify-center ' href='#'>Community</a>
      <a className='flex flex-1 items-center justify-center ' href='#'>Gallery</a>
      <a className='flex flex-1 items-start justify-center ' href='#'>Projects</a>
      <p className='flex flex-2 items-start justify-center '> </p>

    </div>
  )
}

export default Navbar
