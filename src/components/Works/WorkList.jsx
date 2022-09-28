import React from 'react'
import { Col } from 'react-bootstrap'
import work3 from '../../assets/images/my-work/work3.png'

// { img, name, sourceLink, liveLink }
function WorkItem () {
  return (
    <>
      <Col xs={12} sm={6} md={4} className=''>
        <div className='rounded d-flex justify-content-center align-items-center border border-light border-opacity-25 position-relative'>
          <img src={work3} alt="work" className='' />
          <span className='postion-absolute start-0 end-0'>InfoR</span>
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