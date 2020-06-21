import React from 'react';

import { connect} from 'react-redux'

import { createPet } from '../../actions/myPets'
import PetForm from './PetForm';

const NewPetFormWrapper = ({history, createPet}) => {

  const handleSubmit = (formData, history) => {
    createPet(formData, history)
  }

  return (
    <>
      <h2>Let's Add a New Pet!</h2>
      <PetForm history={history} handleSubmit={handleSubmit}/>
    </>
  )
}

export default connect(null, { createPet })(NewPetFormWrapper);