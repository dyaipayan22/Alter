import { useForm } from 'react-hook-form';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

import Radio from '../components/inputs/Radio';
import Button from '../components/ui/Button';
import Counter from '../components/inputs/Counter';
import Gallery from '../components/image/Gallery';
import Rating from '../components/Rating';
import { addItem } from '../features/cart/cartApi';
import Reviews from '../components/Reviews';
import Input from '../components/inputs/Input';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { productId } = useParams();

  const { productInfo, loading, productError } = useSelector(
    (state) => state.product
  );
  const authInfo = useSelector((state) => state.auth.authInfo);

  const {
    _id,
    name,
    images,
    brand,
    rating,
    numReviews,
    price,
    variants,
    description,
    stock,
    reviews,
  } = productInfo;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      size: '',
      quantity: 1,
      review: '',
    },
  });

  const size = watch('size');
  const quantity = watch('quantity');

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const buyNow = async (values) => {
    const { quantity, size } = values;
    const response = await dispatch(
      addItem({ product: _id, quantity, size })
    ).unwrap();
    if (response) {
      setTimeout(() => {
        navigate('/checkout');
      }, 300);
    }
  };

  const addToBag = async () => {
    const response = await dispatch(
      addItem({ productId, quantity, size })
    ).unwrap();
    if (response) {
      toast.success('Item added to cart!');
    } else {
      toast.error('Something went wrong!');
    }
  };

  if (loading) {
    return <div className="text-7xl">Loading</div>;
  }

  return (
    <div className="w-full flex flex-col gap-8 bg-white text-text-200">
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <Gallery images={images} className="w-full lg:w-2/4" />
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold">{brand}</span>
          <span className="text-lg font-medium text-gray-500 leading-6 mb-2">
            {name}
          </span>
          <div className="border-[2px] border-background-300/30 max-w-fit flex items-center gap-1 text-sm font-medium py-0.5 px-1.5 mb-2">
            <div className="flex items-center gap-1">
              {rating}
              <FaStar className="w-4 h-4 text-accent-100" />
            </div>
            <span className="">
              | {numReviews >= 1000 ? numReviews / 1000 + 'k' : numReviews}{' '}
              Reviews
            </span>
          </div>
          <hr />
          <p className="font-medium">{description}</p>
          <span className="before:content-['Rs._'] mt-2 text-xl font-bold">
            {price}
          </span>
          <span className="text-accent-100 font-semibold text-sm mb-4">
            Inclusive of all taxes
          </span>
          <div className="flex flex-col gap-4 mb-4">
            <span className="uppercase font-bold">Select Size</span>
            <div className="flex items-center gap-4">
              {variants?.map((item) => (
                <Radio
                  id="size"
                  value={item.size}
                  register={register}
                  key={item.size}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <span className="uppercase font-bold">Select Quantity</span>
            <Counter
              value={quantity}
              maxValue={stock}
              onChange={(value) => setCustomValue('quantity', value)}
            />
          </div>
          {authInfo ? (
            <div className="w-full flex items-center gap-2">
              <Button label="Buy Now" onClick={handleSubmit(buyNow)} />
              <Button
                label="Add to Bag"
                variant="outline"
                onClick={handleSubmit(addToBag)}
              />
            </div>
          ) : (
            <Button
              label={'Sign in to proceed'}
              onClick={() =>
                navigate('/sign-in', {
                  state: { from: location },
                  replace: true,
                })
              }
            />
          )}
        </div>
      </div>
      <hr />
      <Reviews reviews={reviews} _id={_id} />
    </div>
  );
};

export default ProductDetails;
