import LoadingIndicator from "./LoadingIndicator";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

const getData = async ( page ) =>{
  try {
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)

    let data = await res.json();

    return data;

  } catch (error) {
    console.log(error);
  }
}

function Countries() { 
  // return <LoadingIndicator />;

  const [load,setLoad]=useState(false)

  const [position, setPosition] = useState([])

  const [ page, setPage] = useState(1)


  useEffect(()=>{
    
    FetchTheData()
    
  },[page])


  const FetchTheData = async(page=1)=> {
    try {
     setLoad(true)
      const data = await getData(page);

      const mainData = data.data
      setPosition(mainData)
      
      console.log(mainData)
      setLoad(false)
   
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }
 



  if(load){
    return <LoadingIndicator/>
  }
    return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
      
        {
          position.map(el => (
            <CountriesCard country={el.country} population = {el.population}/>
          ))
        }
      </div>
      <div>
        <Pagination current={page} onChange={(value)=> setPage(value)} total={10}/>
      </div>
    </div>
  );
}

export default Countries;
