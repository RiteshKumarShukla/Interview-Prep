import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthData/Auth.actions';

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const goTopage = location.state.data || '';


  const handleSubmit =(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
          navigate(goTopage,{replace:true})
      })
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" >User Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="" >User Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
    <button type='submit'>Login</button>
      </form>
    </div>  
  )
}

export default Login