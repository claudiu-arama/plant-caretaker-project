import React from 'react';
import styles from './PlantBadge.module.scss';
const plantBadge = (props) => {
  return (
    <div className={styles.plantBadgeContainer}>
      {/* implement action on badge click -> open new route to full plant page */}
      <p>"{props.name}"</p>

      <img
        src={props.photo}
        height={props.height}
        width={props.width}
      />

      <p>{props.species}</p>
    </div>
  );
};
plantBadge.defaultProps = {
  width: '160px',
  height: '160px',
};

export default plantBadge;
