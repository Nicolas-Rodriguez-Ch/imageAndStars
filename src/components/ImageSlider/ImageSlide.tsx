import { ImageSlideProps } from '../../utils/types/Types';

export const ImageSlide = ({ src }: ImageSlideProps) => {
  return (
    <div className='flex items-center justify-center w-full h-full p-4'>
      <img
        src={src}
        alt={src}
        className='max-w-full max-h-full object-contain rounded-2xl'
      />
    </div>
  );
};
