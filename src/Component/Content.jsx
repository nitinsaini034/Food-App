import React from 'react'
import Carousels from './Carousels'
import Carousels2 from './Carousels2'
import Footer from './Footer'
// import { Button } from 'react-router-dom'
function Content() {
  return (
    <>
      <div className="content1">
        <h1>BEST QUALITY<br />FOOD</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident <br /> laborum, recusandae delectus corrupti reprehenderit error distinctio eligendi <br /> qui consequuntur officia.</p>
        <br />
        <button className='book'>BOOK A TABLE</button>
      </div>
      <div className='content2'>
        <h1><img src='plant-leaf.png'/>OUR SPECIAL DISHES</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore <br /> quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio <br /> fugit in sint natus deserunt hic eaque dolores.</p>
      </div>
      <Carousels/>
      <div className='content3'>
       <h1>DOUBLE CHEEZ <br /> PIZZA <br /> 30% OFF</h1>
      </div>
      <div className='content2'>
        <h1><img src='plant-leaf.png'/>OUR BEST CHEF</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore <br /> quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio <br /> fugit in sint natus deserunt hic eaque dolores.</p>
      </div>
      <Carousels2/>
      <Footer/>
    </>
  )
}

export default Content