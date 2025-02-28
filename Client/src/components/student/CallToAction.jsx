import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      {/* CallToAction */}
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold '>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quis voluptates voluptas possimus sapiente enim vero! Nulla esse tempore ratione libero id, similique non. Harum ipsum sed perferendis itaque vitae amet debitis? Amet ut enim ad id, fuga voluptatum consequuntur autem.</p>
      <div className=' flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 '>Get Started</button>
        <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default CallToAction