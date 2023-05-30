import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'

const Posts = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState("");
    const [body, setBody] = useState("");
    const [device, setDevice] = useState("");
    const [posts, setPosts] = useState("")
    useEffect(()=>{
        axios.get("https://calm-lapel-bee.cyclic.app/posts/",{
            headers:{
                "authorization":localStorage.getItem("token")
            }
        })
        .then(r=>setPosts(r.data))
        .catch(e=>console.log(e))
    },[]);
    console.log(posts);

    const addPost = (e)=>{
        e.preventDefault()
        axios.post("https://calm-lapel-bee.cyclic.app/posts/create",{title,body,device},{
            headers:{
                "authorization":localStorage.getItem("token")
            }
        })
        .then(r=>{console.log(r)})
        .catch(e=>console.log(e))
    }
    const handleUpdate = ()=>{

    }

  return (
    <div>
        <Navbar/>
        Posts
        <div>
            <input placeholder='title' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input placeholder='body' type="text" value={body} onChange={(e)=>setBody(e.target.value)} />
            <input placeholder='device' type="text" value={device} onChange={(e)=>setDevice(e.target.value)} />
            <button onClick={addPost}>Add</button>
        </div>

        {
            posts?posts.map((post,i)=>{
                return <div key={i}>
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                    <h4>{post.device}</h4>
                    <button onClick={()=>{
                      navigate("/updatepost",) 
                    }}>update</button>
                    <button onClick={(e)=>{
                        e.preventDefault()
                         axios.delete(`https://calm-lapel-bee.cyclic.app/posts/delete/${post._id}`,{
                            headers:{
                                "authorization":localStorage.getItem("token")
                            }
                        })
                        .then(r=>{
                            console.log(r)
                       })
                        .catch(e=>console.log(e))
                    }}>delete</button>
                </div>

            }):<h1>no data for you</h1>
        }
        </div>
  )
}

export default Posts