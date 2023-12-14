import { createSlice } from '@reduxjs/toolkit'
import { registerUser, logIn, logOut, refreshUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
    isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
    },
    [registerUser.fulfilled](state, action) {
      state.isLoading = false;
    },
    [registerUser.rejected](state) {
      state.isLoading = false;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state) {
      state.isLoading = false;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logIn.rejected](state) {
      state.isLoading = false;
    },
    [refreshUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
})

export const authReducer = authSlice.reducer;
