import React from 'react'
import Typed from 'react-typed' 

const Hero = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#23395d] font-bold p-2'>
            Anchored in Reliability, Soaring in Efficiency
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold med:py-6'>Welcome to Shipmate!</h1>
            <div className='flex justify-center items-center pt-4'>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold pl-4'>
                    We Improve
                </p>
                <Typed 
                className='md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
                strings={[
                    'Efficiency',
                    'Reliability'
                ]}
                typeSpeed={75}
                backSpeed={100}
                loop>
                </Typed>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold pl-4'>
                    in Logistic Services
                </p>
            </div>
            <p className='md:text-2xl sm:text-xl font-bold text-gray-500 md:pl-6 my-2'>
                Monitor your logistic service with customizable support tailored for your business
            </p>
            <button className='bg-[#23395d] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-white hover:scale-105 duration-300'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero