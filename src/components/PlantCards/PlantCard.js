import React from 'react';
import styles from './PlantCard.module.scss';
import Icon from '../../controls/Icons/Icons';

const plantCard = (props) => {
  return (
    <div
      className={styles.plantCardContainer}
      onClick={props.plantAccessed}>
      {/* implement action on badge click -> open new route to full plant page */}
      <p className={styles.plantCardName}>"{props.name}" </p>

      <img
        src={props.photo}
        height={props.height}
        width={props.width}
      />
      <p className={styles.plantCardParagraph}>{props.species}</p>
      <div className={styles.PlantInfo}>
        <button
          className={styles.WateringProperty}
          onClick={props.handleButtonClick.bind(
            this,
            'watering',
            props.watering,
            props.photo
          )}>
          <Icon type="Water" width="25px" />
        </button>
        <button
          className={styles.EdibleProperty}
          onClick={props.handleButtonClick.bind(
            this,
            'edible',
            props.edible,
            props.photo
          )}>
          <Icon type="Edible" width="25px" />
        </button>
        <button
          className={styles.LightingProperty}
          onClick={props.handleButtonClick.bind(
            this,
            'lighting',
            props.lighting,
            props.photo
          )}>
          <Icon type="Light" width="25px" />
        </button>
      </div>
    </div>
  );
};

plantCard.defaultProps = {
  width: '140px',
  height: '140px',
};

// plantCard.propTypes = {};

export default plantCard;
