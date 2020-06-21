// synchronous action creators
export const updatePetForm = formData => {
  return {
    type: "UPDATE_PET_FORM",
    formData
  }
}

export const resetPetForm = () => {
  return {
    type: "RESET_PET_FORM"
  }
}

export const setFormDataForEdit = pet => {
  const petFormData = {
    id: pet.id,
    name: pet.attributes.name,
    breed: pet.attributes.breed,
    birthdate: pet.attributes.birthdate,
    photo: pet.attributes.photo
  }
  console.log(petFormData)
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    petFormData
  }
}
