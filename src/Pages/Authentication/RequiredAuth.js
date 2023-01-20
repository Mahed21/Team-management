import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const RequiredAuth = ({ children }) => {
    const token = localStorage.getItem('accessToken');
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequiredAuth;