import React from 'react';
import styles from './PlantPage.module.scss';
import PlantCard from '../PlantCards/PlantCard';
import Icon from '../../controls/Icons/Icons';
import moment from 'moment';

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
            // reqPlant.push({
            //   id: plant.id,
            //   name: plant.name,
            //   photo:
            //     plant.photo ||
            //     'https://images.all-free-download.com/images/graphiclarge/orchid_pot_drawing_3d_retro_design_6833722.jpg',
            //   water: plant.watering,
            //   light: plant.lighting,
            //   edible: plant.edible,
            //   species: plant.species,
            //   lastWatered: plant.lastWatered,
            //   nextWatering: plant.nextWatering,
            //   waterInterval: plant.waterInterval || {
            //     num: 72,
            //     time: 'hours',
            //   },
            //   description: plant.description,
            // });

            reqPlant = plant;
          }
        }
        this.setState({ plant: reqPlant });
      })
      .catch((error) => console.log('Error', error));
  }

  handleWatering = (id, name) => {
    this.props.handlePlantWatering(id, name);
    const plant = this.state.plant;
    const { waterInterval } = plant;
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
      plant.needsWatering = false;
      plant.lastWatered = timeOfWatering;
      plant.nextWatering = nextTimeOfWatering;
    });

    const wateringInterval = setInterval(() => {
      let currentTime = moment().utc().format();
      if (currentTime === timeOfNextWatering) {
        clearInterval(wateringInterval);
        this.setState((prevState) => {
          plant.needsWatering = true;
        });
      }
    }, 1000);
  };

  render() {
    const {
      photo,
      id,
      needsWatering,
      name,
      species,
      watering,
      lighting,
      edible,
      waterInterval,
      description,
    } = this.state.plant;

    return (
      <div className={styles.PlantPageContainer}>
        <div className={styles.PlantPageHeading}>
          <h2>{name}</h2>
          <h3>{species}</h3>
        </div>
        <div>
          <img src={photo} alt="" className={styles.PlantPageImage} />
          <h3>
            Description: <br></br>
          </h3>
          <p> {description}</p>
        </div>
        <div>
          <Icon type="Water" width="25px" />
          {watering}
          <Icon type="Edible" width="25px" />
          {edible}
          <Icon type="Light" width="25px" />
          {lighting}
        </div>
        <div>
          <button
            disabled={!needsWatering}
            onClick={this.handleWatering.bind(
              this,
              id,
              name
            )}>{`Water ${name}!`}</button>
          <p>
            {waterInterval &&
              `water this plant every ${waterInterval.num} ${waterInterval.time}`}
          </p>
        </div>
        
      </div>
    );
  }
}

PlantPage.propTypes = {};

PlantPage.defaultProps = {};

export default PlantPage;
