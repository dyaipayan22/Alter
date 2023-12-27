import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/axios';
import { clearCart } from '../cart/cartApi';

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async ({ orderItems, totalPrice }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post('/order/create', {
        orderItems,
        totalPrice,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getOrderDetails = createAsyncThunk(
  'order/getOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get(`/order/${orderId}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updatePaymentStatus = createAsyncThunk(
  'order/updatePaymentStatus',
  async (orderId, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosPrivate.put(
        `/order/${orderId}/updatePayment`
      );
      if (response) {
        dispatch(clearCart());
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
