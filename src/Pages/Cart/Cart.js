import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Cart = () => {
    const ref = React.createRef();
    const cart = useLoaderData()
    return (
        <div >

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cart.image_url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div ref={ref}><h5 className="card-title">{cart.title}</h5>
                                <p className="card-text">{cart.details}</p>
                                <p className="card-text">{cart.price}</p></div>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <Button className='mb-3' onClick={toPdf}>DOWNLOAD COURSE OUTLINE</Button>}
                            </Pdf>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;