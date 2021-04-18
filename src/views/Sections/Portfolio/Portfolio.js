import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../../../components/Banner';

import * as styles from './Portfolio.module.scss';

const Portfolio = props => {
  return (
    <section id="Portfolio" className={styles.pageSection}>
      <section>
        <Banner 
          position="top"
          version="text"
          title="Applications built for"
          boldText="you"
          caption="Our remote based team builds digital products from start to finish - offering design consulting, tools and resources to companies in a variety industries and sizes - to deliver beautifully built applications in a way that's fast, functional and easily maintained."
        />
      </section>

      <section className={styles.container}>

      </section>

      <section>
        <Banner 
          position="bottom"
          version="button"
          title="Ready to"
          boldText="talk shop?"
          caption="Contact us &nbsp; &nbsp; &nbsp; &nbsp; ⟶"
          buttonClassName={styles.bannerButton}
        />
      </section>

    </section>
  )
}

Portfolio.propTypes = {

}

export default Portfolio
