import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navbars = () => {
    return (
        <div className='text-dsgn'>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
                <Container className='outline-none '>
                    <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none' }}>Course World</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
                            <Nav.Link><Link to={'/course'} style={{ textDecoration: 'none' }}>Course</Link></Nav.Link>
                            <Nav.Link><Link to={'/cetagory'} style={{ textDecoration: 'none' }}>Cetagory</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >More deets</Nav.Link>
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