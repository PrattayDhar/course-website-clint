import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const cart = useLoaderData()
    return (
        <div>
            {cart._id}
        </div>
    );
};

export default Cart;