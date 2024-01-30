import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Footer from './Footer';
function Burger() {
  return (
   <>
   <NavBar/>
   <div className='Pizza'>
       
         <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483614.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Topings Pizza</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 389</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483604.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Spicy</Card.Title>
        <Card.Text>
        <h3>&#8377; 199</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483603.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Tomato Pizza</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483618.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Onion Pizza</Card.Title>
        <Card.Text>
        <h3>&#8377; 299</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483626.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Tomato Pizza</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483627.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Cheez Pizza</Card.Title>
        <Card.Text>
            <h3>&#8377; 399</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483644.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Double Topings Pizza</Card.Title>
        <Card.Text>
            <h3>&#8377; 199</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card> 
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://wallpaper.dog/large/20483640.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Extra Cheez pizza</Card.Title>
        <Card.Text>
            <h3>&#8377; 299</h3>
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