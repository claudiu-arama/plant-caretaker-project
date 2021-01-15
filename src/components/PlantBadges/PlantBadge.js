import React from 'react';
import styles from './PlantBadge.module.scss';
import Icon from '../../controls/Icons/Icons';

const plantBadge = (props) => {
  return (
    <div
      className={styles.plantBadgeContainer}
      onClick={props.plantAccessed}>
      {/* implement action on badge click -> open new route to full plant page */}
      <p className={styles.PlantBadgeName}>"{props.name}" </p>

      <img
        src={props.photo}
        height={props.height}
        width={props.width}
      />
      <p className={styles.PlantBadgeParagraph}>{props.species}</p>
      <div className={styles.PlantInfo}>
        <button
          className={styles.WateringProperty}
          onClick={props.ButtonClicked.bind(
            this,
            'watering',
            props.watering
          )}>
          <Icon type="Water" width="25px" />
        </button>
        <button
          className={styles.EdibleProperty}
          onClick={props.ButtonClicked}>
          <Icon type="Edible" width="25px" />
        </button>
        <button
          className={styles.LightingProperty}
          onClick={props.ButtonClicked}>
          <Icon type="Light" width="25px" />
        </button>
      </div>
    </div>
  );
};
plantBadge.defaultProps = {
  width: '140px',
  height: '140px',
};

plantBadge.propTypes = {

}

export default plantBadge;
