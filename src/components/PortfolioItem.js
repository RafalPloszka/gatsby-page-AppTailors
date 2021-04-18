import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './Image';
import Button from './Button';

import * as styles from './PortfolioItem.module.scss';

const PortfolioItem = ({ reversed, title, imageFileName, imageAlt, description, link }) => {

  return (
    <div className={classNames(styles.portfolioItem, reversed && styles.reversed)}>
      <div className={styles.imageWrapper}>
        <Image fileName={imageFileName} alt={imageAlt}/>
      </div>
      <div className={styles.caption}>
        <h3 className={styles.header}>{title}</h3>
        <p>{description}</p>
        <Button
          className={styles.button}
          message="Read success story &nbsp; &nbsp; &nbsp; &nbsp; ⟶"
          internalLink="/TEST"
          secondary
        />
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  reversed: PropTypes.bool,
  title: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}

export default PortfolioItem
