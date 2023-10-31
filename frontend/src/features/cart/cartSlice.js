import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: null,
  loading: false,
  isError: null,
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ product, quantity }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.userInfo.accessToken;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        'http://localhost:8000/cart/add',
        { product, quantity },
        config
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.isError = action.payload;
      });
  },
});

export default cartSlice.reducer;
