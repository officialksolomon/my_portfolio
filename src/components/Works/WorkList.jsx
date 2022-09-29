import React from 'react'
import WorkItem from './WorkItem'
import work3 from '../../assets/images/my-work/work3.png'

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa voluptatum fuga nostrum aliquam, ex beatae deleniti at recusandae consectetur esse, tenetur fugit a optio alias explicabo! Aliquid soluta eligendi fugiat.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Architecto a alias veniam corrupti reprehenderit.Autem, suscipit! Sapiente pariatur quaerat dolorum, voluptates, saepe, alias voluptatum nulla similique amet obcaecati minima ad ?Lorem ipsum, dolor sit amet consectetur adipisicing elit.Provident quas, voluptatibus, esse dolores maxime, doloribus fugit ea deserunt laborum expedita assumenda magnam nesciunt aut officiis sed consequatur illo odit quo.'

function WorkList () {
  return (
    <>
      <WorkItem name={'InfoR'} img={work3} description={description} sourceLink={'https://github.com/officialksolomon/my_blog'} liveLink={'https://my-blog-sigma-topaz.vercel.app/'} />
    </>
  )
}

export default WorkList