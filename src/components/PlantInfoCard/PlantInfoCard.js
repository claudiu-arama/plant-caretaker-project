import React from 'react';
import styles from './PlantInfoCard.module.scss';

const plantInfoCard = ({ type, photo, heading, info, time }) => {
  // **** PlantInfoCard for watering, lighting, edible properties ****
  return type === 'plantInfo' ? (
    <div className={styles.PlantInfoCard}>
      <h3 className={styles.Heading}>{heading}</h3>
      <div>
        <img src={photo} alt="plant photo badge" />
        <p className={styles.Paragraph}>{info}</p>
      </div>
    </div>
  ) : // **** PlantInfoCard for watering schedule notification ****
  type === 'plantWatering' ? (
    <div className={styles.PlantWateringCard}>
      <div>
        <img src={photo} alt="plant photo badge" />
      </div>
      <h3>{` You have watered your plant on ${time}`}</h3>
      <h3>
        The 'Water Button' will turn red when your plants should be
        watered again
      </h3>
    </div>
  ) : null;
};

export default plantInfoCard;
