import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";
import Cart from "./Cart";
import Order from "./Order";
import Products from "./Products";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/orders" element={<Order />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
