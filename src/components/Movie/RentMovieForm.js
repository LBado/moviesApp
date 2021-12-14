import React from 'react';

import styles from './RentMovieForm.module.css';

const RentMovieForm = ({isSelected}) => {
  return (
    <div className={`${styles.form} ${isSelected ? styles.selected : ''}`}>
      <label className={styles.label} htmlFor="amount">Tickets</label>
      <input className={styles.input}
        type="number"
        id="amount"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      ></input>
      <button className={styles.button} type="button">
        Buy ticket
      </button>
    </div>
  );
};

export default RentMovieForm;
