import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

class TextField extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   this.props.onChange(value);
  // };

  render() {
    const { defaultValue, placeholder } = this.props;

    return (
      <div className={styles.TextField}>
        <input
          className={styles.Input}
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={this.props.onClick}
        />
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
