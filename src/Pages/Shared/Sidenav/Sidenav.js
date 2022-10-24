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
            <h5>All Cetagory:{cetagory.length}</h5>
            <div className='cata'>
                {
                   
                     
        cetagory.map(perCat => <p key={perCat.id}>
  <Link className='linkmodel p-2 m-4' to={`/cetagory/${perCat.id}`} style={{ textDecoration: 'none', color:'black',}} >{perCat.name}</Link>
         </p>)
                             
                }
            </div>
        </div>
    );
};

export default Sidenav;