import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../Redux/AppData/action';
import BookCard from './BookCard';
import styled from 'styled-components';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const BookList = () => {
    const books = useSelector((store)=> store.app.books);
    const dispatch = useDispatch();
    const location = useLocation()
    const [searchParams] = useSearchParams()

    useEffect(()=>{
    if(books.length ===0 || location){
        const sortBy = searchParams.get('sort')
        const getBooksParams ={
            params:{
                category:searchParams.getAll('category'),
                _sort:sortBy && "release_year",
                _order:sortBy,
            }
        }
        dispatch(getBooks(getBooksParams))
    }    
    },[location.search])
  return (
    <>
        {books.length>0 && books.map(b=>{
            return <BookListWrapper key={b.id}>
                <BookCard bookData = {b}/>
                </BookListWrapper>
        })}
    </>
  )
}

const BookListWrapper = styled.div`
width:300px;

`
export default BookList