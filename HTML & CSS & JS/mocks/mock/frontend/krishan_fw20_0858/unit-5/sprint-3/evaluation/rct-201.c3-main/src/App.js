import "./App.css";
import { Navbar } from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import { Products } from "./components/Products";
function App() {
  return <div className="App">{/* code here */}
  <Navbar/>
  <Routes>
  <Route path="/home" element={
    <RequiredAuth>  
    <Home/>  
    </RequiredAuth>
    }></Route>  
    <Route path="/products" element={<RequiredAuth><Products/></RequiredAuth>}>
      Products
    </Route>
  <Route path="/login" element={<Login/>}></Route>  
  <Route></Route>  
  
  
  </Routes>  
  </div>;
}

export default App;
