import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BookCard = ({bookData}) => {
  const navigate = useNavigate()
  return (
    <div>
        <div>
          <Link to={`books/${bookData.id}`}>
            <img src="https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931__480.jpg" alt="dragon" width={'100%'} />
          </Link>
        </div>
        <div>{bookData.book_name}</div>
        <div>{bookData.category}</div>
        <div>{bookData.release_year}</div>

        <button onClick={()=>navigate(`books/${bookData.id}/edit`)}>Edit</button>
    </div>
  )
}

export default BookCard