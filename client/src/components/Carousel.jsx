import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { PiDotOutlineDuotone, PiDotOutlineFill } from 'react-icons/pi';

const images = [{ url: 'BannerImg1.jpeg' }, { url: 'BannerImg2.jpeg' }];

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const prevImage = () => {
    const index = currIndex === 0 ? images.length - 1 : currIndex - 1;
    setCurrIndex(index);
  };

  const nextImage = () => {
    const index = currIndex === images.length - 1 ? 0 : currIndex + 1;
    setCurrIndex(index);
  };

  const selectImage = (index) => {
    setCurrIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currIndex]);

  return (
    <div className="max-w-[1400px] h-[360px] lg:h-[720px] w-full m-auto pb-16 relative group">
      <div
        style={{ backgroundImage: `url(${images[currIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      />

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevImage} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextImage} size={30} />
      </div>
      <div className="flex gap-3 top-4 justify-center py-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => selectImage(index)}
            className="text-3xl cursor-pointer text-gray-500"
          >
            {index === currIndex ? (
              <PiDotOutlineFill />
            ) : (
              <PiDotOutlineDuotone />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
