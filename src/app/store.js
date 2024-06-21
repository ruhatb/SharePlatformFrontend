import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import postsReducer from '../features/posts/postSlice'; 

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
