import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbars.css'

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
                        <Nav className="me-auto">
                            
                                <Nav.Link >Sing In</Nav.Link>
                                <Nav.Link >Sing Up</Nav.Link> 
                        </Nav>
                        <Nav>
                            
                           
                                       

                                            <div class="btn-container">
                                                <i class="fa fa-sun-o" aria-hidden="true"></i>
                                                <label class="switch btn-color-mode-switch">
                                                    <input type="checkbox" name="color_mode" id="color_mode" value="1"/>
                                                        <label for="color_mode" data-on="Dark" data-off="Light" class="btn-color-mode-switch-inner"></label>
                                                </label>
                                                <i class="fa fa-moon-o" aria-hidden="true"></i>
                            
                                            </div>

                                            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
                                            <script type="text/javascript" src="script.js"></script>
                                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;