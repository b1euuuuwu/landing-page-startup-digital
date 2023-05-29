import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Free</h2>
            <p className='text-4xl text-center font-bold'>$0</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>Real-time Tracking</p>
              <p className='py-2 border-b mx-8'>1 Granted User</p>
              <p className='py-2 border-b mx-8'>Send up to 10 packages per week</p>
              <p className='py-2 border-b mx-8 mt-1'>No Service Recommendation System</p>
              <p className='py-2 border-b mx-8 mt-1'> No Designated Support Manager</p>
            </div>
            <button className='bg-[#00FFFF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Pro</h2>
            <p className='text-4xl text-center font-bold'>$30</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>Real-Time Tracking</p>
              <p className='py-2 border-b mx-8'>10 Granted Users</p>
              <p className='py-2 border-b mx-8'>Send up to 20 packages per week</p>
              <p className='py-2 border-b mx-8 mt-1'>Service Recommendation System</p>
              <p className='py-2 border-b mx-8 mt-1'> No Designated Support Manager</p>
              
          </div>
          <button className='bg-[#00FFFF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
            <p className='text-4xl text-center font-bold'>$100</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>Real-Time Tracking</p>
              <p className='py-2 border-b mx-8'>25 Granted Users</p>
              <p className='py-2 border-b mx-8'>Send up to 75 packages per week</p>
              <p className='py-2 border-b mx-8 mt-1'>Service Recommendation System</p>
              <p className='py-2 border-b mx-8 mt-1'>Designated Support Manager</p>

          </div>
          <button className='bg-[#00FFFF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Cards