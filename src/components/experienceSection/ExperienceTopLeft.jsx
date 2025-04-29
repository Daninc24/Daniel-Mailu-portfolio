import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px] text-white'> {/* Added text-white */}
      <p className='text-orange font-bold text-3xl uppercase font-special text-center'>Since 2023</p> {/* Added text-lg */}
      <div className='flex items-center justify-center gap-4'> {/* Added flex and items-center */}
        <ExperienceInfo number='2' text='Years'/>
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExperienceInfo number='10' text='Websites'/>
      </div>
      <p className='text-lg text-center'>2 years Experience building dynamic web applications both front-end and back-end.</p> {/* Added text-lg */}
    </div>
  )
}

export default ExperienceTopLeft
