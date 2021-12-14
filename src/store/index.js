import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie-slice';
import uiReducer from './ui-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    ui: uiReducer,
    user: userReducer,
  },
});

export default store;
