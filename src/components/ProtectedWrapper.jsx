import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedWrapper = () => {
 
    let isAuthenticated = false;

    return isAuthenticated ? <Outlet/> : <Navigate to="/Login"/>

}

export default ProtectedWrapper
