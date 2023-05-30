import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom';
import BookCard from '../Components/BookCard';
import { getBooks } from '../Redux/AppData/action';
import Books from './Books';

const SingleBook = () => {
  const {id} = useParams();
  const booksData = useSelector((store)=>store.app.books)
  const [currentBook, setCurretBook] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{
    if(booksData.length === 0){
      dispatch(getBooks())    
    }
  },[])
  useEffect(()=>{
    const books = booksData.find((e)=>e.id===Number(id));
    books && setCurretBook(books)
  },[id,booksData])
  return (
    <div>
      <BookCard bookData={currentBook}/>
    </div>
  )
}

export default SingleBook