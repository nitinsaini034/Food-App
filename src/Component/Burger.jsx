import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Footer from './Footer';
function Burger() {
  return (
   <>
   <NavBar/>
   <div className='Burger'>       
         <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://restfood.onlywebcoding.com.ua/images/product-8.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Spicy Burger</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 189</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://restfood.onlywebcoding.com.ua/images/product-5.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Veg Burger</Card.Title>
        <Card.Text>
        <h3>&#8377; 299</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://restfood.onlywebcoding.com.ua/images/product-3.png" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Chicken Patty Burger</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Hawaiian Cheez Burger</Card.Title>
        <Card.Text>
        <h3>&#8377; 299</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Cheez Burger</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/11/burger-melting-cheddar.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Double Patty Burger</Card.Title>
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