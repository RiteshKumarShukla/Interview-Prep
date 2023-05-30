import React, { useState,useEffect } from "react";
import {Navigate,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { loginMethod } from "../redux/auth/auth.actions";
const Login = () => {

const isAuth = useSelector(store=>store.auth.data.isAuthenticated)
const {loading, error} = useSelector(store => store.auth)

const dispatch = useDispatch()
const navigate = useNavigate()
  const [loginCreds, setLoginCreds] = useState({});
  const handleChange = (e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]:value
    })
    console.log(loginCreds)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(loginMethod(loginCreds))
  }
  useEffect(() => {
    if(isAuth){
      navigate('/products')
    }
  else{
    <Navigate to='login' />
  }
  }, [isAuth])

  if(loading){
    return <div>Loding...</div>
  }
  else if(error){
    return <div>Error occurred...</div>
  }
  
  return (
    <div>
      <form>
        <input data-cy="login-email" placeholder='Enter Email' name = 'email' onChange={handleChange}/>
        <br/>
        <input data-cy="login-password" placeholder='Enter password' name ='password' onChange={handleChange}  />
        <br/>

        <button data-cy="login-submit" type="submit" onClick={handleSubmit} >Login</button>
      </form>
    </div>
  );
};

export default Login;
