import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards() {
  return (
    <div className='cards'>
    <Card className='m-5' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Hawaiian Chicken PizzaSmoked</Card.Title>
        <Card.Text>
          <label htmlFor="selct" className='m-1'>Size</label>
         <select>
          <option value="Regular">Regular</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
         </select>
        <Button variant="primary" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-5' style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Hawaiian Chicken PizzaSmoked</Card.Title>
        <Card.Text>
          <label htmlFor="selct" className='m-1'>Size</label>
         <select>
          <option value="Regular">Regular</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
         </select>
        <Button variant="primary" className='m-2'>Add To Cart</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    

    </div>
  )
}

export default Cards