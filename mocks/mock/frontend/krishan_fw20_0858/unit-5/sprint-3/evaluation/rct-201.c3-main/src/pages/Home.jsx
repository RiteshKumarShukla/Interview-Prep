import React from "react";
import  Products  from "../components/Products/Products";
import {Link} from 'react-router-dom'
import {Route,Routes } from 'react-router-dom'
import RequiredAuth from "../hoc/RequiredAuth";
const Home = () => {
  return <div>
    <Link to='/products'>Products</Link>
  </div>;
};

export default Home;
