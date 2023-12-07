import { Link } from 'react-router-dom';
import image1 from '/src/assets/image.jpg';

const ProductCard = ({
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
}) => {
  return (
    <div className="bg-white rounded-md items-center">
      <Link to={`/${name}/${_id}`}>
        <div className="flex flex-col w-full">
          <img
            src={image1}
            alt={name}
            className="w-[210px] h-[280px] object-cover"
          />
          <div className="p-4 bg-white">
            <span>{name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
