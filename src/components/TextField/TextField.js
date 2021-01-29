import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

class TextField extends React.Component {
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.props.onChange(value);
  };

  render() {
    const { defaultValue, placeholder } = this.props;

    return (
      <div className={styles.TextField}>
        <div className={styles.SearchInput}>
          <input
            className={styles.Input}
            type="text"
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={this.handleInputChange}
          />
          <button type="search" value="search"></button>
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

TextField.defaultProps = {
  onChange: () => {},
  defaultValue: '',
};

export default TextField;
