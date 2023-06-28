import React from 'react'
import useTime from '../Hooks/useTime'
const TryUseTimeHook = ()=>{
    const {ready} = useTime(5000);
    console.log(ready)

    return(
        <div>TryUseTimeHook</div>
    )
}
export default TryUseTimeHook;