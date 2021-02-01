import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Header from '../Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import PlantCard from '../../components/PlantCards/PlantCard';
import Button from '../../controls/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import Modal from '../../UI/Modal/Modal';
import PlantInfoCard from '../../components/PlantInfoCard/PlantInfoCard';
import Icon from '../../controls/Icons/Icons';
import AddPlantForm from '../../components/Forms/AddPlantForm/AddPlantForm';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import PlantPage from '../../components/PlantPage/PlantPage';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
      query: '',
      selectedPlants: [],
      isFetchingData: true,
      isActive: null,
      show: false,
      requestedInfo: '',
      menuOpen: false,
    };
  }
  // set state from external source
  componentDidMount() {
    fetch('./importData.json')
      .then((response) => response.json())
      .then((response) => {
        const plants = [];
        for (let plant of response.plants) {
          plants.push({
            id: plant.id,
            name: plant.name,
            photo:
              plant.photo ||
              'https://images.all-free-download.com/images/graphiclarge/orchid_pot_drawing_3d_retro_design_6833722.jpg',
            water: plant.watering,
            light: plant.lighting,
            edible: plant.edible,
            species: plant.species,
          });
        }

        this.setState({
          plants: plants,
          isFetchingData: false,
        });
      })
      .catch((error) => console.log('Error', error));
  }

  // search method - condens search parameters
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

  // handle search bar inputs below
  handleSearchBarInput = (value) => {
    if (value.length < 3) {
      this.setState({ query: value });
      return;
    }
    const plants = [...this.state.plants];

    const searchedPlants = plants.filter((plant) =>
      this.search(plant, ['name', 'species'], value)
    );
    this.setState({
      ...this.state,
      query: value,
      selectedPlants: searchedPlants,
    });
  };
  // toggle modal visibility below
  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  toggleBurgerMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  // access plant page below
  AccesPlantPage = (id) => {
    const myPlant = this.state.plants.find((elem) => elem.id === id);
    this.props.history.push({
      pathname: '/p/' + myPlant.id,
      info: myPlant,
    });
  };

  // handle buttons for watering, lighting and edibility below
  handlePlantRequirement = (careType, careInfo, photo) => {
    this.toggleModal();
    if (!careType || !careInfo) {
      return;
    }
    const modalInfo = { careType, careInfo, photo };
    this.setState({ requestedInfo: modalInfo });
  };

  render() {
    const {
      plants,
      selectedPlants,
      isFetchingData,
      query,
      requestedInfo,
    } = this.state;

    const plantsRendered = plants.map((plant) => (
      <PlantCard
        name={plant.name}
        species={plant.species}
        photo={plant.photo}
        key={plant.id}
        item={plant.id}
        watering={plant.water}
        edible={plant.edible}
        lighting={plant.light}
        handleButtonClick={this.handlePlantRequirement}
        plantAccessed={() => this.AccesPlantPage(plant.id)}
      />
    ));

    const plantsQuerried = !selectedPlants.length ? (
      <Spinner />
    ) : (
      selectedPlants.map((plant) => (
        <PlantCard
          name={plant.name}
          species={plant.species}
          photo={plant.photo}
          key={plant.id}
          watering={plant.water}
          edible={plant.edible}
          lighting={plant.light}
          handleButtonClick={this.handlePlantRequirement}
          plantAccessed={() => this.AccesPlantPage(plant.id)}
        />
      ))
    );

    const mainPlantsRender = isFetchingData ? (
      <div>
        <Spinner />
      </div>
    ) : query.length > 2 ? (
      <div className={styles.plantsQuerried}>{plantsQuerried}</div>
    ) : (
      <div className={styles.plantsRendered}>{plantsRendered}</div>
    );

    const modalInfo = (
      <PlantInfoCard
        heading={requestedInfo.careType}
        info={requestedInfo.careInfo}
        photo={requestedInfo.photo}
      />
    );

    return (
      <div>
        <Header toggleBurgerMenu={this.toggleBurgerMenu} />
        <BurgerMenu isOpen={this.state.menuOpen} />
        <main>
          <Switch>
            <Route path="/" exact>
              <div className={styles.Main}>
                <div className={styles.SearchField}>
                  <SearchField onChange={this.handleSearchBarInput} />

                  <Link to="/addPlantForm">
                    <Button type="Add">
                      <Icon type="Add" width="23px" />
                    </Button>
                  </Link>
                </div>

                <Modal
                  show={this.state.show}
                  clicked={this.toggleModal}>
                  {modalInfo}
                </Modal>

                {mainPlantsRender}
              </div>
            </Route>

            <Route path="/addPlantForm" component={AddPlantForm} />
            <Route
              path={this.props.match.url + ':id'}
              render={(props) => <PlantPage {...props} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
