import React from 'react';
import styles from './PlantInfoCard.module.scss';

const plantInfoCard = (props) => {
  return (
    <div className={styles.PlantInfoCard}>
      <div>
        <img src={props.photo} alt="" />
      </div>
      <h3 className={styles.Heading}>{props.heading}</h3>
      <p className={styles.Paragraph}>{props.info}</p>
    </div>
  );
};

export default plantInfoCard;
