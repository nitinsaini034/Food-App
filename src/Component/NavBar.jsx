import React from 'react'
import '/src/App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="container">
        <Navbar.Brand to="/" className='logo'><img src='VeggieDaddy.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="NavLink">
            <NavLink to="/" className="navlink">Home</NavLink>
            <NavLink className="navlink Dropdown">
            <Dropdown className='Dropdown' >
                <Dropdown.Toggle  variant="success" id="dropdown-basic">MENU</Dropdown.Toggle>
                <Dropdown.Menu className='link' >
                    <Dropdown.Item><Link className='Link' to="/Burger">BURGER</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='Link' to="/Pizza">PIZZA</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='Link' to="/Pasta">PASTA</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='Link' to="/Steaks">STEAKS</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='Link' to="/Salads">SALADS</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='Link' to="/Deserts">DESERTS</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='Link' to="/Drinks">DRINKS</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>                      
            </NavLink>                                 
            <NavLink to="/" className="navlink">CHEF</NavLink>
            <NavLink to="/" className="navlink">GALLERY</NavLink>
            <NavLink to="/" className="navlink">CONTACT US</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar