import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import BooksList from '../Components/BooksList';
import FilterComponent from '../Components/FilterComponent';
import { getBooks } from '../Redux/AppData/App.action';
import styled from 'styled-components'
const Books = () => {

  return (
    <div>
      <AllBooksWrapper>
        <FilterWrapper>
     <FilterComponent/>
        </FilterWrapper>
        <BookListWrapper>
        <BooksList/>
        </BookListWrapper>
      </AllBooksWrapper>
    </div>
  )
}

export default Books

const AllBooksWrapper = styled.div`
display:flex;
border:1px solid black;
`;
const FilterWrapper = styled.div`
width:300px;
border:1px solid red;
`
const BookListWrapper = styled.div`
width:100%;
border:2px solid blue;
display:flex;

`
