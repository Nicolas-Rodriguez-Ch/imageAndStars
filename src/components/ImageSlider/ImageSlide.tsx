import { ImageSlideProps } from '../../utils/types/Types';

export const ImageSlide = ({ isActive, src }: ImageSlideProps) => {
  return (
    <div
      className={`absolute inset-0 m-4 transition-opacity duration-700 flex items-center justify-center ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={src}
        alt='Slide'
        className='max-w-full max-h-full object-contain rounded-2xl'
      />
    </div>
  );
};
