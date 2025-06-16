import React from 'react'
import { PiHexagon } from "react-icons/pi";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';
import Dan from '../../assets/dan3.png'

const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate='show'
          viewport={{once: false, amount: 0}}
    className='h-full flex items-center justify-center'>
            <img src={ Dan } alt="Daniel Mailu Picture" className='max-h-[450px] w-auto' />
            <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
                <PiHexagon className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md  animate-[spin_20s_linear_infinite]' />
            </div>
    </motion.div>
  )
}

export default HeroPic
