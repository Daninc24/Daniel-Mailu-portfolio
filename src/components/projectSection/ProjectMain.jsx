import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';


const project = [{
    name:'InterDev',
    year:'2024',
    align:'right',
    image:'/images/website-img-1.jpg',
    link: 'https://daninc24.github.io/InterDevs/'
},
{
    name:'MoversExpress',
    year:'2024',
    align:'left',
    image:'/images/website-img-2.webp',
    link: 'https://daninc24.github.io/movers/'
},
{
    name:'TinDog',
    year:'2024',
    align:'right',
    image:'/images/website-img-3.jpg',
    link: 'https://daninc24.github.io/css_bootstrap/'
},
{
    name:'PLP Hackathon',
    year:'2025',
    align:'left',
    image:'/images/website-img-4.jpg',
    link: 'https://daninc24.github.io/myportfolio/'
}

]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      animate='show'
      viewport={{once: false, amount: 0}}
      >
      <ProjectText/>

      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mt-12 mx-auto'>
        {project.map((project, index) => {
            return <SingleProject key={index} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link}/>
        })}
      </div>
    </div>
  )
}

export default ProjectMain;