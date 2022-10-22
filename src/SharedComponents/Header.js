import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import LeftSideBar from './LeftSideBar';

const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
          </Nav>

          <div className='d-block d-lg-none'>
            <LeftSideBar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header