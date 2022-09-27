import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import avatarImg from '../../assets/images/avatar-img.png'
import myImg from '../../assets/images/dp-1.png'


function HomeAvatar ({ change }) {
  const [src, setSrc] = useState(avatarImg)
  const changeImage = (event) => {
    event.type === 'mouseenter' ? setSrc(myImg) : setSrc(avatarImg)

  }
  return (
    <>
      <Col xs={12} md={change ? 6 : 8} className={`d-flex  ${change ? 'justify-content-end ' : 'justify-content-center'} align-items-center p-4`}>
        <div className='position-relative '>
          <img onMouseEnter={(event) => changeImage(event)} onMouseLeave={(event) => changeImage(event)} src={src} className="avatar rounded-circle animate__animated animate__zoomIn" width={change ? 350 : 200} height={change ? 350 : 200} alt="Avatar" />
          <span className=' avatar-span  position-absolute start-0 top-50 m-3 text-white text-center bg-black p-2 rounded opacity-75 '> Want to see Solomon? <br /> <span class="d-none d-sm-inline fw-bolder">Hover!</span> <span class=" d-sm-none fw-bolder">Click!</span></span>
        </div>
      </Col>
    </>
  )
}

export default HomeAvatar