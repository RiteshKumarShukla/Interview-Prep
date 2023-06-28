import React from "react";
import {Link} from 'react-router-dom'
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate()
const isAuth = useSelector(store => store.auth.isAuthenticated)
console.log(isAuth)
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
      <Link to='/home'>Home</Link>
      <Link to='/login'>Login</Link>
        <a data-cy="navbar-home-link"></a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy="navbar-login-logout-button" onClick={()=>navigate('/login')}>{!isAuth ? "Logout" : 'login'}</button>
      </div>
    </div>
  );
};

export default Navbar;
