import React from 'react';
import { connect } from 'react-redux'

import { updateNewPetForm } from '../../actions/newPetForm'

const NewPetForm = ({name, breed, birthdate, photo, history}) => {
  const handleChange = (event) => {
    const { name, value } = event.target
    updateNewPetForm(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h2>Let's Add a New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={name} placeholder="Name" />
        <br />
        <input type="text" name="breed" onChange={handleChange} value={breed} Placeholder="Breed" />
        <br />
        <input type="text" name="birthdate" onChange={handleChange} value={birthdate} Placeholder="Birthdate" />
        <br />
        <input type="text" name="photo" onChange={handleChange} value={photo} Placeholder="Photo URL" />
        <br />
        <input type="submit" value="Add Pet"/>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {name, breed, birthdate, photo} = state.newPetForm
  return {
    name,
    breed,
    birthdate,
    photo
  }
}

export default connect(mapStateToProps, {updateNewPetForm})(NewPetForm);