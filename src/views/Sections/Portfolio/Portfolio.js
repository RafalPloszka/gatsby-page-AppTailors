import React from 'react';

import Banner from '../../../components/Banner';
import PortfolioItem from '../../../components/PortfolioItem';

import * as styles from './Portfolio.module.scss';

const Portfolio = () => {
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
        <PortfolioItem
          title="Met Office"
          imageFileName="mockup-metoffice.jpg"
          imageAlt="Met Office photo"
          description="Weather information available just when you need it." 
          link={null}
        />
        <PortfolioItem
          reversed
          title="The Telegraph"
          imageFileName="mockup-thetelegraph.jpg"
          imageAlt="The Telegraph photo"
          description="Delivering The Telegraph's extensive editorial content to readers on mobile." 
          link={null}
        />
        <PortfolioItem
          title="Vagus"
          imageFileName="mockup-vagus.jpg"
          imageAlt="Vagus photo"
          description="A scientific project that turned into a product." 
          link={null}
        />
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

export default Portfolio;
