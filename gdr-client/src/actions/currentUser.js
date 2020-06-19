import { resetLoginForm } from './loginForm'
import { resetSignupForm } from "./signupForm.js"
import { getMyPets, clearPets } from './myPets'
/* 
  Syncronous Action Creators
*/

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

/*
  Asyncronous Action Creators
*/

export const login = (credentials, history) => {
  console.log('Now Logging in...')
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data))
        dispatch(resetLoginForm())
        dispatch(getMyPets())
        history.push('/')
    }
  })
    .catch(console.log)
  }
}

export const logout = (event) => {
  console.log('Now logging out...')
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearPets())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data))
        dispatch(getMyPets())
      }
    })
    .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data))
          dispatch(getMyPets())
          dispatch(resetSignupForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}
