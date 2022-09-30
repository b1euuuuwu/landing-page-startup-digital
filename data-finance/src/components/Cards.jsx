import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-4xl text-center font-bold'>$149</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>500 GB Storage</p>
              <p className='py-2 border-b mx-8'>1 Granted User</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Free Trial</button>
          </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Dual User</h2>
            <p className='text-4xl text-center font-bold'>$199</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>1 TB Storage</p>
              <p className='py-2 border-b mx-8'>2 Granted Users</p>
              <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Free Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Multi User</h2>
            <p className='text-4xl text-center font-bold'>$249</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>2 TB Storage</p>
              <p className='py-2 border-b mx-8'>Up to 10 Users</p>
              <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Free Trial</button>
          </div>
        </div>
    </div>
  )
}

export default Cards