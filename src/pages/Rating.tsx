import React, { useState } from 'react';

interface RatingProps {
  initialRating: number;
  onRatingChange: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onRatingChange(newRating); 
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(i)}
          style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <span>Rating: {rating}</span>
      {renderStars()}
    </div>
  );
};

export default Rating;
