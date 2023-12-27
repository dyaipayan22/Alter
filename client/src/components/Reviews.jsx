import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Button from './ui/Button';
import Radio from './inputs/Radio';
import { reviewProduct } from '../features/product/productApi';

const Reviews = ({ reviews, _id }) => {
  const dispatch = useDispatch();
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
    <div className="w-full flex flex-col gap-2">
      <p className="text-lg font-semibold">Reviews</p>
      <div className="w-full lg:w-1/4 flex flex-col gap-4">
        <span className="font-medium text-sm">
          How would you rate our product?
        </span>
        <div className="flex items-center gap-4">
          {[1, 2, 3, 4, 5].map((val) => (
            <Radio id="rating" value={val} register={register} key={val} />
          ))}
        </div>
        <textarea
          placeholder="Write a review"
          rows={4}
          cols={50}
          className="resize-none border outline-none p-2 w-full text-sm"
          {...register('comment')}
        />
        <Button
          label={'Submit Review'}
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
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
