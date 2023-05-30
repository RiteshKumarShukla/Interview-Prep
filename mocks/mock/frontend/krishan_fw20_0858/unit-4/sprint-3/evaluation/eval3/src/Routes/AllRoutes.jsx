import {Routes,Route} from "react-router-dom";
import RestaurantPage from "./RestaurantPage";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";


function AllRoutes() {
  return <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/restaurants' element={<RestaurantPage/>}></Route>
    </Routes>
  </div>;
}

export default AllRoutes;
