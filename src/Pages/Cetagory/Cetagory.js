import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Cetagory = () => {
    const Catcource = useLoaderData()
    return (
        <div>
            <h1>Catagory lenth:{Catcource.length}</h1>
            <Row xs={1} md={2} className="g-4 pb-4">
                {
                Catcource.map(course =>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={course.image_url} style={{ height: '18rem' }} />
                                <Card.Body>
                                <h6> Instructor: {course.author.name}</h6>
                                </Card.Body>
                            <Card.Body className='d-flex  justify-content-around pt-3'>
                                    <Card.Title>{course.title}</Card.Title>
                                <Button variant="outline-success">Success</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
            </Row>

        </div>
    );
};

export default Cetagory;