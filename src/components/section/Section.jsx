import React from 'react';
import css from './sectionTitle.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h1 className={css.sectionTitle}>{title}</h1>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section;
