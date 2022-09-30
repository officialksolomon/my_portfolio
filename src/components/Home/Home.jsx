import React, { useEffect, useState } from 'react'
import './Home.css'
import { Row, Col, Button } from 'react-bootstrap'
import HomeAvatar from './HomeAvatar'
import HomeBody from './HomeBody'
import { FaSmileWink } from 'react-icons/fa'

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
      <Row id='home' className='g-4 justify-content-center align-item-center'>
        <HomeAvatar change={change} />
        <HomeBody change={change} />
        <div className="p-0 m-0 d-flex justify-content-center align-items-center">
          <Button variant='outline-light' className="layout-btn m-5 p-2 px-3 d-none d-sm-inline" onClick={changeLayout}> Want a different layout? Change Layout! <FaSmileWink size={20} /> </Button>
        </div>
      </Row>
    </>
  )
}


export default Home