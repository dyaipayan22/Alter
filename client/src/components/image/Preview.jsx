const Preview = ({ images }) => {
  return (
    <div>
      {images.length > 0 &&
        images?.map((image, index) => (
          <div key={index}>
            <img src={image} alt="image" className="h-[200px] w-[150px]" />
          </div>
        ))}
    </div>
  );
};

export default Preview;
