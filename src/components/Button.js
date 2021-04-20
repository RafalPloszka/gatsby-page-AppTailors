import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './Button.module.scss';

const Button = ({ primary, secondary, className, message, onClick }) => {

  const classes = classNames(
    styles.rootClassName,
    className,
    primary && styles.primary,
    secondary && styles.secondary,
  );

  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      {message}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  message: null,
};

export default Button;
