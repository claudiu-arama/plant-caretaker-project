import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plant: {
        name: '',
        species: '',
        room: '',
      },
    };
  }
  render() {
    return (
      <form action="submit">
        <label>
          Plant Name: <input type="text" value={this.state.name} />
        </label>
      </form>
    );
  }
}

export default AddForm;
