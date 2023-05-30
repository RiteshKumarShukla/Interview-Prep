import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
const RequiredAuth = ({ children }) => {
  const isAuth = useSelector(state=>state.auth.data.isAuthenticated)
  

  if(isAuth){
    return children
  }
  else{
    <Navigate to={'/login'} />
  }
};

export default RequiredAuth;
