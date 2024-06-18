import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postsAPI from './postAPI';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await postsAPI.fetchPosts();
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default postsSlice.reducer;
