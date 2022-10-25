import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import Sidenav from '../Shared/Sidenav/Sidenav';


const Courseview = () => {
    const allCourse = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <Sidenav></Sidenav>
                </Col>
                    <Col lg="9"><p>Total Course:  {allCourse.length}</p>
                        <Row xs={1} md={2} className="g-4">
                            {
                                allCourse.map(course =>
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={course.image_url} style={{ height: '18rem' }} />
                                            <Card.Body>
                                                <h6> Instructor: {course.author.name}</h6>
                                            </Card.Body>
                                            <Card.Body>
                                                <p>{course.details.slice(0, 100)}</p>
                                            </Card.Body>
                                            <Card.Body>
                                                <Card.Body className='d-flex  justify-content-around pt-3'>
                                                    <Card.Title>{course.title}</Card.Title>
                                                    <Button variant="outline-success">Enroll Now</Button>
                                                </Card.Body>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}
                        </Row></Col>

            </Row>
            </Container>
            
            
        </div>
    );
};

export default Courseview;