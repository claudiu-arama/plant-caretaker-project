import React from 'react';
import styles from './AddPlantForm.module.scss';

class AddPlantForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plantName: '',
      plantSpecies: '',
      photo: '',
    };
  }

  handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handlePhotoUpdate = (event) => {
    const target = event.target;
    const plantPhoto = target.files[0];
    const name = target.name;

    this.setState({ [name]: plantPhoto });
    console.log(this.state);
  };

  handleCancelButton = () => {
    this.props.history.push('/');
  };

  handleSubmitButton = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={styles.AddPlantFormBody}>
        <div className={styles.AddPlantFormContent}>
          <form action="submit">
            <p className={styles.AddPlantFormPara}>
              Add a plant to your collection!
            </p>
            <label className={styles.AddPlantFormLabel}>
              Plant Name:
              <input
                type="text"
                value={this.state.plantName}
                name="plantName"
                placeholder="Tell us your plant's name"
                className={styles.AddPlantFormInput}
                onChange={this.handleInput.bind(this)}
              />
            </label>
            <p className={styles.AddPlantFormTips}>
              If your plant doesn't have a name, consider naming it.
              Otherwise, leave the space blank!
            </p>
            <label className={styles.AddPlantFormLabel}>
              Plant species:
              <input
                type="text"
                value={this.state.plantSpecies}
                name="plantSpecies"
                placeholder="Your plant should have a species"
                className={styles.AddPlantFormInput}
                onChange={this.handleInput.bind(this)}
              />
            </label>
            <p className={styles.AddPlantFormTips}>
              It is very important to let us know what species your
              plant belongs to. It will let us give you the best
              possible care advice. We strongly advise you to look it
              up online or upload a clear photo of your plant for us
              to do it for you!
            </p>
            <label className={styles.AddPlantFormLabel}>
              Plant Photo:
              <input
                type="file"
                name="photo"
                className={styles.AddPlantFormFileInput}
                onChange={this.handlePhotoUpdate}
              />
            </label>
            <div className={styles.AddPlantFormButtonsControl}>
              <button type="submit" onClick={this.handleSubmitButton}>
                Save your plant's details!
              </button>
              <button type="reset" onClick={this.handleCancelButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPlantForm;
