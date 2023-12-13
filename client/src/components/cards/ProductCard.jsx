import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import image1 from '/src/assets/image.jpg';
import { selectedProduct } from '../../features/product/productSlice';

const ProductCard = (product) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    _id,
    name,
    image,
    category,
    brand,
    gender,
    variants,
    description,
    rating,
    numReviews,
    price,
    stock,
    reviews,
  } = product;

  const handleClick = () => {
    dispatch(selectedProduct(product));
    navigate(`/${name}/${_id}`);
  };

  return (
    <div className="w-[210px] overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 bg-white">
      <div className="relative flex flex-col" onClick={handleClick}>
        <img
          src={image1}
          alt={name}
          className=" w-[210px] h-[280px] object-cover"
        />
        <div className="flex flex-col p-2">
          <span className="font-semibold">{brand}</span>
          <span className="text-sm truncate text-gray-500 mb-1">{name}</span>
          <span className="before:content-['Rs._'] font-bold text-sm">
            {price}
          </span>
        </div>

        <div className="absolute top-[240px] left-4 bg-white/70 rounded-sm">
          <div className=" flex items-center">
            <span className="text-xs font-semibold p-1">{rating}</span>
            <FaStar className="w-3 h-3 text-accent-100" />
            <span className="before:content-['|_'] text-xs font-semibold p-1">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
