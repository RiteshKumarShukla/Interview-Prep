import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Routes/Home'
import Login from '../Routes/Login'
import Posts from '../Routes/Posts'
import Signup from '../Routes/Signup'

const Navbar = () => {
  return (
    <nav style={{display:"flex",justifyContent:"space-evenly"}}>
<a href="/">home</a>
<a href="/signup">signup </a>
<a href="/login">login</a>
<a href="/posts">Posts</a>
    </nav>
  )
}

export default Navbar