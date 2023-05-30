import React from 'react'
import BookList from '../Components/BookList'
import FilterComp from '../Components/FilterComp'
import styled from 'styled-components'
const Books = () => {
  return (
    <div>
        <BookPageWrapper>
            <FilterWrapper>
                <FilterComp/>
            </FilterWrapper>
            <BookWrapper>
                <BookList/>
            </BookWrapper>
    </BookPageWrapper>
    </div>
  )
}

const BookPageWrapper = styled.div`
display:flex;
border:1px solid black;
`
const FilterWrapper = styled.div`
width:300px;
border:1px solid blue;
`
const BookWrapper = styled.div`
width:100%;
border:2px solid red;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;

`
export default Books