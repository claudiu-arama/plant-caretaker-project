import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const SearchButton = (props) => {
  const { type, onClick } = props;
  const btnTypes = {
    Search: {
      style: styles.SearchButton,
    },
    Add: {
      style: styles.AddButton,
    },
    BurgerMenu: {
      style: styles.BurgerMenu,
    },
  };
  const btn = btnTypes[type];

  if (!btn) {
    return null;
  }

  return (
    <div>
      <button className={btn.style} onClick={onClick}>
        <div> {props.children}</div>
      </button>
    </div>
  );
};

SearchButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

SearchButton.defaultProps = {};

export default SearchButton;
