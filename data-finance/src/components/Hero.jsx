import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>
                GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold med:py-6'>Growth with data.</h1>
            <div className='flex justify-center items-center pt-4'>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold pl-4'>
                    Fast, flexible financing for 
                </p>
                <Typed 
                className='md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
                strings={[
                    'BTC',
                    'BTB',
                    'SASS'
                ]}
                typeSpeed={150}
                backSpeed={170}
                loop>
                </Typed>
            </div>
            <p className='md:text-2xl sm:text-xl font-bold text-gray-500 md:pl-6'>
                Monitor your data analytics to increase revenue for BTC, BTB, and SASS platforms
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#000300]'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero