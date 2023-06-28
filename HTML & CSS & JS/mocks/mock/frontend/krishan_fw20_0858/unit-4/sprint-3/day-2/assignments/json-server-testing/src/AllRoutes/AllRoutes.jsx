import React from "react";

import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import AllProducts from "./Allproducts";
import ProductDetails from "./Product_details";


const AllRoutes = () =>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/all_products" element={<AllProducts/>}></Route>
                <Route path="/product_details" element={<ProductDetails/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;