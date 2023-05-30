import { useEffect, useRef, useState } from 'react'
const useTimout = (t) => {
    const [ready ,setReady]= useState(false);
    const id = useRef()
useEffect(()=>{
  id.current=setTimeout(()=>{
    setReady(true);
  },t)
  return (()=>{
    clearTimeout(id.current)
  })
},[])
  return ready;
}

export default useTimout