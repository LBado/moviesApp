import React from 'react';
import { useSelector } from 'react-redux';
import CartMovie from './CartMovie';
import Modal from './Modal';

import styles from './Cart.module.css';

const Cart = () => {
  const cart = useSelector((state) => state.user.cartMovies);
  const total = useSelector((state) => state.user.cartTotal);

  return (
    <Modal>
      <div className={styles.cart}>
        <h2 className={styles.cartTitle}>CART</h2>
        {cart.map((movie, index) => (
          <CartMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            date={movie.date}
            poster_path={movie.poster_path}
            price={movie.price}
          />
        ))}
        <div className={styles.sum}>
          <h3>Total:</h3>
          <h2>${total.toFixed(2)}</h2>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
