export const setMyPets = pets => {
  return {
    type: 'SET_MY_PETS',
    pets
  }
}

export const getMyPets = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/pets', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(pets => {
      if (pets.error) {
        alert(pets.error)
      } else {
        dispatch(setMyPets(pets.data))
      }
    })
    .catch(console.log)
  }
}