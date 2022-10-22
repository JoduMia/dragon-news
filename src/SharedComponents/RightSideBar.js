import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import CarouselBrand from './CarouselBrand';

const RightSideBar = () => {
  return (
    <div>
      <ButtonGroup vertical className='mb-5 w-full'>
        <Button variant='outline-primary' className='mb-2'><FcGoogle /><span className='ms-2'>Login with Google</span></Button>
        <Button variant='outline-dark'><BsGithub /><span className='ms-2'>Login with Github</span></Button>
      </ButtonGroup>

      <ListGroup>
        <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
        <ListGroup.Item><FaWhatsapp /> WhatsApp</ListGroup.Item>
        <ListGroup.Item><FaTwitch /> Twitch</ListGroup.Item>
        <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
    </ListGroup>

    <CarouselBrand />
    </div>
  )
}

export default RightSideBar