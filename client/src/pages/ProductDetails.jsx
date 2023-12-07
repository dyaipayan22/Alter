import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Radio from '../components/inputs/Radio';
import Button from '../components/ui/Button';
import { fetchProduct } from '../features/product/productApi';
import Counter from '../components/inputs/Counter';
import Gallery from '../components/image/Gallery';
import Rating from '../components/Rating';
import { addItem } from '../features/cart/cartApi';

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
    image,
    rating,
    numReviews,
    price,
    variants,
    description,
    stock,
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

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const buyNow = async (values) => {
    // await dispatch(addToCart({ product: productId, quantity }));
    // navigate('/checkout');
    console.log(values);
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
    <div className="w-full flex flex-col gap-8">
      {/**Product Details */}
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4">
          {/**Image Gallery */}
          <div className="w-full lg:w-1/2">
            <Gallery />
          </div>

          {/**Details */}
          {/* <div className="grow "> */}
          <div className="grow flex flex-col gap-6 px-4 py-8">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold">{name}</span>
              <div className="w-full flex items-center gap-4">
                <span>{rating}</span>
                <span>{numReviews}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span>Choose Size:</span>
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

            <div className="flex flex-col gap-2">
              <span>{description}</span>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="grow flex flex-col gap-6 bg-white px-4 py-8 shadow-sm rounded-[6px]">
          <div className="flex flex-col gap-2 font-bold">Set Order</div>
          <div className="w-full flex items-center gap-4">
            {/* <img src={image[0]} alt={name} className="w-16 h-12 object-cover" /> */}

            {size && (
              <div className="flex flex-col gap-1">
                <span>Selected size</span>
                <span>{size}</span>
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center justify-between">
            <Counter
              value={quantity}
              maxValue={stock}
              onChange={(value) => setCustomValue('quantity', value)}
            />
            <span>
              Stock: <span className="font-bold">{stock}</span>
            </span>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <span>Total Price:</span>
            <span className="font-bold text-xl">&#8377;{price}</span>
          </div>

          {authInfo ? (
            <div className="flex flex-col gap-2">
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

      {/**Reviews and Ratings */}
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="font-bold">Reviews & Ratings</span>
          <div className="w-1/2 flex flex-col gap-2">
            <div className="w-full flex items-center flex-wrap">
              {rating > 0 ? (
                <>
                  {' '}
                  <span className="text-6xl">{rating}</span>
                  <span>/5</span>
                </>
              ) : (
                <span>No ratings</span>
              )}
            </div>
            <Rating value={rating} />

            <span>
              {numReviews > 0
                ? `${numReviews} Reviews`
                : 'Be the first one to review'}
            </span>
          </div>
        </div>
        <div className="grow">Reviews</div>
      </div>
    </div>
  );
};

export default ProductDetails;
