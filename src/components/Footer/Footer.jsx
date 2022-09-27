import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCopyright } from 'react-icons/fa'
import './Footer.css'
function Footer () {
  return (
    <Row >
      <Col xs={12} className='d-flex justify-content-center align-items-center'>
        <p className='text-white fw-light copyright-text'>Solomon Uche Iwuoma <FaCopyright /> 2022</p></Col>
    </Row>
  )
}

export default Footer