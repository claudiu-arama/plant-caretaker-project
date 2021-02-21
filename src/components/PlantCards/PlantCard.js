import React from 'react';
import styles from './PlantCard.module.scss';
import Icon from '../../controls/Icons/Icons';
import PropTypes from 'prop-types';

const plantCard = ({
  plantAccessed,
  name,
  photo,
  height,
  width,
  species,
  watering,
  handleButtonClick,
  edible,
  lighting,
  handlePlantWatering,
  needsWatering,
  waterInterval,
  item,
}) => {
  return (
    <div className={styles.plantCardContainer}>
      <div className={styles.LinkContainer} onClick={plantAccessed}>
        <p className={styles.plantCardName}>"{name}" </p>
        <img
          src={photo}
          height={height}
          width={width}
          alt={'image of the plant named' + name}
        />

        <p className={styles.plantCardParagraph}>{species}</p>
      </div>
      <div className={styles.PlantInfo}>
        <button
          className={styles.WateringProperty}
          onClick={handleButtonClick.bind(
            this,
            `Watering Frequency`,
            watering,
            photo
          )}>
          <Icon type="Water" width="25px" />
        </button>
        <button
          className={styles.EdibleProperty}
          onClick={handleButtonClick.bind(
            this,
            `Edibility`,
            edible,
            photo
          )}>
          <Icon type="Edible" width="25px" />
        </button>
        <button
          className={styles.LightingProperty}
          onClick={handleButtonClick.bind(
            this,
            `Lighting Requirements`,
            lighting,
            photo
          )}>
          <Icon type="Light" width="25px" />
        </button>
        <div className={styles.WaterButtonProperty}>
          <button
            className={` styles.WaterTimerButton ${
              needsWatering
                ? styles.WaterAlertButton
                : styles.WaterButtonAwait
            }`}
            onClick={handlePlantWatering.bind(this, item, name)}
            // disabled={!needsWatering}
          >
            Water {name}
          </button>
          <p className={styles.PlantCardWateringInfo}>
            {` water every ${waterInterval.num} ${waterInterval.time}`}
          </p>
        </div>
      </div>
    </div>
  );
};

plantCard.defaultProps = {
  width: '140px',
  height: '140px',
};

plantCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  photo: PropTypes.string,
  watering: PropTypes.string,
  edible: PropTypes.string,
  lighting: PropTypes.string,
  handleButtonClick: PropTypes.func,
  plantAccessed: PropTypes.func,
};

export default plantCard;
