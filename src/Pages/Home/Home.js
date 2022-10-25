import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Home = () => {
    const [cetagory, setCetagory] = useState([])
    useEffect(() => {
        fetch('https://assignment10-server.vercel.app/course-cetagory')
            .then(res => res.json())
            .then(data => setCetagory(data))
    }, [])
    return (
        <div>
            <h5 className='pb-4'>Total Sector: {cetagory.length}</h5>
            <Row xs={1} md={3} className="g-4 pb-4">
                {
                    cetagory.map(perCat =>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={perCat.image_url} style={{ height: '18rem' }} />
                                
                                <Card.Body className='d-flex  justify-content-around pt-3'>
                                    <Card.Title>{perCat.name}</Card.Title>
                                    <Button variant="outline-success"><Link  to={`/cetagory/${perCat.id}`} style={{ textDecoration: 'none', color: 'black', }} >Click For Details</Link></Button>
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