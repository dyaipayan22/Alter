import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

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
    <div className="w-[210px] rounded-md border-2 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 bg-white">
      <div className="flex flex-col" onClick={handleClick}>
        <img
          src={image1}
          alt={name}
          className="w-[210px] h-[280px] object-cover"
        />
        <div className="flex flex-col p-2">
          <span className="text-xs">
            {category} | {gender}
          </span>
          <span className="font-bold text-sm truncate mb-1">{name}</span>

          <div className="flex items-center justify-between">
            <span className="font-bold">Rs. {price}</span>
            <div className="flex items-center gap-0.5">
              <span>{rating}</span>
              <Star className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
