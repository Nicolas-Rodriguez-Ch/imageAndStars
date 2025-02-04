import { ImageSlideProps } from '../../utils/types/Types';

export const ImageSlide = ({ isActive, src }: ImageSlideProps) => {
  return (
    <div style={{ display: isActive ? 'block' : 'none' }}>
      <img src={src} alt='Slide' />
    </div>
  );
};
