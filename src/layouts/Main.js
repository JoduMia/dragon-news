import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../SharedComponents/Footer'
import Header from '../SharedComponents/Header'
import LeftSideBar from '../SharedComponents/LeftSideBar'
import RightSideBar from '../SharedComponents/RightSideBar'

const Main = () => {
  return (
    <div>
    <Header />
    <Container>
            <Row>
                <Col lg='2' className='d-none d-lg-block'>
                    <LeftSideBar />
                </Col>

                <Col lg='7'>
                    <Outlet />
                </Col>

                <Col lg='3'>
                    <RightSideBar />
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>

  )
}

export default Main