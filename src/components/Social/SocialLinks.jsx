import React from 'react'
import { FaBeer, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconContext } from 'react-icons'

function SocialLinks ({iconSize}) {
  return (
    <div className='animate__animated animate__fadeInUp m-0'>
      <hr className='w-100 text-white-50' />
      <IconContext.Provider value={{ color: "white", size: iconSize, className: "global-class-name" }}>
        <a href="https://www.linkedin.com/in/solomon-uche-071194130/" target='_blank' className='m-2'><FaLinkedin /></a>
        <a href="https://twitter.com/solomonuche42" target='_blank' className='m-2 m-sm-3 my-2'><FaTwitter /></a>
        <a href="https://github.com/officialksolomon" target='_blank' className='m-2 m-sm-3 my-2'><FaGithub /></a>
        <a href="https://web.facebook.com/uche.iwuoma" target='_blank' className='m-2 m-sm-3 my-2'><FaFacebook /></a>
        <a href="mailto:solomonuche42@gmail.com" target='_blank' className='m-2'><MdEmail /></a>

      </IconContext.Provider>
    </div>
  )
}

export default SocialLinks