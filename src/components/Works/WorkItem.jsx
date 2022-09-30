import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import { FaEye, FaGithub } from 'react-icons/fa'


function WorkItem ({ img, name, description, sourceLink, liveLink }) {
  const [open, setOpen] = useState(false)
  // handles open and close effect on each workItem on hover.
  const handleOpen = (event) => {
    setOpen(!open)
  }
  return (
    <>
      <Col xs={12} sm={6} md={4} className='overflow-scroll '>
        <div onMouseEnter={(event) => handleOpen(event)} onMouseLeave={(event) => handleOpen(event)} className='rounded d-flex flex-column justify-content-center align-items-center position-relative p-2 rounded p-0 h-100 bg-white'>
          <span className='position-absolute start-0 top-50 opacity-75 p-2 px-4 text-white bg-black w-auto rounded-end'>{name}</span>
          <span className='position-absolute start-0  top-50  p-2 px-4 text-white w-auto rounded-end shadow'>{name}</span>
          <div className={`work-description position-absolute w-100 h-100 p-4  text-white overflow-none ${open ? '' : 'd-none'}`}>
            <p className=' h-75 w-100 overflow-scroll'>{description}</p>
            <div className='w-100 d-flex justify-content-start  align-items-center mt-2 w-100 border-top py-2'>
              <a name="" id="" class="btn btn-outline-light rounded " href={sourceLink} role="button">Source <FaGithub /> </a>
              <a name="" id="" class="btn btn-light  mx-4 rounded" href={liveLink} role="button">Demo <FaEye /> </a>
            </div>
          </div>
          <img src={img} alt="work" className='work-img img-fluid' />
        </div>
      </Col>
    </>
  )
}

export default WorkItem