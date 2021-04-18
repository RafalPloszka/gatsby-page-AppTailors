import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

import * as styles from './Banner.module.scss';

const Banner = ({ position, version, title, boldText, caption, buttonClassName}) => {

  const classes = classNames(
    styles.banner,
    position === 'top' && styles.top,
    position === 'bottom' && styles.bottom
  );

  return (
    <div className={classes}>
      <div className={styles.content}>
        <div className={styles.title}>
          {title}&nbsp;<span className={styles.boldText}>{boldText}</span>
        </div>
        {version === 'text' &&
          <div className={styles.caption}>
            {caption}
          </div>
        }
        {version === 'button' &&
          <div className={styles.button}>
            <Button 
              message={caption} 
              className={buttonClassName}
              primary
            />
          </div>
        }
      </div>
      
    </div>
  )
}

Banner.propTypes = {
  position: PropTypes.string,
  version: PropTypes.string,
  title: PropTypes.string, 
  boldText: PropTypes.string, 
  caption: PropTypes.string,
  buttonClassName: PropTypes.string
}

export default Banner
