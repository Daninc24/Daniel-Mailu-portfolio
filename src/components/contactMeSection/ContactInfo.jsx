import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneOutgoing } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='danmailur8@gmail.com' Image={HiOutlineMail}/>
        <SingleInfo text='+254791991154' Image={FiPhoneOutgoing}/>
        <SingleInfo text='Nairobi,Kenya' Image={IoLocationOutline}/>
      
    </div>
  )
}

export default ContactInfo
