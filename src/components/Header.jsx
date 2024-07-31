import React from 'react'

const Header = () => {
  return (
    <div className='p-4 bg-black flex items-center justify-between opacity-85'>
      <div className='flex items-center space-x-4'>
        <h1 className='text-[35px] uppercase font-bold text-blue-400'>Netflex</h1>
        <nav className='flex items-center space-x-4'>
          <a href="" className='text-white'>Home</a>
          <a href="" className='text-white'>About</a>
          <a href="" className='text-white'>Contact</a>
        </nav>
      </div>
      <div className='flex items-center space-x-4'>
        <input type="text" placeholder='Search...' className='outline-none p-4 text-gray-950' />
        <button className='p-2 text-white bg-blue-500'>Search</button>
      </div>
    </div>
  )
}

export default Header
