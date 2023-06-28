import { useEffect, useState } from "react";

const useClock = () => {
  // TODO
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const d = new Date();
  
  setInterval(()=>{
    setHours(d.getHours())
    setMinutes(d.getMinutes())
    setSeconds(d.getSeconds())
  },1000)

  
  // refer readme.md for what to return
  return {hours , minutes, seconds}
};

export default useClock;
