import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
