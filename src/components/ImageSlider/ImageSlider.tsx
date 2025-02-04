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
    <div>
      <button onClick={goPrevious}>Previous</button>
      {imageArray.map((image, index) => (
        <ImageSlide key={index} src={image} isActive={index === activeIndex} />
      ))}
      <button onClick={goNext}>Next</button>
    </div>
  );
};
