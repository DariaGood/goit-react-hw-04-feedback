import React from 'react';
import css from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div><h2>Statistics</h2>
  <h3 className={css.notification}>{message}</h3>
    </div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification;
