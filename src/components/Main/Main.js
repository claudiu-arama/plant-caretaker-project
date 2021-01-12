import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import PlantBadge from '../PlantBadges/PlantBadge';
import plantBadge from '../PlantBadges/PlantBadge';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      query: '',
      selectedPlants: [],
      isFetchingData: null,
    };
  }

  componentDidMount() {
    fetch('./importData.json')
      .then((response) => response.json())
      .then((response) => {
        const responseData = response.plants;
        this.setState({ plants: responseData });
      })
      .catch((error) => console.log('Error', error));
  }

  handleQuery = (event) => {
    const value = event.target.value;
    const plants = { ...this.state.plants };

    const searchedPlants = Object.keys(plants)
      .filter(
        (plant) =>
          (plants[plant].name
            .toLowerCase()
            .includes(value.toLowerCase()) &&
            value.length >= 3) ||
          (plants[plant].species
            .toLowerCase()
            .includes(value.toLowerCase()) &&
            value.length >= 3)
      )
      .reduce((acc, plant) => {
        acc[plant] = plants[plant];
        return acc;
      }, {});
    this.setState({
      ...this.state,
      query: value,
      selectedPlants: searchedPlants,
    });
  };

  render() {
    const { plants, selectedPlants } = this.state;
    const plantsQuerried = Object.keys(
      selectedPlants
    ).map((plant) => (
      <PlantBadge {...selectedPlants[plant]} key={plant.id} />
    ));
    const plantsRendered = Object.keys(plants).map((plant) => (
      <PlantBadge {...plants[plant]} key={plant.id} />
    ));
    return (
      <div className={styles.Main}>
        <Header />
        <div className={styles.SearchField}>
          <SearchField onClick={this.handleQuery} />
        </div>
        <div className={styles.plantsQuerried}>{plantsQuerried}</div>
        <div className={styles.plantsRendered}>{plantsRendered}</div>
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
