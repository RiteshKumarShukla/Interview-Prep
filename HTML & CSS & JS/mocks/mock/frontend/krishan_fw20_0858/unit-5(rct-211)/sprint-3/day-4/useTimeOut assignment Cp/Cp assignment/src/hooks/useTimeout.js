import { useEffect,useState,useRef } from "react";

const useTimeout = (delay) => {
    const [ready ,setReady] = useState(false);
    const id = useRef()
    useEffect(()=>{
    id.current = setTimeout(()=>{ setReady(true)},delay);
   return (()=>{
    clearTimeout(id.current)
   })
    },[]);

    return {ready}
};

export default useTimeout;
