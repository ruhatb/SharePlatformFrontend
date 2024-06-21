import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asenkron işlemleri tanımlıyoruz. Kullanıcı verilerini API'den alıyoruz.
export const login = createAsyncThunk('users/login', async (userData) => {
  const response = await axios.post('/api/login', userData);
  return response.data;
});

export const register = createAsyncThunk('users/register', async (userData) => {
  const response = await axios.post('/api/register', userData);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    status: 'idle',
    error: null,
  },
  reducers: { 
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
