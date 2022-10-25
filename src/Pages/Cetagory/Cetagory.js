import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container, Modal } from 'react-bootstrap';
import Sidenav from '../Shared/Sidenav/Sidenav';


const Cetagory = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Catcource = useLoaderData()
    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Congress</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Wow!! Enroll Successful!!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Thank You
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Container><Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <Sidenav></Sidenav>
                </Col>
                <Col lg="9"><h5>Total Course:{Catcource.length}</h5>
            <Row xs={1} md={2} className="g-4 pb-4">
                {
                Catcource.map(course =>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={course.image_url} style={{ height: '18rem' }} />
                                <Card.Body>
                                <h6> Instructor: {course.author.name}</h6>
                                </Card.Body>
                            <Card.Body>
                                <p>{course.details.slice(0, 100)}</p>
                            </Card.Body>
                            <Card.Body className='d-flex  justify-content-around pt-3'>
                                    <Card.Title>{course.title}</Card.Title>
                                <Button variant="outline-success" onClick={handleShow}>Enroll Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
            </Row></Col>

            </Row></Container>
            
            

        </div>
    );
};

export default Cetagory;