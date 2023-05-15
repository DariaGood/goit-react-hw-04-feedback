import React from 'react';
import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options,onLeaveFeedback }) => (
  <div>
   {options.map((option) => (
      <button
        key={option}
        className={`${css.feedbackButton} ${css.feedbackButtonText}`}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;
