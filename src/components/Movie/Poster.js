import React from 'react';

import styles from './Poster.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const placeholderImg = 'https://image.tmdb.org/t/p/w500/';

const Poster = ({ title, rating, poster_path }) => {
  return (
    <div className={styles.poster}>
      <img
        alt={title}
        className={styles.img}
        src={placeholderImg + poster_path}
      ></img>
      <span className={styles.rating}>
        <FontAwesomeIcon className={styles.icon} icon={faStar} />
        {rating}
      </span>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Poster;
