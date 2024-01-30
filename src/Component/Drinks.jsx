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
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Orange Juice</Card.Title>
        <Card.Text  className='card-text'>
        <h3>&#8377; 100</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Mango Juice</Card.Title>
        <Card.Text>
        <h3>&#8377;150</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1541745038731-f1c2b5a1a49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Cocktail</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://plus.unsplash.com/premium_photo-1687354207716-b74e8c056def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Lime Soda</Card.Title>
        <Card.Text>
        <h3>&#8377;99</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5 burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1599419685838-28e405ea05b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxkcmlua3N8ZW58MHx8MHx8fDA%3D" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Beer</Card.Title>
        <Card.Text>
        <h3>&#8377; 249</h3>
        <Button variant="success" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5  burger-cards' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1599937577325-e38f27f010db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxkcmlua3N8ZW58MHx8MHx8fDA%3D" />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Milk Shake</Card.Title>
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