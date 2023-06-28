import React from 'react'
import styled from 'styled-components';
const BookCard = ({bookData}) => {
    
  return (
    <div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2018/04/28/14/22/eyeglasses-3357398__480.jpg" alt="dragon" width={'100%'} />    
        </div>
        <p>{bookData.book_name}</p>
        <p>{bookData.category}</p>
        <p>{bookData.release_year}</p>
    </div>
  )
}

export default BookCard;
