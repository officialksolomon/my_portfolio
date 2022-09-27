import React from 'react'
import { Col } from 'react-bootstrap'
import { FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function SkillItem ({ icon, name }) {
  return (
    <Col xs={12} md={4} className=' '>
      <div id='skill-item' className='p-4 d-flex justify-content-start align-items-center rounded'>
        <IconContext.Provider value={{ color: "white", size: 50, className: "global-class-name" }}>
          {icon}
          <p className='text-white m-3' >{name}</p>
        </IconContext.Provider>
      </div >
    </Col >
  )
}

export default SkillItem