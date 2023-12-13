import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { getItems } from '../features/cart/cartApi';
import CartCardSkeleton from '../components/skeleton/CartCardSkeleton';
import CartCard from '../components/cards/CartCard';
import Button from '../components/ui/Button';
import { axiosPrivate } from '../api/axios';

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, loading, cartError } = useSelector((state) => state.cart);

  const handlePayment = async () => {
    try {
      const { data } = await axiosPrivate.post(
        '/payment/create-checkout-session',
        {
          cartItems,
        }
      );
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/5 flex flex-col gap-4 text-center">
        <div className="hidden md:grid grid-cols-5 text-sm font-semibold uppercase">
          <p className="col-span-2 text-left">Product DETAILS</p>
          <p>SIZE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        <div className="hidden md:block border" />

        {loading ? (
          <CartCardSkeleton />
        ) : (
          cartItems &&
          cartItems?.map((item, index) => <CartCard {...item} key={index} />)
        )}
      </div>
      <div className="grow flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase">Detail Summary</h2>
        <div className="hidden md:block border" />
        <div className="flex flex-col gap-2 p-4 bg-white rounded-md">
          <div className=" grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2 font-medium">
              <span>Subtotal Products</span>
              <span>Delivery Charges</span>
              <span>Taxes</span>
            </div>

            <div className="flex flex-col gap-2 text-right font-bold">
              <span>
                Rs.{' '}
                {cartItems &&
                  cartItems
                    .reduce(
                      (acc, item) => acc + item.quantity * item.product.price,
                      0
                    )
                    .toFixed(2)}
              </span>
              <span>Free</span>
              <span>Rs. 0</span>
            </div>
          </div>
          <div className="border mb-2" />
          <div className="flex items-center justify-between text-xl">
            <span className="font-medium">Total</span>
            <span className="font-bold">
              Rs.{' '}
              {cartItems &&
                cartItems
                  .reduce(
                    (acc, item) => acc + item.quantity * item.product.price,
                    0
                  )
                  .toFixed(2)}
            </span>
          </div>
        </div>
        <Button label={'Proceed to Pay'} onClick={handlePayment} />
      </div>
    </div>
  );
};

export default Cart;
