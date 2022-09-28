import React from 'react'
import { Col } from 'react-bootstrap'
import work3 from '../../assets/images/my-work/work3.png'

// { img, name, sourceLink, liveLink }
function WorkItem () {
  return (
    <>
      <Col xs={12} sm={6} md={4} className=''>
        <div className='rounded d-flex justify-content-center align-items-center border border-light border-opacity-25'>
          <img src={work3} alt="work" className='w-100' />
        </div>
      </Col>
    </>
  )
}


function WorkList () {
  return (
    <>
      <WorkItem />
    </>
  )
}

export default WorkList