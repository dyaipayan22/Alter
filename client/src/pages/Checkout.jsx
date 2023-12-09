import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../features/cart/cartApi';

const Checkout = () => {
  const dispatch = useDispatch();

  const { cartItems, loading, cartError } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (loading) {
    return <div className="text-4xl">Loading...</div>;
  }

  return (
    <div>
      {cartItems &&
        cartItems?.map((item, index) => (
          <div key={index}>
            <span>{item.product.name}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
    </div>
  );
};

export default Checkout;
