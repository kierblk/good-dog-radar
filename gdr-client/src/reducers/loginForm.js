const initialState = {
  username: '',
  password: ''
}

const loginForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return action.formData
    default:
      return state
  }
}

export default loginForm;