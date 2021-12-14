import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { userActions } from '../../store/user-slice';
import Modal from '../Cart/Modal';

import styles from './Login.module.css';

const Login = () => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const dispatch = useDispatch();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const emailIsValid = email.includes('@');

    if (email.trim().length === 0 || !emailIsValid) {
      console.log('invalid email');
      return;
    }
    if (password.trim().length < 5) {
      console.log('Invalid password');
      return;
    }

    dispatch(
      userActions.userLogin({
        email: email.trim(),
        password: password.trim(),
      })
    );

    dispatch(uiActions.toggleCart());
    console.log(email);
    console.log(password);
  };

  return (
    <Modal>
      <h2 className={styles.title}>LOGIN</h2>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <label htmlFor="email">EMAIL</label>
        <input ref={emailInput} id="email" placeholder="Enter email..."></input>
        <label htmlFor="password">PASSWORD</label>
        <input
          ref={passwordInput}
          id="password"
          placeholder="Enter password..."
        ></input>
        <button>Login</button>
      </form>
    </Modal>
  );
};

export default Login;
