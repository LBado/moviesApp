import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../Movie/Movie';

import styles from './Main.module.css';

const Main = () => {
  const movies = useSelector((state) => state.movies.movies);
  const movieQuery = useSelector((state) => state.movies.movieQuery);

  console.log('Movies in main');
  console.log(movies);

  const search = movieQuery.length === 0 ? movies : movieQuery;

  return (
    <main className={styles.main}>
      {search.map((movie, index) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          date={movie.release_date}
          rating={movie.vote_average}
          price={movie.price}
        />
      ))}
    </main>
  );
};

export default Main;
