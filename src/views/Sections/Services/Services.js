import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Services.module.scss';

const Services = props => {
  return (
    <section id="Services" className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            We craft digital experiences every day.
          </h2>
          <h3 className={styles.subheading}>
            What App can we Tailor for you?
          </h3>
        </div>
      </div>
    </section>
  )
}

Services.propTypes = {

}

export default Services
