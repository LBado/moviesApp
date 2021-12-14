import React, { useState } from 'react';

import styles from './Movie.module.css';
import Overview from './Overview';
import Poster from './Poster';

const Movie = ({ id, title, overview, poster_path, date, rating, price }) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectHandler = () => {
    if (isSelected) {
      setIsSelected(false);
      return;
    }
    setIsSelected(true);
  };

  return (
    <div
      onClick={selectHandler}
      className={`${styles.movie} ${isSelected ? styles.selected : ''}`}
    >
      <Poster title={title} rating={rating} poster_path={poster_path} />
      <Overview
        poster_path={poster_path}
        title={title}
        id={id}
        overview={overview}
        date={date}
        price={price}
        isSelected={isSelected}
      />
    </div>
  );
};

export default Movie;
