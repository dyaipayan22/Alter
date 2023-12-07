import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosPublic } from '../../api/axios';
import { getUserProfile } from '../user/userApi';

export const login = createAsyncThunk(
  'auth/login',
  async (loginData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosPublic.post('/auth', loginData, {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      });
      dispatch(getUserProfile());
      localStorage.setItem(
        'access_token',
        JSON.stringify(response?.data?.accessToken)
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
