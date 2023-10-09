import { Link } from 'react-router-dom';
import image1 from '../../../public/image.jpg';

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
    <div className="bg-white p-2 rounded-md">
      <Link to={`/${name}/${_id}`}>
        <div className="flex flex-col">
          <img src={image1} alt={name} className="object-cover" />
          <div className="p-4 bg-white">
            <span>{name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
