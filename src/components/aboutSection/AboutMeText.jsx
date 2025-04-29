import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h1 className='text-6xl text-cyan mb-10'>About Me</h1>
      <p className='text-white'>Hi, I'm Daniel Mailu — a passionate Full Stack Developer with a strong foundation in building scalable, user-centric web applications from the ground up. With experience across both front-end and back-end technologies, I specialize in turning complex problems into clean, efficient solutions.
      Whether it's crafting seamless user interfaces or designing robust APIs, I enjoy working across the entire development stack. I’m driven by curiosity, clean code, and the challenge of building tech that makes a real impact.
      I'm always exploring new tools, frameworks, and best practices to stay ahead in this ever-evolving field. Let's build something awesome together.</p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  )
}

export default AboutMeText
