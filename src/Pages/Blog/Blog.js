import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Blog = () => {
    return (
        <div className='pb-5 mb-5'>
            <Row xs={1} md={2} className="g-4">
                
                    <Col>
                        <Card className='bg-primary'>
                            
                            <Card.Body>
                            <Card.Title>1. what is cors?</Card.Title>
                                <Card.Text>
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className='bg-success'>
                            
                            <Card.Body>
                            <Card.Title>2.Why are you using firebase.What other options do you have to implement authentication?</Card.Title>
                                <Card.Text>
                                Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className='bg-success'>
                            
                            <Card.Body>
                            <Card.Title>3 How does the private route work?</Card.Title>
                                <Card.Text>
                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className='bg-primary'>
                            
                            <Card.Body>
                            <Card.Title>What is Node? How does Node work?</Card.Title>
                                <Card.Text>
                                This is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
               
            </Row>
        </div>
    );
};

export default Blog;