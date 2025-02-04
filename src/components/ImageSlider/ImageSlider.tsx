import { useState } from 'react';
import { ImageSlide } from './ImageSlide';
const images = import.meta.glob('../../assets/*.jpg', { eager: true });

const imageArray = Object.values(images).map(
  (module) => (module as { default: string }).default
);

export const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % imageArray.length);
  };

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  return (
    <div className='relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden flex items-center justify-center'>
      <button
        onClick={goPrevious}
        className='absolute cursor-pointer left-2 sm:left-4 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10'
      >
        &#10094; {}
      </button>

      {imageArray.map((image, index) => (
        <ImageSlide key={index} src={image} isActive={index === activeIndex} />
      ))}

      <button
        onClick={goNext}
        className='absolute cursor-pointer right-2 sm:right-4 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10'
      >
        &#10095; {}
      </button>
    </div>
  );
};
