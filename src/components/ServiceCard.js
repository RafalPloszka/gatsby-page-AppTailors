import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import * as styles from './ServiceCard.module.scss';

const ServiceCard = ({ path, cardTitle, cardText, imageFileName, imageAlt }) => {
  console.log(imageFileName);
  return (
    <a 
      href={path}
    >
      <div className={styles.serviceCard}>
        <div className={styles.imageWrapper}>
          <Image
            fileName={imageFileName} 
            alt={imageAlt}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>{cardTitle}</div>
          <div className={styles.text}>
            <p>{cardText}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

ServiceCard.propTypes = {
  path: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescritpion: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ServiceCard
