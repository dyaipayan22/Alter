import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <div className="bg-white rounded-md items-center">
      <div className="flex flex-col w-full" onClick={handleClick}>
        <img
          src={image1}
          alt={name}
          className="w-[210px] h-[280px] object-cover"
        />
        <div className="p-4 bg-white">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
