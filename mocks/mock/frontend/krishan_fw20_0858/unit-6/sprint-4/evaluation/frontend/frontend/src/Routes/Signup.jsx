import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
const Signup = () => {
    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [gender,setGender] = useState([]);
    const [password,setPassword] = useState([]);


 const handleSubmit = (e)=>{
        e.preventDefault();
       axios.post("https://calm-lapel-bee.cyclic.app/users/register",{name,gender,email,password})
       .then(r=>console.log(r))
       .catch(e=>console.log(e))
    }
  return (
    <div>
        <Navbar/>
        
        <form onSubmit={handleSubmit} className='formcss'>
            <label htmlFor="">Name</label>
            <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">Email</label>
            <input type="email" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Gender</label>
            <input placeholder='enter gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
                
            <label htmlFor="">Password</label>
            <input type="password" value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        </div>
  )
}

export default Signup