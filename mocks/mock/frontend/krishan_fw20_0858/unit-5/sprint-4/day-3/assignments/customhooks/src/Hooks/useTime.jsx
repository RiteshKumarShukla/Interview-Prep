import React, { useState } from 'react'

const useTime = (time) => {
    const [ready, setReady] = useState(false);

    setTimeout(()=>{
        setReady(true)
    },time)


  return {ready};
}

export default useTime