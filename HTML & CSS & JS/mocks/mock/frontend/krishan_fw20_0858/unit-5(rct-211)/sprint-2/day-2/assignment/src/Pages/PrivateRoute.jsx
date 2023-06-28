import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((store)=> store.auth.isAuth);

    if(!isAuth){
        return <Navigate to='/login' />
    }
    
  return children
}

export default PrivateRoute