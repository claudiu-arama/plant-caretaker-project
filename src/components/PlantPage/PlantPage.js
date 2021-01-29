import React from 'react';

class PlantPage extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.photo} alt="" />
        <p>Hello! you are here!</p>
        <p>{this.props.item}</p>
      </div>
    );
  }
}

PlantPage.propTypes = {};

PlantPage.defaultProps = {};

export default PlantPage;
