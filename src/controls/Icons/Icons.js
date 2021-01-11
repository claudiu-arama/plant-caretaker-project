import React from 'react';
import styles from './Icons.module.scss';
import PlantLogo from '../../assets/plant.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';
import BurgerMenu from '../../assets/burger-menu.svg';

const icon = (props) => {
  switch (props.type) {
    case 'Logo':
      return (
        <div className={styles.LogoContainer}>
          <img
            src={PlantLogo}
            alt="plant logo"
            width={props.width}
            color="red"
            onClick={props.clicked}
          />
        </div>
      );
    case 'Menu':
      return (
        <div className={styles.BurgerMenu}>
          <img src={BurgerMenu} alt="" width={props.width} />
        </div>
      );
    case 'Search':
      return (
        <div>
          <img src={MagnifyingGlass} width={props.width} />
        </div>
      );
  }
};

export default icon;
