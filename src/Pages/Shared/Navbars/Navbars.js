import React from 'react';
import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './Navbars.css'

const Navbars = () => {
    
    const {User,LogOut}=useContext(AuthContext)
    const HandleLogout = () => {
        LogOut()
            .then(() => {
                alert("Sign-out successful");
            })
            .catch((error) => {
                console.error(error);
            });
    };
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
                            <Nav.Link><Link to={'/blog'} style={{ textDecoration: 'none' }}>Blog</Link></Nav.Link>
                            {/* <Nav.Link><Link to={'/cetagory'} style={{ textDecoration: 'none' }}></Link></Nav.Link> */}

                        </Nav>
                        <Nav className="me-auto">
                            {User ? <Link onClick={HandleLogout} style={{ textDecoration: 'none' }}>Log Out</Link> : <Nav.Link ><Link  to={'/login'} style={{ textDecoration: 'none' }}>Sing In</Link></Nav.Link>}
                            

                        </Nav>
                        <Nav className="me-auto">
                            {User ?
                                <div className='d-flex'><Nav.Link >{User.displayName}</Nav.Link>
                                    <Nav.Link  ><img src={User.photoURL} alt="" title={User.displayName} className='rounded-circle w-25' /></Nav.Link></div>:""}
                            
                            

                        </Nav>
                        <Nav>

                            <div class="btn-container">
                                <i class="fa fa-sun-o" aria-hidden="true"></i>
                                <label class="switch btn-color-mode-switch">
                                    <input type="checkbox" name="color_mode" id="color_mode" value="1" />
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