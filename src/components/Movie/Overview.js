import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user-slice';

import styles from './Overview.module.css';

const Overview = ({
  isSelected,
  title,
  id,
  overview,
  date,
  poster_path,
  price,
}) => {
  const cart = useSelector((state) => state.user.cartMovies);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);


  const dispatch = useDispatch();

  const onRentHandler = (event) => {
    event.preventDefault();
    dispatch(userActions.addMovieToCart({ id, title, date, poster_path, price }));
  };

  const isInCart = cart.find((movie) => movie.id === id);

  return (
    <div className={`${styles.overview} ${isSelected ? styles.selected : ''}`}>
      <h3 className={styles.title}>
        {title} ({date ? date.split('-')[0] : 'Unknown'})
      </h3>
      <h4 className={styles.synopsis}>Synopsis</h4>
      <p className={styles.description}>{overview}</p>
      <div className={styles.actions}>
        {isLoggedIn && <button
          disabled={isInCart}
          onClick={onRentHandler}
          className={styles.rent}
        >
          {isInCart ? 'IN CART' : 'RENT'}
        </button>}
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  );
};

export default Overview;
