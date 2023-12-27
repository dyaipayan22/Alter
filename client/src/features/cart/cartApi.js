import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/axios';

export const addItem = createAsyncThunk(
  'cart/addItem',
  async ({ product, quantity, size }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post('/cart/add', {
        product,
        quantity,
        size,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  'cart/removeItem',
  async (product, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.put('/cart/remove', {
        product,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.put('/cart/clear');
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getItems = createAsyncThunk(
  'cart/getItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get('/cart');
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
