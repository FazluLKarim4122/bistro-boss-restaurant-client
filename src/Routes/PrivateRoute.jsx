import React, { useContext } from 'react';
import { AuthContext } from '../ProviedrsOrContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// children গুলা আসবে সেগুলা নিতে হবে
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        <span className="loading loading-bars loading-sm"></span>,
            <span className="loading loading-bars loading-md"></span>,
            <span className="loading loading-bars loading-lg"></span>
    }
    console.log(location);
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;