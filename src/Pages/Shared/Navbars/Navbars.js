import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to={'/'}>Course World</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to={'/home'}>Home</Link></Nav.Link>
                            <Nav.Link><Link to={'/course'}>Course</Link></Nav.Link>
                            <Nav.Link><Link to={'/cetagory'}>Cetagory</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;