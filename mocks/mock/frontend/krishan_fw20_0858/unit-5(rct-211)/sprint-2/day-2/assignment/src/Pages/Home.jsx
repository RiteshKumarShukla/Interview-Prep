import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Todos from '../Components/Todos'

const Home = () => {

  return (
    <div>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Home