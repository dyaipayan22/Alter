import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosPublic } from '../../api/axios';

export const login = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post('/auth', loginData, {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      });
      localStorage.setItem(
        'access_token',
        JSON.stringify(response?.data?.accessToken)
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
