import React from 'react';
import styles from './Icons.module.scss';
import PlantLogo from '../../assets/plant.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';
import BurgerMenu from '../../assets/burger-menu.svg';
import WateringCan from '../../assets/water-.svg';
import Edible from '../../assets/fork.svg';
import Sun from '../../assets/sun.svg';
import AddButton from '../../assets/plus(1).svg';

const icon = (props) => {
  const icons = {
    Logo: {
      src: PlantLogo,
      style: styles.LogoContainer,
      alt: 'THe Logo',
    },
    Menu: {
      src: BurgerMenu,
      style: styles.BurgerMenu,
      alt: 'Menu',
    },
    Search: {
      src: MagnifyingGlass,
      alt: 'Search Icon',
    },
    Water: {
      src: WateringCan,
      alt: 'Watering Can Icon',
    },
    Edible: {
      src: Edible,
      alt: 'Edible Icon',
    },
    Light: {
      src: Sun,
      alt: 'Sun Icon',
    },
    Add: {
      src: AddButton,
      alt: 'Add Button Icon',
    },
  };
  const type = icons[props.type];

  if (!type) {
    return null;
  }
  return <img src={type.src} alt={type.alt} width={props.width} />;
};

export default icon;
