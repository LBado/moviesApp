import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import styles from './Modal.module.css';

const Backdrop = ({onCloseCart}) => {
  return <div onClick={onCloseCart} className={styles.backdrop}></div>;
};

const ModalContent = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    console.log('closing cart - backdrop')
    dispatch(uiActions.toggleCart());
  };
  
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={closeCartHandler}/>, modalRoot)}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        modalRoot
      )}
    </React.Fragment>
  );
};

export default Modal;
