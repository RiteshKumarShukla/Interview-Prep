import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {

  const location = useLocation();
  console.log(location)

    const isAuth = useSelector((store)=>store.auth.isAuth);
    if(!isAuth){
      return <Navigate to={'/login'} replace state={{data:location.pathname}} />
    }
    return children
  
}

export default RequireAuth