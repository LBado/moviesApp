import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import CartButton from '../Cart/CartButton';

import styles from './Header.module.css';
import SearchButton from './SearchButton';

const Header = () => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const login = <button className={styles.login} onClick={loginHandler}>LOGIN TO RENT</button>

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>RENTFLIX</h1>
      <SearchButton/>
      {isLoggedIn ? <CartButton/> : login}
    </div>
  );
};

export default Header;