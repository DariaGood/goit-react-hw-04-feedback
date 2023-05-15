import React from 'react';
import PropTypes from 'prop-types';
function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total !== undefined ? total : 0}</p>
          <p>
            Positive feedback:{' '}
            {positivePercentage !== undefined
              ? positivePercentage > 0
                ? `${positivePercentage}%`
                : '0%'
              : '0%'}
          </p>
        </div>
    
  
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}

export default Statistics;
