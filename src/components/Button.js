import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { Link } from 'gatsby';

import * as styles from './Button.module.scss';

const Button = ({ primary, secondary, className, message, internalLink, externalLink, onClick }) => {

  const classes = classNames(
    styles.rootClassName,
    className,
    primary && styles.primary,
    secondary && styles.secondary,
  );

  const buttonContent = (
    <button 
      className={classes}
      onClick={onClick}
    >
      {message}
    </button>
  );

  if (internalLink) {
    return (
      <Link to={internalLink}>
        {buttonContent}
      </Link>
    )
  }

  if (externalLink) {
    return (
      <a href={externalLink}>
        {buttonContent}
      </a>
    )
  }

  return buttonContent;
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

export default Button
