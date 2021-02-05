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
  item,
}) => {
  return (
    <div className={styles.plantCardContainer}>
      <div className={styles.LinkContainer} onClick={plantAccessed}>
        {/* implement action on badge click -> open new route to full plant page */}
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
            'watering',
            watering,
            photo
          )}>
          <Icon type="Water" width="25px" />
        </button>
        <button
          className={styles.EdibleProperty}
          onClick={handleButtonClick.bind(
            this,
            'edible',
            edible,
            photo
          )}>
          <Icon type="Edible" width="25px" />
        </button>
        <button
          className={styles.LightingProperty}
          onClick={handleButtonClick.bind(
            this,
            'lighting',
            lighting,
            photo
          )}>
          <Icon type="Light" width="25px" />
        </button>
        <button
          className={styles.WaterTimerButton}
          onClick={handlePlantWatering.bind(this, item, name)}>
          Water this plant
        </button>
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
