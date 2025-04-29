import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const experience = [
    {
        job: "FullStack Developer",
        company: "Freelance",
        year: "2023 to Present",
        responsibilities: ['Designing Systems', 'Creating system components', 'Testing Code before production', 'Debugging']
    },
    {
        job: "FullStack Developer",
        company: "Freelance",
        year: "2023 to Present",
        responsibilities: ['Designing Systems', 'Creating system components', 'Testing Code before production', 'Debugging']
    },
    {
        job: "FullStack Developer",
        company: "Freelance",
        year: "2023 to Present",
        responsibilities: ['Designing Systems', 'Creating system components', 'Testing Code before production', 'Debugging']
    }
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experience.map((experience, index) => {
        return (
            <>
             <SingleExperience key={index} experience={experience}/>
             <motion.div 
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                viewport={{once: false, amount: 0.7}}
              >
             {index < 2? (<FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>): ""}
             </motion.div>
            </>
        );
        
      })}
    </div>
  )
}

export default AllExperience;