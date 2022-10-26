
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container} from 'react-bootstrap';
import Sidenav from '../Shared/Sidenav/Sidenav';
import './Cetagory.css'


const Cetagory = () => {
   
    const Catcource = useLoaderData()
    return (
        <div>
          
            <Container><Row>
                <Col lg="3" >
                    <Sidenav></Sidenav>
                </Col>
                <Col lg="9"><h5>Total Course:{Catcource.length}</h5>
            <Row xs={1} md={2} className="g-4 pb-4">
                {
                Catcource.map(course =>
                        <Col >
                        <Card className='card-color'>
                                <Card.Img variant="top" src={course.image_url} style={{ height: '18rem' }} />
                                <Card.Body>
                                <h6> Instructor: {course.author.name}</h6>
                                </Card.Body>
                            <Card.Body>
                                <p>{course.details.slice(0, 100)}</p>
                            </Card.Body>
                            <Card.Body className='d-flex  justify-content-around pt-3'>
                                    <Card.Title>{course.title}</Card.Title>
                                <Button variant="outline-success"><Link to={`/course/${course._id}`} style={{ textDecoration: 'none', color: 'black', }}>Details</Link></Button>
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