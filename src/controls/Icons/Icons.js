import React from 'react';
import styles from './Icons.module.scss';
import PlantLogo from '../../assets/plant.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';
import BurgerMenu from '../../assets/burger-menu.svg';
import WateringCan from '../../assets/water-.svg';
import Edible from '../../assets/fork.svg';
import Sun from '../../assets/sun.svg';
import AddButton from '../../assets/plus.svg';

const icon = (props) => {
  switch (props.type) {
    case 'Logo':
      return (
        <div className={styles.LogoContainer}>
          <img
            src={PlantLogo}
            alt="plant logo"
            width={props.width}
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
    case 'Water':
      return (
        <div>
          <img
            src={WateringCan}
            alt="Watering can"
            width={props.width}
          />
        </div>
      );
    case 'Edible':
      return (
        <div>
          <img src={Edible} width={props.width} />
        </div>
      );
    case 'Light':
      return (
        <div>
          <img src={Sun} width={props.width} />
        </div>
      );
    case 'Add':
      return (
        <div>
          <img src={AddButton} width={props.width} />
        </div>
      );
  }
};

export default icon;
