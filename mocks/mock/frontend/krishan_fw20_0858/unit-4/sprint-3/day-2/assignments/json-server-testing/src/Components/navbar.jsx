import React from "react";
import { NavLink } from "react-router-dom";
    

// 1. map all the links instead of separate Link components;
// 2. try NavLinks and add style it;

const links = [
  { path: "/", title: "Home" },
  { path: "/all_products", title: "All Products" },
  { path: "/product_details", title: "Product Details" },
  
];

function Navbar() {
  // const defaultStyle = {
  //   textDecoration: "none",
  //   color: "black",
  // };

  // const activeStyle = {
  //   textDecoration: "none",
  //   color: "red",
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto"
      }}
    >
      {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
