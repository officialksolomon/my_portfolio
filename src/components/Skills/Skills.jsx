import React from 'react'
import './Skills.css'
import { Row, Col, CardGroup } from 'react-bootstrap'
import SkillList from './SkillList'




function Skills () {
  return (
    <>
      <Row id="skills" className='p-3 g-5 mt-5'>
        <Col xs={12}>
          <h5 className='text-warning'>Skills</h5>
          <hr className='w-100 text-white-50' />
        </Col>
        <SkillList />
        <Col xs={12} className='d-flex justify-content-end p-4 py-0 m-1' >
          <p className=' fst-italic p-0 m-0 text-warning'>& lots more...</p>
        </Col>
      </Row>
    </>
  )
}

export default Skills