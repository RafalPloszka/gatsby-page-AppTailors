import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../../components/Image';
import Button from '../../components/Button';

import * as styles from './Header.module.scss';


const Header = props => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.headerContent, styles.container)}>
        <div className={styles.imageWrapper}>
          <Image 
            // className={styles.}
            fileName={"graphic-apptailors.jpg"}
            alt="main graphic"  
          />
        </div>
        <div className={styles.introText}>
          <h1 className={styles.introTitle}>
            Your <strong>Tailor Made</strong> Software
          </h1>
          <p className={styles.introLead}>
            Bringing business ideas to life through the use of technology and design.
          </p>
          <Button
            className={styles.button}
            message={'BROWSE NOW'}
            onClick={() => console.log('CLICK!')}
            primary
            internalLink="#Services"
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {

}

export default Header
