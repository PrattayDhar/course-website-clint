import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const Home = () => {
    const allCourse = useLoaderData()
    
  
    return (
        <div>
            <p>Total Course:  {allCourse.length}</p> 
            <Row xs={1} md={2} className="g-4">
           {
                allCourse.map(course => 
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={course.image_url} style={{height: '18rem'}} />
                            <Card.Body>
                                <h6> Instructor: {course.author.name}</h6>
                            </Card.Body>
                            <Card.Body>
                                <Card.Body className='d-flex  justify-content-around pt-3'>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Button variant="outline-success">Success</Button>
                                </Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
            </Row>
        </div>
    );
};

export default Home;
// {/* <Courseview key={course._id} course={course}></Courseview> */}