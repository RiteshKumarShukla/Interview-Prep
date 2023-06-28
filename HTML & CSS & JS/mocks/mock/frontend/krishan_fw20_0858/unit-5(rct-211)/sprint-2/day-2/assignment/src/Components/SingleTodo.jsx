import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
const SingleTodo = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [details, setDetails] = useState({});
    const [creds, setCreds] = useState("");
    const [pageError, setPageError] = useState(false)

    const getSingleData = ()=>{
        axios.get(`http://localhost:8080/todos/${id}`)
        .then(r=>setDetails(r.data))
        .catch(e=>setPageError(true))
    }
    useEffect(()=>{
        getSingleData()
    },[])

    const handleChange= (e) =>{
        setCreds(e.target.value)
    }
    if(pageError){
        return (
        <>
        <h1>Task doesn't exist</h1>
        <button onClick={()=>navigate('/')}>Home</button>
        </>
        )
    }
    const handleClick = (e)=>{
        axios.patch(`http://localhost:8080/todos/${id}`,{title:creds})
        .then(r=>setDetails(r.data))
        .catch(e=>console.log(e))
        setCreds("")
    }
  return (<>
  <NavLink to={'/'}>Home</NavLink>
    <div>{details.title}</div>
    <input type="text" onChange={handleChange} value={creds}/>
    <button onClick={handleClick}>Change</button>

    
  </>
  )
}

export default SingleTodo