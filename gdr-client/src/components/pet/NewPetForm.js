import React from 'react';
import { connect } from 'react-redux'

import { updateNewPetForm } from '../../actions/newPetForm'
import { createPet } from '../../actions/myPets'

const NewPetForm = ({formData, updateNewPetForm, createPet, history}) => {

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...formData,
      [name]: value
    }
    updateNewPetForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createPet(formData, history)
  }

  return (
    <div>
      <h2>Let's Add a New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          onChange={handleChange} 
          value={formData.name} 
          placeholder="Name" />
        <br />
        <input 
          type="text" 
          name="breed" 
          onChange={handleChange} 
          value={formData.breed} 
          placeholder="Breed" />
        <br />
        <input 
          type="text" 
          name="birthdate" 
          onChange={handleChange} 
          value={formData.birthdate} 
          placeholder="MM-DD-YYYY" />
        <br />
        <input 
          type="text" 
          name="photo" 
          onChange={handleChange} 
          value={formData.photo} 
          placeholder="Photo URL" />
        <br />
        <input type="submit" value="Add Pet"/>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formData: state.newPetForm
  }
}

export default connect(mapStateToProps, { updateNewPetForm, createPet })(NewPetForm);