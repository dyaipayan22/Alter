import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate, axiosPublic } from '../../api/axios';
import { login } from '../auth/authApi';

export const registerUser = createAsyncThunk(
  'user/register',
  async (registerData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosPublic.post('/user', registerData);
      if (response) {
        const loginData = {
          email: registerData.email,
          password: registerData.password,
        };
        dispatch(login(loginData));
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'user/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get('/user/profile');
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
