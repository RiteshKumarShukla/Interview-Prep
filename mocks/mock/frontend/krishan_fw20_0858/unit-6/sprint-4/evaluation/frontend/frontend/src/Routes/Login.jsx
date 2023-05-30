import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

const Login = () => {
    
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);


 const handleSubmit = (e)=>{
        e.preventDefault();
       axios.post("https://calm-lapel-bee.cyclic.app/users/login",{email,password})
       .then(r=>{
        localStorage.setItem("token",r.data.token)
       })
       .catch(e=>console.log(e))
    }
  return (
    <div>
        <Navbar/>
        
        <form onSubmit={handleSubmit} className='formcss'>
            
            <label htmlFor="">Email</label>
            <input type="email" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} />

                
            <label htmlFor="">Password</label>
            <input type="password" value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        </div>
  )
}

export default Login