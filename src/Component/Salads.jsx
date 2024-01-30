import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Footer from './Footer';
function Burger() {
  return (
   <>
   <NavBar/>
   <div className='Salads'>
       
         <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Fresh Salads</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 189</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Veg Salads</Card.Title>
        <Card.Text>
        <h3>&#8377; 299</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Salads with Bens</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.pexels.com/photos/1833333/pexels-photo-1833333.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Cucumber Salads</Card.Title>
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