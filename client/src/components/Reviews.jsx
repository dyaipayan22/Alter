import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from './ui/Button';
import Radio from './inputs/Radio';
import { reviewProduct } from '../features/product/productApi';

const Reviews = ({ reviews, _id }) => {
  const { authInfo } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      rating: 3,
      comment: '',
    },
  });

  const onSubmit = (data) => {
    const { rating, comment } = data;
    dispatch(reviewProduct({ productId: _id, rating, comment }));
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      <div className="w-full flex flex-col gap-2 lg:w-1/4">
        <p className="text-lg font-semibold">Reviews</p>
        {userInfo &&
        reviews &&
        reviews.find((review) => review.user === userInfo._id) ? (
          <div className="font-medium text-gray-400">
            You have reviewed this product.
          </div>
        ) : (
          <div className=" flex flex-col gap-4">
            <span className="font-medium text-sm">
              How would you rate our product?
            </span>
            <div className="flex items-center justify-between gap-4">
              {[1, 2, 3, 4, 5].map((val) => (
                <Radio id="rating" value={val} register={register} key={val} />
              ))}
            </div>
            <textarea
              placeholder="Write a review"
              rows={4}
              cols={50}
              className="w-full resize-none border outline-none p-2 text-sm"
              {...register('comment')}
            />
            {authInfo === null ? (
              <Button
                label={'Sign In to review'}
                onClick={() => navigate('/sign-in')}
              />
            ) : (
              <Button
                label={'Submit Review'}
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              />
            )}
          </div>
        )}
      </div>
      <div className="grow flex flex-col gap-3">
        <div className="lg:mx-auto">
          <h1 className="text-xl font-medium mb-4">Customer Reviews</h1>
          {reviews &&
            reviews.map((review) => (
              <div className="flex flex-col" key={review._id}>
                <span className="uppercase text-sm font-medium text-gray-500">
                  {review.name}
                </span>
                <span className="font-medium">{review.comment[0]}</span>
                <span className="text-xs text-gray-400">
                  Reviewed on {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

/**
 * {
    defaultValues: {
      review: '',
      rating: 1,
    },
  }
 */
