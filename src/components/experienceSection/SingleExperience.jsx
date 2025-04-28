import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const SingleExperience = ({experience}) => {
  return (
    <motion.div 
     variants={fadeIn('right', 0.2)}
     initial='hidden'
     animate='show'
     viewport={{once: false, amount: 0}}
     className='md:h-[300px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan text-2xl'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.year}</p>
      <ul className='text-white list-disc mt-4 pl-4'>{experience.responsibilities.map((item, index) => {
        return <li key={index}>{item}</li>
      })}</ul>
    </motion.div>
  )
}

export default SingleExperience
