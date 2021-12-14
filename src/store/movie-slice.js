import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  movieQuery: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    initializeMovies(state, action) {
      state.movies = action.payload;
      console.log(state.movies);
    },
    movieSearch(state, action) {
      if (action.payload === '') {
        state.movieQuery = [];
        return;
      }
      state.movieQuery = state.movies.filter((movie) =>
        movie.original_title
          .toUpperCase()
          .includes(`${action.payload.toUpperCase()}`)
      );
      console.log(state.movieQuery);
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
