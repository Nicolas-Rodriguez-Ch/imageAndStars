import { useState } from 'react';

export const StarRating = () => {
  const emptyStar = '☆';
  const filledStar = '★';

  const [selectedStars, setSelectedStars] = useState(0);
  const starArray = new Array(5).fill(emptyStar, selectedStars);
  return (
    <div>
      {starArray.map((star) => (
        <h1 key={star}>{star}</h1>
      ))}
    </div>
  );
};
