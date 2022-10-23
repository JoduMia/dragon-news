import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container, Image } from 'react-bootstrap';
import LeftSideBar from './LeftSideBar';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const {user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut()
    .then(()=> {
      console.log('User got signed out');
    }).catch(error => {
      console.log(`${error.message} occured`);
    })
  };


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" className='mb-5'>
      <Container>
        <Navbar.Brand><Link to='/' className='text-primary text-decoration-none'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
              {
                !user && <><Link to={'/login'} className='text-white text-decoration-none'>Login</Link>
                <Link to={'/register'} className='text-white text-decoration-none'>Register</Link></>
              }
          </Nav>
          <Nav className='align-items-center'>
            <h6 className='m-0 pe-3 text-uppercase text-white'>{user?.displayName}</h6>

            <Link to={'/updateprofile'}>
            {
              user?.photoURL ? <Image src={user.photoURL} style={{height: '40px', width: '40px'}} roundedCircle /> : <FaUserAlt to='/updateprofile' className='text-white' />
            }
            </Link>
            {
              user && <Button onClick={signOut} variant='outline-dark' className='text-white'>LogOut</Button>
            }
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