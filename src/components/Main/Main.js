import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import PlantBadge from '../PlantBadges/PlantBadge';
import Modal from '../UI/Modal/Modal';
import Button from '../../controls/Button/SearchButton/Button';
// import Form from '../AddForm/AddForm';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      query: '',
      selectedPlants: [],
      isFetchingData: null,
      isActive: null,
      show: false,
      requiredInfo: '',
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

  toggleModal = () => {
    this.setState({ show: !this.state.show });
    console.log('clicked!');
  };

  requirePlantInfo = (info, id) => {
    this.setState({ show: true });
    console.log(info, id, 'clicked!');
  };

  render() {
    const { plants, selectedPlants } = this.state;
    const plantsQuerried = Object.keys(
      selectedPlants
    ).map((plant) => (
      <PlantBadge {...selectedPlants[plant]} key={plant.id} />
    ));
    const plantsRendered = Object.keys(plants).map((plant) => (
      <PlantBadge
        {...plants[plant]}
        key={plant.id}
        ButtonClicked={() =>
          this.requirePlantInfo(
            plants[plant].watering,
            plants[plant].id
          )
        }
      />
    ));
    return (
      // implement modal with information bubble - clicked icon reveals info behind it

      <div className={styles.Main}>
        <Header />
        <div className={styles.SearchField}>
          <SearchField onClick={this.handleQuery} />
          {/* <Button>+</Button> */}
        </div>
        {/* <Form /> */}

        <Modal
          show={this.state.show}
          clicked={this.toggleModal}></Modal>
        {this.state.query.length >= 3 ? (
          <div className={styles.plantsQuerried}>
            {plantsQuerried}
          </div>
        ) : (
          <div className={styles.plantsRendered}>
            {plantsRendered}
          </div>
        )}
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
