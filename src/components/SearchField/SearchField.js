import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.scss';
import TextField from '../TextField/TextField';
import Button from '../../controls/Button/SearchButton/Button';
import Icon from '../../controls/Icons/Icons';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.SearchField}>
        <TextField
          placeholder="check up on your plants"
          {...this.props}
        />
        {/* add buttons for edit and add plants with forms for adding and editing the selected plants */}
        <Button type="search">
          <Icon type="Search" width="22px" />
        </Button>
      </div>
    );
  }
}

SearchField.propTypes = {};

SearchField.defaultProps = {};

export default SearchField;
