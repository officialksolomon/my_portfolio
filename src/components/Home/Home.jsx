import React, { useEffect, useState } from 'react'
import './Home.css'
import { Row, Col, Button } from 'react-bootstrap'
import HomeAvatar from './HomeAvatar'
import HomeBody from './HomeBody'

function Home () {
  const [change, setChange] = useState(false)
  const changeLayout = () => {
    setChange(!change)
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setChange(true)
    }

  }, [])

  return (
    <>
      <Row className='g-4 justify-content-center align-item-center'>
        <HomeAvatar change={change} />
        <HomeBody change={change} />
        <Button variant='link' className="layout-btn text-white m-5 p-0 d-none d-md-block " onClick={changeLayout}> Want a different layout? Change Layout!</Button>
      </Row>
    </>
  )
}

export default Home