import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WorkList from './WorkList'
import './Works.css'


function Works () {
  return (
    <>
      <Row id="works" className='p-3 g-5 mt-5'>
        <Col xs={12}>
          <h5 className='text-warning'>My Works</h5>
          <hr className='w-100 text-white-50' />
        </Col>
        <WorkList />
        <Col xs={12}>
          <h5 className='text-white  fst-italic'>Adding more works soon....</h5>
        </Col>
      </Row>
    </>
  )
}

export default Works