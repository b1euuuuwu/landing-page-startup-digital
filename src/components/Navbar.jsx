import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai' 

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-[#00FFFF]'>SHIPMATE.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>Home</li>
          <li className='p-4 cursor-pointer'>Company</li>
          <li className='p-4 cursor-pointer'>Resources</li>
          <li className='p-4 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer'>Contact</li>
        </ul>

        {/* <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} className='cursor-pointer'/> : <AiOutlineMenu size={20} className='cursor-pointer'/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h- full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%] 500'}>
          <h1 className='w-full text-3xl font-bold text-[#00FFFF] m-8'>SHIPMATE.</h1>

          <ul className= 'uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div> */}
    </div>
  )
}

export default Navbar