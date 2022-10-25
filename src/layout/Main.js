import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbars from '../Pages/Shared/Navbars/Navbars';

import Sidenav from '../Pages/Shared/Sidenav/Sidenav';



const Main = () => {
    return (
        <div>
            <Container>
                <Navbars></Navbars>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <Sidenav></Sidenav>
                    </Col>
                    <Col lg="9"><Outlet></Outlet></Col>
                    
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;