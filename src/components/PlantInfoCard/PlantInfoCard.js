import React from 'react';
import styles from './PlantInfoCard.module.scss';

const plantInfoCard = ({ photo, heading, info }) => {
  return (
    <div className={styles.PlantInfoCard}>
      <div>
        <img src={photo} alt="" />
      </div>
      <h3 className={styles.Heading}>{heading}</h3>
      <p className={styles.Paragraph}>{info}</p>
    </div>
  );
};

export default plantInfoCard;
