import React from 'react';

import styles from './Button.module.css';

const Button = ({disabled, onClick, children, fontColor, hoverBgColor, hoverBgOpacity, bgOpacity, bgColor}) => {

  // const style = {
  //   '--bgColor': {bgColor},
  //   '--bgOpacity': {bgOpacity},
  //   '--fontColor': {fontColor},
  //   '--hoverBgColor': {hoverBgColor},
  //   '--hoverBgOpacity': {hoverBgOpacity}
  // }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.button}
      // style={style}
    >
      {children}
    </button>
  );
};

export default Button;
