import React,{useEffect} from "react";
import Filter from "../Components/Filter";
import {useSelector,useDispatch} from 'react-redux'
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getShoes } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import styled from 'styled-components'
const Shoes = () => {
  const shoes = useSelector((store)=>store.AppReducer.shoes);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(()=>{

  },[])

  useEffect(()=>{
    if(shoes.length === 0 || location){
     const getShoeParams = {
      params:{
        category:searchParams.getAll("category")
      }
     }
     dispatch(getShoes(getShoeParams));
    }
    
  },[location.search,shoes.length])
  console.log(shoes);
  return (
    <ShoesDiv>
      <FilterDiv>
      <Filter />
      </FilterDiv>
      <ShoeListDiv>
        {/* Map through the shoes list here using ShoeCard Component */}
        {shoes && shoes.map((e)=>{
          return <SingleShoeDiv  key={e.id} >
            <Link to={`shoes/${e.id}`}><ShoeCard shoeId={e}/></Link>
          </SingleShoeDiv>
        })}
      </ShoeListDiv>
    </ShoesDiv>
  );
};

export default Shoes;

const ShoesDiv = styled.div`
border:1px solid black;
display:flex;
`

const FilterDiv= styled.div`
border:1px solid black;
width:25%`

const ShoeListDiv = styled.div`
border:1px solid black;
width:70%;
display:grid;
margin:auto;
grid-template-columns:repeat(3,1fr);
row-gap:10px
`


const SingleShoeDiv = styled.div`
width:250px;
border:2px solid black;
`