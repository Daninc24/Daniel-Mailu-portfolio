import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4 items-center justify-center'> {/* Added flexbox styling */}
      <ExperienceTopLeft/>
      <ExperienceTopMiddle/>
      <ExperienceTopRight/>
    </div>
  )
}
 
export default ExperienceTop
