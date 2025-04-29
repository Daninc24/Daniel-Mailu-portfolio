import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperience from './AllExperience'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4 relative lg:mt-[250px] md:mt-[100px] sm:mt-[50px]'>
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          viewport={{once: false, amount: 0.7}}
        >
        <ExperienceText/>
        </motion.div>
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          viewport={{once: false, amount: 0}}
        >

        <ExperienceTop/>
        </motion.div>
        <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
        <AllExperience/>
      
    </div>
  )
}

export default ExperienceMain
