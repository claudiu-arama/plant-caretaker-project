import React from 'react';
import styles from './AddPlantForm.module.scss';

class AddPlantForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plant: {
        name: '',
        species: '',
        photo: '',
      },
    };
  }

  render() {
    return (
      <div className={styles.AddPlantFormBody}>
        {/* <img src="" /> */}
        <div className={styles.AddPlantFormContent}>
          <form action="submit">
            <label className={styles.AddPlantFormLabel}>
              Plant Name:
              <input
                type="text"
                value={this.state.name}
                placeholder="Tell us your plant's name"
                className={styles.AddPlantFormInput}
              />
            </label>
            <p>
              <strong>Tip:</strong> If your plant doesn't have a name,
              consider naming it. Otherwise, leave the space blank!
            </p>
            <label className={styles.AddPlantFormLabel}>
              Plant species:
              <input
                type="text"
                value={this.state.species}
                placeholder="Your plant should have a species"
                className={styles.AddPlantFormInput}
              />
            </label>
            <p>
              <strong>Tip:</strong> It is very important to let us
              know what species your plant belongs to. It will let us
              give you the best possible care advice. We strongly
              advise you to look it up online or upload a clear photo
              of your plant for us to do it for you!
            </p>
            <label className={styles.AddPlantFormLabel}>
              Plant Photo:
              <input
                type="file"
                value={this.state.photo}
                className={styles.AddPlantFormFileInput}
              />
            </label>
            <div className={styles.AddPlantFormButtonsControl}>
              <button type="submit">
                Save your plant's details!
              </button>
              <button type="reset">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPlantForm;
