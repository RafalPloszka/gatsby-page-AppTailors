import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import * as styles from './Button.module.scss';

const Button = ({ className, message, onClick }) => {

  return (
    <button 
      className={classNames(styles.rootClassName, styles.primary, className)}
      onClick={onClick}
    >
      {message}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  message: null,
};

export default Button
