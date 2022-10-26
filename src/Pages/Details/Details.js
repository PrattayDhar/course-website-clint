import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div>
           
            <Card style={{ width: '40rem',marginLeft:'35%'}}>
                <Card.Img variant="top" src={details.image_url} style={{ height: '18rem',width:'40rem' }} />
                <Card.Body>
                    <Card.Text>
                        <p>Instructor:{details.author.name}</p>
                    </Card.Text>
                    <Card.Title>{details.title}</Card.Title>
                    <Card.Text>
                        {details.details}
                    </Card.Text>
                    <Card.Text>
                        <p>Total View:{details.total_view}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Price:{details.price}</p>
                    </Card.Text>
                    <Button style={{ marginLeft:'40%' }}><Link to={`/cart/${details._id}`} style={{ textDecoration: 'none', color: 'black', }}>Go To Cart</Link></Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Details;