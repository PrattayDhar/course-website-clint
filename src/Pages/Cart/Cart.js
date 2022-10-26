import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

// import ReactToPrint from 'react-to-print';

const Cart = () => {
    const cart = useLoaderData()
    return (
        <div >
           
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cart.image_url} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{cart.title}</h5>
                            <p className="card-text">{cart.details}</p>
                            <p className="card-text">{cart.price}</p>
                            <Button className='mb-3'>Get Premium Access</Button><br />
                            {/* <div>
                                <ReactToPrint 
                                    trigger={() => {
                                        return <Button>Download</Button>
                                    }} 
                                    content={()=>this.componentRef}
                                    documentTitle={cart.title}
                                    pageStyle="print"/>
                                
                                      
                            </div> */}
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;