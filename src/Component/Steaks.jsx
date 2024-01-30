import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Footer from './Footer';
function Burger() {
  return (
   <>
   <NavBar/>
   <div className='Steaks'>      
         <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Fresh Beef</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 489</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Fish</Card.Title>
        <Card.Text>
        <h3>&#8377; 299</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/8694617/pexels-photo-8694617.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Fresh Fish</Card.Title>
        <Card.Text>
        <h3>&#8377; 549</h3>
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