import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getProductsData } from "../../redux/product/product.actions";
const Products = () => {
  const  data  = useSelector(store=>store.product.data)
  const {loading, error} = useSelector(store => store.product)
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductsData())
  },[])
  
if(loading){
  return <div>Loading...</div>
}  
else if(error){
  return <div>Error...</div>
}
  
  return <div>{/* here */}

  <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)",gap:"2rem",padding:'5rem'}}>

  {data.map((e)=>(
    <div key={e.id} style={{border:"1px solid black",height:'200px',padding:'1rem',borderRadius:'1rem'}}><h3>{e.name}</h3><p>{e.description}</p>
    <button >Add to Cart</button>    
    </div>
  ))}
  </div>
  </div>;
};

export default Products;
