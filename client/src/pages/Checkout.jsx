import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../features/cart/cartApi';

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return <div>Checkout</div>;
};

export default Checkout;
