import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context';

const RequiresAuth = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated && false) {
        return <Navigate to="/login" />
    }

    return (
        <>{children}</>
    )
}

export default RequiresAuth