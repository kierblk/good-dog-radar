const initialState = {
  username: '',
  password: '',
  name: '',
  email: '',
  phone: '',
  organization_id: '',
  admin: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    case "RESET_SIGNUP_FORM":
      return initialState
    default:
      return state
  }
}