import React from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../store/movie-slice';

import styles from './SearchButton.module.css';

const SearchButton = () => {

  const dispatch = useDispatch();
  
  const onChangeHandler = (event) => {
    //vpišeš 
    //filtriraš obstoječi array
    //narediš nov array in replaceaš star array
    //dispatch event.target.value
    dispatch(movieActions.movieSearch(event.target.value));
  };

  return (
    <form className={styles['form-control']}>
      <input onChange={onChangeHandler} className={styles.input} type='text' placeholder='Search...'></input>
    </form>
  );
};

export default SearchButton;