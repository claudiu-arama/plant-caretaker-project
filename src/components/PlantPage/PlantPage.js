import React from 'react';
import styles from './PlantPage.module.scss';
import PlantCard from '../PlantCards/PlantCard';
import Icon from '../../controls/Icons/Icons';
import moment from 'moment';
import Modal from '../../UI/Modal/Modal';
import PlantInfoCard from '../PlantInfoCard/PlantInfoCard';

class PlantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: [],
      // showModal: false,
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

    this.setState(() => {
      plant.needsWatering = false;
      plant.lastWatered = timeOfWatering;
      plant.nextWatering = nextTimeOfWatering;
      return {
        showModal: true,
      };
    });

    const wateringInterval = setInterval(() => {
      let currentTime = moment().utc().format();
      if (currentTime === timeOfNextWatering) {
        clearInterval(wateringInterval);
        this.setState(() => {
          plant.needsWatering = true;
          return {
            showModal: true,
          };
        });
      }
    }, 1000);
  };

  controlModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      photo,
      id,
      needsWatering,
      nextWatering,
      lastWatered,
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
          {/* <Modal
            show={this.state.showModal}
            clicked={this.controlModal}>
            <PlantInfoCard
              type="plantWatering"
              photo={photo}
              name={name}
              needsWatering={needsWatering}
              timeOfWatering={lastWatered}
              nextTimeOfWatering={nextWatering}
            />
          </Modal> */}
          <h2 className={styles.PlantPageNameHeading}>{name}</h2>
          <h3 className={styles.plantPageSpeciesHeading}>
            {species}
          </h3>
        </div>
        <div>
          <img src={photo} alt="" className={styles.PlantPageImage} />
          <h3 className={styles.PlantPageDescriptionHeading}>
            Description: <br></br>
          </h3>
          <p className={styles.PlantPageDescriptionText}>
            {description}
          </p>
        </div>
        <div className={styles.PlantPageIconContainer}>
          <div className={styles.PlantPageInfoWatering}>
            <div className={styles.PlantPageWateringIcon}>
              <Icon type="Water" width="25px" />
            </div>
            <div style={{ margin: '8px auto', width: '80vw' }}>
              {edible}
            </div>
          </div>
          <div className={styles.PlantPageInfoLighting}>
            <div className={styles.PlantPageLightingIcon}>
              <Icon type="Light" width="25px" />
            </div>
            <div style={{ margin: '8px auto', width: '80vw' }}>
              {lighting}
            </div>
          </div>
          <div className={styles.PlantPageInfoEdible}>
            <div className={styles.PlantPageEdibleIcon}>
              <Icon type="Edible" width="25px" />
            </div>
            <div style={{ margin: '8px auto', width: '80vw' }}>
              {watering}
            </div>
          </div>
        </div>
        <div>
          <button
            className={styles.PlantPageWaterButton}
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
