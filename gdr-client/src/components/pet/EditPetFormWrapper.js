import React from 'react';

import { connect} from 'react-redux'

import { updatePet } from '../../actions/myPets'
import { setFormDataForEdit, resetPetForm } from '../../actions/petForm'
import PetForm from './PetForm';

class EditPetFormWrapper extends React.Component {

  componentDidMount() {
    this.props.pet && this.props.setFormDataForEdit(this.props.pet)
  }

  componentWillUnmount() {
    this.props.resetPetForm()
  }

  handleSubmit = (formData, history) => {
    const { updatePet, pet } = this.props
    console.log('in handle submit', pet)
    updatePet({...formData, petId: pet.id}, history)
  }

  render() {
    return (
      <>
        <h2>Edit {this.props.pet.attributes.name}</h2>
        <PetForm edit={this.props.edit} history={this.props.history} handleSubmit={this.handleSubmit}/>
      </>
    )
  }
}

export default connect(null, { updatePet, setFormDataForEdit, resetPetForm })(EditPetFormWrapper);