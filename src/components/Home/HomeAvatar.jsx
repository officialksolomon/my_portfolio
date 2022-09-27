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
      <Col xs={12} md={change ? 6 : 8} className={`d-flex ${change ? 'justify-content-end ' : 'justify-content-center'} align-items-center p-4`}>
        <img onMouseEnter={(event) => changeImage(event)} onMouseLeave={(event) => changeImage(event)} src={src} className="avatar rounded-circle animate__animated animate__zoomIn" width={change ? 350 : 200} height={change ? 350 : 200} alt="Avatar" />
      </Col>
    </>
  )
}

export default HomeAvatar