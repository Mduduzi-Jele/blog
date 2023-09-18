import React, { useState } from 'react';

export const Ratings = ({ initialRating, onRatingChange }) =>  {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? 'star filled' : 'star'}
          onClick={() => handleRatingClick(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};


