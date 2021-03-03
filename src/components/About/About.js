import { defineLocale } from 'moment';
import React from 'react';
import styles from './About.module.scss';

const aboutPage = (props) => {
  return (
    <div className={styles.AboutPageContainer}>
      <div className={styles.AboutPageHeader}>
        <h3>About us</h3>
      </div>
      <div className={styles.AboutPageText}>
        <p>
          We are plant enthusiasts, and we've taken our love of plants
          and their well-being to the next level.
        </p>
        <p>
          We have created this small app to help you better care for
          your plants by providing the best information the world wide
          web has to offer in terms of watering, lighting
          requirements, plant deseases, blossoming times and much
          more...
        </p>
        <p>
          Feel free to contact us for any questions, recommendations,
          advice or simply to thank us! A pat on the back goes a long
          way!
        </p>
      </div>
    </div>
  );
};

export default aboutPage;
