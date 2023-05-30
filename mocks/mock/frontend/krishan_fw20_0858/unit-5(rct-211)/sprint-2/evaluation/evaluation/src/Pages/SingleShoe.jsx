import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getShoes } from "../Redux/AppReducer/action";
import {useDispatch, useSelector} from 'react-redux'
import ShoeCard from "../Components/ShoeCard";
import styled from 'styled-components';
const SingleShoe = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const shoes = useSelector((store)=>store.AppReducer.shoes)
  const [currentShoe,setCurrentShoe] = useState({})
  console.log(id)
  useEffect(()=>{
   if(shoes.length === 0){
    dispatch(getShoes())
   }
  },[])
  useEffect(()=>{
    const shoe = shoes.find((e)=>e.id===Number(id));
    setCurrentShoe(shoe)
  },[id,shoes])
  console.log(currentShoe)
  return (
    <div >
     <ShoeCard shoeId={currentShoe}/>
    </div>
  );
};

const SingleShoeWrapper = styled.div`
width:250px;
border:2px solid black;
`
export default SingleShoe;
