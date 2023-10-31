import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userInfo: null,
  loading: false,
  isError: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const response = await axios.post(
        'http://localhost:8000/auth',
        loginData,
        config
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isError = action.payload;
      });
  },
});

export const selectUserInfo = (state) => state.userInfo;

export default authSlice.reducer;
