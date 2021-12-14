import React from 'react';

import styles from './Notification.module.css';

const Notification = ({ status, title, description }) => {
  let special = '';

  if (status === 'error') {
    special = styles.error;
  }

  if (status === 'success') {
    special = styles.success;
  }

  const classes = `${styles.notification} ${special}`;

  return (
    <section className={classes}>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default Notification;
