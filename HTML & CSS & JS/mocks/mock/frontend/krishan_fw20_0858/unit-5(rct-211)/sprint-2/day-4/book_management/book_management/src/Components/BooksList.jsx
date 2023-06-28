import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../Redux/AppData/App.action';
import BookCard from './BookCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
const BooksList = () => {
    const books = useSelector(store=>store.app.books);
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location)
    const [searchParams] = useSearchParams()

    useEffect(()=>{
        if(books.length === 0 || location){
            const sortBy = searchParams.get('sort');
            const getSearchParams = {
                params:{
                    category:searchParams.getAll("category"),
                    _sort:sortBy && 'release_year',
                    _order:sortBy
                }
            }
            dispatch(getBooks(getSearchParams))
        }
    },[location.search,books.length])
  return (
    <div>
        {books && books.map((item)=>{
            return <BookListWrapper key={item.id}>
                <BookCard bookData = {item}/>
            </BookListWrapper>
        })}
    </div>
  )
}

export default BooksList

const BookListWrapper = styled.div`
width:300px;
`
