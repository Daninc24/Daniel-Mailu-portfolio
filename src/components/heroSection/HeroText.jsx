import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';




const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      viewport={{once: false, amount: 0}}
       className='lg:text-2xl sm:text-xl uppercase text-cyan'>Full Stack Web Developer</motion.h2>
      <motion.h1 
      variants={fadeIn('right', 0.4)}
      initial='hidden'
      animate='show'
      viewport={{once: false, amount: 0}}
      className='md:text-[2.5rem] lg:text-6xl sm:text-4xl font-special text-orange font-extrabold'>Daniel Mailu</motion.h1>
      <motion.p 
      variants={fadeIn('up', 0.6)}
      initial='hidden'
      animate='show'
      viewport={{once: false, amount: 0}}
      className='text-lg mt-4 text-white'>A passonate web developer <br />with 2years experience</motion.p>
    </div>
  )
}

export default HeroText
