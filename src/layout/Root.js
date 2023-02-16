import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import { Container, Row, Col } from 'react-bootstrap';


const Root = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={3}>
                        <LeftSidebar />
                    </Col>
                    <Col md={6}>
                        <Outlet />
                    </Col>
                    <Col md={3}>
                        <RightSidebar />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Root
