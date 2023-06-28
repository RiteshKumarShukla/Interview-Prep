import React, { useState } from "react";
        
export default function OP(){
        
        const [state,setState] =useState([])
            async function getData(){
                try{
                   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        
                    let data=await res.json();
                    console.log(data)
                    setState(data)
                    console.log(state)
                    return data;
                    
                    
                }
                catch(err){
                    console.log(err)
                }
            }
        
        
        return(<div>
            <button onClick={getData}>Get Post</button>
            
            <ul>
            {state.map((el)=>(

                <li>{el.title}</li>
            )
                
            )}
    

            </ul>
        
        </div>
        )
        
}
        
    
