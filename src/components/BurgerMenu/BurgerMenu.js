import React from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import './BurgerMenuStyle.scss';
import Icon from '../../controls/Icons/Icons';

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="custom-edit">
        <Menu width={'20%'} right isOpen={this.props.isOpen}>
          <a id="home" className="menu-item" href="/">
            <Icon type="Home" width="25px" />
          </a>
          <a id="about" className="menu-item" href="/about">
            <Icon type="About" width="25px" />
          </a>
          <a id="contact" className="menu-item" href="/contact">
            <Icon type="Contact" width="25px" />
          </a>
          <a
            onClick={this.showSettings}
            className="menu-item"
            href="/">
            <Icon type="Settings" width="25px" />
          </a>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
