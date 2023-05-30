import {createContext, useState } from 'react';


const AuthContext = createContext();

 function AuthContextProvider({children} ){

  const [isAuth,setIsAuth] = useState(true);

  const toggleAuth=()=>{
    setIsAuth(isAuth === true ? "false" : "true")
  }
  console.log(isAuth)
  return (
    <AuthContext.Provider value = {{isAuth,toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export {AuthContext}