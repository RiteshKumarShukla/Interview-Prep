import React from 'react'
import {Route, Routes} from 'react-router-dom';
import EditProfile from './EditProfile';
import GetProfile from './GetProfile';
import Signin from './Signin';
import Signup from './Signup';
const AllRoutex = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/getProfile' element={<GetProfile/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
    </Routes>
  )
}

export default AllRoutex