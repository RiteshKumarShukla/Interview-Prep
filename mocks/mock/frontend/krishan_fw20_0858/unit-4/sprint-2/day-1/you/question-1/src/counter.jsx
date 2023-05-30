import React from "react";
import { useState } from "react";

export default function CounterApp(){

    const [count,setCount] =useState(0);

     function handleCount(){
        setCount(count+1)
    }

    return(<div>
        <h1>Clicked : {count} times</h1>
        <button onClick={handleCount} disabled={count<=0}>Increase</button>
        </div>
    )
    
}