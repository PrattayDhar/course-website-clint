import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidenav = () => {
    const [cetagory, setCetagory] = useState([])
    useEffect(() => {
        fetch('https://assignment10-server.vercel.app/course-cetagory')
            .then(res => res.json())
            .then(data => setCetagory(data))
    }, [])
    return (
        <div>
            <h5 className='pb-4'>Total Cetagory: {cetagory.length}</h5>
            <div>
                {
                   
                     
        cetagory.map(perCat => <p key={perCat.id}>
            <ListGroup >
                <ListGroup.Item className='mb-2 p-3 '> <div className='ceta'>
                    <Link className='linkmodel p-2 m-4' to={`/cetagory/${perCat.id}`} style={{ textDecoration: 'none', color: 'black', }} >{perCat.name}</Link>
                </div></ListGroup.Item>
            </ListGroup>
           
  
         </p>)
                             
                }
            </div>
        </div>
    );
};

export default Sidenav;