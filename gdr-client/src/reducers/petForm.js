const initialState = {
  name: '',
  breed: '',
  birthdate: '',
  photo: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_PET_FORM":
      return action.formData
    case "RESET_PET_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.petFormData
    default:
      return state
  }
}