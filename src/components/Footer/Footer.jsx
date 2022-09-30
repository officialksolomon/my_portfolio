import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCopyright } from 'react-icons/fa'
import './Footer.css'
function Footer () {
  return (
    <Row className='p-4 py-0 g-3 ' >
      <Col xs={12} className='d-flex justify-content-center align-items-center p-4 p-md-5 '>
        <p className='text-white fw-light copyright-text'>Solomon Uche Iwuoma <FaCopyright /> 2022</p></Col>
    </Row>
  )
}

export default Footer