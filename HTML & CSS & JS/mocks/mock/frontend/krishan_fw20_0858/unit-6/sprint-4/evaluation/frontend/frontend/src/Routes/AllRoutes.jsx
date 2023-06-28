import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Updatepost from '../Components/Updatepost'
import Home from './Home'
import Login from './Login'
import Posts from './Posts'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/signup' element={<Signup/>}>Signup</Route>
        <Route path='login' element={<Login/>}>Login</Route>
        <Route path='/posts' element={<Posts/>}>Posts</Route>
        <Route path='/updatepost' element={<Updatepost/>}>Posts</Route>
    </Routes>
  )
}

export default AllRoutes