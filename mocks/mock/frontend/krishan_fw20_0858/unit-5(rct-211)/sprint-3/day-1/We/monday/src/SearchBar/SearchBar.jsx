import React, { useEffect, useRef, useState } from 'react';
import {useThrottle} from 'use-throttle'
import styled from 'styled-components';
const SearchBar = ({queryHandler,suggestions}) => {
    const [input,setInput] = useState('');
    const [activeOption, setActiveOption] = useState(0);
    const scrollDiv = useRef()
    const handleInputChange=(e)=>{
        setInput(e.target.value)
    }
    const throttleText = useThrottle(input,1000)
    useEffect(()=>{
        queryHandler(throttleText)
    },[throttleText,queryHandler])

    const handleActiveSuggestions = (e) =>{
        switch(e.keyCode){
            case(38):
            if(activeOption === 1){
                scrollDiv.current.scrollTop = suggestions.length*41;
                setActiveOption(suggestions.length)
            }
            else if(activeOption <= suggestions.length -3){
                scrollDiv.current.scrollTop -= 41;
            }
            else if(activeOption>1){
                setActiveOption(prev=>prev-1);
            }
            
            break;

            case(40):
            if(activeOption === suggestions.length){
                scrollDiv.current.scrollTop = 0;
                setActiveOption(0)
            }
            else if(activeOption>4){
                scrollDiv.current.scrollTop += 41;
            }
            setActiveOption((prev)=>prev+1)
            break;
            default : return
        }
    }
  return (
    <Wrapper onKeyUp={handleActiveSuggestions}>
        <SearchBarWrapper>
        <Input value={input} onChange={handleInputChange}/>
        </SearchBarWrapper>
        <SuggestionBox 
        limit = {5}
        suggestionsLength = {suggestions.length}
        active = {activeOption}
        ref={scrollDiv}
        >
        {suggestions.map((item,index)=>{
            return <div key={index}
            onMouseOver={()=>setActiveOption(index+1)}
            >{item}</div>
        })}
        </SuggestionBox>
    </Wrapper>
  )
}

export default SearchBar

const SuggestionBox = styled.div`
border:1px solid black;
max-height:${({limit})=>`${limit*41}px`};
border-top-color:${({suggestionsLength})=>(suggestionsLength?  'transparent':'black'  )};
border-bottom-color:${({suggestionsLength})=>(suggestionsLength?  'black' : 'transparent'  )};
overflow:auto;

& * {
    padding:10px;
    padding-left:20px;
    text-align-left;
}

&  : nth-child(${({active})=> active}){
    background:rgba(0,0,0,0.09);
    cursor:pointer
}
`

const Wrapper = styled.div`
max-width:350px;
margin:auto;
`
const Input= styled.input`
flex:1;
font-size:20px;
border:none;
outline:none;
`
const SearchBarWrapper = styled.div`
display:flex;
border:1px solid black;
`