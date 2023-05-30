import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginError, loginRequest, loginSuccess } from '../Redux/AuthRedux/Auth.actions';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoading = useSelector((store)=> store.auth.isLoading)
    const isAuth = useSelector((store)=>store.auth.isAuth)
    const [creds, setCreds] = useState({email:"",password:""})
    const token = useSelector(store=>store.auth.token)
    const handleChange =(e)=>{
        const {name, value} = e.target;
        setCreds({...creds,[name]:value})
    }

    const handleSubmit = ()=>{
        dispatch(loginRequest());
        axios.post(`https://reqres.in/api/login`,{...creds})
        .then(r=> dispatch(loginSuccess(r.data.token)) )
        .then(()=>{
          navigate('/todos')
        })
        .catch(e=>alert('Please fill correct details'))
    }

  
  return (
    <div>
        <input name='email' type="email" value ={creds.email} onChange={handleChange} placeholder="Enter email address"/>
        <br /> 
        <input placeholder='Enter your password' name='password' type="password" value={creds.password} onChange={handleChange}/>
        <br />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login