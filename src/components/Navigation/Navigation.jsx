import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { FaSmileWink } from 'react-icons/fa'
import './Navigation.css'

function Navigation () {
  return (
    <Navbar id='navigation' bg="none" expand="lg">
      <Container fluid className='px-md-5'>
        <Navbar.Brand href="#home" className="text-warning fw-bold p-3 "><span className='brand-span d-inline-block d-flex flex-column justify-content-center align-items-center p-2 rounded-circle text-center'>SU</span></Navbar.Brand>
        <Navbar.Toggle className="border-0 " aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto  w-100 d-flex justify-content-end ">
            <Nav.Link href="#skills" className="text-warning m-3 btn">SKILLS</Nav.Link>
            <Nav.Link href="#works" className="text-warning m-3 btn">WORKS</Nav.Link>
            <Nav.Link target={'_blank'} href="https://drive.google.com/file/d/1b1WvdHQgs8PpFJ-QbRznVyrbvmxgHui-/view?usp=sharing" className="text-warning m-3 btn">RESUME</Nav.Link>
            <Nav.Link href="#socials" className=" m-3 btn  btn-warning px-4 rounded-5">Talk to Me <FaSmileWink size={20} /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation