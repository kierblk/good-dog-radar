// synchronous action creators
export const updateNewPetForm = formData => {
  return {
    type: "UPDATE_NEW_PET_FORM",
    formData
  }
}

export const resetNewPetForm = () => {
  return {
    type: "RESET_NEW_PET_FORM"
  }
}
