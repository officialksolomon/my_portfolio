import React from 'react'
import { Col, Button } from 'react-bootstrap'
import SocialLinks from '../Social'

function HomeBody ({ change }) {
  return (
    <>
      <Col xs={12} md={change ? 6 : 8}
        className={`home-body-wrapper d-flex flex-column justify-content-center mb-0 ${change ? ' align-items-start' : ' align-items-center'}`}>
        <p className='text-white text-center  mb-0 animate__animated animate__fadeInDown'>Hello! I am </p>
        <h1 className={`name h1 text-warning  ${change ? 'text-right' : 'text-center'} fw-bolder m-0 animate__animated animate__fadeInUp`}>SOLOMON UCHE</h1>
        <h1 id='surname' className={`name h1  text-warning fw-bolder ${change ? 'text-right' : 'text-center'} fw-bolder m-0 animate__animated animate__fadeInUp`}>IWUOMA.</h1>
        <hr className='w-50 text-white-50 m-0' />
        <p className={`p  text-white ${change ? 'text-right' : 'text-center px-5'} fw-light  animate__animated animate__fadeInUp`}>
          I am a Fullstack Developer skilled with knowledge on UI/UX designs. <br />
          I am a detail oriented individual.
        </p>


        <Button variant="warning" className="rounded-0   animate__animated animate__fadeInUp" onClick={() => console.log("Primary")}>
          <a href="#skills" className='text-decoration-none text-black'> My Work</a>
        </Button>
        {/* <Button variant="outline-warning" className="rounded-0  animate__animated animate__fadeInUp" >
            <a href="#skills" className='text-decoration-none text-white'> My Skills</a>
          </Button> */}

        {change && <SocialLinks iconSize={25} />}
      </Col>
    </>
  )
}

export default HomeBody