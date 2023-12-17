import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function AppNavbar() {
  const cart=useSelector(state=>state.cart)
  return (
    <div>
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary" bg='light'>
        <Container>
          <Link to="/" className='navbar-brand'>cart app</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Prodacts</Link>
              <Link to="cart" className='nav-link'>cart - {cart.length}</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
