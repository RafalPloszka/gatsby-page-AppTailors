import React from 'react';

import ServiceCard from '../../../components/ServiceCard';

import * as styles from './Services.module.scss';

const Services = () => {
  return (
    <section id="Services" className={styles.pageSection}>
      <div className={styles.container}>

        <div className={styles.row}> 
          <div className={styles.header}>
            <h2 className={styles.heading}>
              We craft digital experiences every day.
            </h2>
            <h3 className={styles.subheading}>
              What App can we Tailor for you?
            </h3>
          </div>
        </div>
        
        <div className={styles.row}> 
          <div className={styles.column}>
            <ServiceCard 
              path="https://github.com/RafalPloszka"
              cardTitle="Product Design"
              cardText="Everything is provided to make sure the resulting product will be the one you expected."
              imageFileName="graphic-product-design.jpg"
              imageAlt="product design graphic"
            />
          </div>
          <div className={styles.column}>
            <ServiceCard 
              path="https://github.com/RafalPloszka"
              cardTitle="Mobile Development"
              cardText="Our team creates successful mobile applications for startups and companies."
              imageFileName="graphic-mobile-development.jpg"
              imageAlt="mobile dev graphic"
            />
          </div>
          <div className={styles.column}>
            <ServiceCard 
              path="https://github.com/RafalPloszka"
              cardTitle="Web development"
              cardText="We develop complex web applications tailored to the exact needs of our clients."
              imageFileName="graphic-web-development.jpg"
              imageAlt="web dev graphic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
