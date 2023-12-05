import { configureStore } from '@reduxjs/toolkit';

import authSlice from './features/auth/authSlice';
import userSlice from './features/user/userSlice';
import productSlice from './features/product/productSlice';
import cartSlice from './features/cart/cartSlice';
import orderSlice from './features/order/orderSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
