import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Footer from './Footer';
function Burger() {
  return (
   <>
   <NavBar/>
   <div className='Pasta'>
       
         <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Spicy Pasta</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 189</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Cutting Pasta</Card.Title>
        <Card.Text>
        <h3>&#8377;99</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>White Souce Pasta</Card.Title>
        <Card.Text>
        <h3>&#8377; 149</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'> Extra White Souce Pasta</Card.Title>
        <Card.Text>
        <h3>&#8377; 199</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
    <Footer/>

   </>
    
  )
}

export default Burger