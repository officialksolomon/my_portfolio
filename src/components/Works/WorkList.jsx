import React from 'react'
import WorkItem from './WorkItem'
import work3 from '../../assets/images/my-work/work3.png'
import work7 from '../../assets/images/my-work/work7.png'
import work8 from '../../assets/images/my-work/work8.png'
import work6 from '../../assets/images/my-work/work6.png'
import work1 from '../../assets/images/my-work/work1.png'
import work9 from '../../assets/images/my-work/work9-01.png'



function WorkList () {
  return (
    <>
      <WorkItem name={'InfoR'} img={work3}
        description={"InfoR is a modern blog API featuring top and well articulated articles. A portfolio project."}
        sourceLink={'https://github.com/officialksolomon/my_blog'} liveLink={'https://my-blog-sigma-topaz.vercel.app/'} />
      
      <WorkItem name={'Safe Surf'} img={work7}
        description={" Safe Surf is s firefox extension that automatically closes every active tab containing explicit sexual contents. This works by continuously searching for vulgar word from a list of vulgar words popularly associated with explicit sexual contents."}
        sourceLink={'https://github.com/officialksolomon/safe_surf'} liveLink={'https://addons.mozilla.org/en-US/firefox/addon/safe-surf/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search'} />

      <WorkItem name={'Lazer'} img={work8}
        description={"Lazer P2P marketplace for trading their digital asset such as  Crypto assets with vendors."}
        sourceLink={'https://github.com/ulims/lazer'} liveLink={'https://lazerulims.herokuapp.com/'} />
      
      <WorkItem name={'DashBoard'} img={work9}
        description={"A simple Mobile Dashboard made with react."}
        sourceLink={'https://github.com/officialksolomon/mobile-dashboard_react'} liveLink={'https://mobile-dashboard-react.vercel.app/'} />

      <WorkItem name={'JSBC'} img={work6}
        description={"JSBC is a Forex Company Website know for helping investors earn money from the forex market through account management coaching etc...."}
        sourceLink={'https://github.com/officialksolomon/jsbc'} liveLink={'https://www.jsbc.com.ng/'} />
      
      <WorkItem name={'Phone Book'} img={work1}
        description={"Modern and responsive Phonebook which lets you  store, search, edit , delete  and add contact on the web"}
        sourceLink={'https://github.com/officialksolomon/phone-book'} liveLink={'https://phone-book-kappa.vercel.app/'} />
    </>
  )
}

export default WorkList