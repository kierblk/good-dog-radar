import { resetNewPetForm } from './newPetForm'

export const addPet = pet => {
  return {
    type: 'ADD_PET',
    pet
  }
}

export const setMyPets = pets => {
  return {
    type: 'SET_MY_PETS',
    pets
  }
}

export const clearPets = () => {
  return {
    type: 'CLEAR_PETS'
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

export const createPet = (petData, history) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/pets', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petData)
    })
    .then(response => response.json())
    .then(pet => {
      if (pet.error) {
        alert(pet.error)
      } else {
        dispatch(addPet(pet.data))
        dispatch(resetNewPetForm())
        history.push('/pets')
      }
    })
    .catch(console.log)
  }
}
