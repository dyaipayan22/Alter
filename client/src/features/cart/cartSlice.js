import { createSlice } from '@reduxjs/toolkit';
import { addItem, removeItem, clearCart, getItems } from './cartApi';

const initialState = {
  cartItems: null,
  loading: false,
  cartError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.cartError = action.payload;
      })
      .addCase(getItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.loading = false;
        state.cartError = action.payload;
      })
      .addCase(removeItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(removeItem.rejected, (state, action) => {
        state.loading = false;
        state.cartError = action.payload;
      })
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.cartError = action.payload;
      });
  },
});

export default cartSlice.reducer;
