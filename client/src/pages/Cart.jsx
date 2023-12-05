import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../features/cart/cartApi';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="border right-0 bottom-0 w-screen h-screen z-[200]">
      <span className="text-4xl text-blue-700">Cart</span>
    </div>
  );
};

export default Cart;
