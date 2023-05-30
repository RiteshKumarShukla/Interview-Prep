import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const location = useLocation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const gP = location.state?.data || '/'
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(login({email,password}))
    .then(r=>navigate(gP))
  }
  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
