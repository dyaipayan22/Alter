import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate, axiosPublic } from '../../api/axios';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async ({ page = 1, search = '', sort = {} }, rejectWithValue) => {
    try {
      const params = { page, search, sort };
      const config = { params };
      const response = await axiosPublic.get('/product', config);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(`/product/${productId}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post('/product/add', productData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.put(`/product/${productId}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.delete(`/product/${productId}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const reviewProduct = createAsyncThunk(
  'product/createReview',
  async ({ productId, rating, comment }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post(`/product/${productId}/review`, {
        rating,
        comment,
      });
      if (response) {
        dispatch(fetchProducts());
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
