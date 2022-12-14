import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { User } = useContext(AuthContext);
    const location = useLocation();
    if (User) {
        return children;
    }
    else { return <Navigate to={'/login'} state={{ from: location }} replace></Navigate> }
};

export default PrivateRoute;