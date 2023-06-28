//Create the HOC for protected Routes
import {useSelector} from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
const ReqAuth = ({children}) => {
    const isAuth = useSelector(store=>store.AuthReducer.isAuth);
    const location = useLocation();
    console.log(location);
    if(!isAuth){
        return <Navigate to={'/login'} replace state={{data:location.pathname}} />
    }
    return children
};

export default ReqAuth;
