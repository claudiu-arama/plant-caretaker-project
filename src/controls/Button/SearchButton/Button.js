import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const SearchButton = (props) => {
  const { label, type } = props;

  return (
    <div>
      <button
        className={
          props.type === 'search'
            ? styles.SearchButton
            : styles.AddButton
        }>
        <div> {props.children}</div>
      </button>
    </div>
  );
};

SearchButton.propTypes = {};

SearchButton.defaultProps = {};

export default SearchButton;
