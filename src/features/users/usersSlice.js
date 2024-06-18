import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersAPI from './usersAPI';

export const login = createAsyncThunk('users/login', async (credentials) => {
  const response = await usersAPI.login(credentials);
  return response.data;
});

export const register = createAsyncThunk('users/register', async (credentials) => {
  const response = await usersAPI.register(credentials);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isAuthenticated: false,
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      });
  },
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
