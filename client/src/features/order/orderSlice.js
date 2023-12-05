import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isError: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export default orderSlice.reducer;
