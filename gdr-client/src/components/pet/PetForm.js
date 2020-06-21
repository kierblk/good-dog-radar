import React from 'react';
import { connect } from 'react-redux'

import { updatePetForm } from '../../actions/petForm'

const PetForm = ({formData, updatePetForm, handleSubmit, edit, history}) => {

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...formData,
      [name]: value
    }
    updatePetForm(updatedFormInfo)
  }

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData, history)
      }}>
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
        <input type="submit" value={edit ? "Edit Pet" : "Create Pet"}/>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formData: state.petForm
  }
}

export default connect(mapStateToProps, { updatePetForm })(PetForm);