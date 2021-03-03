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
import moment from 'moment';
import AboutPage from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
      query: '',
      selectedPlants: [],
      isFetchingData: true,
      showPlantInfoModal: false,
      showPlantWateringModal: false,
      wateredPlant: [],
      requestedInfo: '',
      menuOpen: false,
    };
  }
  // set state from external source
  componentDidMount() {
    fetch(
      'https://plantcaretaker-3606a-default-rtdb.europe-west1.firebasedatabase.app/plants.json'
    )
      .then((response) => response.json())
      .then((response) => {
        const plants = [];
        for (let plantID in response) {
          const plant = response[plantID];
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
            lastWatered: plant.lastWatered,
            nextWatering: plant.nextWatering,
            waterInterval: plant.waterInterval || {
              num: 72,
              time: 'hours',
            },
            // extra state, not needed for now
            needsWatering: plant.needsWatering,
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

    const selectedPlants = plants.filter((plant) =>
      this.search(plant, ['name', 'species'], value)
    );
    this.setState({
      ...this.state,
      query: value,
      selectedPlants: selectedPlants,
    });
  };
  // toggle modal visibility below
  togglePlantInfoModal = () => {
    this.setState({
      showPlantInfoModal: !this.state.showPlantInfoModal,
    });
  };
  // toggle burger menu visibiliry below
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

  // handle buttons for watering, lighting and edibility info below
  handlePlantRequirement = (careType, careInfo, photo) => {
    this.togglePlantInfoModal();
    if (!careType || !careInfo) {
      return;
    }
    const modalInfo = { careType, careInfo, photo };
    this.setState({ requestedInfo: modalInfo });
  };

  //handle button for marking the watering of a plant
  handlePlantWateringButton = (plantID, plantName) => {
    if (!plantID || !plantName) {
      return;
    }

    const plant = this.state.plants.find(
      (elem) => elem.id === plantID
    );

    const waterInterval = plant.waterInterval;

    const timeOfWatering = moment()
      .utc()
      .format('dddd, MMMM Do YYYY, h:mm a');

    const nextTimeOfWatering = moment()
      .add(waterInterval.num, waterInterval.time)
      .utc()
      .format('dddd, MMMM Do YYYY, h:mm a');

    const timeOfNextWatering = moment()
      .add(waterInterval.num, waterInterval.time)
      .utc()
      .format();

    this.setState((prevState) => {
      const updatedPlants = prevState.plants.map((plant) => {
        if (plant.id === plantID) {
          plant.needsWatering = false;
          plant.lastWatered = timeOfWatering;
          plant.nextWatering = nextTimeOfWatering;
        }

        return plant;
      });

      return {
        plants: updatedPlants,
        wateredPlant: plant,
        showPlantWateringModal: true,
      };
    });

    const wateringInterval = setInterval(() => {
      let currentTime = moment().utc().format();
      if (currentTime === timeOfNextWatering) {
        clearInterval(wateringInterval);
        this.setState((prevState) => {
          const updatedPlants = prevState.plants.map((plant) => {
            if (plant.id === plantID) {
              plant.needsWatering = true;
            }
            return plant;
          });
          return {
            plants: updatedPlants,
            showPlantWateringModal: true,
            wateredPlant: plant,
          };
        });
      }
    }, 1000);
  };

  togglePlantWateringModal = () => {
    this.setState({
      showPlantWateringModal: !this.state.showPlantWateringModal,
    });
  };

  render() {
    const {
      plants,
      selectedPlants,
      isFetchingData,
      query,
      requestedInfo,
      wateredPlant,
      showPlantInfoModal,
      showPlantWateringModal,
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
        waterInterval={plant.waterInterval}
        needsWatering={plant.needsWatering}
        handleButtonClick={this.handlePlantRequirement}
        plantAccessed={() => this.AccesPlantPage(plant.id)}
        handlePlantWatering={this.handlePlantWateringButton}
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
          item={plant.id}
          watering={plant.water}
          edible={plant.edible}
          lighting={plant.light}
          waterInterval={plant.waterInterval}
          needsWatering={plant.needsWatering}
          handleButtonClick={this.handlePlantRequirement}
          plantAccessed={() => this.AccesPlantPage(plant.id)}
          handlePlantWatering={this.handlePlantWateringButton}
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
        type="plantInfo"
        name={requestedInfo.careType}
        info={requestedInfo.careInfo}
        photo={requestedInfo.photo}
      />
    );

    const wateredPlantInformation = (
      <PlantInfoCard
        type="plantWatering"
        name={wateredPlant.name}
        info={wateredPlant.species}
        photo={wateredPlant.photo}
        timeOfWatering={wateredPlant.lastWatered}
        nextTimeOfWatering={wateredPlant.nextWatering}
        needsWatering={wateredPlant.needsWatering}
      />
    );

    return (
      <div>
        <Header toggleBurgerMenu={this.toggleBurgerMenu} />
        <BurgerMenu isOpen={this.state.menuOpen} />
        <main>
          <Switch>
            <Route path="/about" exact component={AboutPage}></Route>
            <Route path="/contact" exact component={Contact}></Route>
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
                  show={showPlantInfoModal}
                  clicked={this.togglePlantInfoModal}>
                  {modalInfo}
                </Modal>
                <Modal
                  show={showPlantWateringModal}
                  clicked={this.togglePlantWateringModal}>
                  {wateredPlantInformation}
                </Modal>

                {mainPlantsRender}
              </div>
            </Route>

            <Route path="/addPlantForm" component={AddPlantForm} />
            <Route
              path={this.props.match.url + ':id'}
              render={(props) => (
                <div>
                  <PlantPage
                    {...props}
                    // handleButtonClick={this.handlePlantRequirement}
                    handlePlantWatering={
                      this.handlePlantWateringButton
                    }
                  />
                  <Modal
                    show={showPlantWateringModal}
                    clicked={this.togglePlantWateringModal}>
                    {wateredPlantInformation}
                  </Modal>
                </div>
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
