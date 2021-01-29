import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Icon from '../../controls/Icons/Icons';
import { Link } from 'react-router-dom';
import Button from '../../controls/Button/Button';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        {/* rename goHome and implement routing to go to Main Page */}
        <div className={styles.Logo}>
          <Link to="/">
            <Icon type="Logo" width="30px" />
          </Link>
        </div>

        <div className={styles.AppName}>
          <h1 className={styles.AppHeader}>Plant Caretaker </h1>
          <h3 className={styles.AppSubHeader}>
            Green Thumbs or Not, we got you covered!
          </h3>
        </div>
        <Button
          type="BurgerMenu"
          onClick={this.props.toggleBurgerMenu}>
          <Icon type="Menu" width="22px" />
        </Button>
      </div>
    );
  }
}

Header.propTypes = {
  toggleBurgerMenu: PropTypes.func,
};

Header.defaultProps = {};

export default Header;
