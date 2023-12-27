import { useState } from 'react';
import { cn } from '../../lib/utils';

const Gallery = ({ images, className }) => {
  const [currImage, setCurrImage] = useState(0);
  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row gap-4 justify-center',
        className
      )}
    >
      <div className="flex lg:flex-col gap-4">
        {images.map((image, index) => (
          <img
            src={image.secureUrl}
            className={cn(
              'w-24 h-24 object-cover cursor-pointer',
              index === currImage &&
                'border ring-2 ring-offset-2 ring-text-200/30'
            )}
            alt="Image"
            key={image.publicId}
            onClick={() => setCurrImage(index)}
          />
        ))}
      </div>
      <img src={images[currImage].secureUrl} className="lg:w-1/2" />
    </div>
  );
};

export default Gallery;
