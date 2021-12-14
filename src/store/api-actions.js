import { movieActions } from './movie-slice';
import { uiActions } from './ui-slice';

const apiKey = 'ea82bb5732a9027da04300b3e982fd88';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const page = '&page=';
export const fetchMovies = (pageNum = '') => {
  return async (dispatch) => {
    console.log('Dispatching DATA');
    dispatch(
      uiActions.showNotification({
        status: '',
        title: 'WORKING',
        description: 'Fetching movies from database!',
      })
    );
    const fetchData = async () => {
      const response = await fetch(apiUrl + page + pageNum);

      if (!response.ok) {
        throw new Error('Response failed');
      }

      const data = await response.json();

      return data;
    };

    try {
      const movieData = await fetchData();
      for (const movie of movieData.results) {
        movie.price = +(Math.random() * (4.99 - 0.99 + 1) + 0.99).toFixed(2);
      }
      dispatch(movieActions.initializeMovies(movieData.results));
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'SUCCESS',
          description: 'Movies fetched successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'ERROR',
          description: 'Fetching movies failed',
        })
      );
      console.log(error);
    }
  };
};
