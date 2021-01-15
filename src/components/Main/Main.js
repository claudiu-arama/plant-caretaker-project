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
  // search method - check whether obj[key] is undefined
  // check whether keys param is valid
  search = (obj, keys, query) => {
    if (!keys || keys.length === 0) {
      return false;
    }
    return keys.some((key) => {
      if (!obj[key]) {
        return false;
      }
      return obj[key].toLowerCase().includes(query.toLowerCase());
    });
  };

  handleQuery = (value) => {
    // handle return case b4 logic
    if (value.length < 3) {
      return;
    }
    const plants = { ...this.state.plants };

    const searchedPlants = plants.filter((plant) =>
      this.search(plant, ['name', 'species'], value)
    );
    // apply same further down
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

  handleButtonClick = (action, plant) => {
    console.log({ action, plant });
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
        ButtonClicked={this.handleButtonClick}
      />
    ));
    return (
      // implement modal with information bubble - clicked icon reveals info behind it

      <div className={styles.Main}>
        <Header />
        <div className={styles.SearchField}>
          <SearchField onChange={this.handleQuery} />
          <Button>+</Button>
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
