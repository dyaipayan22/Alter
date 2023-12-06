import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate, axiosPublic } from '../../api/axios';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, rejectWithValue) => {
    try {
      const response = await axiosPublic.get('/product');
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
