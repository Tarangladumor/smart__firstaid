import React from 'react'
import Carousel from './Carousel'
import Content from './Content'
import Content1 from './Content1'
import Diseas from './Diseas'
import Footer from './Footer'
import Navbar from './Navbar'
import Content2 from './Content2'

export default function Main() {
  return (
    <div className='container'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div >
        <Diseas/>
      </div>
     <div><Content/></div>
     <div><Content1/></div>
   <div><Content2/></div>
   <div><Footer/></div>
    </div>
  )
}
