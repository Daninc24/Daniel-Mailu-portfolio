import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://www.linkedin.com/in/daniel-ngila-445b6b187/' Icon={FaLinkedinIn}/>
        <SingleContactSocial link='https://github.com/Daninc24' Icon={LuGithub}/>
        <SingleContactSocial link='https://www.instagram.com/deedaniel001/' Icon={FaInstagram}/>
        <SingleContactSocial link='https://www.facebook.com/profile.php?id=100082583532922' Icon={FaFacebookSquare}/>
    </div>
  )
}

export default ContactSocial
