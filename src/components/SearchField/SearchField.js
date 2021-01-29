import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.scss';
import TextField from '../TextField/TextField';
import Button from '../../controls/Button/Button';

class SearchField extends React.Component {
  render() {
    return (
      <div className={styles.SearchField}>
        <TextField
          placeholder="check up on your plants"
          onChange={this.props.onChange}
        />
        <Button type="Search"></Button>
      </div>
    );
  }
}

SearchField.propTypes = {
  onChange: PropTypes.func,
};

export default SearchField;
