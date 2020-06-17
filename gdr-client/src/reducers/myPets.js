export default (state = [], action) => {
  switch(action.type) {
    case 'SET_MY_PETS':
      return action.pets
    default: 
      return state
  }
}