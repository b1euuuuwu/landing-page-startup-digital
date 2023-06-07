import React from 'react'
import Laptop from '../assets/laptop.jpeg'
import Logo from '../assets/logo-2.jpeg'

const Analytics = () => {
  return (
    <div className='w-full bg-[white] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Logo} alt='/'></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#23395d] font-bold'>SHIPMATE.</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Handle your logistics with our real-time tracking</h1>
                <p className='text-left'>
                Unlock the power of seamless logistic solution with shipmate.
Imagine you can track your logistic in real-time tracking with customizable support tailored to your business. With shipmate you can benefits from expert support all while optimizing costs and enhancing efficiency.
Take your first step towards a seamless logistical experience, partner with shipmate and briing possibilites to your business, Don't miss out on this opportunity to fast-track your success!
                </p>
                <button className='bg-[#23395d] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300'>Get Started</button>
            </div>
        </div>
    </div>
    
  )
}

export default Analytics