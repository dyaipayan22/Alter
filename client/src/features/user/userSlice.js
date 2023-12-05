import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './userApi';

const initialState = {
  userInfo: null,
  loading: false,
  userError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.userError = action.payload;
      });
  },
});

export default userSlice.reducer;
