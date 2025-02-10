import { useState } from 'react';

export const StarRating = () => {
  const emptyStar = '☆';
  const filledStar = '★';

  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (selectedStars === 1 && index === 0) {
      setSelectedStars(0);
    } else {
      setSelectedStars(index + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className='flex flex-col text-center'>
      <h1 className='mb-2 text-lg font-semibold'>Rate this picture</h1>
      <div className='flex gap-4'>
        {new Array(5).fill(null).map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer text-4xl ${
              index < selectedStars ? 'text-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {index <= hoveredIndex || index < selectedStars
              ? filledStar
              : emptyStar}
          </span>
        ))}
      </div>
    </div>
  );
};
