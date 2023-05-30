import { useEffect, useState } from "react";
import useTimeout from "./useTimeout";

const useOnlineStatus = () => {
    const [isUserOnline ,setIsUserOnline] = useState(false);
    
    useEffect(()=>{
        if(navigator.onLine){
            setIsUserOnline(true);
        }
        else{
            setIsUserOnline(false)
        }
    },[])   
 
       

  
    // return [isUserOnline,setIsUserOnline]
    return isUserOnline
};

export default useOnlineStatus;
