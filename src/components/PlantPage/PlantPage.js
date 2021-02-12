import React from 'react';

class PlantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // fetch from file and filter all plants by ID *************
  render() {
    const {
      photo,
      name,
      species,
      watering,
      lighting,
      edible,
    } = this.props.location.info;
    return (
      <div>
        <img src={photo} alt="" />
        <p>Hello! you are here!</p>
        <p>{this.props.item}</p>
      </div>
    );
  }
}

PlantPage.propTypes = {};

PlantPage.defaultProps = {};

export default PlantPage;
