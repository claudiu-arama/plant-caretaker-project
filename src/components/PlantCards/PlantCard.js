import React from 'react';
import styles from './PlantCard.module.scss';
import Icon from '../../controls/Icons/Icons';
import PropTypes from 'prop-types';

const plantCard = (props) => {
  return (
    <div className={styles.plantCardContainer}>
      <div
        className={styles.LinkContainer}
        onClick={props.plantAccessed}>
        {/* implement action on badge click -> open new route to full plant page */}
        <p className={styles.plantCardName}>"{props.name}" </p>

        <img
          src={props.photo}
          height={props.height}
          width={props.width}
          alt={'image of the plant named' + props.name}
        />
        <p className={styles.plantCardParagraph}>{props.species}</p>
      </div>
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
