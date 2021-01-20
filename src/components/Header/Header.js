import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import TextField from '../TextField/TextField';
import Icon from '../../controls/Icons/Icons';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  goHome = () => {};

  render() {
    return (
      <div className={styles.Header}>
        {/* rename goHome and implement routing to go to Main Page */}
        <Link to="/">
          <Icon type="Logo" width="30px" clicked={this.goHome} />
        </Link>
        <div className={styles.AppName}>
          <h1 className={styles.AppHeader}>Plant Caretaker </h1>
          <h3 className={styles.AppSubHeader}>
            Green Thumbs or Not, we got you covered!
          </h3>
        </div>
        {/* implement Burger menu - dropdown - add menu items */}
        <Icon type="Menu" width="22px" />
        {/* <TextField placeholder="What plant are you looking for?" /> */}
      </div>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
