import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SocialLinks from "./SocialLinks"
function Social () {
  return (
    <Row id="socials" className='p-4 py-0 g-4  mt-4'>
      <Col xs={12} className="">
        <h5 className='text-warning mb-0'>Reach me @</h5>
      </Col>
      <SocialLinks iconSize={35}/>
    </Row>
  )
}

export default Social