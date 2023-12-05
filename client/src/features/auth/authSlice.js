import { createSlice } from '@reduxjs/toolkit';
import { login } from './authApi';

const initialState = {
  authInfo: null,
  loading: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.authInfo.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.authError = action.payload;
      });
  },
});

export const selectAuthInfo = (state) => state.authInfo;

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
