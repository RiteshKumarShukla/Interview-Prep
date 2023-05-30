import { useState } from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AuthContext = createContext()
export {AuthContext}

function Login() {
  

 
  const prevent = async(event)=>{
    event.preventDefault();

    let loginData={
      email:"eve.holt@reqres.in",
      password:"cityslicka"
    }

    let res = await fetch(`https://reqres.in/api/login`,{
      method:'POST',
      body: JSON.stringify(loginData),
      headers:{
        'Content-Type':'application/json'
      }
    })

    let data = await res.json();
  
console.log(data.token !== String)
    if(data.token != "string"){

      return <Navigate to="/dashboard"/>
    }
  
 
  }
  
  return (
    <div className="login-page" >
      <form className="form" data-testid="login-form" onSubmit={prevent}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" className="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              className="password"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" id="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
function AuthContextProvider({children}){
  const [isAuth,setIsAuth] = useState(false)
  const [token,setToken] = useState(null)
  return (
    <AuthContext.Provider value={{token,isAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default Login;
export {AuthContextProvider}
