const initialState = {
  name: '',
  breed: '',
  birthdate: '',
  photo: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_PET_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_PET_FORM":
      return initialState
    default:
      return state
  }
}