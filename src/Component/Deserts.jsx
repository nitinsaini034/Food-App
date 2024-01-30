import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Footer from './Footer';
function Burger() {
  return (
   <>
   <NavBar/>
   <div className='Deserts'>       
         <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://i.pinimg.com/originals/0d/4d/6d/0d4d6dcc489bfe7a6779a980fb2e42a2.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Eggless Cake</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 189</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/11/28114155/dodha.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Milk Cake</Card.Title>
        <Card.Text>
        <h3>&#8377; 299</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Gulab Jamun</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://assets.limetray.com/assets/image_manager/uploads/8180/omsweets-ss-slide-2.jpg" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Gunjiya</Card.Title>
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