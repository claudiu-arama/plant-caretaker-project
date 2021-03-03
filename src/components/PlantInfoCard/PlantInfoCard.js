import React from 'react';
import styles from './PlantInfoCard.module.scss';

const plantInfoCard = ({
  type,
  photo,
  name,
  info,
  timeOfWatering,
  nextTimeOfWatering,
  needsWatering,
}) => {
  // **** PlantInfoCard for watering, lighting, edible properties ****
  return type === 'plantInfo' ? (
    <div className={styles.PlantInfoCard}>
      <h3 className={styles.Heading}>{name}</h3>
      <div>
        <img
          src={photo}
          alt="plant badge"
          className={styles.PlantInfoImage}
        />
        <p className={styles.Paragraph}>{info}</p>
      </div>
    </div>
    
  ) : // **** PlantInfoCard for watering schedule notification ****
  type === 'plantWatering' ? (
    !needsWatering ? (
      <div className={styles.PlantWateringCard}>
        <div>
          <h1 className={styles.PlantInfoHeading}>
            Congratulations!
          </h1>

          <img
            src={photo}
            alt="plant badge"
            className={styles.PlantInfoImage}
          />
        </div>

        <div>
          <h3
            className={
              styles.PlantInfoLine1
            }>{` You have just watered ${name}!`}</h3>
          <h3 className={styles.PlantInfoLine2}>
            {`Your next watering should be around ${nextTimeOfWatering}`}
          </h3>
        </div>
      </div>
    ) : (
      <div className={styles.PlantWateringCard}>
        <div>
          <h1 className={styles.PlantInfoHeading}>
            Care for your plant!
          </h1>

          <img
            src={photo}
            alt="plant badge"
            className={styles.PlantInfoImage}
          />
        </div>

        <div>
          <h3 className={styles.PlantInfoLine1}>
            {`It's time to water ${name}!`}
          </h3>
          <h3
            className={
              styles.PlantInfoLine2
            }>{` Your last watering was on ${timeOfWatering}`}</h3>
        </div>
      </div>
    )
  ) : null;
};

export default plantInfoCard;
