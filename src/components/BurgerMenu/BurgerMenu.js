import React from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import './BurgerMenuStyle.scss';

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Menu width={'45%'} right isOpen={this.props.isOpen}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a
            onClick={this.showSettings}
            className="menu-item--small"
            href="/">
            Settings
          </a>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
