import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const skills= [
    {
    skill: "HTML",
    icon: FaHtml5,
},
{
    skill: "CSS",
    icon: FaCss3,
},
{
    skill: "JavaScript",
    icon: IoLogoJavascript
},
{
    skill: "React",
    icon: FaReact,
},
{
    skill: "Node.js",
    icon: FaNodeJs,
},
{
    skill: "Express.js",
    icon: SiExpress,
},
{
    skill: "MongoDB",
    icon:  DiMongodb ,
},
{
    skill:"Next.js",
    icon: RiNextjsFill,
},
{
    skill: "Python",
    icon: FaPython ,
},
{
    skill: "Git",
    icon: FaGit,
},
{
    skill: "GitHub",
    icon: FaGithub ,
}
]
const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 p-12 my-12'>
      {skills.map((item, index) => {
        return <motion.div 
        variants={fadeIn('up', `0.${index}`)}
        initial='hidden'
        animate='show'
        viewport={{ once: false, amount: 0.7 }}
        
        key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-orange'/>
            <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      })}
    </div>
  )
}

export default AllSkillsSm
