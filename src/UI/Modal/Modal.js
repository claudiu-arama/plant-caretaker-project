import React from 'react';
import styles from './Modal.module.scss';

const modal = (props) => {
  return (
    <div
      onClick={props.clicked}
      className={props.show ? styles.ModalShow : styles.ModalHide}>
      <div className={styles.Modal}>{props.children}</div>
    </div>
  );
};

export default modal;
