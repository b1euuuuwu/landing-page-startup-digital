import React from 'react'
import Laptop from '../assets/laptop.jpeg'

const Analytics = () => {
  return (
    <div className='w-full bg-[white] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00FFFF] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Track your logistics with our real-time tracking</h1>
                <p className='text-left'>
                Utilizing data driven model to help you grow
                lets you have complete control and visibility over your shipments, optimizing routes for maximum efficiency, and reducing costs while ensuring on-time deliveries. 
                Take the first step towards a brighter logistics future with shhipmate
                </p>
                <button className='bg-[#00FFFF] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300'>Get Started</button>
            </div>
        </div>
    </div>
    
  )
}

export default Analytics