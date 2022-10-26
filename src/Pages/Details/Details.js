import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div>
            {details._id}
            <Button><Link to={`/cart/${details._id}`}>Button</Link></Button>
        </div>
    );
};

export default Details;