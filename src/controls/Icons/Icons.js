import React from 'react';
import styles from './Icons.module.scss';
import PlantLogo from '../../assets/plant.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';
import BurgerMenu from '../../assets/burger-menu.svg';
import WateringCan from '../../assets/water-.svg';
import Edible from '../../assets/fork.svg';
import Sun from '../../assets/sun.svg';
import AddButton from '../../assets/plus(1).svg';
import About from '../../assets/about.svg';
import Contact from '../../assets/contact.svg';
import AllSettings from '../../assets/gear.svg';
import Home from '../../assets/home.svg';

const icon = (props) => {
  const icons = {
    Logo: {
      src: PlantLogo,
      style: styles.LogoContainer,
      alt: 'The Logo',
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
    Settings: {
      src: AllSettings,
      alt: 'Settings Icon',
    },
    About: {
      src: About,
      alt: 'About Icon',
    },
    Contact: {
      src: Contact,
      alt: 'Contact Icon',
    },
    Home: {
      src: Home,
      alt: 'Home Icon',
    },
  };
  const type = icons[props.type];

  if (!type) {
    return null;
  }
  return <img src={type.src} alt={type.alt} width={props.width} />;
};

export default icon;
