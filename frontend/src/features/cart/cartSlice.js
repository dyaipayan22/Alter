import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export default cartSlice.reducer;
