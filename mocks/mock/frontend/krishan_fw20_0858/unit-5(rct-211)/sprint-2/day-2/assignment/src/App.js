import { useSelector } from 'react-redux';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Login from './Pages/Login';

function App() {
  // const navigate = useNavigate()
  // const isAuth = useSelector(store => store.auth.isAuth)
  // if(isAuth){
  //   navigate('/login')
  // } 
  return (
    
    <div className="App">
     
    <AllRoutes/>
     
    </div>
  );
}

export default App;
