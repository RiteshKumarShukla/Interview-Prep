import {Routes, Route } from 'react-router-dom';

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Users from "./user";
import SingleUserPage from "./singleuserpage";
import PageNotFound from "./Notfoundpage";


export default function Pages (){
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* 
          path --> what is the path 
          element --> which element you want to show
        */}
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:user_id" element={<SingleUserPage />}></Route>
      {/* /users/ */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}