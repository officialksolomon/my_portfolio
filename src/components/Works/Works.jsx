import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Works () {
  return (
    <>
      <Row id="works" className='p-5 g-5 mt-5'>
        <Col xs={12}>
          <h5 className='text-warning'>My Works</h5>
          <hr className='w-100 text-white-50' />
        </Col>
        <Col xs={12}>
          <h3 className='text-warning'>Coming Soon...</h3>
        </Col>

      </Row>
    </>
  )
}

export default Works