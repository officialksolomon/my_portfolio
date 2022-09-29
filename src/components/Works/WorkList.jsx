import React from 'react'
import WorkItem from './WorkItem'
import work3 from '../../assets/images/my-work/work3.png'



function WorkList () {
  return (
    <>
      <WorkItem name={'InfoR'} img={work3} description={"InfoR is a modern blog API featuring top and well articulated articles."}
        sourceLink={'https://github.com/officialksolomon/my_blog'} liveLink={'https://my-blog-sigma-topaz.vercel.app/'} />
    </>
  )
}

export default WorkList