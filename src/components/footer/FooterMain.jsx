import React from 'react'


const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
const FooterMain = () => {
  return (
    <div className='px-4'>
      <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
      <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-lightGrey'>Daniel Mailu</p>
        <ul className='flex gap-4 text-lightGrey text-xl'>
            {links.map((links, index) => {
                return <li key={index}><a className='hover:text-white transition-all duration-500 cursor-pointer' href={`#${links.section}`}>{links.link}</a></li>
            })}
        </ul>
      </div>
      <div className='flex justify-center mt-4 text-white text-xl max-w-[1200px] mx-auto mb-12'>
        <p>&copy; 2025 Daniel Mailu. All rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterMain;
