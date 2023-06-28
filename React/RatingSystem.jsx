import React, { useState } from 'react';

const RatingSystem = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Rating: {rating}</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star key={value} value={value} onClick={handleRatingChange} filled={value <= rating} />
        ))}
      </div>
    </div>
  );
};

const Star = ({ value, onClick, filled }) => {
  const starStyles = {
    cursor: 'pointer',
    color: filled ? 'gold' : 'gray',
    fontSize: '100px',
  };

  return <span style={starStyles} onClick={() => onClick(value)}>*</span>;
};

export default RatingSystem;
