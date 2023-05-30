import "./styles.css";
import { createContext, useContext } from "react";
import {AuthContext} from "./Component/AuthContextProvider"

//import AuthContextProvider from "./Component/AuthContextProvider"



export default function App() {

  
  const getData = async()=>{
    let register_data={
      email:document.getElementById('email').value,
      password:document.getElementById("password").value
    }

    try {
      let res = await fetch(`https://reqres.in/api/login`,{
        method:'POST',

        body:JSON.stringify(register_data),

        headers:{
            'Content-Type':'application/json',
      },
    })

      let data = await res.json()

      return data

    } catch (error) {
      console.log(error)
    }
  }
  const { isAuth , toggleAuth } = useContext(AuthContext)

 
  
  return (
    <div className="App">
     
       <input type="email" placeholder="Enter Email Address" id="email" />
       <br/>
       <br/>
       <input type="password" placeholder="Enter Your Password" id='password' />
       <br/>
       <br/>
       <button onClick={toggleAuth} >Log In</button>
       
    
   </div>
  );
}

