import React from "react";

import "./foodcss.css"
export default function Food(){

const [quantity, setQuantity] = React.useState(0)
    return (
        <div style={{border:"1px solid black",padding:"10px"}}>

            
            <div className="yo">
                <h2>Noodles</h2>
                <h2>₹30</h2>
                <div>
                    <button onClick={()=>setQuantity(quantity-1)} disabled={quantity<=0}>-</button>
                    {quantity}
                    <button onClick={()=> setQuantity(quantity+1)}>+</button>
                </div>
            </div>
            <div className="yo">
                <h2>Biryani</h2>
                <h2>₹90</h2>
                <div>
                    <button onClick={()=>setQuantity(quantity-1)} disabled={quantity<=0}>-</button>
                    {quantity}
                    <button onClick={()=> setQuantity(quantity+1)}>+</button>
                </div>
            </div>
            <div className="yo">
                <h2>Chips</h2>
                <h2>₹10</h2>
                <div>
                    <button onClick={()=>setQuantity(quantity-1)} disabled={quantity<=0}>-</button>
                    {quantity}
                    <button onClick={()=> setQuantity(quantity+1)}>+</button>
                </div>
            </div>

            <h1>Total:</h1>
           
        </div>
    )
}