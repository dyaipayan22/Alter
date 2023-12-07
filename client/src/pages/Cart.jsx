import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../features/cart/cartApi';
import CartCard from '../components/cards/CartCard';

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, loading, cartError } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (loading) {
    return <div className="text-4xl">Loading</div>;
  }
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-4/5">
        {cartItems &&
          cartItems?.map((item, index) => (
            <div key={index}>
              <CartCard {...item} />
            </div>
          ))}
      </div>
      <div className="grow">Price</div>
    </div>
  );
};

export default Cart;
