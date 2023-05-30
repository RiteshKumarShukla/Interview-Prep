import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route,Routes, useNavigate } from 'react-router-dom'
import SingleTodo from '../Components/SingleTodo'
import Home from './Home';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import TodoPage from './TodoPage';
const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/todos' element={
          <PrivateRoute>
            <TodoPage/>    
          </PrivateRoute>
        }>Login</Route>
        <Route path='/todos/:id' element={
          <PrivateRoute>
            <SingleTodo/>
          </PrivateRoute>
        }></Route>
        <Route path='/todos/:id/edit' element={
          <PrivateRoute>
          <SingleTodo/>
        </PrivateRoute>
        }></Route>
        <Route path='*' element={<h1>Task doesn't Exist</h1>}></Route>

    </Routes>
  )
}

export default AllRoutes