import React, { useState } from 'react'

const Header = ({onSearch}) => {

  const [input, setInput] = useState("") ;

  /* Search when press enter */

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(input);
    }
  };

  return (
    <div className='p-4 bg-black flex items-center justify-between opacity-75'>
      <div className='flex items-center space-x-4'>
        <h1 className='text-[30px] uppercase font-bold text-blue-400'>Netflex</h1>
        <nav className='flex items-center space-x-4'>
          <a href="#" className='text-white'>Trang chủ</a>
          <a href="#" className='text-white'>Giới thiệu</a>
          <a href="#" className='text-white'>Liên hệ</a>
        </nav>
      </div>
      <div className='flex items-center space-x-4'>
        <input type="text" onKeyPress={handleKeyPress} onChange={(e) => setInput(e.target.value)} value={input} placeholder='Nhập tên phim...' className='outline-none p-2 text-gray-950' />
        <button onClick={()=>onSearch(input)} className='p-2 text-white bg-blue-500 rounded-md'>Tìm kiếm</button>
      </div>
    </div>
  )
}

export default Header
