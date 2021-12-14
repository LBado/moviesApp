import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import styles from './CartButton.module.css';

const CartButton = () => {

  const items = useSelector(state => state.user.cartMovies);

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    console.log('opening cart')
    dispatch(uiActions.toggleCart());
  }

  return (
    <button onClick={toggleCartHandler} className={styles.button}>
      <span className={styles.title}>Cart</span>
      <span className={styles.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;