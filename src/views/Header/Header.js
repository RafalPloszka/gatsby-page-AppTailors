import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import Image from '../../components/Image';
import Button from '../../components/Button';

import * as styles from './Header.module.scss';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.headerContent, styles.container)}>
        <div className={styles.imageWrapper}>
          <Image 
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
          <Link 
            to="Services" 
            spy 
            smooth="easeInOutQuart"
          >
            <Button
              className={styles.button}
              message={'BROWSE NOW'}
              primary
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
