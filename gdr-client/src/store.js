import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm';
import myPets from './reducers/myPets'
import signupForm from './reducers/signupForm'
import petForm from './reducers/petForm'

const reducer = combineReducers({
  currentUser,
  loginForm,
  myPets,
  signupForm,
  petForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
