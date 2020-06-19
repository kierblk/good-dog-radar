// synchronous action creators
export const updateNewPetForm = (name, value) => {
  return {
    type: "UPDATE_NEW_PET_FORM",
    formData: { name, value }
  }
}

export const resetNewPetForm = () => {
  return {
    type: "RESET_NEW_PET_FORM"
  }
}