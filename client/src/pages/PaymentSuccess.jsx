import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updatePaymentStatus } from '../features/order/orderApi';

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();

  const { orderDetails, loading, orderError } = useSelector(
    (state) => state.order
  );
  console.log(orderDetails);

  useEffect(() => {
    dispatch(updatePaymentStatus(orderId));
  }, [dispatch, orderId]);
  return (
    <div className="w-full flex flex-col gap-8 text-text-200">
      <div className="text-xl font-bold  text-green-600 rounded-md">
        <span>Payment successful. Your order has been placed.</span>
      </div>
      <p className="uppercase font-bold">Order Summary</p>
      {orderId}
    </div>
  );
};

export default PaymentSuccess;
