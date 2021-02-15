import React from 'react';
import styles from './PlantPage.module.scss';

class PlantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://plantcaretaker-3606a-default-rtdb.europe-west1.firebasedatabase.app/plants.json'
    )
      .then((response) => response.json())
      .then((response) => {
        let reqPlant = [];
        for (let plantID in response) {
          const plant = response[plantID];
          if (plant.id === this.props.location.info.id) {
            reqPlant = plant;
          }
        }
        this.setState({ plant: reqPlant });
      });
  }
  render() {
    const {
      photo,
      name,
      species,
      watering,
      lighting,
      edible,
    } = this.state.plant;
    return (
      <div className={styles.PlantPageContainer}>
        <div className={styles.PlantPageHeading}>
          <h2>{name}</h2>
          <h3>{species}</h3>
        </div>
        <img src={photo} alt="" className={styles.PlantPageImage} />
        <p>{this.props.item}</p>
      </div>
    );
  }
}

PlantPage.propTypes = {};

PlantPage.defaultProps = {};

export default PlantPage;
