import React from 'react';

import styles from './CartMovie.module.css';

const placeholderImg = 'https://image.tmdb.org/t/p/w500/';

const CartMovie = ({id, title, date, poster_path, price}) => {
  return (
    <div className={styles.movie}>
      <img alt={title} className={styles.img} src={placeholderImg + poster_path}></img>
      <div className={styles.overview}>
        <h2 className={styles.title}>{title} ({date.split('-')[0]})</h2>
        <h3 className={styles.price}>${price}</h3>
      </div>
    </div>
  );
};

export default CartMovie;